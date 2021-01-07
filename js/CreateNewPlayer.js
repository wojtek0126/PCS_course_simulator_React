import React, {useState} from "react";
import {createNewPlayer} from "./functions";
import {backToMainMenu, successPlayerCreateScreen} from "./viewControl";
import {buttons, createPlayerBackground} from "./styles/styles";


//add login after engine works

const CreateNewPlayer = () => {

    const [playerName, setPlayerName] = useState("");

    console.log(playerName, "playerName w create player")
    localStorage.setItem('playerName', playerName);

    return (
            <div style={createPlayerBackground} className={"startGameContainer"} >
                <h3 style={{
                    textAlign: "center",
                    marginBottom: 40,
                    paddingTop: 80
                }}>Witaj graczu. Podaj swoje imię ,aby rozpocząć.</h3>
                <form style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}  onSubmit={() => createNewPlayer(playerName)} action="">
                    <label style={{
                        marginRight: 20,
                        textTransform: 'uppercase'
                    }} htmlFor="">podaj imię:
                        <input style={{
                            marginLeft: 20,
                            borderRadius: 10,
                            fontFamily: ['Hanalei Fill', "cursive"],
                            height: 34,
                            width: 180
                        }}onChange={e => setPlayerName(e.target.value)} type="text"/>
                    </label>
                    <div style={{
                        transform: "translateY(-5px)"
                    }}>
                        <button style={buttons} type="submit" >Rozpocznij grę</button>
                        <button style={buttons} onClick={backToMainMenu}>Powrót do menu</button>
                    </div>

                </form>
            </div>
    )
}

export default CreateNewPlayer