import React, {useState, useEffect} from "react";
import {activateActionScreen, backToMainMenu, wentToSchool} from "./viewControl";
import {getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {switchModuleForward} from "./functions";
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
    // console.log(playerId, " playerid w go to school");



    useEffect(() => {
        getSelectedPlayerFromList(playerId,
            setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
            setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent);

        // const moduleNamesArr1 = moduleNames;
        // setCurrentModule(moduleNames[week-1]);
        // console.log(week, " numer tygodnia w dohomework");
        // console.log(moduleNames[week-1], " moduly namesy[od week]");
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
        const drawAttitude = parseInt(attitude + random(-1, 1));
        const setEvening = "poranek";
        const dayForward = parseInt(day + 1);
        const attitudeUp = parseInt(attitude + 1);
        let dayCount = day;
        let weekNumber = parseInt(week);
        let moduleName = moduleNames[weekNumber-1];

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
            score: scoreUp,
            week: weekNumber,
            day: dayForward,
            dayPart: setEvening,
            moduleName: moduleName,
            buffs: buffs,
            inventory: inventory,
            thirdChanceExam: false,
            health: drawHealth,
            sleep: sleepDown,
            skills: drawSkills,
            attitude: drawAttitude,
            luck: luck,
            attendance: attendance,
            examThirdChance: false,
            examPassed: false,
            examPoints: 0,
            event: "nothing out of ordinary happened",
            warnings: "none",
            finalProjectDone: false,
            finalProjectScore: 0,
            ending: false,
            endingNumber: 0
        };

        updatePlayerStats(playerId, modified);
        activateActionScreen();
        location.reload();
    };

    return (
        <>
            <h1>Idziesz wieczorem na imprezę</h1>
            <p>sen -2, możliwość utraty zdrowia 0 -5, możliwość utraty wiedzy do -1, samopoczucie od -1 do + 1, punkty + 12</p>
            <button onClick={goPartyContinue}>Wracaj ze szkoły do domu, losowanie eventu</button>
            <button>Odwiedź sklep</button>
            <button onClick={backToMainMenu}>Powrót do menu</button>
        </>
    )
}

export default GoParty