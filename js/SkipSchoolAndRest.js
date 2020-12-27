import React, {useEffect, useState} from "react";
import {backToMainMenu, shopScreen, eventDrawScreen} from "./viewControl";
import {getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore} from "./functions";

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
        const scoreUp = parseInt(score + 2);
        const setEvening = "wieczór";
        const attendanceDown = parseInt(attendance - 3);
        let verifiedSleep = statValidation(sleepUp, 0, 10);
        let verifiedSkills = statValidation(skillsDown, 0, 10);
        let verifiedHealth = statValidation(healthUp, 0, 10);
        let verifiedAttitude = statValidation(attitudeDown, 0, 10);
        let verifiedScore = validateScore(scoreUp);
        let verifiedAttendance = validateScore(attendanceDown);

        const modifiy = {
            id: playerId,
            name: playerName,
            score: verifiedScore,
            week: week,
            day: day,
            dayPart: setEvening,
            moduleName: currentModule,
            buffs: buffs,
            inventory: inventory,
            thirdChanceExam: false,
            health: verifiedHealth,
            sleep: verifiedSleep,
            skills: verifiedSkills,
            attitude: verifiedAttitude,
            luck: luck,
            attendance: verifiedAttendance,
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