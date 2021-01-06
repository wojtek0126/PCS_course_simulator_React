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

        <div className={"continueGameContainer"} style={{
            display: "flex",
            flexDirection: "column",
            padding: 20,
        }}>
            <h3 style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20
            }}>Witaj ponownie! Oto Twoi studenci:</h3>
            <div style={{display: "flex",
                justifyContent: "space-between",
            marginBottom: -5}}><h5 style={{width: 400,
                padding: 20,
                border: "1px dotted black",
                }}>IMIĘ</h5><h5 style={{width: 360,
                padding: 20,
                    border: "1px dotted black",}}>
                MODUŁ</h5><h5 style={{width: 400,
                border: "1px dotted black",
                padding: 20,
            }}>PUNKTY</h5></div>
            {
                playersArr.map((player) => {
                    console.log(player.id, `gracz o id: ${player.id}`);
                    console.log(player.inventory, "inventorz");
                    console.log(player.inventory.length, "inventorz dlugosc");
                    return (
                        <li style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            border: "1px dotted black",
                            padding: 20,

                        }} key={player.id}><strong style={{width: 400}}>{player.name}</strong><strong style={{width: 400}}>{player.moduleName}
                        </strong><strong style={{width: 0}}>{player.score}</strong>
                            <div>
                                <button style={{width: 160, transform: "translateX(70px)"}} onClick={() => handleContinue(player.id)}>kontynuuj/podgląd</button>
                                <button style={{width: 160, transform: "translateX(70px)"}} onClick={() => {handleRemovePlayer(player.id)}}>skasuj gracza</button>
                            </div>

                        </li>
                    )
                })
            }
                <button onClick={backToMainMenu}>Powrót do menu</button>
        </div>
    )
}

export default ContinueGame