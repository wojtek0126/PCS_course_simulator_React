import React, {useState,useEffect} from "react";
import {backToMainMenu, activateActionScreen} from "./viewControl";
import {handleRemovePlayer, displayCurrentPlayer, saveId} from "./functions";
import {getPlayers, getPlayerForActionScreen} from "./fetch";
import {buttons, continueGameListElements, shopBackground, continueListContainer} from "./styles/styles";


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
        <div style={shopBackground}>
            <div className={"continueGameContainer"} style={continueListContainer}>
                <h3 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20
                }}>Witaj ponownie! Oto Twoi studenci:</h3>
                {
                    playersArr.map((player) => {
                        console.log(player.id, `gracz o id: ${player.id}`);
                        console.log(player.inventory, "inventorz");
                        console.log(player.inventory.length, "inventorz dlugosc");
                        return (
                            <li style={continueGameListElements} key={player.id}><strong style={{width: 400}}>{player.name}</strong><strong style={{width: 400}}>{player.moduleName}
                            </strong>
                                <div>
                                    <button style={buttons} onClick={() => handleContinue(player.id)}>kontynuuj/podgląd</button>
                                    <button style={buttons} onClick={() => {handleRemovePlayer(player.id)}}>skasuj gracza</button>
                                </div>

                            </li>
                        )
                    })
                }
                <button style={buttons} onClick={backToMainMenu}>Powrót do menu</button>
            </div>
        </div>
    )
}

export default ContinueGame