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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');

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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');

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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');

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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');

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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');

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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');

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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');

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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');


    console.log(id, "id z handleContinue");
    location.reload()
}



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
// localStorage.setItem('examScreen', 'false');
// localStorage.setItem('gameOverScreen', 'false');
// localStorage.setItem('extraExamScreen', 'false');


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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'false');


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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
localStorage.setItem('extraExamScreen', 'false');


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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
localStorage.setItem('extraExamScreen', 'false');


    location.reload()

}

export const gameOverScreen = () => {
    localStorage.setItem('goPartyScreen', 'false');
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
    localStorage.setItem('gameOverScreen', 'true');
    localStorage.setItem('examScreen', 'false');
localStorage.setItem('extraExamScreen', 'false');


    location.reload()

}

export const ExamScreen = () => {
    localStorage.setItem('goPartyScreen', 'false');
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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'true');
    localStorage.setItem('extraExamScreen', 'false');


    location.reload()

}

export const extraExamScreen = () => {
    localStorage.setItem('goPartyScreen', 'false');
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
    localStorage.setItem('gameOverScreen', 'false');
    localStorage.setItem('examScreen', 'false');
    localStorage.setItem('extraExamScreen', 'true');


    location.reload()

}