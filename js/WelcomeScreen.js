import React from "react";
import {linksHover, menuOptions, menuContainer, menuTitle, menuTitleSmall, links} from "./styles/styles";

const linkHovered = (linkNumber) => {
    const link = document.querySelectorAll(".menuLink");
    link.forEach((e) => {
        e.style.fontSize = "30px";
        // e.style.color = "black";
    })
}

const linksUnhovered = (linkNumber) => {
    const link = document.querySelectorAll(".menuLink");
    link.forEach((e) => {
        e.style.fontSize = "15px";
        // e.style.color = "blue";
    })
}



const WelcomeScreen = () => {
    return (
        <>
        <div style={menuContainer}>
            <h1 style={menuTitle}>pythonator</h1>
            <p style={menuTitleSmall}>IT course simulator</p>
            <div style={menuOptions}>
                <a href="" className={"menuLink"} onMouseEnter={linkHovered} onMouseOut={linksUnhovered} style={links}>Nowa gra</a>
                <a href="" className={"menuLink"} onMouseEnter={linkHovered} onMouseOut={linksUnhovered} style={links}>Kontynuuj</a>
                <a href="" className={"menuLink"} onMouseEnter={linkHovered} onMouseOut={linksUnhovered} style={links}>Instrukcje</a>
                <a href="" className={"menuLink" } onMouseEnter={linkHovered} onMouseOut={linksUnhovered} style={links}>Pomóż autorowi</a>
            </div>
        </div>

            </>
    )
}

export default WelcomeScreen