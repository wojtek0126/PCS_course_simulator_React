import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {eventContainer, examDisplay, buttons, examResultBackground} from "./styles/styles";
import {getPlayerForEventDraw} from "./fetch";
import {loadId} from "./functions";


const ExamResult = () => {
    const resultId = loadId();
    const resultDisplay = localStorage.getItem("displayExamResult");
    const resultPoints = localStorage.getItem("examPoints");
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[]);

    console.log(player, "plajer w exam result");
    console.log(resultPoints, ' punkty za egzamin');

    return (
        <div style={examResultBackground}>
            <div style={eventContainer}>
                <p style={examDisplay}>Egzamin z: {player.moduleName}</p>
                <h2 style={examDisplay}>Rezultat Twojego egzaminu: {resultDisplay}</h2>
                <p style={examDisplay}>Zdobyte punkty: {resultPoints}</p>
                <button  style={buttons} onClick={activateActionScreen}>kontynuuj</button>
            </div>
        </div>
    )
}

export default ExamResult