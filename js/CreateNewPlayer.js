import React, {useState} from "react";
import {createNewPlayer} from "./functions";
import {backToMainMenu, successPlayerCreateScreen} from "./viewControl";
import {buttons, createPlayerBackground, noGoldPopUp} from "./styles/styles";


//add login after engine works

const CreateNewPlayer = () => {
    const noGold = document.querySelector(".noGold");

    const [playerName, setPlayerName] = useState("");

    console.log(playerName, "playerName w create player")
    localStorage.setItem('playerName', playerName);

    const nameInputWithValidation = (playerName) => {
        if (playerName.length <= 1) {
            noGold.innerHTML = "wpisałeś za krótkie imię, spróbuj ponownie";
            noGold.style.display = "flex";
        }
        else if (playerName.length > 30) {
            noGold.innerHTML = "wpisałeś za długie imię, spróbuj ponownie";
            noGold.style.display = "flex";
        }
        else {
            noGold.style.display = "flex";
            createNewPlayer(playerName);
        }
    }

    return (
            <div style={createPlayerBackground} className={"startGameContainer"} >
                <div style={noGoldPopUp} className={"noGold"}>Dane wprowadzone poprawnie</div>
                <h3 style={{
                    textAlign: "center",
                    marginBottom: 40,
                    paddingTop: 80
                }}>Witaj graczu. Podaj swoje imię ,aby rozpocząć.</h3>
                <form style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}  onSubmit={() => nameInputWithValidation(playerName)} action="">
                    <label style={{
                        marginRight: 20,
                        textTransform: 'uppercase',
                        marginBottom: 28
                    }} htmlFor="">podaj imię:
                        <input style={{
                            marginLeft: 20,
                            borderRadius: 10,
                            fontFamily: ['Hanalei Fill', "cursive"],
                            height: 34,
                            width: 180,
                        }}onChange={e => setPlayerName(e.target.value)} type="text"/>
                    </label>
                    <div style={{
                        transform: "translateY(-5px)"
                    }}>
                        <button style={buttons} type="submit" >Rozpocznij grę</button>
                        <button style={buttons} type="button" onClick={backToMainMenu}>Powrót do menu</button>
                    </div>

                </form>
            </div>
    )
}

export default CreateNewPlayer