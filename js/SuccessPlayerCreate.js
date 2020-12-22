import React, {useState, useEffect} from "react";
import {getPlayers} from "./fetch";
import {activateActionScreen} from "./viewControl";
import {saveId} from "./functions";

const SuccessPlayerCreate = () => {
    const [playersArray, setPlayersArray] = useState([]);
    let playersId = [];
    let playersNames = [];
    useEffect(() => {
        getPlayers(setPlayersArray);
    },[]);

    playersArray.map((el) => {
        playersId.push(el.id);
        playersNames.push(el.name);
    })
    console.log(playersArray, " players array new success");
const lastPlayerId = playersId[playersId.length - 1];
console.log(lastPlayerId, " id ostatniego gracza czyli nowego");
saveId(lastPlayerId);
// saveId(newPlayerId);
    const startNewGame = () => {
    activateActionScreen();
    }

    return (

        <div style={{
            width: "70%",
            height: "50%",
            backgroundColor: "vanilla",
            border: "1px solid black"
        }}>
            <h2>Witaj {playersNames[playersNames.length - 1]}</h2>
            <p>Aby przejść dalej, naciśnij przycisk kontynuuj</p>
            <button onClick={startNewGame}>kontynuuj</button>
        </div>
    )
};

export default SuccessPlayerCreate