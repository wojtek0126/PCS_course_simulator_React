import React, {useState, useEffect} from "react";
import {activateActionScreen, backToMainMenu, wentToSchool} from "./viewControl";
import {getLastPlayerFromList, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";

const GoToSchool = () => {
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
    // console.log(playerId, " playerid w go to school");

    useEffect(() => {
        getSelectedPlayerFromList(playerId,
        setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
            setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent);
    },[]);

    const wentToSchoolContinue = () => {
        const sleepDown = parseInt(sleep - 1);
        const skillsUp = parseInt(skills + 1);
        const scoreUp = parseInt(score + 5);
        const setEvening = "wieczór";
        // const dayForward = (day + 1);
        // const dayPartForward = (dayPart + 1);



        const modified = {
            id: playerId,
            name: playerName,
            score: scoreUp,
            week: week,
            day: day,
            dayPart: setEvening,
            moduleName: currentModule,
            buffs: buffs,
            inventory: inventory,
            thirdChanceExam: false,
            health: health,
            sleep: sleepDown,
            skills: skillsUp,
            attitude: attitude,
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

        /**
         * @function updateTask - API function
         */
        updatePlayerStats(playerId, modified);
        // console.log(skills, sleep, score, " player stats w go to school");
        activateActionScreen();
        location.reload();

    };

    return (
        <>
        <h1>Poszedłeś do szkoły</h1>
        <p>wiedza+1, sen - 1, punkty + 5</p>
            <button onClick={wentToSchoolContinue}>Wracasz ze szkoły do domu, losowanie eventu</button>
            <button>odwiedź sklep</button>
            <button onClick={backToMainMenu}>powrót do menu</button>
            </>
    )
}

export default GoToSchool