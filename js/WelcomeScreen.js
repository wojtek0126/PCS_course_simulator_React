import React from "react";
import {menuOptions, menuContainer, menuTitle, menuTitleSmall, links, menuTitleText, mainBackground, menuBotomPart} from "./styles/styles";
import {startNewFromMenuScreen, continueFromMenuScreen} from "./viewControl";
// import { AppRegistry, StyleSheet, ScrollView, Image, Text } from 'react-native';

//functions to be kept in different file later, to be shortened, no duplicates

const link1Hovered = () => {
    const link = document.querySelector(".menuLink1");
    link.style.fontSize = "80px";
}
const link2Hovered = () => {
    const link = document.querySelector(".menuLink2");
    link.style.fontSize = "80px";
}
const link3Hovered = () => {
    const link = document.querySelector(".menuLink3");
    link.style.fontSize = "80px";
}
const link4Hovered = () => {
    const link = document.querySelector(".menuLink4");
    link.style.fontSize = "80px";
}
const link5Hovered = () => {
    const link = document.querySelector(".menuLink5");
    link.style.fontSize = "80px";
}

const link1Out = () => {
    const link = document.querySelector(".menuLink1");
    link.style.fontSize = "40px";
}
const link2Out = () => {
    const link = document.querySelector(".menuLink2");
    link.style.fontSize = "40px";
}
const link3Out = () => {
    const link = document.querySelector(".menuLink3");
    link.style.fontSize = "40px";
}
const link4Out = () => {
    const link = document.querySelector(".menuLink4");
    link.style.fontSize = "40px";
}
const link5Out = () => {
    const link = document.querySelector(".menuLink5");
    link.style.fontSize = "40px";
}
// style={{
//     backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'
// }}
const WelcomeScreen = () => {

    return (
        <div style={mainBackground}>
            <h1 style={menuTitle}><span style={menuTitleText}>Symulator kursu IT</span></h1>
            <p style={menuTitleSmall}><strong style={{color: "blue"}}>Python</strong>
                <strong style={{color: "red"}}>dla</strong><strong style={{color: "black", fontWeight: "1000"}}>początkujących</strong>  </p>
        <div className={"menuScreen"} style={menuContainer}>
            <div style={menuOptions}>
                {/*<a href="" className={"menuLink4" } onMouseEnter={link4Hovered} onMouseOut={link4Out} style={links}>Zaloguj się</a>*/}
                <a href="" className={"menuLink1"} onClick={startNewFromMenuScreen} onMouseEnter={link1Hovered} onMouseOut={link1Out} style={links}>Nowa gra</a>
                <a href="" className={"menuLink2"} onClick={continueFromMenuScreen} onMouseEnter={link2Hovered} onMouseOut={link2Out} style={links}>Kontynuuj</a>
{/* plan to add some tips, code fragments, useful links, youtube channel names, trophies, collectibles etc*/}
{/*                <a href="" className={"menuLink4" } onMouseEnter={link4Hovered} onMouseOut={link4Out} style={links}>Twoje materiały(po zalogowaniu)</a>*/}
{/*                <a href="" className={"menuLink4" } onMouseEnter={link4Hovered} onMouseOut={link4Out} style={links}>Tabela wyników</a>*/}
{/*                <a href="" className={"menuLink3"} onMouseEnter={link3Hovered} onMouseOut={link3Out} style={links}>Instrukcje</a>*/}
{/*                <a href="" className={"menuLink5" } onMouseEnter={link5Hovered} onMouseOut={link5Out} style={links}>*/}
{/*                    Pomagaj ludziom i przyrodzie</a>*/}
            </div>
            <div style={menuBotomPart}></div>
        </div>
        </div>
    )
}

export default WelcomeScreen