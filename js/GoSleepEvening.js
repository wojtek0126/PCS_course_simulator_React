import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore, loadId, statChainDegenerate} from "./functions";
import {moduleNames} from "./variables";
import {buttons} from "./styles/styles";

const GoSleepEvening = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const [inventoryArr, setInventoryArr] = useState([]);
    const [playerBuffs, setPlayerBuffs] = useState([]);


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
    let repeatingExam = player.repeatingExam;

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
            repeatingExam: repeatingExam,
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
        <>
            <h1>Po szkole idziesz spać</h1>
            <p>sen + 1, zdrowie + 1, punkty + 4</p>
            <button style={buttons} onClick={goSleepEveningContinue}>zakończ odpoczynek</button>
            <p>nastąpi losowanie zdarzenia</p>
            <button style={buttons} onClick={backToMainMenu}>powrót do menu</button>
        </>
    )
}

export default GoSleepEvening