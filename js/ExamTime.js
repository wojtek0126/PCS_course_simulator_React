import React, {useState, useEffect} from "react";
import {skipExamScreen, examResultScreen} from "./viewControl";
import {eventContainer, examDisplay} from "./styles/styles";
import {getPlayerForEventDraw} from "./fetch";


const ExamTime = () => {
    const resultId = localStorage.getItem('continuePlayerId')
    let [playerId, setPlayerId] = useState(resultId);
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        getPlayerForEventDraw(playerId, setPlayer);
    },[])
console.log(player, "plajer w exam");
    return (
        <div style={eventContainer}>
            <h2 style={examDisplay}>Czas na egzamin!</h2>
            <p style={examDisplay}>Egzamin z: {player.moduleName}</p>
            <p style={examDisplay}>Punkty na zaliczenie: 10/20</p>
            <p style={examDisplay}>Podpowiedź - w razie niskich statystyk możesz zaryzykować, rezygnując z pierwszego
            podejścia i zdawać poprawkę nie oblewając egzaminu.
            Masz wtedy już tylko jedną próbę, no chyba że masz możliwość "trzeciej szansy"</p>
            <p style={examDisplay}>Twój wybór: </p>
            <div style={{display: "inline"}}>
                <button onClick={examResultScreen}>podchodzę do egzaminu</button>
                <button onClick={skipExamScreen}>nie podchodzę do egzaminu</button>
            </div>

        </div>
    )
}

export default ExamTime