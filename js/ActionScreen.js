import React, {useState, useEffect} from "react";
import {backToMainMenu, goToSchool, skipSchoolAndRest, handleContinue} from "./viewControl";
import {getLastPlayerFromList, getPlayerById,getSelectedPlayerFromList} from "./fetch";
import {displayCurrentPlayer} from "./functions";
import {actionNameField, actionScreenList, actionScreenListElements, actionElement} from "./styles/styles";

// it loads form localstorage --> all new views need to be mounted in app.js and viewControl.js
//get player by id instead of get last player from list, set id as props send it to both
//create new game and continue game so it gives back players id for action screen
//when player picks new game and sub data from name input by pressing start button it gets player id from created player
//and returns props(player id) to action screen
const ActionScreen = () => {
    const resultId = localStorage.getItem('continuePlayerId')
    let [playerId, setPlayerId] = useState(resultId);

    console.log(resultId, "........id w map w handlecontinue")
   //load playerid from localstorage here
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
    const [currentModule, setCurrentModule] = useState("");
    const [week, setWeek] = useState("");
    const [event, setEvent] = useState("");
    const [attendance, setAttendance] = useState(100);
    // console.log(playerId, " playerId z propsa");
//dopisz id do displaycurrentplayera
    useEffect(() => {

        setPlayerId(10)
       getSelectedPlayerFromList(playerId,
           setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
           setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent
       )

       console.log(playerId, " playerId w useeffect")
    }, [])

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
            <button className={"keepSleepingButton"} onClick={skipSchoolAndRest}>odpocznij</button>
            <button className={"doHomeworkButton"}>zrób pracę domową</button>
            <button className={"goPartyButton"}>idź na imprezę</button>
            <button className={"backToMenuButton"} onClick={backToMainMenu}>powrót do menu</button>
        </div>
    )
}

export default ActionScreen