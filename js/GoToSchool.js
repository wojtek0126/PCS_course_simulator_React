import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen, shopScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore, loadId} from "./functions";

const GoToSchool = () => {
    const resultId = loadId();
    console.log(resultId)
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
    let currentModule = player.moduleName;
    let week = player.week;
    let attendance = player.attendance;
    let repeatingExam = player.repeatingExam;
    console.log(playerName);
    const wentToSchoolContinue = () => {
        const sleepDown = parseInt(sleep - 1);
        const skillsUp = parseInt(skills + 1);
        const scoreUp = parseInt(score + 5);
        let verifiedSkill = statValidation(skillsUp, 0, 10);
        let verifiedSleep = statValidation(sleepDown, 0, 10);
        let verifiedScore = validateScore(scoreUp);

        const modified = {
            id: resultId,
            name: playerName,
            score: verifiedScore,
            week: week,
            day: day,
            dayPart: "wieczór",
            moduleName: currentModule,
            buffs: buffs,
            inventory: inventory,
            health: health,
            sleep: verifiedSleep,
            skills: verifiedSkill,
            attitude: attitude,
            luck: luck,
            attendance: attendance,
            repeatingExam: repeatingExam,
            examPassed: false,
            examPoints: 0,
            finalProjectDone: false,
            finalProjectScore: 0,
            endingNumber: 0
        };

        updatePlayerStats(resultId, modified);
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