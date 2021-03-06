import React, {useState, useEffect} from "react";
import {backToMainMenu, eventDrawScreen, shopScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, updatePlayerStats} from "./fetch";
import {statValidation, validateScore, loadId, onHoverJpgSwapButtons} from "./functions";
import {buttons, goSchoolBackground, eventContainer} from "./styles/styles";

const GoToSchool = () => {
    const resultId = loadId();
    console.log(resultId)
    const [player, setPlayer] = useState([]);
    const goBtn = document.querySelector(".go");
    const shopBtn = document.querySelector(".shop");
    const menuBtn = document.querySelector(".menu");


    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[]);

    let items = player.items;
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
    // let repeatingExam = player.repeatingExam;
    console.log(playerName);
    const wentToSchoolContinue = () => {
        const sleepDown = parseInt(sleep - 1);
        const skillsUp = parseInt(skills + 1);
        const scoreUp = parseInt(score + 5);
        let verifiedSkill = statValidation(skillsUp, 0, 10);
        let verifiedSleep = statValidation(sleepDown, 0, 10);
        let verifiedScore = validateScore(scoreUp);

        const modified = {
            id: player.id,
            name: playerName,
            score: verifiedScore,
            week: week,
            day: day,
            dayPart: "wieczór",
            moduleName: currentModule,
            buffs: buffs,
            inventory: inventory,
            items: items,
            health: health,
            sleep: verifiedSleep,
            skills: verifiedSkill,
            attitude: attitude,
            luck: luck,
            attendance: attendance,
            repeatingExam: player.repeatingExam,
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
        <div style={goSchoolBackground}>
            <div style={eventContainer}>
                <h1>Poszedłeś do szkoły</h1>
                <p>wiedza+1, sen - 1, punkty + 5</p>
                <button className={"go"} style={buttons} onClick={wentToSchoolContinue}
                        onMouseEnter={() => onHoverJpgSwapButtons(goBtn)}
                        onMouseOut={() => onHoverJpgSwapButtons(goBtn, 1)}>Wróć ze szkoły do domu</button>
                <button className={"shop"} style={buttons} onClick={shopScreen}
                        onMouseEnter={() => onHoverJpgSwapButtons(shopBtn)}
                        onMouseOut={() => onHoverJpgSwapButtons(shopBtn, 1)}>odwiedź sklep</button>
                <p>nastąpi losowanie zdarzenia</p>
                <button className={"menu"} style={buttons} onClick={backToMainMenu}
                        onMouseEnter={() => onHoverJpgSwapButtons(menuBtn)}
                        onMouseOut={() => onHoverJpgSwapButtons(menuBtn, 1)}>powrót do menu</button>
            </div>
        </div>
    )
}

export default GoToSchool