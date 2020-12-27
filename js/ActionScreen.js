import React, {useState, useEffect} from "react";
import {backToMainMenu, goToSchool, skipSchoolAndRest, doHomework, goSleepEvening,
    goPartyScreen, examScreen, inventoryScreen} from "./viewControl";
import {getSelectedPlayerFromList} from "./fetch";
import {buttonOnOff, loadId, gameOverCheck} from "./functions";
import {actionNameField, actionScreenList, actionScreenListElements, actionElement} from "./styles/styles";
import {moduleNames} from "./variables";

const ActionScreen = () => {
    const resultId = loadId();
    let [playerId, setPlayerId] = useState(resultId);
    const [playerName, setPlayerName] = useState("");
    const [health, setHealth] = useState("");
    const [sleep, setSleep] = useState("");
    const [skills, setSkills] = useState("");
    const [attitude, setAttitude] = useState("");
    const [luck, setLuck] = useState("");
    const [score, setScore] = useState("");
    const [inventory, setInventory] = useState([]);
    const [buffs, setBuffs] = useState([]);
    const [day, setDay] = useState("");
    const [dayPart, setDayPart] = useState("");
    const [week, setWeek] = useState("");
    const [currentModule, setCurrentModule] = useState(moduleNames[week-1]);
    const [event, setEvent] = useState("");
    const [attendance, setAttendance] = useState(100);

    useEffect(() => {
        setPlayerId(resultId)
       getSelectedPlayerFromList(playerId,
           setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
           setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent
       )
    }, []);

    //action buttons from DOM
    const goSchoolBtn = document.querySelector(".goSchoolButton");
    const skipSchoolBtn = document.querySelector(".skipAndRestButton");
    const doHomeworkBtn = document.querySelector(".doHomeworkButton");
    const goPartyBtn = document.querySelector(".goPartyButton");
    const goSleepBtn = document.querySelector(".goSleepButton");
    const takeExamBtn = document.querySelector(".takeExamButton");
    const takeExtraExamButton = document.querySelector(".takeExtraExamButton");
    const useItemButton = document.querySelector(".useItemButton");
    const endGameProjectButton = document.querySelector(".startEndGameProjectButton");

    if (week > 6) {
       buttonOnOff(endGameProjectButton, "inline");
    }

    if (dayPart === "poranek") {
        // console.log("jest poranek")
        buttonOnOff(goSleepBtn, "none");
        buttonOnOff(doHomeworkBtn, "none")
        buttonOnOff(goPartyBtn, "none");
        if (day == 5 || day == 10 || day == 15 || day == 20 || day == 25 || day == 30) {
            buttonOnOff(takeExamBtn, "inline");
            buttonOnOff(takeExtraExamButton, "none");
            buttonOnOff(goSchoolBtn, "none");
        }
        else {
            buttonOnOff(takeExamBtn, "none");
            buttonOnOff(takeExtraExamButton, "none");
        }
    }
    if (dayPart === "wieczór"){
        buttonOnOff(goSchoolBtn, "none");
        buttonOnOff(skipSchoolBtn, "none");
        buttonOnOff(takeExamBtn, "none");
        buttonOnOff(takeExtraExamButton, "none");
    }

gameOverCheck(health, 0);

    return (
        <div className={"actionScreenContainer"}>
            <div className={"actionNameField"} style={actionNameField}>Imię gracza: {playerName}</div>
            <ul style={actionScreenList} className={"actionPlayerStats"}>
                <li style={actionScreenListElements}>ZDROWIE: {health}</li>
                <li style={actionScreenListElements}>SEN: {sleep}</li>
                <li style={actionScreenListElements}>WIEDZA: {skills}</li>
                <li style={actionScreenListElements}>MOTYWACJA: {attitude}</li>
                <li style={actionScreenListElements}>SZCZĘŚCIE: {luck}</li>
                <li style={actionScreenListElements}>PUNKTY: {score}</li>
            </ul>
            <div className={"actionInventory"} style={actionElement}>inwentarz: <a href="" style={actionElement}>{inventory}</a>
            </div>
            <div className={"actionBuffs"} style={actionElement}>Zdarzenia: </div>
            <div className={"actionCalendar"} style={actionElement}>Tydzień: {week}, Dzień: {day} , Część dnia: {dayPart}, Moduł: {currentModule}</div>
            <button className={"goSchoolButton"} onClick={goToSchool}>idź do szkoły</button>
            <button className={"skipAndRestButton"} onClick={skipSchoolAndRest}>odpocznij</button>
            <button className={"doHomeworkButton"} onClick={doHomework}>zrób pracę domową</button>
            <button className={"goSleepButton"} onClick={goSleepEvening}>idź spać</button>
            <button className={"goPartyButton"} onClick={goPartyScreen}>idź na imprezę</button>
            <button className={"takeExamButton"} onClick={examScreen}>podejdź do egzaminu</button>
            <button className={"takeExtraExamButton"}>podejdź do poprawki</button>
            <button className={"startEndGameProjectButton"} style={{
                display: "none"
            }}>zacznij projekt końcowy</button>
            <button className={"useItemButton"} onClick={inventoryScreen}>użyj przedmiotu</button>
            <button className={"backToMenuButton"} onClick={backToMainMenu}>powrót do menu</button>
        </div>
    )
}

export default ActionScreen