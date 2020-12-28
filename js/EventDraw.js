import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {eventDrawHandler, statValidation, validateScore} from "./functions";
import {updatePlayerStats, getEvents, getPlayerForEventDraw} from "./fetch";
import {eventContainer} from "./styles/styles";

const EventDraw = () => {
    const resultId = localStorage.getItem('continuePlayerId')
    const  [allEvents, setAllEvents] = useState([]);
    const [player, setPlayer] = useState([]);

useEffect(() => {
    getEvents(setAllEvents);
    getPlayerForEventDraw(resultId, setPlayer);
},[]);

    const luck = player.luck;
    const draw = eventDrawHandler(luck, allEvents)
    if (draw === undefined) {
        location.reload()
    }
    else {
        console.log(draw, "result drawn in variable in event draw")
    }

    let luckMod = parseInt(player.luck + draw.luck);
    let sleep = parseInt(player.sleep + draw.sleep);
    let health = parseInt(player.health + draw.health);
    let skills = parseInt(player.skills + draw.skills);
    let attitude = parseInt(player.attitude + draw.attitude);
    let buffs = player.buffs;
    let inventory = player.inventory;
    let score = parseInt(player.score + draw.score);
    let verifiedSkill = statValidation(skills, 0, 10);
    let verifiedSleep = statValidation(sleep, 0, 10);
    let verifiedHealth = statValidation(health, 0, 10);
    let verifiedLuck = statValidation(luckMod, 0, 10);
    let verifiedAttitude = statValidation(attitude, 0, 10);
    let verifiedScore = validateScore(score);
    let plId = player.id;

    const modified = {
        id: player.id,
        name: player.name,
        score: verifiedScore,
        week: player.week,
        day: player.day,
        dayPart: player.dayPart,
        moduleName: player.moduleName,
        buffs: buffs,
        inventory: inventory,
        health: verifiedHealth,
        sleep: verifiedSleep,
        skills: verifiedSkill,
        attitude: verifiedAttitude,
        luck: verifiedLuck,
        attendance: player.attendance,
        repeatingExam: player.repeatingExam,
        examPassed: player.examPassed,
        examPoints: player.examPoints,
        finalProjectDone: player.finalProjectDone,
        finalProjectScore: player.finalProjectScore,
        ending: player.ending,
        endingNumber: player.endingNumber,
        gameOver: false
    };
    updatePlayerStats(plId, modified);

    const eventDrawContinue = () => {
        activateActionScreen()
    }

 return (
        <div style={eventContainer}>
            <h2>Wylosowałeś następujące zdarzenie</h2>
            <p className={'eventNameDisplay'}>{draw.eventName}</p>
            <p>{draw.eventDescription}</p>
            <p>{draw.eventEffect1}</p>
            <p>{draw.eventEffect2}</p>
            <button onClick={eventDrawContinue}>kontynuuj</button>
        </div>
    )
}

export default EventDraw