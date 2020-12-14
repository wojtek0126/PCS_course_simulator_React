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