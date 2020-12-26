import React, {useState, useEffect} from "react";
import {getPlayerStats} from "./fetch.js"




const backToMain = () => {

    const screen = document.querySelector(".menuScreen");
    const screen2 = document.querySelector(".actionScreenContainer");
    screen.style.display = "flex";
    screen2.style.display = "none";
    console.log(screen2)
}

const ActionScreen = () => {
    let [newPlayer, setNewPlayer] = useState([]);
    const [playerName, setPlayerName] = useState("");
    // const [health, setHealth] = useState("");
    // const [sleep, setSleep] = useState("");
    // const [skills, setSkills] = useState("");
    // const [attitude, setAttitude] = useState("");
    // const [luck, setLuck] = useState("");
    // const [score, setScore] = useState("");
    // const [inventory, setInventory] = useState([]);
    // const [buffs, setBuffs] = useState([]);
    // const [day, setDay] = useState("");
    // const [dayPart, setDayPart] = useState("");
    // const [currentModule, setCurrentModule] = useState("");
    // const [week, setWeek] = useState("");
    // const [event, setEvent] = useState("");
    // const [attendance, setAttendance] = useState(100);

    const API = "http://localhost:3000";




    useEffect(() => {
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPlayerName(data.players[0].name);
                // setCurrentModule(data.players[0].moduleName);
                // setWeek(data.players[0].week);
                // setDay(data.players[0].day);
                // setDayPart(data.players[0].dayPart);
                //
                // setBuffs(data.players[0].buffs);
                // setInventory(data.players[0].inventory);
                //
                // setHealth(data.players[0].health);
                // setAttitude(data.players[0].attitude);
                // setLuck(data.players[0].luck);
                // setSleep(data.players[0].sleep);
                // setScore(data.players[0].score);
                // setSkills(data.players[0].skills);
                //
                // setEvent(data.players[0].event);

            })
            .catch(error => {
                console.log(error);
            });

        console.log(newPlayer);
    }, [])



    return (
        <div className={"actionScreenContainer"} style={{display: "none"}}>
            <div className={"actionNameField"} style={{border: "2px dotted blue",
                display: "flex",
                flexDirection: "column",
                background: "silver",
                padding: 20,
            }}>Player name: {playerName}</div>
            <ul style={{
                display: "flex",
                flexDirection: "column",
                background: "silver",
                padding: 20,
                listStyle: "none",
                border: "2px dotted blue",
                margin: 0
            }} className={"actionPlayerStats"}>
                <li style={{padding: 10, border: "2px dotted black"}}>ZDROWIE:{health}</li>
                <li style={{padding: 10, border: "2px dotted black"}}>SEN: {sleep}</li>
                <li style={{padding: 10, border: "2px dotted black"}}>WIEDZA: {skills}</li>
                <li style={{padding: 10, border: "2px dotted black"}}>MOTYWACJA: {attitude}</li>
                <li style={{padding: 10, border: "2px dotted black"}}>SZCZĘŚCIE: {luck}</li>
                <li style={{padding: 10, border: "2px dotted black"}}>PUNKTY: {score}</li>
            </ul>
            <div className={"actionInventory"} style={{border: "2px dotted blue",
                display: "flex",
                flexDirection: "column",
                background: "silver",
                padding: 20,
            }}>inwentarz: {inventory} </div>
            <div className={"actionBuffs"} style={{border: "2px dotted blue",
                display: "flex",
                flexDirection: "column",
                background: "silver",
                padding: 20,
            }}>buffy i debuffy: {buffs}</div>
            <div className={"actionCalendar"} style={{border: "2px dotted blue",
                display: "flex",
                flexDirection: "column",
                background: "silver",
                padding: 20,
            }}>Tydzień: {week}, Dzień: {day}, Część dnia: {dayPart}, Moduł: {currentModule}</div>
            <button className={"goSchoolButton"} >idź do szkoły</button>
            <button className={"keepSleepingButton"}>odpocznij</button>
            <button className={"doHomeworkButton"}>zrób pracę domową</button>
            <button className={"goPartyButton"}>idź na imprezę</button>
            <button className={"backToMenuButton"} onClick={backToMain}>powrót do menu</button>
        </div>
    )
}

