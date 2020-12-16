import React, {useState} from "react";
import {backToMainMenu, handleContinue} from "./viewControl";
import {getPlayers, handleRemovePlayer, displayCurrentPlayer} from "./functions";

const ContinueGame = () => {
    const [playersArr, setPlayersArr] = useState([]);
    const [player, setPlayer] = useState([]);

    getPlayers(setPlayersArr);


    playersArr.map((el) => {
        console.log(el.id, "elem id from map")
        console.log(el, "elem id from map")
    })

    return (
        <div className={"continueGameContainer"}>
            <p>Witamy ponownie</p>
            {
                playersArr.map((player) => {
                    console.log(player.id, `gracz o id: ${player.id}`)
                    return (
                        <li key={player.id}>{player.name} {player.moduleName} {player.id}
                            <button onClick={() => {handleContinue(player.id)}}>Kontynuuj grę</button>
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