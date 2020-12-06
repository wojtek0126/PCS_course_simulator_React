import React from "react";
import WelcomeScreen from "./WelcomeScreen";
//add password and email after all works in demo, now just a name is enough


const start = () => {
    console.log("nowa gra: dane poszły")
}

const backToMainMenu = () => {

    const screen = document.querySelector(".menuScreen");
    const screen2 = document.querySelector(".startGameContainer");
    screen.style.display = "flex";
    screen2.style.display = "none";
    console.log(screen2)
}

export const toActionScreen = (e) => {
    e.preventDefault();
    const screen4 = document.querySelector(".actionScreenContainer");
    const screen2 = document.querySelector(".startGameContainer");
    screen4.style.display = "flex";
    screen2.style.display = "none";
}

const NewGame = () => {
    return (
            <div className={"startGameContainer"} style={{display: "none"}}>
                <p>Witaj graczu. Podaj swoje imię ,aby rozpocząć</p>
                <form action="">
                    <label htmlFor="">podaj imię
                        <input type="text"/>
                    </label>
                    <button onClick={toActionScreen}>Rozpocznij grę</button>
                    <button onClick={backToMainMenu}>Powrót do menu</button>
                </form>
            </div>
    )
}

export default NewGame