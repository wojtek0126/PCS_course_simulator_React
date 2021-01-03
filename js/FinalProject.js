import React, {useState, useEffect} from "react";
import {eventContainer, examDisplay} from "./styles/styles";
import {finalProjectResultScreen, } from "./viewControl";
import {drawFinalProjectResultScore, loadId, finalProjectResult} from "./functions";
import {getPlayerForEventDraw, getEndings, updatePlayerStats} from "./fetch";

const FinalProject = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const  [endings, setEndings] = useState([]);
    const inventoryArr = player.inventory;

    useEffect(() => {
        getEndings(setEndings);
        getPlayerForEventDraw(resultId, setPlayer);
    },[])
    console.log(player.skills, "plajer skills w final");
    console.log(player.luck, "plajer luck w final");
    console.log(player.attitude, "plajer att w final");
    console.log(inventoryArr, "inwentarz w final time button");
    console.log(player.examPoints, "pointy za examiny final time button");
    console.log(endings, "endings")
    const luck = parseInt(player.luck);
    const skills = parseInt(player.skills);
    let attitude = parseInt(player.attitude);
    let examPoints = parseInt(player.examPoints);
    let finalProjectDone = true;
    let endProjectResultScore = drawFinalProjectResultScore(luck, attitude, skills, examPoints);
    console.log(endProjectResultScore, "score project drawn");
    // let endingId = finalProjectResult(endProjectResultScore);
    // let finalDone = true;
    // let addScore = player.score + endProjectResultScore;
    // console.log(player.luck, "plajer luck w exam");
    // console.log(inventoryArr, "inwentarz w exam time button");
    // console.log(endings, "endings")
    // console.log(finalProjectDone, "czy projekt oddany?");

    // console.log(endingId, "id zakonczenia wylosowany");
    //
    // const modify = {
    //     id: resultId,
    //     name: player.name,
    //     score: addScore,
    //     week: player.week,
    //     day: player.day,
    //     dayPart: player.dayPart,
    //     moduleName: player.moduleName,
    //     buffs: player.buffs,
    //     inventory: player.inventory,
    //     health: player.health,
    //     sleep: player.sleep,
    //     skills: player.skills,
    //     attitude: player.attitude,
    //     luck: player.luck,
    //     attendance: player.attendance,
    //     repeatingExam: player.repeatingExam,
    //     examPassed: player.examPassed,
    //     examPoints: player.examPoints,
    //     finalProjectDone: finalDone,
    //     finalProjectScore: endProjectResultScore,
    //     endingNumber: endingId
    // };
    // updatePlayerStats(resultId, modify);

    const startFinal = () => {
        finalProjectResultScreen();
    }


    return (
        <div style={eventContainer}>
            <h2 style={examDisplay}>Czas na obronę Twojego projektu końcowego</h2>
            <button onClick={startFinal}>Oddaj projekt końcowy</button>
        </div>
    )
}

export default FinalProject