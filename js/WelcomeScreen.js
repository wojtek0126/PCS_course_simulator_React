import React from "react";
import {linksHover, menuOptions, menuContainer, menuTitle, menuTitleSmall, links} from "./styles/styles";
import NewGame from "./NewGame";
import ContinueGame from "./ContinueGame";

//functions to be kept in different file later, to be shortened, no duplicates
const link1Hovered = () => {
    const link = document.querySelector(".menuLink1");
    link.style.fontSize = "30px";
}
const link2Hovered = () => {
    const link = document.querySelector(".menuLink2");
    link.style.fontSize = "30px";
}
const link3Hovered = () => {
    const link = document.querySelector(".menuLink3");
    link.style.fontSize = "30px";
}
const link4Hovered = () => {
    const link = document.querySelector(".menuLink4");
    link.style.fontSize = "30px";
}
const link5Hovered = () => {
    const link = document.querySelector(".menuLink5");
    link.style.fontSize = "30px";
}

const link1Out = () => {
    const link = document.querySelector(".menuLink1");
    link.style.fontSize = "15px";
}
const link2Out = () => {
    const link = document.querySelector(".menuLink2");
    link.style.fontSize = "15px";
}
const link3Out = () => {
    const link = document.querySelector(".menuLink3");
    link.style.fontSize = "15px";
}
const link4Out = () => {
    const link = document.querySelector(".menuLink4");
    link.style.fontSize = "15px";
}
const link5Out = () => {
    const link = document.querySelector(".menuLink5");
    link.style.fontSize = "15px";
}
//when option clicked, menu goes display none and option goes display flex or block
const newGame = (e) => {
    e.preventDefault();
    const screen = document.querySelector(".menuScreen");
    const screen2 = document.querySelector(".startGameContainer");
    screen.style.display = "none";
    screen2.style.display = "flex";
}

const continueGame = (e) => {
    e.preventDefault();
    const screen = document.querySelector(".menuScreen");
    const screen2 = document.querySelector(".continueGameContainer");
    screen.style.display = "none";
    screen2.style.display = "flex";
}

// const initState = () => {
//     setTimeout(() => {
//         const screen = document.querySelector(".menuScreen");
//         const screen2 = document.querySelector(".startGameContainer");
//         const screen3 = document.querySelector(".continueGameContainer");
//         const screen4 = document.querySelector(".actionScreenContainer");
//         screen2.style.display = "none";
//         screen3.style.display = "none";
//         screen4.style.display = "none";
//         screen.style.display = "flex";
//     }, 0)
//
// }
//
// initState()




const WelcomeScreen = () => {

    return (
        <>
        <div className={"menuScreen"} style={menuContainer}>
            <h1 style={menuTitle}>pythonator</h1>
            <p style={menuTitleSmall}>IT course simulator</p>
            <div style={menuOptions}>
                <a href="" className={"menuLink1"} onClick={newGame} onMouseEnter={link1Hovered} onMouseOut={link1Out} style={links}>Nowa gra</a>
                <a href="" className={"menuLink2"} onClick={continueGame} onMouseEnter={link2Hovered} onMouseOut={link2Out} style={links}>Kontynuuj</a>
                <a href="" className={"menuLink3"} onMouseEnter={link3Hovered} onMouseOut={link3Out} style={links}>Instrukcje</a>
                <a href="" className={"menuLink4" } onMouseEnter={link4Hovered} onMouseOut={link4Out} style={links}>Tabela wyników</a>
                <a href="" className={"menuLink5" } onMouseEnter={link5Hovered} onMouseOut={link5Out} style={links}>Daj wsparcie</a>
            </div>
        </div>


            <NewGame />
            <ContinueGame />

            </>
    )
}

export default WelcomeScreen