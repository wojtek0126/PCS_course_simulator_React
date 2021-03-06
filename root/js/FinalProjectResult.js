import React, {useState, useEffect} from "react";
import {getEndings, getPlayerForEventDraw} from "./fetch";
import {backToMainMenu} from "./viewControl";
import {
    eventContainer,
    examDisplay,
    buttons,
    examResultBackground,
    finalResultBackground,
    endingContainer
} from "./styles/styles";
import {onHoverJpgSwapButtons} from "./functions";

const FinalProjectResult = () => {
    const resultId = localStorage.getItem('continuePlayerId')
    const  [endings, setEndings] = useState([]);
    const [player, setPlayer] = useState([]);

    const menuBtn = document.querySelector(".menu");

    useEffect(() => {
        getEndings(setEndings);
        getPlayerForEventDraw(resultId, setPlayer);
    },[]);
    const addArr = (endings) => {
        let arr = []
        if (endings) {
            endings.forEach((item) => arr.push(item));
        }
        return arr
    }
    let arr = addArr(endings);
    let endingName = "";
    let endingDesc = "";
    let endingScore = player.score;
    let endingProjectScore = player.finalProjectScore;
    let endPrize = ""
    arr.map(function (e) {
        console.log(e.id);
        if (e.id === player.endingNumber) {
            endingName = e.endingName;
            endingDesc = e.endingDesc;
            endPrize = e.endingTrophy
        }
    })

    console.log(arr[0], "tet za");
    console.log(endingName, "tet endinga");
    console.log(player.finalProjectScore, "tet score do endinga");

// console.log(endings[player.endingNumber].id)
    console.log(player.endingNumber)

    return (
        <div style={finalResultBackground}>
        <div style={endingContainer}>
            <h1 style={examDisplay}>GRA UKOŃCZONA</h1>
            <h2 style={examDisplay}>Rezultat Twojego projektu końcowego:</h2>
            <p style={examDisplay}>{endingName}</p>
            <p style={examDisplay}>Zdobyte punkty za projekt: {endingProjectScore}</p>
            <p style={examDisplay}>Punkty pozostałe na końcu: {endingScore}</p>
            <p style={examDisplay}>{endingDesc}</p>
            <h3 style={examDisplay}>Twoja nagroda podsumowująca: {endPrize}</h3>
            <button className={"menuBtn"} style={buttons} onClick={backToMainMenu}
                    onMouseEnter={() => onHoverJpgSwapButtons(menuBtn)}
                    onMouseOut={() => onHoverJpgSwapButtons(menuBtn, 1)}>zapisz wynik i wróć do menu głównego</button>
        </div>
        </div>
    )
}

export default FinalProjectResult