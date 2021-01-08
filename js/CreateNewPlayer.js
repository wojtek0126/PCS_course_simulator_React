import React, {useState} from "react";
import {createNewPlayer, onHoverJpgSwapButtons} from "./functions";
import {backToMainMenu, successPlayerCreateScreen} from "./viewControl";
import {buttons, createPlayerBackground, noGoldPopUp} from "./styles/styles";


//add login after engine works

const CreateNewPlayer = () => {
    const noGold = document.querySelector(".noGold");
    const createBtn = document.querySelector(".create");
    const menuBtn = document.querySelector(".menu");

    const [playerName, setPlayerName] = useState("");

    console.log(playerName, "playerName w create player")
    localStorage.setItem('playerName', playerName);

    const nameInputWithValidation = (playerName) => {
        let playerNameArr = playerName.split('');
        let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


        playerNameArr.map((element) => {
            if (!isNaN(element)) {
                noGold.innerHTML = "poproszę o imię bez cyfr";
                noGold.style.display = "flex";
            }
            else if (format.test(element)){
                noGold.innerHTML = "poproszę o imię bez znaków specjalnych";
                noGold.style.display = "flex";
                location.reload();
            }
            else if (playerName.length <= 1) {
                noGold.innerHTML = "za krótkie imię";
                noGold.style.display = "flex";
            }
            else if (playerName.length > 28) {
                noGold.innerHTML = "za długie imię";
                noGold.style.display = "flex";
            }
            else if (playerName.length === 0) {
                noGold.innerHTML = "brak wpisu";
                noGold.style.display = "flex";
            }
            else {
                noGold.style.display = "flex";
                createNewPlayer(playerName);
            }
        });

        // else {
        //     noGold.style.display = "flex";
        //     createNewPlayer(playerName);
        // }
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
                        <button className={"create"} style={buttons} type="submit"
                                onMouseEnter={() => onHoverJpgSwapButtons(createBtn)}
                                onMouseOut={() => onHoverJpgSwapButtons(createBtn, 1)}>Rozpocznij grę</button>
                        <button className={"menu"} style={buttons} type="button" onClick={backToMainMenu}
                                onMouseEnter={() => onHoverJpgSwapButtons(menuBtn)}
                                onMouseOut={() => onHoverJpgSwapButtons(menuBtn, 1)}>Powrót do menu</button>
                    </div>

                </form>
            </div>
    )
}

export default CreateNewPlayer