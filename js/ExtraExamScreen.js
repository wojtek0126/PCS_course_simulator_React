import React, {useState, useEffect} from "react";
import {skipExamScreen, examResultScreen, gameOverScreen, activateActionScreen} from "./viewControl";
import {buttons, eventContainer, examDisplay, extraExamBackground} from "./styles/styles";
import {getPlayerForEventDraw, updatePlayerStats} from "./fetch";
import {
    examScoringSystem, isExamPassedByPoints, statValidation, validateScore,
    loadId, examPrizeAssign, examResultToLocalStorage, assignExamRepeatIfFailed, examPointsValidation
} from "./functions";

const ExtraExamTime = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const inventoryArr = player.inventory;

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
        let score = parseInt(player.score + examPoints);
        let verifiedSkill = statValidation(skills, 0, 10);
        let verifiedSleep = statValidation(sleep, 0, 10);
        let verifiedHealth = statValidation(health, 0, 10);
        let verifiedLuck = statValidation(luck, 0, 10);
        let verifiedAttitude = statValidation(attitude, 0, 10);
        let verifiedScore = validateScore(score);
        let plId = player.id;
        let gameOver = player.gameOver;
        if (result === false) {
            gameOver = true;
        }
        console.log(gameOver, 'gameoverrrr?')

        const modified = {
            id: player.id,
            name: player.name,
            score: verifiedScore + examPoints,
            week: player.week,
            day: player.day,
            dayPart: "wieczór",
            moduleName: player.moduleName,
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
            gameOver: gameOver
        };
        updatePlayerStats(plId, modified);
            examResultScreen();
    }

    return (
        <div style={extraExamBackground}>
            <div style={eventContainer}>
                <h2 style={examDisplay}>Witaj na egzaminie poprawkowym, {player.name}</h2>
                <p style={examDisplay}>Egzamin z: {player.moduleName}</p>
                <p style={examDisplay}>Punkty na zaliczenie: 10/20</p>
                <p style={examDisplay}>Ten egzamin pisany jest w przypadku niezaliczenia bądź nie stawienia się na pierwszej próbie.
                    Jest to ostateczna szansa na kontynuowanie nauki na tej edycji kursu</p>
                <p style={examDisplay}>Twój wybór: </p>
                <div style={{display: "flex"}}>
                    <button style={buttons} onClick={drawTheResult}>Podchodzę do egzaminu</button>
                    <button style={buttons} onClick={activateActionScreen}>Nie podchodzę do egzaminu</button>
                </div>
            </div>
        </div>
    )
}

export default ExtraExamTime


