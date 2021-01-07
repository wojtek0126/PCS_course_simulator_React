import React, {useState, useEffect} from "react";
import {backToMainMenu} from "./viewControl";
import {eventContainer, examDisplay} from "./styles/styles";
import {loadId, causeOfGameOver} from "./functions";
import {getPlayerForEventDraw} from "./fetch";
import {buttons, gameOverBackground} from "./styles/styles";

const GameOver = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const inventoryArr = player.inventory;
    const health = player.health;
    const attendance = player.attendance;
    const isExamPassed = player.examPassed;


    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[])

    console.log(player);
    console.log(inventoryArr)

    return (
        <div style={gameOverBackground}>
            <div style={eventContainer}>
                <h2 style={examDisplay}>Przegrana</h2>
                <p style={examDisplay} >Niestety nie udało Ci się ukończyć kursu za tym podejściem </p>
                <p style={examDisplay} className={"causeOfDeath"}>Przyczyna porażki: {causeOfGameOver(health, attendance, isExamPassed)}</p>
                <p style={examDisplay}>Zdobyte punkty:{player.score}</p>
                <p style={examDisplay}>Nie poddawaj się!</p>
                <button style={buttons} onClick={backToMainMenu}>Powrót do menu głównego</button>
            </div>
        </div>
    )
}

export default GameOver