export default ActionScreen

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
// import Object from "react";
//morning events and evening events?
const EventDraw = () => {
    const [player, setPlayer] = useState([]);
    const resultId = localStorage.getItem('continuePlayerId');
    // const resultEvent = localStorage.getItem('drawnEvent');
    // console.log(resultEvent, "id eventu z locala")

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer)
    },[])

    console.log(player, "data w evdraw player po poprawkach")
    let luck = parseInt(player.luck);
    let health = parseInt(player.health);
    let sleep = parseInt(player.sleep);
    let skills = parseInt(player.skills);
    let attitude = parseInt(player.attitude);
    let playerName = player.name;
    let score = parseInt(player.score);
    let week = parseInt(player.week);
    let day = parseInt(player.day);
    let dayPart = player.dayPart;
    let module = player.moduleName;
    let buffs = player.buffs;
    let thirdChanceExam = player.examThirdChance;
    let examPassed = player.examPassed;
    let examPoints = parseInt(player.examPoints);
    let finalProjectDone = player.finalProjectDone;
    let finalProjectScore = parseInt(player.finalProjectScore);
    let ending = player.ending;
    let endingNumber = parseInt(player.endingNumber);
    let attendance = parseInt(player.attendance);
    let inventory = player.inventory;


    // console.log(player, " playerData extracted to eventdraw");
    // console.log(luck, " playerluck extracted to eventdraw");
    // console.log(sleep, " playersleep extracted to eventdraw");




    return (
        <Events
            luckStat={luck} sleepStat={sleep} skillsStat={skills} healthStat={health} attitudeStat={attitude}
            attendanceStat={attendance} buffsStat={buffs} dayPartStat={dayPart} dayStat={day} scoreStat={score}
            thirdChanceStat={thirdChanceExam} weekStat={week} examPassedStat={examPassed} examPointsStat={examPoints}
            finalProjectDoneStat={finalProjectDone} finalProjectScoreStat={finalProjectScore} endingStat={ending}
            endingNumberStat={endingNumber} moduleStat={module} playerNameStat={playerName} playerIdStat={resultId}
            playerInventoryStat={inventory}
        />
    )
}

