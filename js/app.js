import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./WelcomeScreen";
import ActionScreen from "./ActionScreen";
import CreateNewPlayer from "./CreateNewPlayer";
import ContinueGame from "./ContinueGame";
import GoToSchool from "./GoToSchool";
import SkipSchoolAndRest from "./SkipSchoolAndRest";
import DoHomework from "./DoHomework";
import SuccessPlayerCreate from "./SuccessPlayerCreate";
// localStorage.setItem('actionScreen', 'true');
const App = () => {

    const createNewPlayerScreen = localStorage.getItem('createNewPlayerScreen');
    console.log(createNewPlayerScreen, 'createNewPlayerScreen');
    const actionScreen = localStorage.getItem('actionScreen');
    console.log(actionScreen, ' action')
    const continueGameScreen = localStorage.getItem('continueGameScreen');
    console.log(continueGameScreen, ' continue')
    const welcomeScreen = localStorage.getItem('welcomeScreen');
    console.log(welcomeScreen, ' welcome')
    const goToSchoolScreen = localStorage.getItem('goToSchoolScreen');
    console.log(goToSchoolScreen, ' going school')
    const skipAndRestScreen = localStorage.getItem('skipAndRestScreen');
    console.log(skipAndRestScreen, ' sleep instead of school');
    const doHomeworkScreen = localStorage.getItem('doHomeworkScreen');
    console.log(skipAndRestScreen, ' do homework');
    const successNewPlayerCreateScreen = localStorage.getItem('successNewPlayerCreateScreen');
    console.log(successNewPlayerCreateScreen, ' success create new player');

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
    if (doHomeworkScreen === "true") {
        return (
            <DoHomework />
        )
    }
    if (goToSchoolScreen === "true") {
        return (
            <GoToSchool />
        )
    }
    if (skipAndRestScreen === "true") {
        return (
            <SkipSchoolAndRest />
        )
    }
    if (successNewPlayerCreateScreen === "true") {
        return (
            <SuccessPlayerCreate />
        )
    }
    else {
        return null
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));