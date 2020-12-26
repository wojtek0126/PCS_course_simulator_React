import React, {useState, useEffect} from "react";
import {getPlayers, newPlayerCreate, removePlayer} from "./fetch";
import {activateActionScreen} from "./viewControl";
import {saveId, createNewPlayer, createPlayerErrorHandler} from "./functions";

const SuccessPlayerCreate = () => {
    let plNam = localStorage.getItem('playerName');

    // newPlayerCreate(plNam);
    // let x = plNam
    // let arr = []
    // arr.push(x)
    // const y = arr[0]
    console.log(plNam, "localstore w success ")

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
console.log(x, "ostatni player ze zbioru check")

    if (plNam !== x) {
    console.log()
        createNewPlayer(plNam);

        // location.reload()
    }
    // else {
    //     console.log('all ok')
    // }
    removePlayer(lastId-1)
    console.log(playersArray, " players array new success");
const lastPlayerId = playersId[playersId.length - 1];
console.log(lastPlayerId, " id ostatniego gracza czyli nowego");
saveId(lastPlayerId);
// createPlayerErrorHandler(x, plNam);
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
            <h2>Witaj {plNam}</h2>
            <p>Aby przejść dalej, naciśnij przycisk kontynuuj</p>
            <button onClick={startNewGame}>kontynuuj</button>
        </div>
    )
};

export default SuccessPlayerCreate