export default EventDraw

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
// import Object from "react";
//morning events and evening events?
const Events = ({
                    luckStat, sleepStat, healthStat, attitudeStat, skillsStat, attendanceStat, dayStat, weekStat,
                    dayPartStat, buffsStat, thirdChanceStat, scoreStat, examPassedStat, examPointsStat, finalProjectDoneStat,
                    finalProjectScoreStat, endingStat, endingNumberStat, moduleStat, playerNameStat, playerIdStat, playerInventoryStat
                }) => {
    // const displayOrReload = (display) => {
    //     if (display.innerText.length > 0) {
    //         console.log("yyyyyyy")
    //     }
    //     else if (display.innerText.length <= 0) {
    //         console.log("okokokokok")
    //         // location.reload()
    //     }
    // }
    const resultId = localStorage.getItem('continuePlayerId');


    // const playerLuck = localStorage.getItem("playerLuck")
    console.log(luckStat, " pl luck w events")

    const [events, setEvents] = useState([]);
    // const [player, setPlayer] = useState([]);
    const [innerTxt, setInnerTxt] = useState("");
    // let [playerId, setPlayerId] = useState(resultId);
    // const [playerName, setPlayerName] = useState("");
    // const [health, setHealth] = useState("");
    // const [sleep, setSleep] = useState("");
    // const [skills, setSkills] = useState("");
    // const [attitude, setAttitude] = useState("");
    // const [luck, setLuck] = useState("");
    // const [score, setScore] = useState("");
    // const [inventory, setInventory] = useState([]);
    // const [buffs, setBuffs] = useState([]);
    // const [day, setDay] = useState("");
    // const [dayPart, setDayPart] = useState("");
    // const [currentModule, setCurrentModule] = useState("");
    // const [week, setWeek] = useState("");
    // // const [event, setEvent] = useState("");
    // const [attendance, setAttendance] = useState(100);
    getEvents(setEvents);
    useEffect(() => {
        // let a = document.querySelector('.eventNameDisplay')
        //
        // a.innerHTML = eventName
        // console.log(a.innerHTML , 'ppppppppppppppppppppppppppppppppppppppppppppp')
        // if (a == 'undefined') {
        //     console.log("fdssdfsdfgsddggssgdsgdsgdsgdsgdsgdsdgsdsdgsgdsgdgsd")
        // }
        // else {
        //     console.log("yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        // }
        // getPlayerById(resultId, setPlayer);

        const eventNameDisplay = document.querySelector('.eventNameDisplay');
        console.log(eventNameDisplay, 'text do teta jesli puste lub nie');
        setInnerTxt(eventNameDisplay);

        // console.log(innerTxt, "textinner");
        // setHealth(parseInt(player.health));
        // setSleep(parseInt(player.sleep));
        // setSkills(parseInt(player.skills));
        // setAttitude(parseInt(player.attitude));
        // setScore(parseInt(player.score));
        // setPlayerName(parseInt(player.name));
        // setAttendance(parseInt(player.attendance));
        // setInventory(parseInt(player.inventory));
        // setBuffs(parseInt(player.buffs));
        // setInventory(parseInt(player.inventory));
        // setDay(parseInt(player.day));
        // setDayPart(parseInt(player.day));
        // setWeek(parseInt(player.day));
        // setCurrentModule(parseInt(player.moduleName));
    },[])
    // let setLuckStat = parseInt(player.luck);
    console.log(events, "....events....");
    let eventS = eventDrawHandler(luckStat, events);
    // let arr = [];
    // arr.push(event.eventDescription)
    let eventName = eventS.eventName;
    let eventDesc = eventS.eventDescription;
    let eventPickEffect = eventS.eventEffect1;
    let eventId = eventS.id;
    // console.log(eventS.eventDescription, "the pick");
    // console.log(eventS.eventName, "the pick");
    // console.log(eventS.eventEffect1, "the pick");
    // console.log(eventId, "the pick id");
    // console.log(arr[0]);
    // console.log(player, " playerData extracted to events");
    // console.log(luckStat, " playerluck extracted to events");
    // console.log(sleepStat, " playersleep extracted to events");
    // console.log(healthStat, " playerhealth extracted to events");
    // console.log(attitudeStat, " playeratt extracted to events");
    // console.log(attendanceStat, " playerattend extracted to events");
    // console.log(eventId, " event id")
    // localStorage.setItem("drawnEvent", eventId);
    // const scoreTest = score;

    const eventNameDisplay = document.querySelector('.eventNameDisplay');
    console.log(innerTxt, 'text do teta jesli puste lub nie pooooooo');

    // console.log(innerTxt.innerText, "textinner");
    // displayOrReload(innerTxt)

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

    // const modified = {
    //     id: playerId,
    //     name: playerName,
    //     score: scoreUp,
    //     week: weekNumber,
    //     day: dayForward,
    //     dayPart: setEvening,
    //     moduleName: moduleName,
    //     buffs: buffs,
    //     inventory: inventory,
    //     thirdChanceExam: false,
    //     health: health,
    //     sleep: sleepDown,
    //     skills: skillsUp,
    //     attitude: attitudeUp,
    //     luck: luck,
    //     attendance: attendance,
    //     examThirdChance: false,
    //     examPassed: false,
    //     examPoints: 0,
    //     event: "nothing out of ordinary happened",
    //     warnings: "none",
    //     finalProjectDone: false,
    //     finalProjectScore: 0,
    //     ending: false,
    //     endingNumber: 0
    // };
    //
    // updatePlayerStats(resultId, modified);

    // };

    // setTimeout(() => {
    //     displayOrReload(eventNameDisplay)
    // }, 2000)

    return (

        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>Wylosowałeś następujące zdarzenie</h2>
            <p className={'eventNameDisplay'}>{eventName}</p>
            <p>{eventDesc}</p>
            <p>{eventPickEffect}</p>
            <button onClick={eventDrawContinue}>kontynuuj</button>
        </div>
    )


}

export default Events