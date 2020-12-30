import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {eventContainer, examDisplay} from "./styles/styles";
import {examPrizeAssign, loadId} from "./functions";
import {getPlayerForEventDraw, updatePlayerStats} from "./fetch";

const SkipExam = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const inventoryArr = player.inventory;

    // useEffect(() => {
    //     getPlayerForEventDraw(resultId, setPlayer);
    // },[]);
    console.log(player, "inwentarz w exam time button");
    // inventoryArr.push("figurynka kurczaka");

    // const modified = {
    //     id: player.id,
    //     name: player.name,
    //     score: player.score,
    //     week: player.week,
    //     day: player.day,
    //     dayPart: "wieczór",
    //     moduleName: player.moduleName,
    //     buffs: player.buffs,
    //     inventory: inventoryArr,
    //     health: player.health,
    //     sleep: player.sleep,
    //     skills: player.skills,
    //     attitude: player.attitude,
    //     luck: player.luck,
    //     attendance: player.attendance,
    //     repeatingExam: true,
    //     examPassed: false,
    //     examPoints: player.score,
    //     finalProjectDone: player.finalProjectDone,
    //     finalProjectScore: player.finalProjectScore,
    //     ending: player.ending,
    //     endingNumber: player.endingNumber,
    //     gameOver: false
    // };
    // updatePlayerStats(resultId, modified);

    return (
        <div style={eventContainer}>
            <h2>Zrezygnowałeś z udziału w tym egzaminie</h2>
            <p style={examDisplay}>Istnieje jeszcze możliwość zdania egzaminu poprawkowego.
            Masz na to czas do czwartku wieczór.Powodzenia.
            </p>

            <button onClick={activateActionScreen}>kontynuuj</button>
        </div>
    )
}

export default SkipExam