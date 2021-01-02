import React, {useState, useEffect} from "react";
import {skipExamScreen, examResultScreen, gameOverScreen} from "./viewControl";
import {eventContainer, examDisplay} from "./styles/styles";
import {getPlayerForEventDraw, updatePlayerStats} from "./fetch";
import {examScoringSystem, isExamPassedByPoints, statValidation, validateScore,
    loadId, examPrizeAssign, examResultToLocalStorage, assignExamRepeatIfFailed} from "./functions";

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
        let examPoints = examScoringSystem(skills, luck, attitude, sleep);

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
            ending: player.ending,
            endingNumber: player.endingNumber,
            gameOver: gameOver
        };
        updatePlayerStats(plId, modified);
            examResultScreen();
    }

    return (
        <div style={eventContainer}>
            <h2 style={examDisplay}>Witaj na egzaminie poprawkowym, --imię gracza--</h2>
            <p style={examDisplay}>Egzamin z: --moduł--</p>
            <p style={examDisplay}>Punkty na zaliczenie: 10/20 czyli 50%.</p>
            <p style={examDisplay}>Ten egzamin pisany jest w przypadku niezaliczenia bądź nie stawienia się na pierwszej próbie.
                Jest to ostateczna szansa na kontynuowanie nauki na tej edycji kursu</p>
            <p style={examDisplay}>Twój wybór: </p>
            <button onClick={drawTheResult}>Podchodzę do egzaminu</button>
            <button>Nie podchodzę do egzaminu</button>
            </div>
    )
}

export default ExtraExamTime


