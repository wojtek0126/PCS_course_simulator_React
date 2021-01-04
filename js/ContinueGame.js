import React, {useState,useEffect} from "react";
import {backToMainMenu, activateActionScreen} from "./viewControl";
import {handleRemovePlayer, displayCurrentPlayer, saveId} from "./functions";
import {getPlayers, getPlayerForActionScreen} from "./fetch";


const ContinueGame = () => {
    const [playersArr, setPlayersArr] = useState([]);
    const [playerId, setPlayerId] = useState([]);

    // const actionScreen = localStorage.getItem('actionScreen');
    // console.log(actionScreen, ' action')

    useEffect(() => {
        getPlayers(setPlayersArr);

    },[])
    console.log(playerId, "playerId w continue game");
    const data = (playerId);
    saveId(data);
    console.log(data, " id zapisane do localstorage");

    const handleContinue = (id) => {
        playersArr.map((el) => {
            setPlayerId(id)
        })

        activateActionScreen()
    }

    return (

        <div className={"continueGameContainer"}>
            <p>Witamy ponownie</p>
            {
                playersArr.map((player) => {
                    console.log(player.id, `gracz o id: ${player.id}`);
                    console.log(player.inventory, "inventorz");
                    console.log(player.inventory.length, "inventorz dlugosc");
                    return (
                        <li key={player.id}>{player.name} {player.moduleName} {player.id}
                            <button onClick={() => handleContinue(player.id)}>Kontynuuj grę</button>
                            <button onClick={() => {handleRemovePlayer(player.id)}}>Skasuj gracza</button>
                        </li>
                    )
                })
            }
                <button onClick={backToMainMenu}>Powrót do menu</button>
        </div>
    )
}

export default ContinueGame