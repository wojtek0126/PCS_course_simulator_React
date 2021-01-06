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

    const eventDrawContinue = () => {
        const drawEventBtn = document.querySelector(".drawEventBtn");
        setTimeout(() => {
            setInterval(() => {
                drawEventBtn.style.backgroundColor = "green";
            }, 1000);
            // setInterval(() => {
            //     drawEventBtn.style.backgroundColor = "white";
            // }, 1000);
            drawEventBtn.innerHTML = "w razie gdyby losowanie nie powiodło się, naciśnij ponownie"
        }, 200);

        const luck = player.luck;
        const draw = eventDrawHandler(luck, allEvents)
        if (draw === undefined) {
            alert(draw.eventName, "wpadło undefined i przeszło!")
            location.reload()
        }
        else if (draw.eventName === undefined){
            alert(draw.eventName, "wpadło undefined i przeszło!")
        }
        else {
            alert(draw.eventName)
        }

        let items = player.items;
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
        localStorage.setItem("eventDrawn", draw.eventDescription);

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
            items: items,
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
            endingNumber: player.endingNumber,
            gameOver: false
        };
        if (player.attendance !== null) {
            updatePlayerStats(plId, modified);
        }
        else {
            alert("babol");
            location.reload();
        }

        activateActionScreen()
    }

 return (
        <div style={eventContainer}>
            <h2>Drogi graczu. Czas na losowanie zdarzenia losowego. Im większe jest
            Twoje aktualne szczęście, tym bardziej prawdopodobne, że los będzie przychylny.</h2>
            {/*<p className={'eventNameDisplay'}>{draw.eventName}</p>*/}
            {/*<p>{draw.eventDescription}</p>*/}
            {/*<p>{draw.eventEffect1}</p>*/}
            {/*<p>{draw.eventEffect2}</p>*/}
            <button style={{
                marginTop: 40
            }} className={"drawEventBtn"} onClick={() => eventDrawContinue()}>losuj zdarzenie</button>
        </div>
    )
}

export default EventDraw