import React, {useEffect, useState} from "react";
import {backToMainMenu, shopScreen, eventDrawScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore, loadId} from "./functions";

const SkipSchoolAndRest = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const [inventoryArr, setInventoryArr] = useState([]);
    const [playerBuffs, setPlayerBuffs] = useState([]);


    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[]);
console.log()
    let playerName = player.name;
    let health = player.health;
    let sleep = player.sleep;
    let skills = player.skills;
    let attitude = player.attitude;
    let luck = player.luck;
    let score = player.score;
    let inventory = player.inventory;
    let buffs = player.buffs;
    let day = player.day;
    let currentModule = player.moduleName;
    let week = player.week;
    let attendance = player.attendance;
    let repeatingExam = player.repeatingExam;


    const skipSchoolContinue = () => {
        const sleepUp = parseInt(sleep + 1);
        const skillsDown = parseInt(skills - 1);
        const healthUp = parseInt(health + 1);
        const attitudeDown = parseInt(attitude - 1);
        const scoreUp = parseInt(score + 2);
        const attendanceDown = parseInt(attendance - 3);
        let verifiedSleep = statValidation(sleepUp, 0, 10);
        let verifiedSkills = statValidation(skillsDown, 0, 10);
        let verifiedHealth = statValidation(healthUp, 0, 10);
        let verifiedAttitude = statValidation(attitudeDown, 0, 10);
        let verifiedScore = validateScore(scoreUp);
        let verifiedAttendance = validateScore(attendanceDown);

        const modifiy = {
            id: resultId,
            name: playerName,
            score: verifiedScore,
            week: week,
            day: day,
            dayPart: "wieczór",
            moduleName: currentModule,
            buffs: buffs,
            inventory: inventory,
            health: verifiedHealth,
            sleep: verifiedSleep,
            skills: verifiedSkills,
            attitude: verifiedAttitude,
            luck: luck,
            attendance: verifiedAttendance,
            repeatingExam: repeatingExam,
            examPassed: false,
            examPoints: 0,
            finalProjectDone: false,
            finalProjectScore: 0,
            ending: false,
            endingNumber: 0
        };
        updatePlayerStats(resultId, modifiy);
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