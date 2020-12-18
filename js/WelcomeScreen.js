import React from "react";
import {menuOptions, menuContainer, menuTitle, menuTitleSmall, links} from "./styles/styles";
import {startNewFromMenuScreen, continueFromMenuScreen} from "./viewControl";

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

const WelcomeScreen = () => {

    return (
        <>
        <div className={"menuScreen"} style={menuContainer}>
            <h1 style={menuTitle}>pythonator</h1>
            <p style={menuTitleSmall}>IT course simulator</p>
            <div style={menuOptions}>
                <a href="" className={"menuLink1"} onClick={startNewFromMenuScreen} onMouseEnter={link1Hovered} onMouseOut={link1Out} style={links}>Nowa gra</a>
                <a href="" className={"menuLink2"} onClick={continueFromMenuScreen} onMouseEnter={link2Hovered} onMouseOut={link2Out} style={links}>Kontynuuj</a>
                <a href="" className={"menuLink3"} onMouseEnter={link3Hovered} onMouseOut={link3Out} style={links}>Instrukcje</a>
                <a href="" className={"menuLink4" } onMouseEnter={link4Hovered} onMouseOut={link4Out} style={links}>Tabela wyników</a>
                <a href="" className={"menuLink5" } onMouseEnter={link5Hovered} onMouseOut={link5Out} style={links}>
                    aid author and charities</a>
            </div>
        </div>
            </>
    )
}

export default WelcomeScreen