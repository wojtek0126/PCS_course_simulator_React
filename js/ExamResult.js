import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {eventContainer, examDisplay} from "./styles/styles";
import {getPlayerForEventDraw} from "./fetch";


const ExamResult = () => {
    const resultId = localStorage.getItem('continuePlayerId');
    const resultDisplay = localStorage.getItem("displayExamResult");
    const resultPoints = localStorage.getItem("examPoints");
    let [playerId, setPlayerId] = useState(resultId);
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        getPlayerForEventDraw(playerId, setPlayer);
    },[]);

    console.log(player, "plajer w exam result");
    console.log(resultPoints, ' punkty za egzamin');

    return (
        <div style={eventContainer}>
            <p style={examDisplay}>Egzamin z: {player.moduleName}</p>
            <h2 style={examDisplay}>Rezultat Twojego egzaminu: {resultDisplay}</h2>
            <p style={examDisplay}>Zdobyte punkty: {resultPoints}</p>
            <button  style={examDisplay} onClick={activateActionScreen}>kontynuuj</button>
        </div>
    )
}

export default ExamResult