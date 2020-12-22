import React from "react";
import {getLastPlayerFromList, getPlayerById} from "./fetch";

//main menu below
export const startNewFromMenuScreen = () => {

    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'true');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
localStorage.setItem('goSleepEveningScreen', 'false');
localStorage.setItem('goPartyScreen', 'false');
    location.reload()

}

export const continueFromMenuScreen = () => {

    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'true');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
localStorage.setItem('goSleepEveningScreen', 'false');
localStorage.setItem('goPartyScreen', 'false');
    location.reload()
}

export const backToMainMenu = () => {
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('welcomeScreen', 'true');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
localStorage.setItem('goSleepEveningScreen', 'false');
localStorage.setItem('goPartyScreen', 'false');
    location.reload()
}

export const activateActionScreen = () => {
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'true');
localStorage.setItem('goSleepEveningScreen', 'false');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
localStorage.setItem('goPartyScreen', 'false');
    location.reload()
}

export const goToSchool = () => {
    localStorage.setItem('goToSchoolScreen', 'true');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
localStorage.setItem('goSleepEveningScreen', 'false');
localStorage.setItem('goPartyScreen', 'false');
    location.reload()

}

export const skipSchoolAndRest = () => {
    localStorage.setItem('skipAndRestScreen', 'true');
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
localStorage.setItem('goSleepEveningScreen', 'false');
localStorage.setItem('goPartyScreen', 'false');
    location.reload()

}

export const doHomework = () => {
    localStorage.setItem('doHomeworkScreen', 'true');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
localStorage.setItem('goSleepEveningScreen', 'false');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
localStorage.setItem('goPartyScreen', 'false');
    location.reload()
}

export const wentToSchool = (id) => {
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'true');
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
localStorage.setItem('goSleepEveningScreen', 'false');
localStorage.setItem('goPartyScreen', 'false');
    console.log(id, "id z handleContinue")
    location.reload()
}

// export const didHomework = (id) => {
//     localStorage.setItem('goToSleepScreen', 'true');
//     localStorage.setItem('welcomeScreen', 'false');
//     localStorage.setItem('continueGameScreen', 'false');
//     localStorage.setItem('createNewPlayerScreen', 'false');
//     localStorage.setItem('actionScreen', 'false');
//     localStorage.setItem('goToSchoolScreen', 'false');
//     localStorage.setItem('skipAndRestScreen', 'false');
// localStorage.setItem('doHomeworkScreen', 'false');
// localStorage.setItem('successNewPlayerCreateScreen', 'false');
// localStorage.setItem('goPartyScreen', 'false');
// localStorage.setItem('goSleepEveningScreen', 'false');
//     console.log(id, "id z handleContinue")
//     location.reload()
// }

// const toActionScreenFromCreateNewPlayer = () => {
//     localStorage.setItem('welcomeScreen', 'false');
//     localStorage.setItem('continueGameScreen', 'false');
//     localStorage.setItem('createNewPlayerScreen', 'false');
//     localStorage.setItem('actionScreen', 'true');
//     localStorage.setItem('goToSchoolScreen', 'false');
//     localStorage.setItem('skipAndRestScreen', 'false');
//     localStorage.setItem('goToSleepScreen', 'false');
// localStorage.setItem('doHomeworkScreen', 'false');
// localStorage.setItem('goSleepEveningScreen', 'false');
// localStorage.setItem('successNewPlayerCreateScreen', 'false');
// localStorage.setItem('goPartyScreen', 'false');
//     getLastPlayerFromList()
// }

export const successPlayerCreateScreen = () => {
    localStorage.setItem('successNewPlayerCreateScreen', 'true');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('goSleepEveningScreen', 'false');
   localStorage.setItem('goPartyScreen', 'false');
}

export const goSleepEvening = () => {
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('goSleepEveningScreen', 'true');
    localStorage.setItem('goPartyScreen', 'false');
    location.reload()

}

export const goPartyScreen = () => {
    localStorage.setItem('goPartyScreen', 'true');
    localStorage.setItem('successNewPlayerCreateScreen', 'false');
    localStorage.setItem('welcomeScreen', 'false');
    localStorage.setItem('continueGameScreen', 'false');
    localStorage.setItem('createNewPlayerScreen', 'false');
    localStorage.setItem('actionScreen', 'false');
    localStorage.setItem('goToSchoolScreen', 'false');
    localStorage.setItem('doHomeworkScreen', 'false');
    localStorage.setItem('skipAndRestScreen', 'false');
    localStorage.setItem('goToSleepScreen', 'false');
    localStorage.setItem('goSleepEveningScreen', 'false');

    location.reload()

}