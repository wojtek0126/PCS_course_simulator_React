import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {eventContainer} from "./styles/styles";
import {getPlayerForEventDraw, updatePlayerStats} from "./fetch";
import {statValidation, validateScore, isExamPassedByPoints} from "./functions";
import {random} from "./functions";

const ExamResult = () => {
    const resultId = localStorage.getItem('continuePlayerId')
    let [playerId, setPlayerId] = useState(resultId);
    const [player, setPlayer] = useState([]);
    const [inventoryArr, setInventoryArr] = useState([]);
    // const [examResult, setExamResult] = useState(false);
    // const [examPoints, setExamPoints] = useState(0);

    useEffect(() => {
        getPlayerForEventDraw(playerId, setPlayer);
    },[])
    console.log(player, "plajer w exam result");


    const luck = parseInt(player.luck);
    const skills = parseInt(player.skills);
    const sleep = parseInt(player.sleep);
    let attitude = parseInt(player.attitude);
    const health = parseInt(player.health);



    let examPoints = random(0, 20);

    console.log(player.inventory, "inwentarz w exam result");
    console.log(examPoints, "rezultat passed to true - w exam result");
    // let addAllStats = luck + skills + sleep + attitude + health;
    //gold silver bronze duck for pass, facepalm statue for fail into inventory
   // if (luck === 0) {
   //
   // }

    // if (draw === undefined) {
    //     location.reload()
    // }
    // else {
    //     console.log(draw, "result drawn in variable in event draw")
    // }




    // let skills = parseInt(player.skills + draw.skills);



    let score = parseInt(player.score);
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
        score: verifiedScore,
        week: player.week,
        day: player.day,
        dayPart: player.dayPart,
        moduleName: player.moduleName,
        buffs: player.buffs,
        inventory: inventoryArr,
        health: verifiedHealth,
        sleep: verifiedSleep,
        skills: verifiedSkill,
        attitude: verifiedAttitude,
        luck: verifiedLuck,
        attendance: player.attendance,
        examThirdChance: player.examThirdChance,
        examPassed: isExamPassedByPoints(examPoints),
        examPoints: examPoints,
        finalProjectDone: player.finalProjectDone,
        finalProjectScore: player.finalProjectScore,
        ending: player.ending,
        endingNumber: player.endingNumber,
        gameOver: false
    };
    // updatePlayerStats(plId, modified);
    return (
        <div style={eventContainer}>
            <h2>Rezultat Twojego egzaminu: --zdany--</h2>
            <p>Egzamin z: --moduł--</p>
            <p>Zdobyte punkty --points--</p>
            <p>Gratulacje, udało Ci się zaliczyć ten egzamin/Tym razem się nie udało</p>
            <button onClick={activateActionScreen}>kontynuuj</button>
        </div>
    )
}

export default ExamResult