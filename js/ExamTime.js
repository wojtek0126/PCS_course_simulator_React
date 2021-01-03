import React, {useState, useEffect} from "react";
import {skipExamScreen, examResultScreen} from "./viewControl";
import {eventContainer, examDisplay} from "./styles/styles";
import {getPlayerForEventDraw, updatePlayerStats} from "./fetch";
import {examScoringSystem, isExamPassedByPoints, statValidation, validateScore,
    loadId, examPrizeAssign, examResultToLocalStorage, assignExamRepeatIfFailed} from "./functions";

const ExamTime = () => {
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
        console.log(setExamRepeatChance, 'kjooo')
        let score = parseInt(player.score + examPoints);
        let verifiedSkill = statValidation(skills, 0, 10);
        let verifiedSleep = statValidation(sleep, 0, 10);
        let verifiedHealth = statValidation(health, 0, 10);
        let verifiedLuck = statValidation(luck, 0, 10);
        let verifiedAttitude = statValidation(attitude, 0, 10);
        let verifiedScore = validateScore(score);
        let plId = player.id;

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
            endingNumber: player.endingNumber,
            gameOver: false
        };
        updatePlayerStats(plId, modified);
        examResultScreen()
    }

    return (
        <div style={eventContainer}>
            <h2 style={examDisplay}>Czas na egzamin!</h2>
            <p style={examDisplay}>Egzamin z: {player.moduleName}</p>
            <p style={examDisplay}>Punkty na zaliczenie: 10/20</p>
            {/*<p style={examDisplay}>Podpowiedź - w razie niskich statystyk możesz zaryzykować, rezygnując z pierwszego*/}
            {/*podejścia i zdawać poprawkę nie oblewając egzaminu.*/}
            {/*Masz wtedy już tylko jedną próbę i gorsze nagrody, jednak unikniesz zainkasowania*/}
            {/*niesłąwnego trofeum z face plantem</p>*/}
            <p style={examDisplay}>Twój wybór: </p>
            <div style={{display: "inline"}}>
                <button onClick={drawTheResult}>podchodzę do egzaminu</button>
                <button onClick={skipExamScreen}>nie podchodzę do egzaminu</button>
            </div>
        </div>
    )
}

export default ExamTime