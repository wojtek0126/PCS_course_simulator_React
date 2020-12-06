import React from "react";
import WelcomeScreen from "./WelcomeScreen";
//add password and email after all works in demo, now just a name is enough


const start = () => {
    console.log("nowa gra: dane poszły")
}

const backToMain = () => {

    const screen = document.querySelector(".menuScreen");
    const screen2 = document.querySelector(".continueGameContainer");
    screen.style.display = "flex";
    screen2.style.display = "none";
    console.log(screen2)
}

export const toActionScreen = (e) => {
    e.preventDefault();
    const screen4 = document.querySelector(".actionScreenContainer");
    const screen2 = document.querySelector(".continueGameContainer");
    screen4.style.display = "flex";
    screen2.style.display = "none";
}



const ContinueGame = () => {
    return (
        <div className={"continueGameContainer"} style={{display: "none"}}>
            <p>Witamy ponownie</p>
            <form action="">
                <label htmlFor="">podaj imię
                    <input type="text"/>
                </label>
                <button onClick={toActionScreen}>Kontynuuj</button>
                <button onClick={backToMain}>Powrót do menu</button>
            </form>
        </div>
    )
}

export default ContinueGame