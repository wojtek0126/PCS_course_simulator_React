import React, {useState, useEffect} from "react";
import {skipExamScreen, examResultScreen} from "./viewControl";
import {eventContainer, examDisplay, buttons, examBackground} from "./styles/styles";
import {getPlayerForEventDraw, updatePlayerStats} from "./fetch";
import {
    examScoringSystem,
    isExamPassedByPoints,
    statValidation,
    validateScore,
    loadId,
    examPrizeAssign,
    examResultToLocalStorage,
    assignExamRepeatIfFailed,
    examPointsValidation,
    onHoverJpgSwapButtons
} from "./functions";
import {moduleNames} from "./variables";

const ExamTime = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const inventoryArr = player.inventory;
    const goBtn = document.querySelector(".go");
    const noExamBtn = document.querySelector(".noExamBtn");

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[])
console.log(player.luck, "plajer luck w exam");
    console.log(inventoryArr, "inwentarz w exam time button");

    const drawTheResult = () => {
        const luck = parseInt(player.luck);
        const skills = parseInt(player.skills);
        const sleep = parseInt(player.sleep);
        let attitude = parseInt(player.attitude);
        const health = parseInt(player.health);
        let examPointsRaw = examScoringSystem(skills, luck, attitude, sleep);
        let examPoints = examPointsValidation(examPointsRaw);
        console.log(examPoints, ' punkty za egzamin');
        localStorage.setItem("examPoints", examPoints);
        let result = isExamPassedByPoints(examPoints);
        console.log(result, ' czy zdał?');
        examResultToLocalStorage(result);
        inventoryArr.push(examPrizeAssign(examPoints));

        let setExamRepeatChance = assignExamRepeatIfFailed(examPoints);
        console.log(setExamRepeatChance, 'kjooo')
        let score = parseInt(player.score + examPoints);
        const dayPartForward = "wieczór";
        let verifiedSkill = statValidation(skills, 0, 10);
        let verifiedSleep = statValidation(sleep, 0, 10);
        let verifiedHealth = statValidation(health, 0, 10);
        let verifiedLuck = statValidation(luck, 0, 10);
        let verifiedAttitude = statValidation(attitude, 0, 10);
        let verifiedScore = validateScore(score);
        let plId = player.id;
        let week = player.week;
        let moduleFix = player.moduleName;
        if (player.day <= 5) {
            week = 1;
            moduleFix = moduleNames[0];
        }
        else if (player.day <= 10) {
            week = 2;
            moduleFix = moduleNames[1];
        }
        else if (player.day <= 15) {
            week = 3;
            moduleFix = moduleNames[2];
        }
        else if (player.day <= 20) {
            week = 4;
            moduleFix = moduleNames[3];
        }
        else if (player.day <= 25) {
            week = 5;
            moduleFix = moduleNames[4];
        }
        else if (player.day <= 30) {
            week = 6;
            moduleFix = moduleNames[5];
        }
        else {
            week = player.week
        }

        const modified = {
            id: player.id,
            name: player.name,
            score: verifiedScore + examPoints,
            week: week,
            day: player.day,
            dayPart: dayPartForward,
            moduleName: moduleFix,
            buffs: player.buffs,
            inventory: inventoryArr,
            items: player.items,
            health: verifiedHealth,
            sleep: verifiedSleep,
            skills: verifiedSkill,
            attitude: verifiedAttitude,
            luck: verifiedLuck,
            attendance: player.attendance,
            repeatingExam: setExamRepeatChance,
            examPassed: result,
            examPoints: examPoints,
            finalProjectDone: player.finalProjectDone,
            finalProjectScore: player.finalProjectScore,
            endingNumber: player.endingNumber,
            gameOver: false
        };
        updatePlayerStats(plId, modified);
        examResultScreen()
    }

    return (
        <div style={examBackground}>
            <div style={eventContainer}>
                <h2 style={examDisplay}>Czas na egzamin!</h2>
                <p style={examDisplay}>Egzamin z: {player.moduleName}</p>
                <p style={examDisplay}>Punkty na zaliczenie: 10/20</p>
                <p style={examDisplay}>Twój wybór: </p>
                <div style={{display: "inline"}}>
                    <button className={"go"} style={buttons} onClick={drawTheResult}
                            onMouseEnter={() => onHoverJpgSwapButtons(goBtn)}
                            onMouseOut={() => onHoverJpgSwapButtons(goBtn, 1)}>podchodzę do egzaminu</button>
                    <button className={"noExamBtn"} style={buttons} onClick={skipExamScreen}
                            onMouseEnter={() => onHoverJpgSwapButtons(noExamBtn)}
                            onMouseOut={() => onHoverJpgSwapButtons(noExamBtn, 1)}>nie podchodzę do egzaminu</button>
                </div>
            </div>
        </div>
    )
}

export default ExamTime