import React, {useState, useEffect} from "react";
import {backToMainMenu, goToSchool, skipSchoolAndRest,
        doHomework, goSleepEvening,goPartyScreen, examScreen,
        inventoryScreen, extraExamScreen, finalProjectScreen, finalProjectResultScreen} from "./viewControl";
import {getPlayerForEventDraw} from "./fetch";
import {buttonOnOff, loadId, gameOverCheck, dateGameOverCheck, addArr, attendanceGameOverCheck} from "./functions";
import {actionNameField, actionScreenList, actionScreenListElements,
        actionElement, actionInventory, actionInvTitle, actionInvTitleText, buttons, wholeScreenBackground, actionElementFlat, actionElementBottom} from "./styles/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ActionScreen = () => {

    const resultId = loadId();
    const actualEvent = localStorage.getItem("eventDrawn");
    const [player, setPlayer] = useState([]);
    const [inventoryArr, setInventoryArr] = useState([]);

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);

    }, []);

    useEffect(() => {
        const inventoryArr = player.inventory;
        setInventoryArr(inventoryArr);
        console.log(inventoryArr, "invArr w");
    }, [player]);

    let arr = addArr(inventoryArr);
    console.log(arr[0], "tet za");

    let playerName = player.name;
    let health = player.health;
    let sleep = player.sleep;
    let skills = player.skills;
    let attitude = player.attitude;
    let luck = player.luck;
    let score = player.score;
    let buffs = player.buffs;
    let day = player.day;
    let dayPart = player.dayPart;
    let currentModule = player.moduleName;
    let week = player.week;
    let event = player.event;
    let attendance = player.attendance;
    let repeatingExam = player.repeatingExam;
    let gameOver = player.gameOver;

    //action buttons and elements DOM
    const goSchoolBtn = document.querySelector(".goSchoolButton");
    const skipSchoolBtn = document.querySelector(".skipAndRestButton");
    const doHomeworkBtn = document.querySelector(".doHomeworkButton");
    const goPartyBtn = document.querySelector(".goPartyButton");
    const goSleepBtn = document.querySelector(".goSleepButton");
    const takeExamBtn = document.querySelector(".takeExamButton");
    const takeExtraExamButton = document.querySelector(".takeExtraExamButton");
    const useItemButton = document.querySelector(".useItemButton");
    const endGameProjectButton = document.querySelector(".startEndGameProjectButton");
    const eventDisplay = document.querySelector(".actionBuffs");

    if (dayPart === "poranek") {
        buttonOnOff(goSleepBtn, "none");
        buttonOnOff(doHomeworkBtn, "none")
        buttonOnOff(goPartyBtn, "none");
        if (day === 5 || day === 10 || day === 15 || day === 20 || day === 25 || day === 30) {
            buttonOnOff(takeExamBtn, "inline");
            buttonOnOff(takeExtraExamButton, "none");
            buttonOnOff(goSchoolBtn, "none");
            buttonOnOff(skipSchoolBtn, "none");
        }
        else if (day > 30 || week > 6) {
            buttonOnOff(goSchoolBtn, "none");
            buttonOnOff(endGameProjectButton, "inline");
            buttonOnOff(takeExamBtn, "none");
        }
        else {
            buttonOnOff(takeExamBtn, "none");
        }
    }
    if (dayPart === "wieczór"){
        buttonOnOff(goSchoolBtn, "none");
        buttonOnOff(skipSchoolBtn, "none");
        buttonOnOff(takeExamBtn, "none");
        buttonOnOff(takeExtraExamButton, "none");
        if (day > 30) {
            buttonOnOff(goSchoolBtn, "none");
            buttonOnOff(endGameProjectButton, "inline");
            buttonOnOff(takeExamBtn, "none");
            doHomeworkBtn.innerHTML = "powtórz materiał";
        }
    }
    if (repeatingExam === true) {
        buttonOnOff(takeExtraExamButton, "inline");
    }
    else if (repeatingExam === false){
        buttonOnOff(takeExtraExamButton, "none");
    }
    if (player.finalProjectDone === true) {
        finalProjectResultScreen();
    }
    if (day === 1 && dayPart === "poranek") {
        eventDisplay.innerHTML = "Aktualne zdarzenia: rozpoczynasz kurs Pythona. Powodzenia!"
    }

    dateGameOverCheck(day, 35)
    gameOverCheck(health, 0);
    attendanceGameOverCheck(attendance, 80);
    gameOverCheck(gameOver, true);

    return (
        <div style={wholeScreenBackground} className={"actionScreenContainer"}>

            <div className={"actionNameField"} style={actionNameField}>Imię gracza: {playerName}</div>
            <ul style={actionScreenList} className={"actionPlayerStats"}>
                <li style={actionScreenListElements}>ZDROWIE: {health}  <FontAwesomeIcon icon="heart" /></li>
                <li style={actionScreenListElements}>SEN: {sleep}<FontAwesomeIcon icon="bed" /></li>
                <li style={actionScreenListElements}>WIEDZA: {skills}<FontAwesomeIcon icon="book" /></li>
                <li style={actionScreenListElements}>MOTYWACJA: {attitude}<FontAwesomeIcon icon="brain" /></li>
                <li style={actionScreenListElements}>SZCZĘŚCIE: {luck}<FontAwesomeIcon icon="question" /></li>
                <li style={actionScreenListElements}>PUNKTY: {score}<FontAwesomeIcon icon="coins" /></li>
            </ul>
            {/*<div style={actionInvTitle}>*/}
                <p style={actionElement}>Twoje nagrody:<FontAwesomeIcon icon="treasure-chest" /></p>
            {/*</div>*/}
            <div className={"actionInventory"} style={actionElementFlat}>
                {
                    arr.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                }
            </div>
            {/*<div>{}</div>*/}
            <div className={"actionBuffs"} style={actionElementFlat}>Aktualne zdarzenie: {actualEvent}</div>
            <div className={"actionCalendar"} style={actionElementBottom}>Tydzień: {week}, Dzień kursu: {day} , Część dnia: {dayPart}, Moduł: {currentModule}</div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 20
            }}>
                <button style={buttons} className={"goSchoolButton"} onClick={goToSchool}>idź do szkoły</button>
                <button style={buttons} className={"skipAndRestButton"} onClick={skipSchoolAndRest}>odpocznij</button>
                <button style={buttons} className={"doHomeworkButton"} onClick={doHomework}>zrób pracę domową</button>
                <button style={buttons} className={"goSleepButton"} onClick={goSleepEvening}>idź spać</button>
                <button style={buttons} className={"goPartyButton"} onClick={goPartyScreen}>idź na imprezę</button>
                <button style={buttons} className={"takeExamButton"} onClick={examScreen}>podejdź do egzaminu</button>
                <button style={buttons} className={"takeExtraExamButton"} onClick={extraExamScreen}>podejdź do poprawki</button>
                <button style={buttons} className={"startEndGameProjectButton"} style={{
                    display: "none"
                }} onClick={finalProjectScreen}>zacznij projekt końcowy</button>
                <button style={buttons} className={"useItemButton"} onClick={inventoryScreen}>użyj przedmiotu</button>
                <button style={buttons} className={"backToMenuButton"} onClick={backToMainMenu}>powrót do menu</button>
            </div>
        </div>
    )
}

export default ActionScreen