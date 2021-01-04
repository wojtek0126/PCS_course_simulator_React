import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {eventContainer, examDisplay} from "./styles/styles";
import {examPrizeAssign, loadId} from "./functions";
import {getPlayerForEventDraw, updatePlayerStats} from "./fetch";

const SkipExam = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const inventoryArr = player.inventory;

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[])
    console.log(player.luck, "plajer luck w skipexam");


    console.log(inventoryArr, "inwentarz w skipexam button");
    const skipExamButton = () => {
        const chicken = "figurynka kurczaka";
        inventoryArr.push(chicken)
        const extraExamMode = true

        const modified = {
            id: player.id,
            name: player.name,
            score: player.score,
            week: player.week,
            day: player.day,
            dayPart: "wieczór",
            moduleName: player.moduleName,
            buffs: player.buffs,
            inventory: inventoryArr,
            items: player.items,
            health: player.health,
            sleep: player.sleep,
            skills: player.skills,
            attitude: player.attitude,
            luck: player.luck,
            attendance: player.attendance,
            repeatingExam: extraExamMode,
            examPassed: false,
            examPoints: player.examPoints,
            finalProjectDone: player.finalProjectDone,
            finalProjectScore: player.finalProjectScore,
            endingNumber: player.endingNumber,
            gameOver: false
        };
        updatePlayerStats(resultId, modified);
        activateActionScreen();
    }



    return (
        <div style={eventContainer}>
            <h2>Zrezygnowałeś z udziału w tym egzaminie</h2>
            <p style={examDisplay}>Istnieje jeszcze możliwość zdania egzaminu poprawkowego.
            Masz na to czas do czwartku wieczór.Powodzenia.
            </p>

            <button onClick={skipExamButton}>kontynuuj</button>
        </div>
    )
}

export default SkipExam