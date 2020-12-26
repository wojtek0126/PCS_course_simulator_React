import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";

const SkipExam = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>Zrezygnowałeś z udziału w egzaminie</h2>
            <p>Istnieje jeszcze możliwość zdania egzaminu poprawkowego.
            Masz na to czas do czwartku wieczór.
            </p>

            <button onClick={activateActionScreen}>kontynuuj</button>
        </div>
    )
}

export default SkipExam