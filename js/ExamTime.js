import React, {useState, useEffect} from "react";
import {skipExamScreen, examResultScreen} from "./viewControl";

const ExamTime = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>Czas na egzamin</h2>
            <p>Egzamin z: --moduł--</p>
            <p>Punkty na zaliczenie: 10/20 czyli 50%.</p>
            <p>podpowiedź - w razie niskich statystyk możesz zaryzykować, rezygnując z pierwszego
            podejścia i zdawać poprawkę nie oblewając egzaminu.
            Masz wtedy już tylko jedną próbę, no chyba że masz możliwość "trzeciej szansy"</p>
            <p>Twój wybór: </p>
            <button onClick={examResultScreen}>Podchodzę do egzaminu</button>
            <button onClick={skipExamScreen}>Nie podchodzę do egzaminu</button>
        </div>
    )
}

export default ExamTime