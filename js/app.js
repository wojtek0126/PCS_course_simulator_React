

console.log("Welcome creator! This is app.js");

import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./WelcomeScreen";
import ActionScreen from "./ActionScreen";
import CreateNewPlayer from "./CreateNewPlayer";
import ContinueGame from "./ContinueGame";



const App = () => {
    const createNewPlayerScreen = localStorage.getItem('createNewPlayerScreen');
    console.log(createNewPlayerScreen, 'new game')
    const actionScreen = localStorage.getItem('actionScreen');
    console.log(actionScreen, ' action')
    const continueGameScreen = localStorage.getItem('continueGameScreen');
    console.log(continueGameScreen, ' continue')
    const welcomeScreen = localStorage.getItem('welcomeScreen');
    console.log(welcomeScreen, ' welcome')


    if (createNewPlayerScreen === "true") {
        return (
            <CreateNewPlayer />
        )
    }
    if (actionScreen === "true") {
        return (
            <ActionScreen />
        )
    }
    if (continueGameScreen === "true") {
        return (
            <ContinueGame />
        )
    }
    if (welcomeScreen === "true") {
        return (
            <WelcomeScreen />
        )
    }
    else {
        return null
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));