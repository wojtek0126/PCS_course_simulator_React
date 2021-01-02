import React, {useState, useEffect} from "react";
import {backToMainMenu} from "./viewControl";
import {eventContainer, examDisplay} from "./styles/styles";

const GameOver = () => {
    return (
        <div style={eventContainer}>
           <h2 style={examDisplay}>Przegrana</h2>
           <p style={examDisplay}>Drogi ---imie---. Niestety nie udało Ci się ukończyć kursu za tym podejściem </p>
           <p style={examDisplay}>Przyczyna porażki: --niezdana poprawka, frekwencja, niepodjęcie projektu
                końcowego, zdrowie, szaleństwo, zgon...--</p>
           <p style={examDisplay}>Zdobyte punkty: --</p>
            <p style={examDisplay}>Nie poddawaj się!</p>
           <button onClick={backToMainMenu}>Powrót do menu głównego</button>
        </div>
    )
}

export default GameOver