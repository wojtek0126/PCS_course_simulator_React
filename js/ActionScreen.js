import React, {useState, useEffect} from "react";
import {backToMainMenu, goToSchool, skipSchoolAndRest, doHomework} from "./viewControl";
import {getLastPlayerFromList, getPlayerById,getSelectedPlayerFromList} from "./fetch";
import {buttonOnOff} from "./functions";
import {actionNameField, actionScreenList, actionScreenListElements, actionElement} from "./styles/styles";
import {moduleNames} from "./variables";
// import {moduleNames} from "./variables";
// const moduleNamesArr1 = moduleNames;
// console.log(moduleNamesArr1[2], " nazwa modulu w dohomework")

// it loads form localstorage --> all new views need to be mounted in app.js and viewControl.js
//get player by id instead of get last player from list, set id as props send it to both
//create new game and continue game so it gives back players id for action screen
//when player picks new game and sub data from name input by pressing start button it gets player id from created player
//and returns props(player id) to action screen
const ActionScreen = () => {
    const resultId = localStorage.getItem('continuePlayerId')
    const setWk = localStorage.getItem('weekNumber');


   //load playerid from localstorage here
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
    console.log(week, " week w actionscreenie");
    console.log(currentModule, " modul w actionscreenie");
    console.log(day, "dzien w actionscreen");
//dopisz id do displaycurrentplayera
    useEffect(() => {

        setPlayerId(10)
       getSelectedPlayerFromList(playerId,
           setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
           setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent
       )

    }, [])


    //buttons for evening morning
    const goSchoolBtn = document.querySelector(".goSchoolButton");
    const skipSchoolBtn = document.querySelector(".skipAndRestButton");
    const doHomeworkBtn = document.querySelector(".doHomeworkButton");
    const goPartyBtn = document.querySelector(".goPartyButton");
    const goSleepBtn = document.querySelector(".goSleepButton");
    const buttonOnOff = (btn, value) => {
        btn.style.display = value
    }
    if (dayPart === "poranek") {
        console.log("jest poranek")
        buttonOnOff(goSleepBtn, "none");
        buttonOnOff(doHomeworkBtn, "none")
        buttonOnOff(goPartyBtn, "none");
    }
    else if (dayPart === "wieczór"){
        console.log("jest wieczór")
        buttonOnOff(goSleepBtn, "inline");
        buttonOnOff(doHomeworkBtn, "inline")
        buttonOnOff(goPartyBtn, "inline");
        buttonOnOff(goSchoolBtn, "none");
        buttonOnOff(skipSchoolBtn, "none");
    }

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
            <div className={"actionInventory"} style={actionElement}>inwentarz:

            </div>
            <div className={"actionBuffs"} style={actionElement}>buffy i debuffy: </div>
            <div className={"actionCalendar"} style={actionElement}>Tydzień: {week}, Dzień: {day} , Część dnia: {dayPart}, Moduł: {currentModule}</div>
            <button className={"goSchoolButton"} onClick={goToSchool}>idź do szkoły</button>
            <button className={"skipAndRestButton"} onClick={skipSchoolAndRest}>odpocznij</button>
            <button className={"doHomeworkButton"} onClick={doHomework}>zrób pracę domową</button>
            <button className={"goSleepButton"}>idź spać</button>
            <button className={"goPartyButton"}>idź na imprezę</button>
            <button className={"backToMenuButton"} onClick={backToMainMenu}>powrót do menu</button>
        </div>
    )
}

export default ActionScreen