import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen, shopScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore} from "./functions";

const GoToSchool = () => {
    const resultId = localStorage.getItem('continuePlayerId')
    let [playerId, setPlayerId] = useState(resultId);
    const [player, setPlayer] = useState([]);
    const [inventoryArr, setInventoryArr] = useState([]);
    const [playerBuffs, setPlayerBuffs] = useState([]);


    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[]);

    let playerName = player.playerName;
    let health = player.health;
    let sleep = player.sleep;
    let skills = player.skills;
    let attitude = player.attitude;
    let luck = player.luck;
    let score = player.score;
    let inventory = player.inventory;
    let buffs = player.buffs;
    let day = player.day;
    let dayPart = player.dayPart;
    let currentModule = player.currentModule;
    let week = player.week;
    let event = player.event;
    let attendance = player.attendance;
    let repeatingExam = player.repeatingExam;

    const wentToSchoolContinue = () => {
        const sleepDown = parseInt(sleep - 1);
        const skillsUp = parseInt(skills + 1);
        const scoreUp = parseInt(score + 5);
        const setEvening = "wieczór";
        let verifiedSkill = statValidation(skillsUp, 0, 10);
        let verifiedSleep = statValidation(sleepDown, 0, 10);
        let verifiedScore = validateScore(scoreUp);

        const modified = {
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
            health: health,
            sleep: verifiedSleep,
            skills: verifiedSkill,
            attitude: attitude,
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
        <h1>Poszedłeś do szkoły</h1>
        <p>wiedza+1, sen - 1, punkty + 5</p>
            <button onClick={wentToSchoolContinue}>Wracasz ze szkoły do domu</button>
            <button onClick={shopScreen}>odwiedź sklep</button>
            <p>nastąpi losowanie zdarzenia</p>
            <button onClick={backToMainMenu}>powrót do menu</button>
            </>
    )
}

export default GoToSchool