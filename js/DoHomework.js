import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen, shopScreen} from "./viewControl";
import {updatePlayerStats, getPlayerForEventDraw} from "./fetch";
import {statValidation, validateScore, loadId} from "./functions";
import {moduleNames} from "./variables";


const DoHomework = () => {
    const resultId = loadId()
    const [player, setPlayer] = useState([]);
    const [inventoryArr, setInventoryArr] = useState([]);
    const [playerBuffs, setPlayerBuffs] = useState([]);
    const effectDesc = document.querySelector(".effectDesc");
    const activityDesc = document.querySelector(".activityDesc");

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

    console.log(moduleNames[week-1], "mod");
    console.log(week, "week111");
    console.log(day, "day")
    localStorage.setItem('weekNumber', week);
    if (day > 30) {
        activityDesc.innerHTML = "Przeglądasz materiały dodatkowe i odrabiasz zaległości"
    }

    const doHomeworkContinue = () => {
        let items = player.items;
        const sleepDown = parseInt(sleep - 1);
        const skillsUp = parseInt(skills + 1);
        const scoreUp = parseInt(score + 10);
        const dayForward = parseInt(day + 1);
        const attitudeUp = parseInt(attitude + 1);
        let weekNumber = parseInt(week);
        let moduleName = moduleNames[weekNumber-1];
        let verifiedSkill = statValidation(skillsUp, 0, 10);
        let verifiedSleep = statValidation(sleepDown, 0, 10);
        let verifiedScore = validateScore(scoreUp);

        if (day == 5 || day == 10 || day == 15 || day == 20 || day == 25 || day == 30) {
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
            items: items,
            health: health,
            sleep: verifiedSleep,
            skills: verifiedSkill,
            attitude: attitudeUp,
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
            <h1 className={"activityDesc"}>Po szkole odrabiasz pracę domową</h1>
            <p className={"effectDesc"}>wiedza + 1, sen -1, motywacja + 1, punkty + 10</p>
            <button onClick={doHomeworkContinue}>Zakończ pracę</button>
            <button onClick={shopScreen}>odwiedź sklep</button>
            <p>nastąpi losowanie zdarzenia</p>
            <button onClick={backToMainMenu}>powrót do menu</button>
        </>
    )
}

export default DoHomework