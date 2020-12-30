import React, {useState, useEffect} from "react";
import {backToMainMenu, goToSchool, skipSchoolAndRest, doHomework, goSleepEvening,
    goPartyScreen, examScreen, inventoryScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, getPlayerForActionScreen} from "./fetch";
import {buttonOnOff, loadId, gameOverCheck} from "./functions";
import {actionNameField, actionScreenList, actionScreenListElements,
    actionElement, actionInventory, actionInvTitle, actionInvTitleText} from "./styles/styles";
import {moduleNames} from "./variables";

const ActionScreen = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const [inventoryArr, setInventoryArr] = useState([])
    let arr = []


    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
    }, []);

    useEffect(() => {
        const inventoryArr = player.inventory;
        setInventoryArr(inventoryArr);
    }, [player]);

    useEffect(() => {
        if (inventoryArr) {
            inventoryArr.forEach((item) => arr.push(item));
        }
    }, [inventoryArr]);

    const setMapForJSX = (array) => {
        setTimeout(function () {
            array.map((element, index) => {
                console.log(element, "elem in map function");
                localStorage.setItem(`item${index}`, element);
                localStorage.setItem("invLength", array.length)
                arr.push(element)
            })
        },300);
    }

    setMapForJSX(inventoryArr)
    const getItemsForMapJSX = (n) => {
        let f = localStorage.getItem(`item${n}`);
        console.log(f, "do arraya")
        return f
    }

    let invLength = localStorage.getItem("invLength")
    console.log(invLength)
    // arr.push(getItemsForMapJSX(1))
    for (let i = 0;i <= invLength;i++) {
        let x = getItemsForMapJSX(i)
        arr.push(x)
    }

    console.log(arr, "array no state");


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
    let dayPart = player.dayPart;
    let currentModule = player.moduleName;
    let week = player.week;
    let event = player.event;
    let attendance = player.attendance;
    let repeatingExam = player.repeatingExam;

    //action buttons from DOM
    const goSchoolBtn = document.querySelector(".goSchoolButton");
    const skipSchoolBtn = document.querySelector(".skipAndRestButton");
    const doHomeworkBtn = document.querySelector(".doHomeworkButton");
    const goPartyBtn = document.querySelector(".goPartyButton");
    const goSleepBtn = document.querySelector(".goSleepButton");
    const takeExamBtn = document.querySelector(".takeExamButton");
    const takeExtraExamButton = document.querySelector(".takeExtraExamButton");
    const useItemButton = document.querySelector(".useItemButton");
    const endGameProjectButton = document.querySelector(".startEndGameProjectButton");

    if (week > 6) {
       buttonOnOff(endGameProjectButton, "inline");
    }

    if (dayPart === "poranek") {
        // console.log("jest poranek")
        buttonOnOff(goSleepBtn, "none");
        buttonOnOff(doHomeworkBtn, "none")
        buttonOnOff(goPartyBtn, "none");
        if (day == 5 || day == 10 || day == 15 || day == 20 || day == 25 || day == 30) {
            buttonOnOff(takeExamBtn, "inline");
            buttonOnOff(takeExtraExamButton, "none");
            buttonOnOff(goSchoolBtn, "none");
        }
        else {
            buttonOnOff(takeExamBtn, "none");
            buttonOnOff(takeExtraExamButton, "none");
        }
    }
    if (dayPart === "wieczór"){
        buttonOnOff(goSchoolBtn, "none");
        buttonOnOff(skipSchoolBtn, "none");
        buttonOnOff(takeExamBtn, "none");
        buttonOnOff(takeExtraExamButton, "none");    }

    gameOverCheck(health, 0);
    gameOverCheck(attendance, 80);

    return (
        <div className={"actionScreenContainer"}>
            <div className={"actionNameField"} style={actionNameField}>Imię gracza: {playerName}</div>
            <ul style={actionScreenList} className={"actionPlayerStats"}>
                <li style={actionScreenListElements}>ZDROWIE: {health}</li>
                <li style={actionScreenListElements}>SEN: {sleep}</li>
                <li style={actionScreenListElements}>WIEDZA: {skills}</li>
                <li style={actionScreenListElements}>MOTYWACJA: {attitude}</li>
                <li style={actionScreenListElements}>SZCZĘŚCIE: {luck}</li>
                <li style={actionScreenListElements}>PUNKTY: {score}</li>
            </ul>
            <div style={actionInvTitle}>
                <p style={actionInvTitleText}>Inwentarz:</p>
            </div>
            <div className={"actionInventory"} style={actionInventory}>
                {arr.map(function (item, index) {
                    return (
                        <div key={index}>{item}</div>
                    )
                })}
            </div>
            <div>{}</div>
            <div className={"actionBuffs"} style={actionElement}>Zdarzenia: </div>
            <div className={"actionCalendar"} style={actionElement}>Tydzień: {week}, Dzień: {day} , Część dnia: {dayPart}, Moduł: {currentModule}</div>
            <button className={"goSchoolButton"} onClick={goToSchool}>idź do szkoły</button>
            <button className={"skipAndRestButton"} onClick={skipSchoolAndRest}>odpocznij</button>
            <button className={"doHomeworkButton"} onClick={doHomework}>zrób pracę domową</button>
            <button className={"goSleepButton"} onClick={goSleepEvening}>idź spać</button>
            <button className={"goPartyButton"} onClick={goPartyScreen}>idź na imprezę</button>
            <button className={"takeExamButton"} onClick={examScreen}>podejdź do egzaminu</button>
            <button className={"takeExtraExamButton"}>podejdź do poprawki</button>
            <button className={"startEndGameProjectButton"} style={{
                display: "none"
            }}>zacznij projekt końcowy</button>
            <button className={"useItemButton"} onClick={inventoryScreen}>użyj przedmiotu</button>
            <button className={"backToMenuButton"} onClick={backToMainMenu}>powrót do menu</button>
        </div>
    )
}

export default ActionScreen