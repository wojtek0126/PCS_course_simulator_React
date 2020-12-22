import React, {useState, useEffect} from "react";
import {backToMainMenu, goToSchool, skipSchoolAndRest, doHomework, goSleepEvening, goPartyScreen} from "./viewControl";
import {getSelectedPlayerFromList, getLastPlayerFromList} from "./fetch";
import {buttonOnOff, getData, loadId} from "./functions";
import {actionNameField, actionScreenList, actionScreenListElements, actionElement} from "./styles/styles";
import {moduleNames} from "./variables";

// const moduleNamesArr1 = moduleNames;
// console.log(moduleNamesArr1[2], " nazwa modulu w dohomework")

const ActionScreen = () => {

    const resultId = loadId();
    // console.log(resultId, " id po pobranu actionscreen");

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
    // console.log(week, " week w actionscreenie");
    // console.log(currentModule, " modul w actionscreenie");
    // console.log(day, "dzien w actionscreen");
//dopisz id do displaycurrentplayera
    useEffect(() => {
        // location.reload()
        setPlayerId(resultId)
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
    const takeExamBtn = document.querySelector(".takeExamButton");
    const takeExtraExamButton = document.querySelector(".takeExtraExamButton");
    const useItemButton = document.querySelector(".useItemButton");

    if (dayPart === "poranek") {
        // console.log("jest poranek")
        buttonOnOff(goSleepBtn, "none");
        buttonOnOff(doHomeworkBtn, "none")
        buttonOnOff(goPartyBtn, "none");
        // buttonOnOff(takeExamBtn, "none");
        // buttonOnOff(takeExtraExamButton, "none");
        if (day == 5 || day == 10 || day == 15 || day == 20 || day == 25 || day == 30) {
            console.log("Jest czas egzaminu");
            buttonOnOff(takeExamBtn, "inline");
            buttonOnOff(takeExtraExamButton, "none");
        }
        else {
            console.log("Jest czas nauki");
            buttonOnOff(takeExamBtn, "none");
            buttonOnOff(takeExtraExamButton, "none");
        }
    }
    if (dayPart === "wieczór"){
        // console.log("jest wieczór")
        // buttonOnOff(goSleepBtn, "inline");
        // buttonOnOff(doHomeworkBtn, "inline")
        // buttonOnOff(goPartyBtn, "inline");
        buttonOnOff(goSchoolBtn, "none");
        buttonOnOff(skipSchoolBtn, "none");
        buttonOnOff(takeExamBtn, "none");
        buttonOnOff(takeExtraExamButton, "none");
    }
// exam day and buttons




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
            <div className={"actionInventory"} style={actionElement} style={{
                display: "flex",
                backgroundColor: "silver",
                padding: 10,
                border: "2px dotted blue"
            }}>inwentarz: <a href="" style={{
                display: "flex",
                textDecoration: "none",
                paddingLeft: 10,
            }}>{inventory}</a>

            </div>
            <div className={"actionBuffs"} style={actionElement}>buffy i debuffy: </div>
            <div className={"actionCalendar"} style={actionElement}>Tydzień: {week}, Dzień: {day} , Część dnia: {dayPart}, Moduł: {currentModule}</div>
            <button className={"goSchoolButton"} onClick={goToSchool}>idź do szkoły</button>
            <button className={"skipAndRestButton"} onClick={skipSchoolAndRest}>odpocznij</button>
            <button className={"doHomeworkButton"} onClick={doHomework}>zrób pracę domową</button>
            <button className={"goSleepButton"} onClick={goSleepEvening}>idź spać</button>
            <button className={"goPartyButton"} onClick={goPartyScreen}>idź na imprezę</button>
            <button className={"takeExamButton"}>podejdź do egzaminu</button>
            <button className={"takeExtraExamButton"}>podejdź do poprawki</button>
            <button className={"useItemButton"}>użyj przedmiotu</button>
            <button className={"backToMenuButton"} onClick={backToMainMenu}>powrót do menu</button>
        </div>
    )
}

export default ActionScreen