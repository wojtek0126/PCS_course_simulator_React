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
import GoSleepEvening from "./GoSleepEvening";
import GoParty from "./GoParty";
import GameOver from "./GameOver";
import ExamTime from "./ExamTime";
import ExtraExamTime from "./ExtraExamScreen";
import ExamResult from "./ExamResult";
import SkipExam from "./SkipExam";
import EventDraw from "./EventDraw";
import Shop from "./Shop";
import FinalProject from "./FinalProject";
import FinalProjectResult from "./FinalProjectResult";
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
    const goSleepEveningScreen = localStorage.getItem('goSleepEveningScreen');
    console.log(goSleepEveningScreen, ' going sleep evening screen');
    const goPartyScreen = localStorage.getItem('goPartyScreen');
    console.log(goPartyScreen, ' going party screen');
    const gameOverScreen = localStorage.getItem('gameOverScreen');
    console.log(gameOverScreen, ' game over screen');
    const examScreen = localStorage.getItem('examScreen');
    console.log(examScreen, ' exam screen');
    const extraExamScreen = localStorage.getItem('extraExamScreen');
    console.log(extraExamScreen, ' extra exam screen');
    const examResultScreen = localStorage.getItem('examResultScreen');
    console.log(examResultScreen, ' exam result screen');
    const skipExamScreen = localStorage.getItem('skipExamScreen');
    console.log(skipExamScreen, ' skip exam screen');
    const eventDrawScreen = localStorage.getItem('eventDrawScreen');
    console.log(eventDrawScreen, ' event draw screen');
    const shopScreen = localStorage.getItem('shopScreen');
    console.log(shopScreen, ' shop screen');
    const finalProjectScreen = localStorage.getItem('finalProjectScreen');
    console.log(finalProjectScreen, ' final project screen');
    const finalProjectResultScreen = localStorage.getItem('finalProjectResultScreen');
    console.log(finalProjectResultScreen, ' final project result screen');


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
    if (goSleepEveningScreen === "true") {
        return (
            <GoSleepEvening />
        )
    }
    if (goPartyScreen === "true") {
        return (
            <GoParty />
        )
    }
    if (gameOverScreen === "true") {
        return (
            <GameOver />
        )
    }
    if (examScreen === "true") {
        return (
            <ExamTime />
        )
    }
    if (extraExamScreen === "true") {
        return (
            <ExtraExamTime />
        )
    }
    if (examResultScreen === "true") {
        return (
            <ExamResult />
        )
    }
    if (skipExamScreen === "true") {
        return (
            <SkipExam />
        )
    }
    if (eventDrawScreen === "true") {
        return (
            <EventDraw />
        )
    }
    if (shopScreen === "true") {
        return (
            <Shop />
        )
    }
    if (finalProjectScreen === "true") {
        return (
            <FinalProject />
        )
    }
    if (finalProjectResultScreen === "true") {
        return (
            <FinalProjectResult />
        )
    }
    else {
        return null
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));