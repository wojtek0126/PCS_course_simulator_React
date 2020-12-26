import React, {useState, useEffect} from "react";
import {backToMainMenu} from "./viewControl";

const GameOver = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
           <h2>Przegrana</h2>
           <p>Drogi ---imie---. Niestety nie udało Ci się ukończyć kursu za tym podejściem </p>
           <p>Przyczyna porażki: --niezdana poprawka, frekwencja, zdrowie, szaleństwo, zgon...--</p>
           <p>Zdobyte punkty: --</p>
            <p>Nie poddawaj się!</p>
           <button onClick={backToMainMenu}>Powrót do menu głównego</button>
        </div>
    )
}

export default GameOver