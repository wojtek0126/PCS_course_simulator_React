import React, {useState, useEffect} from "react";
import {getPlayers, removePlayer} from "./fetch";
import {activateActionScreen} from "./viewControl";
import {saveId, createNewPlayer} from "./functions";
import {
    successPlayerCreate,
    buttons,
    welcomeNewPlayerBackground, eventContainer
} from "./styles/styles";

const SuccessPlayerCreate = () => {
    let plNam = localStorage.getItem('playerName');

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
    let lastId = playersId[playersId.length - 1];
    let x =  playersNames[playersNames.length - 1];

    if (plNam !== x) {
    console.log()
        createNewPlayer(plNam);
    }

    removePlayer(lastId-1);

    const lastPlayerId = playersId[playersId.length - 1];
    console.log(lastPlayerId, " id ostatniego gracza z listy czyli nowego");
    saveId(lastPlayerId);

    const startNewGame = () => {
        activateActionScreen();
    }

    return (
        <div style={welcomeNewPlayerBackground}>
            <div style={eventContainer}>
                <h2>Witaj {plNam}</h2>
                <p style={{marginBottom: 20}}>Aby przejść dalej, naciśnij przycisk kontynuuj</p>
                <button style={buttons} onClick={startNewGame}>kontynuuj</button>
            </div>
        </div>

    )
};

export default SuccessPlayerCreate