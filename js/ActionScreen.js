import React, {useState, useEffect} from "react";
import {backToMainMenu, goToSchool, skipSchoolAndRest,
        doHomework, goSleepEvening,goPartyScreen, examScreen,
        inventoryScreen, extraExamScreen, finalProjectScreen, finalProjectResultScreen} from "./viewControl";
import {getPlayerForEventDraw} from "./fetch";
import {buttonOnOff, loadId, gameOverCheck, dateGameOverCheck, addArr, attendanceGameOverCheck, onHoverJpgSwapButtons} from "./functions";
import {
    actionNameField,
    actionScreenList,
    actionScreenListElements,
    actionElement,
    actionInventory,
    actionPrizes,
    actionElementBottom2,
    buttons,
    wholeScreenBackground,
    actionElementBottom,
    buttonFinalProject,
    bookIcon,
    lifeIcon,
    bedIcon,
    brainIcon,
    luckIcon,
    coinIcon,
    userIcon,
    inventoryBackground,
    actionBottom,
    buttonsContainer
} from "./styles/styles";
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
    const menuButton = document.querySelector(".backToMenuButton");

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

            <div className={"actionNameField"} style={actionNameField}>Imię gracza: {playerName}<div style={userIcon}></div></div>
            <ul style={actionScreenList} className={"actionPlayerStats"}>
                <li style={actionScreenListElements}>ZDROWIE: {health}  <div style={lifeIcon}></div></li>
                <li style={actionScreenListElements}>SEN: {sleep}<div style={bedIcon}></div></li>
                <li style={actionScreenListElements}>WIEDZA: {skills}<div style={bookIcon}></div></li>
                <li style={actionScreenListElements}>MOTYWACJA: {attitude}<div style={brainIcon}></div></li>
                <li style={actionScreenListElements}>SZCZĘŚCIE: {luck}<div style={luckIcon}></div></li>
                <li style={actionScreenListElements}>PUNKTY: {score}<div style={coinIcon}></div></li>
            </ul>
            {/*<div style={actionInvTitle}>*/}
<div style={actionBottom}>
    <p style={actionElement}>Twoje nagrody:<FontAwesomeIcon icon="treasure-chest" /></p>
    {/*</div>*/}
    <div className={"actionInventory"} style={actionPrizes}>
        {
            arr.map((item, index) => {
                return <p key={index}>{item}</p>
            })
        }
    </div>
    <div className={"actionBuffs"} style={actionElementBottom}>Aktualne zdarzenie: {actualEvent}</div>
    <div className={"actionCalendar"} style={actionElementBottom2}>Tydzień: {week}, Dzień kursu: {day} ,
        Część dnia: {dayPart}, Moduł: {currentModule}</div>
    <div style={buttonsContainer}>
        <button style={buttons} className={"goSchoolButton"} onClick={goToSchool} onMouseEnter={() => onHoverJpgSwapButtons(goSchoolBtn)}
                onMouseOut={() => onHoverJpgSwapButtons(goSchoolBtn, 1)}>
            idź do szkoły</button>
        <button style={buttons} className={"skipAndRestButton"} onClick={skipSchoolAndRest}
                onMouseEnter={() => onHoverJpgSwapButtons(skipSchoolBtn)} onMouseOut={() => onHoverJpgSwapButtons(skipSchoolBtn, 1)}>śpij dalej</button>
        <button style={buttons} className={"doHomeworkButton"} onClick={doHomework}
                onMouseEnter={() => onHoverJpgSwapButtons(doHomeworkBtn)} onMouseOut={() => onHoverJpgSwapButtons(doHomeworkBtn, 1)}>zrób pracę domową</button>
        <button style={buttons} className={"goSleepButton"} onClick={goSleepEvening}
                onMouseEnter={() => onHoverJpgSwapButtons(goSleepBtn)} onMouseOut={() => onHoverJpgSwapButtons(goSleepBtn, 1)}>idź spać</button>
        <button style={buttons} className={"goPartyButton"} onClick={goPartyScreen}
                onMouseEnter={() => onHoverJpgSwapButtons(goPartyBtn)} onMouseOut={() => onHoverJpgSwapButtons(goPartyBtn, 1)}>idź na imprezę</button>
        <button style={buttons} className={"takeExamButton"} onClick={examScreen}
                onMouseEnter={() => onHoverJpgSwapButtons(takeExamBtn)} onMouseOut={() => onHoverJpgSwapButtons(takeExamBtn, 1)}>podejdź do egzaminu</button>
        <button style={buttons} className={"takeExtraExamButton"} onClick={extraExamScreen}
                onMouseEnter={() => onHoverJpgSwapButtons(takeExtraExamButton)} onMouseOut={() => onHoverJpgSwapButtons(takeExtraExamButton, 1)}>podejdź do poprawki</button>
        <button style={buttonFinalProject} className={"startEndGameProjectButton"} onClick={finalProjectScreen}
                onMouseEnter={() => onHoverJpgSwapButtons(endGameProjectButton)} onMouseOut={() => onHoverJpgSwapButtons(endGameProjectButton, 1)}>zacznij projekt końcowy</button>
        <button style={buttons} className={"useItemButton"} onClick={inventoryScreen}
                onMouseEnter={() => onHoverJpgSwapButtons(useItemButton)} onMouseOut={() => onHoverJpgSwapButtons(useItemButton, 1)}>użyj przedmiotu</button>
        <button style={buttons} className={"backToMenuButton"} onClick={backToMainMenu}
                onMouseEnter={() => onHoverJpgSwapButtons(menuButton)} onMouseOut={() => onHoverJpgSwapButtons(menuButton, 1)}>powrót do menu</button>

</div>
            </div>
        </div>
    )
}

export default ActionScreen