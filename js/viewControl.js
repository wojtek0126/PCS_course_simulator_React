import React from "react";
import {getPlayerById} from "./fetch";

//main menu below
export const startNewFromMenuScreen = () => {

    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'true');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');

    location.reload()

}

export const continueFromMenuScreen = () => {

    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'true');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');

    location.reload()
}

export const backToMainMenu = () => {
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('welcomeScreen', 'true');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');

    location.reload()
}

export const activateActionScreen = () => {
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'true');
    localStorage.setItem('skipAndRestScreen', 'false');

    location.reload()
}

export const goToSchool = () => {
    localStorage.setItem('goToSchoolScreen', 'true');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');

    location.reload()

}

export const skipSchoolAndRest = () => {
    localStorage.setItem('skipAndRestScreen', 'true');
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');

    location.reload()

}

export const handleContinue = (id, setData) => {
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'true');
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    console.log(id, "id z handleContinue")

    getPlayerById(id, setData)
    location.reload()
}