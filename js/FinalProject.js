import React, {useState, useEffect} from "react";
import {eventContainer, examDisplay, buttons, finalProjectBackground} from "./styles/styles";
import {activateActionScreen, finalProjectResultScreen,} from "./viewControl";
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


    const startFinal = () => {
        console.log(player.skills, "plajer skills w final");
        console.log(player.luck, "plajer luck w final");
        console.log(player.attitude, "plajer att w final");
        console.log(inventoryArr, "inwentarz w final time button");
        console.log(player.examPoints, "pointy za examiny wszystkie poprzednie final time button,");
        console.log(endings, "endings")
        const luck = parseInt(player.luck);
        const skills = parseInt(player.skills);
        let attitude = parseInt(player.attitude);
        let examPoints = parseInt(player.examPoints);
        let endProjectResultScore = drawFinalProjectResultScore(luck, attitude, skills, examPoints);
        console.log(endProjectResultScore, "score project drawn");
        console.log(player.luck, "plajer luck w exam");
        console.log(player.skills, "plajer skill w exam");
        console.log(player.attitude, "plajer att w exam");
        console.log(player.sleep, "plajer sleep w exam");

        let endingId = finalProjectResult(endProjectResultScore);
        console.log(endings, "endings");
        console.log(endingId, "endingID");
        let addScore = player.score;
        // console.log(player.luck, "plajer luck w exam");
        // console.log(inventoryArr, "inwentarz w exam time button");
        // console.log(endings, "endings")
        // console.log(finalProjectDone, "czy projekt oddany?");

        // console.log(endingId, "id zakonczenia wylosowany");
        //
        const modify = {
            id: player.id,
            name: player.name,
            score: addScore,
            week: player.week,
            day: player.day,
            dayPart: player.dayPart,
            moduleName: player.moduleName,
            buffs: player.buffs,
            inventory: player.inventory,
            items: player.items,
            health: player.health,
            sleep: player.sleep,
            skills: player.skills,
            attitude: player.attitude,
            luck: player.luck,
            attendance: player.attendance,
            repeatingExam: player.repeatingExam,
            examPassed: player.examPassed,
            examPoints: player.examPoints,
            finalProjectDone: true,
            finalProjectScore: endProjectResultScore,
            endingNumber: endingId
        };
        console.log(modify, "statsy przed końcowym zapisaniem");
        if (player.score !== "undefined") {
            updatePlayerStats(resultId, modify);
        }
        else {
            location.reload();
        }
        //
        finalProjectResultScreen();
    }

    return (
        <div style={finalProjectBackground}>
            <div style={eventContainer}>
                <h2 style={examDisplay}>Czas na obronę Twojego projektu końcowego</h2>
                <button style={buttons} onClick={startFinal}>oddaj projekt końcowy</button>
                <button style={buttons} onClick={activateActionScreen}>jeszcze nie teraz</button>
            </div>
        </div>

    )
}

export default FinalProject