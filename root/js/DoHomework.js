import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen, shopScreen} from "./viewControl";
import {updatePlayerStats, getPlayerForEventDraw} from "./fetch";
import {statValidation, validateScore, loadId, statChainDegenerate, onHoverJpgSwapButtons} from "./functions";
import {moduleNames} from "./variables";
import {buttons, doHomeworkBackground, eventContainer} from "./styles/styles";


const DoHomework = () => {
    const resultId = loadId()
    const [player, setPlayer] = useState([]);
    const effectDesc = document.querySelector(".effectDesc");
    const activityDesc = document.querySelector(".activityDesc");
    const goBtn = document.querySelector(".go");
    const shopBtn = document.querySelector(".shop");
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
    let repeatingExam = player.repeatingExam;

    console.log(moduleNames[week-1], "mod");
    console.log(week, "week111");
    console.log(day, "day")
    localStorage.setItem('weekNumber', week);
    if (day > 30) {
        activityDesc.innerHTML = "Przeglądasz materiały dodatkowe i odrabiasz zaległości"
    }

    const doHomeworkContinue = () => {
        let items = player.items;
        const sleepDown = parseInt(sleep - 1);
        const skillsUp = parseInt(skills + 1);
        const scoreUp = parseInt(score + 10);
        const dayForward = parseInt(day + 1);
        const attitudeUp = parseInt(attitude + 1);
        let weekNumber = parseInt(week);
        let moduleName = moduleNames[weekNumber-1];
        let verifiedSkill = statValidation(skillsUp, 0, 10);
        let verifiedSleep = statValidation(sleepDown, 0, 10);
        let verifiedHealth = statValidation(health, 0, 10);
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
            skills: verifiedSkill,
            attitude: attitudeUp,
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
        eventDrawScreen();
        location.reload();
    };

    return (
        <div style={doHomeworkBackground}>
            <div style={eventContainer}>
                <h1 className={"activityDesc"}>Po szkole odrabiasz pracę domową</h1>
                <p className={"effectDesc"}>wiedza + 1, sen -1, motywacja + 1, punkty + 10</p>
                <button className={"go"} style={buttons} onClick={doHomeworkContinue}
                        onMouseEnter={() => onHoverJpgSwapButtons(goBtn)}
                        onMouseOut={() => onHoverJpgSwapButtons(goBtn, 1)}>Zakończ pracę domową</button>
                <button className={"shop"} style={buttons} onClick={shopScreen}
                        onMouseEnter={() => onHoverJpgSwapButtons(shopBtn)}
                        onMouseOut={() => onHoverJpgSwapButtons(shopBtn, 1)}>odwiedź sklep</button>
                <p>nastąpi losowanie zdarzenia</p>
                <button className={"menu"} style={buttons} onClick={backToMainMenu}
                        onMouseEnter={() => onHoverJpgSwapButtons(menuBtn)}
                        onMouseOut={() => onHoverJpgSwapButtons(menuBtn, 1)}>powrót do menu</button>
            </div>
        </div>
    )
}

export default DoHomework