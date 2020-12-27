import React, {useState, useEffect} from "react";
import {activateActionScreen, backToMainMenu, eventDrawScreen, shopScreen} from "./viewControl";
import {getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {switchModuleForward, statValidation, validateScore} from "./functions";
import {moduleNames} from "./variables";


const DoHomework = () => {
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


    const doHomeworkContinue = () => {

        const sleepDown = parseInt(sleep - 1);
        const skillsUp = parseInt(skills + 1);
        const scoreUp = parseInt(score + 10);
        const setEvening = "poranek";
        const dayForward = parseInt(day + 1);
        const attitudeUp = parseInt(attitude + 1);
        let dayCount = day;
        let weekNumber = parseInt(week);
        let moduleName = moduleNames[weekNumber-1];
        let verifiedSkill = statValidation(skillsUp, 0, 10);
        let verifiedSleep = statValidation(sleepDown, 0, 10);
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
            health: health,
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
            <h1>Po szkole odrabiasz pracę domową</h1>
            <p>wiedza + 1, sen -1, motywacja + 1, punkty + 10</p>
            <button onClick={doHomeworkContinue}>Zakończ pracę</button>
            <button onClick={shopScreen}>odwiedź sklep</button>
            <p>nastąpi losowanie zdarzenia</p>
            <button onClick={backToMainMenu}>powrót do menu</button>
        </>
    )
}

export default DoHomework