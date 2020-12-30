import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen, shopScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore} from "./functions";
import {moduleNames} from "./variables";
import {random, loadId} from "./functions";


const GoParty = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const [inventoryArr, setInventoryArr] = useState([]);
    const [playerBuffs, setPlayerBuffs] = useState([]);



    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[]);

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
    let week = player.week;
    let attendance = player.attendance;
    let repeatingExam = player.repeatingExam;

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
            id: resultId,
            name: playerName,
            score: verifiedScore,
            week: weekNumber,
            day: dayForward,
            dayPart: "poranek",
            moduleName: moduleName,
            buffs: buffs,
            inventory: inventory,
            health: verifiedHealth,
            sleep: verifiedSleep,
            skills: verifiedSkill,
            attitude: attitudeUp,
            luck: luck,
            attendance: attendance,
            repeatingExam: false,
            examPassed: false,
            examPoints: 0,
            finalProjectDone: false,
            finalProjectScore: 0,
            ending: false,
            endingNumber: 0
        };
        updatePlayerStats(resultId, modified);
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