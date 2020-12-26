import React, {useEffect, useState} from "react";
import {activateActionScreen, backToMainMenu, wentToSchool, shopScreen, eventDrawScreen} from "./viewControl";
import {getPlayerById, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";

const SkipSchoolAndRest = () => {
    const resultId = localStorage.getItem('continuePlayerId')
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
    const [currentModule, setCurrentModule] = useState("");
    const [week, setWeek] = useState("");
    const [event, setEvent] = useState("");
    const [attendance, setAttendance] = useState(100);
    console.log(playerId, " playerid w go to school");

    useEffect(() => {
        getSelectedPlayerFromList(playerId,
            setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
            setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent);
    },[]);

    const skipSchoolContinue = () => {
        const sleepUp = parseInt(sleep + 1);
        const skillsDown = parseInt(skills - 1);
        const healthUp = parseInt(health + 1);
        const attitudeDown = parseInt(attitude - 1);
        const scoreUp2 = parseInt(score + 2);
        const setEvening = "wieczór";
        const attendanceDown = parseInt(attendance - 3);
        // const dayForward = (day + 1);

        const modifiy = {
            id: playerId,
            name: playerName,
            score: scoreUp2,
            week: week,
            day: day,
            dayPart: setEvening,
            moduleName: currentModule,
            buffs: buffs,
            inventory: inventory,
            thirdChanceExam: false,
            health: healthUp,
            sleep: sleepUp,
            skills: skillsDown,
            attitude: attitudeDown,
            luck: luck,
            attendance: attendanceDown,
            examThirdChance: false,
            examPassed: false,
            examPoints: 0,
            finalProjectDone: false,
            finalProjectScore: 0,
            ending: false,
            endingNumber: 0
        };
        updatePlayerStats(playerId, modifiy);
        console.log(skills, sleep, score, " player stats w go to school");
        eventDrawScreen();
        location.reload();
    }

    return (
        <>
            <h1>Odpoczywasz w domu</h1>
            <p>motywacja -1, wiedza -1, zdrowie +1, sen +1, punkty +2</p>
            <button onClick={skipSchoolContinue}>zakończ odpoczynek</button>
            <button onClick={shopScreen}>odwiedź sklep</button>
            <p>nastąpi losowanie zdarzenia</p>
            <button onClick={backToMainMenu}>powrót do menu</button>
        </>
    )
}

export default SkipSchoolAndRest