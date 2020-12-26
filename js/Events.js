import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {random, casualGameOverCheck, eventDrawHandler, statModifier, valuesToArray, createNewPlayer} from "./functions";
import {
    getSelectedPlayerFromList,
    updatePlayerStats,
    getEvents,
    getPlayerForEventDraw,
    getPlayerAndEvents,
    getPlayerById
} from "./fetch";
import {moduleNames} from "./variables";

//morning events and evening events?
const Events = ({drawnEvent, playerData}) => {
    // const [pickedEvent, setPickedEvent] = useState([]);
    // const [playerToModify, setPlayerToModify] = useState([]);
useEffect(() => {
    // console.log(playerData, " props do events player data")
    // console.log(drawnEvent, " props do events drawn event")
})



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
return null

}


export default Events