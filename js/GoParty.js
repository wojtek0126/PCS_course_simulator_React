import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen, shopScreen} from "./viewControl";
import {getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore} from "./functions";
import {moduleNames} from "./variables";
import {random} from "./functions";


const GoParty = () => {
    const resultId = localStorage.getItem('continuePlayerId');
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

    useEffect(() => {
        getSelectedPlayerFromList(playerId,
            setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
            setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent);
    },[]);

    console.log(moduleNames[week-1], "mod");
    console.log(week, "week111");
    console.log(day, "day")
    localStorage.setItem('weekNumber', week);

    const goPartyContinue = () => {
        let sleepE = parseInt(sleep);
        let skillE2 = parseInt(skills);
        let skillE = random(0, -1);
        let healthE = random(0, -5);
        const sleepDown = (sleepE - 2);
        const drawSkills = (skillE2 + skillE);
        const scoreUp = parseInt(score + 12);
        const drawHealth = parseInt(health + healthE);
        const setEvening = "poranek";
        const dayForward = parseInt(day + 1);
        const attitudeUp = parseInt(attitude + 2);
        let dayCount = day;
        let weekNumber = parseInt(week);
        let moduleName = moduleNames[weekNumber-1];
        let verifiedSkill = statValidation(drawSkills, 0, 10);
        let verifiedSleep = statValidation(sleepDown, 0, 10);
        let verifiedHealth = statValidation(drawHealth, 0, 10);
        let verifiedScore = validateScore(scoreUp);

        if (dayCount == 5 || dayCount == 10 || dayCount == 15 || dayCount == 20 || dayCount == 25 || dayCount == 30) {
            weekNumber++;
            moduleName = moduleNames[weekNumber-1];
        }
        else {
            weekNumber = parseInt(week);
            moduleName = moduleNames[weekNumber-1];
        }

        const modified = {
            id: playerId,
            name: playerName,
            score: verifiedScore,
            week: weekNumber,
            day: dayForward,
            dayPart: setEvening,
            moduleName: moduleName,
            buffs: buffs,
            inventory: inventory,
            thirdChanceExam: false,
            health: verifiedHealth,
            sleep: verifiedSleep,
            skills: verifiedSkill,
            attitude: attitudeUp,
            luck: luck,
            attendance: attendance,
            examThirdChance: false,
            examPassed: false,
            examPoints: 0,
            finalProjectDone: false,
            finalProjectScore: 0,
            ending: false,
            endingNumber: 0
        };
        updatePlayerStats(playerId, modified);
        eventDrawScreen();
        location.reload();
    };

    return (
        <>
            <h1>Idziesz wieczorem na imprezę</h1>
            <p>sen - 2, motywacja +2, możliwość utraty zdrowia 0 - 5, możliwość utraty wiedzy do - 1, punkty + 12</p>
            <button onClick={goPartyContinue}>wróć z imprezy</button>
            <button onClick={shopScreen}>odwiedź sklep</button>
            <p>nastąpi losowanie zdarzenia</p>
            <button onClick={backToMainMenu}>powrót do menu</button>
        </>
    )
}

export default GoParty