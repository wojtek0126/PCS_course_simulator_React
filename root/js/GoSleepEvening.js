import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore, loadId, statChainDegenerate, onHoverJpgSwapButtons} from "./functions";
import {moduleNames} from "./variables";
import {buttons, sleepBackground, eventContainer} from "./styles/styles";

const GoSleepEvening = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const goBtn = document.querySelector(".go");
    const menuBtn = document.querySelector(".menu");

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[]);

    let playerName = player.name;
    let health = player.health;
    let sleep = player.sleep;
    let skills = player.skills;
    let attitude = player.attitude;
    let luck = player.luck;
    let score = player.score;
    let inventory = player.inventory;
    let buffs = player.buffs;
    let day = player.day;
    let currentModule = player.moduleName;
    let week = player.week;

    let attendance = player.attendance;
    // let repeatingExam = player.repeatingExam;

    console.log(moduleNames[week-1], "mod");
    console.log(week, "week111");
    console.log(day, "day")
    localStorage.setItem('weekNumber', week);

    const goSleepEveningContinue = () => {

        let items = player.items;
        const healthUp = parseInt(health + 1);
        const sleepDown = parseInt(sleep + 1);
        // const skillsUp = parseInt(skills + 1);
        const scoreUp = parseInt(score + 10);
        const dayForward = parseInt(day + 1);
        let weekNumber = parseInt(week);
        let moduleName = moduleNames[weekNumber-1];
        let verifiedSleep = statValidation(sleepDown, 0, 10);
        let verifiedHealth = statValidation(healthUp, 0, 10);
        let verifiedScore = validateScore(scoreUp);

        if (day === 5 || day === 10 || day === 15 || day === 20 || day === 25 || day === 30) {
            weekNumber++;
            moduleName = moduleNames[weekNumber-1];
        }
        else {
            weekNumber = parseInt(week);
            moduleName = moduleNames[weekNumber-1];
        }
        if (player.day <= 5) {
            weekNumber = 1;
            moduleName = moduleNames[0];
        }
        else if (player.day <= 10) {
            weekNumber = 2;
            moduleName = moduleNames[1];
        }
        else if (player.day <= 15) {
            weekNumber = 3;
            moduleName = moduleNames[2];
        }
        else if (player.day <= 20) {
            weekNumber = 4;
            moduleName = moduleNames[3];
        }
        else if (player.day <= 25) {
            weekNumber = 5;
            moduleName = moduleNames[4];
        }
        else if (player.day <= 30) {
            weekNumber = 6;
            moduleName = moduleNames[5];
        }
        else {
            weekNumber = player.week
        }
        if (verifiedSleep === 0) {
            verifiedHealth--;
        }
        const modified = {
            id: player.id,
            name: playerName,
            score: verifiedScore,
            week: weekNumber,
            day: dayForward,
            dayPart: "poranek",
            moduleName: moduleName,
            buffs: buffs,
            inventory: inventory,
            items: items,
            health: verifiedHealth,
            sleep: verifiedSleep,
            skills: skills,
            attitude: attitude,
            luck: luck,
            attendance: attendance,
            repeatingExam: player.repeatingExam,
            examPassed: false,
            examPoints: 0,
            finalProjectDone: false,
            finalProjectScore: 0,
            endingNumber: 0
        };

        updatePlayerStats(resultId, modified);
        eventDrawScreen()
        location.reload();
    };

    return (
        <div style={sleepBackground}>
            <div style={eventContainer}>
                <h1>Po szkole idziesz spać</h1>
                <p>sen + 1, zdrowie + 1, punkty + 4</p>
                <button className={"go"} style={buttons} onClick={goSleepEveningContinue}
                        onMouseEnter={() => onHoverJpgSwapButtons(goBtn)} onMouseOut={() => onHoverJpgSwapButtons(goBtn, 1)}>
                    zakończ odpoczynek</button>
                <p>nastąpi losowanie zdarzenia</p>
                <button className={"menu"} style={buttons} onClick={backToMainMenu}
                        onMouseEnter={() => onHoverJpgSwapButtons(menuBtn)} onMouseOut={() => onHoverJpgSwapButtons(menuBtn, 1)}>
                    powrót do menu</button>
            </div>
        </div>
    )
}

export default GoSleepEvening