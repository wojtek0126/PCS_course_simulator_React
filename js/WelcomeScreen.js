import React, {useState, useEffect} from "react";
import {linksHover, menuOptions, menuContainer, menuTitle, menuTitleSmall, links} from "./styles/styles";



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
// const newGame = (e) => {
//     e.preventDefault();
//   //load localstorage, newGameScreen = true, reszta false, save localstorage, reload page
// }

// const continueGame = (e) => {
//     e.preventDefault();
//     const screen = document.querySelector(".menuScreen");
//     const screen2 = document.querySelector(".continueGameContainer");
//     screen.style.display = "none";
//     screen2.style.display = "flex";
// }
// localStorage.setItem('welcomeScreen', 'true');
// localStorage.setItem('continueGameScreen', 'false');
// localStorage.setItem('createNewPlayerScreen', 'false');
// localStorage.setItem('actionScreen', 'false');

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

const startNewGame = () => {

    localStorage.setItem('createNewPlayerScreen', 'true');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    location.reload();

}

const continueGame = () => {

    localStorage.setItem('continueGameScreen', 'true');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('actionScreen', 'false');


}

export const mainMenu = () => {

    localStorage.setItem('welcomeScreen', 'true');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    location.reload();

}

export const actionGame = () => {

    localStorage.setItem('actionScreen', 'true');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    location.reload();

}


const WelcomeScreen = () => {
    // const [actionScreenActive, setActionScreenActive] = useState(false);
    // const [welcomeScreenActive, setWelcomeScreenActive] = useState(false);
    // const [createNewPlayerScreenActive, setCreateNewPlayerScreenActive] = useState(false);
    // const [continueGameScreenActive, setContinueGameScreenActive] = useState(false);
//reset local storage by activating, changing values and reloading
//     const myStorage = localStorage;
    // localStorage.setItem('actionScreen', 'false');
    // localStorage.setItem('welcomeScreen', 'true');
    // localStorage.setItem('createNewPlayerScreen', 'false');
    // localStorage.setItem('continueGameScreen', 'false');


    // useEffect(() => {
    //     const myStorage = localStorage;


        // const menuG = localStorage.getItem("welcomeScreen");
        // const actionG = localStorage.getItem("actionScreen");
        // console.log(continueG, " continue screen");
        // console.log(newG, " new game screen");
        // console.log(menuG, " menu screen");
        // console.log(actionG, " action screen");



        // setActionScreenActive(actionG);
        // setWelcomeScreenActive(menuG);
        // setContinueGameScreenActive(continueG);
        // setCreateNewPlayerScreenActive(newG);

    // },[])

    return (
        <>
        <div className={"menuScreen"} style={menuContainer}>
            <h1 style={menuTitle}>pythonator</h1>
            <p style={menuTitleSmall}>IT course simulator</p>
            <div style={menuOptions}>
                <a href="" className={"menuLink1"} onClick={startNewGame} onMouseEnter={link1Hovered} onMouseOut={link1Out} style={links}>Nowa gra</a>
                <a href="" className={"menuLink2"} onClick={continueGame} onMouseEnter={link2Hovered} onMouseOut={link2Out} style={links}>Kontynuuj</a>
                <a href="" className={"menuLink3"} onMouseEnter={link3Hovered} onMouseOut={link3Out} style={links}>Instrukcje</a>
                <a href="" className={"menuLink4" } onMouseEnter={link4Hovered} onMouseOut={link4Out} style={links}>Tabela wyników</a>
                <a href="" className={"menuLink5" } onMouseEnter={link5Hovered} onMouseOut={link5Out} style={links}>Daj wsparcie</a>
            </div>
        </div>
            </>
    )
}

export default WelcomeScreen