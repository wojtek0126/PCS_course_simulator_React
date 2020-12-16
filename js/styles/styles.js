import React from "react";

export const objectFontResize = (element, newSize) => {
    const find = document.querySelector(element)
    find.style.fontSize = newSize;
}

export const menuTitle = {
    textTransform: "uppercase",
    fontSize: "5em"
}

export const menuTitleSmall = {
    textTransform: "uppercase",
    fontSize: "2em"
}

export const menuOptions = {
    display: "flex",
    flexDirection: "column",
    color: "gold",
    textAlign: "center",
};

export const links = {
    textDecoration: "none",
    color: "green",
    transition: "1s"
};

export const linksHover = {
    textDecoration: "none",
    fontSize: "1.5em"
};
export const menuContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "125px"
};

//action screen below
export const actionNameField = {
    border: "2px dotted blue",
    display: "flex",
    flexDirection: "column",
    background: "silver",
    padding: 20
}

export const actionScreenList = {
    display: "flex",
    flexDirection: "column",
    background: "silver",
    padding: 20,
    listStyle: "none",
    border: "2px dotted blue",
    margin: 0
}

export const actionScreenListElements = {
    padding: 10,
    border: "2px dotted black"
}

export const actionElement = {
    border: "2px dotted blue",
    display: "flex",
    flexDirection: "column",
    background: "silver",
    padding: 20,
}



