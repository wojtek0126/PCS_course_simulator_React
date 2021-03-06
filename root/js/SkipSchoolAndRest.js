import React, {useEffect, useState} from "react";
import {backToMainMenu, shopScreen, eventDrawScreen} from "./viewControl";
import {getPlayerForEventDraw, updatePlayerStats} from "./fetch";
import {statValidation, validateScore, loadId, onHoverJpgSwapButtons} from "./functions";
import {buttons, skipSchoolBackground, eventContainer} from "./styles/styles";

const SkipSchoolAndRest = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const effectDesc = document.querySelector(".effectDesc");
    const goBtn = document.querySelector(".go");
    const shopBtn = document.querySelector(".shop");
    const menuBtn = document.querySelector(".menu");

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    },[]);
console.log()

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
    if (day > 30) {effectDesc.innerHTML = "zdrowie + 1, sen + 1, punkty + 5"};

    const skipSchoolContinue = () => {
        let attitudeDown = "";
        let skillsDown = "";
        let attendanceDown = "";
        let healthUp = "";
        let sleepUp = "";
        let scoreUp = "";
        if (day > 30) {
            attitudeDown = parseInt(attitude);
            skillsDown = parseInt(skills);
            attendanceDown = parseInt(attendance);
            healthUp = parseInt(health + 1);
            sleepUp = parseInt(sleep + 1);
            scoreUp = parseInt(score + 5);
        }
        else {
            sleepUp = parseInt(sleep + 1);
            skillsDown = parseInt(skills - 1);
            healthUp = parseInt(health + 1);
            attitudeDown = parseInt(attitude - 1);
            scoreUp = parseInt(score + 2);
            attendanceDown = parseInt(attendance - 3);
        }

        let verifiedSleep = statValidation(sleepUp, 0, 10);
        let verifiedSkills = statValidation(skillsDown, 0, 10);
        let verifiedHealth = statValidation(healthUp, 0, 10);
        let verifiedAttitude = statValidation(attitudeDown, 0, 10);
        let verifiedScore = validateScore(scoreUp);
        let verifiedAttendance = validateScore(attendanceDown);

        const modifiy = {
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
            health: verifiedHealth,
            sleep: verifiedSleep,
            skills: verifiedSkills,
            attitude: verifiedAttitude,
            luck: luck,
            attendance: verifiedAttendance,
            repeatingExam: player.repeatingExam,
            examPassed: player.examPassed,
            examPoints: 0,
            finalProjectDone: false,
            finalProjectScore: 0,
            endingNumber: 0
        };
        updatePlayerStats(resultId, modifiy);
        console.log(skills, sleep, score, " player stats w go to school");
        eventDrawScreen();
        location.reload();
    }

    return (
        <div style={skipSchoolBackground}>
            <div style={eventContainer}>
                <h1>Odpoczywasz w domu</h1>
                <p className={"effectDesc"}>motywacja -1, wiedza -1, zdrowie +1, sen +1, punkty +2, frekwencja - 3</p>
                <button className={"go"} style={buttons} onClick={skipSchoolContinue}
                        onMouseEnter={() => onHoverJpgSwapButtons(goBtn)}
                        onMouseOut={() => onHoverJpgSwapButtons(goBtn, 1)}>zakończ odpoczynek</button>
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

export default SkipSchoolAndRest