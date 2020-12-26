import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {random, casualGameOverCheck, eventDrawHandler, statModifier, valuesToArray} from "./functions";
import {
    getSelectedPlayerFromList,
    updatePlayerStats,
    getEvents,
    getPlayerForEventDraw,
    getPlayerAndEvents,
    getPlayers
} from "./fetch";
import {moduleNames} from "./variables";
import Events from "./Events";

const EventDraw = () => {
    const resultId = localStorage.getItem('continuePlayerId')
    const  [allEvents, setAllEvents] = useState([]);
    const [player, setPlayer] = useState([]);
    // const [drawnEvent, setDrawnEvent] = useState([]);

useEffect(() => {
    getEvents(setAllEvents);
    getPlayerForEventDraw(resultId, setPlayer);
    // setDrawnEvent(eventDrawHandler(luck, allEvents))

},[])

    const luck = player.luck;
    const draw = eventDrawHandler(luck, allEvents)
    if (draw === undefined) {
        location.reload()
    }
    else {
        console.log(draw, "result w event raw variable")
    }

    // useEffect(() => {
    //     setDrawnEvent(draw);
    // },[])

    let sleepNew = player.sleep
    let healthNew = player.health
    console.log(player.luck, "luck w eventdraw")
    // console.log(player.health, "health w eventdraw")
    console.log(allEvents, "eventy w eventdraw")
    console.log(player, "player w eventdraw")
    // console.log(drawnEvent, "wylosowany event w state w eventdraw")
    // if (draw.id === 1) {
    //     //zarwana nocka
    //     let sleepNew = player.sleep - 1;
    //     let healthNew = player.health - 1;
    //     console.log(sleepNew, healthNew,  "zarwana nocka!!!!")
    // }

    const modified = {
        id: player.id,
        name: player.name,
        score: player.score,
        week: player.week,
        day: player.day,
        dayPart: player.dayPart,
        moduleName: player.moduleName,
        buffs: player.buffs,
        inventory: player.inventory,
        health: healthNew,
        sleep: sleepNew,
        skills: player.skills,
        attitude: player.attitude,
        luck: player.luck,
        attendance: player.attendance,
        examThirdChance: player.examThirdChance,
        examPassed: player.examPassed,
        examPoints: player.examPoints,
        finalProjectDone: player.finalProjectDone,
        finalProjectScore: player.finalProjectScore,
        ending: player.ending,
        endingNumber: player.endingNumber,
        gameOver: false
    };


    const eventDrawContinue = () => {
        // console.log(player, " playerData extracted to eventdraw 222");
        // console.log(luck, " playerluck extracted to eventdraw 222");
        // console.log(sleep, " playersleep extracted to eventdraw 222");
        // console.log(health, " playerhealth extracted to eventdraw 222");
        // console.log(eventId, " event id")
        // if (eventId == 1) {
        //     //zarwana nocka
        //     let healthDown = parseInt()
        // }
        // else if (eventId == 2) {
        //     console.log("nie")
        // }
        // const sleepDown = parseInt(sleep + 1);
        // // const skillsUp = parseInt(skills + 1);
        // const scoreUp = parseInt(score + 10);
        // const dayForward = parseInt(day + 1);
        // const healthUp = parseInt(health + 1);

        // const modified = {
        //     id: playerIdStat,
        //     name: playerNameStat,
        //     score: scoreStat,
        //     week: weekStat,
        //     day: dayStat,
        //     dayPart: dayPartStat,
        //     moduleName: moduleStat,
        //     buffs: buffsStat,
        //     inventory: playerInventoryStat,
        //     thirdChanceExam: thirdChanceStat,
        //     health: healthStat,
        //     sleep: sleepStat,
        //     skills: skillsStat,
        //     attitude: attitudeStat,
        //     luck: luckStat,
        //     attendance: attendanceStat,
        //     examThirdChance: thirdChanceStat,
        //     examPassed: examPassedStat,
        //     examPoints: examPointsStat,
        //     finalProjectDone: finalProjectDoneStat,
        //     finalProjectScore: finalProjectScoreStat,
        //     ending: endingStat,
        //     endingNumber: endingNumberStat,
        //     gameOver: false
        // };
        // updatePlayerStats(resultId, modified);
        activateActionScreen()
    }

 return (

        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
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