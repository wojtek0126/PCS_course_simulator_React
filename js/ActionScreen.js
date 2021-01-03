import React, {useState, useEffect} from "react";
import {backToMainMenu, goToSchool, skipSchoolAndRest, doHomework, goSleepEvening,
    goPartyScreen, examScreen, inventoryScreen, extraExamScreen, finalProjectScreen} from "./viewControl";
import {getPlayerForEventDraw, getSelectedPlayerFromList, getPlayerForActionScreen} from "./fetch";
import {buttonOnOff, loadId, gameOverCheck, clearStorageItems,
    dateGameOverCheck, getObject, attendanceGameOverCheck} from "./functions";
import {actionNameField, actionScreenList, actionScreenListElements,
    actionElement, actionInventory, actionInvTitle, actionInvTitleText} from "./styles/styles";
import {moduleNames} from "./variables";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
// plan na jutro: wyczyść to z tych wszystkich local storages z inventory, w player create success wgraj inventory do local storage.
// następnie, w każdym widoku zgrywaj inwentarz i updatuj nim playera(tak jak z id) i tu w actionscreen zgraj to tez i wtedy mapuj
// start pracy od create player oraz continue. inwentarz będzie też potrzebny w event draw oraz w shop.
// czyli tak: na poczatku zapisuje do loc dlugosc zbioru inv ('invLength', inv.lenght) i uzywam funkcji setItemsFromArray(inv.length),
//która pętlą doda ('invItem', `item${i}`) razy inv.length. Powinno zapisać 1 item - identyfikator. To w create i continue player.
//Wgrywa się action screen. w action screenie pobieram inv.length z loca i pobieram funkcją getItemsToArray(inv.length),
// która zgra z localstorage przedmioty i wrzuci do zbioru. To będzie zbiór do display. weź inwentarz w innych widokach tam gdzie
//będzie potrzebny. Zmiany: zmiany w inventory oprócz do API będą tworzyły nowy item w loc lub kasowały usuwany item z loc.
//tym sposobem ma być upadatowany cały kod. Na żywo odświerzany content w apce tej to będzie tabela wyników - could have
const ActionScreen = () => {

    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    // inv w state sie przyda gdy przedmioty beda sie pojawiac i znikac z inv
    const [inventoryArr, setInventoryArr] = useState([]);

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);

    }, []);

    useEffect(() => {
        const inventoryArr = player.inventory;
        setInventoryArr(inventoryArr);
        console.log(inventoryArr, "invArr w");
    }, [player]);

    const addArr = (inventoryArr) => {
        let arr = []
        if (inventoryArr) {
            inventoryArr.forEach((item) => arr.push(item));
        }
        return arr
    }
    let arr = addArr(inventoryArr);
    console.log(arr[0], "tet za");

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
    let gameOver = player.gameOver;

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


    if (dayPart === "poranek") {
        // console.log("jest poranek")
        buttonOnOff(goSleepBtn, "none");
        buttonOnOff(doHomeworkBtn, "none")
        buttonOnOff(goPartyBtn, "none");
        if (day === 5 || day === 10 || day === 15 || day === 20 || day === 25 || day === 30) {

            buttonOnOff(takeExamBtn, "inline");
            buttonOnOff(takeExtraExamButton, "none");
            buttonOnOff(goSchoolBtn, "none");
            buttonOnOff(skipSchoolBtn, "none");

        }
        else if (day > 30 || week > 6) {
            buttonOnOff(goSchoolBtn, "none");
            buttonOnOff(endGameProjectButton, "inline");
            buttonOnOff(takeExamBtn, "none");
            // doHomeworkBtn.style.backgroundColor = "red";
        }
        else {
            buttonOnOff(takeExamBtn, "none");
            // doHomeworkBtn.style.backgroundColor = "green";
            // buttonOnOff(takeExtraExamButton, "none");
        }
    }
    if (dayPart === "wieczór"){
        buttonOnOff(goSchoolBtn, "none");
        buttonOnOff(skipSchoolBtn, "none");
        buttonOnOff(takeExamBtn, "none");
        buttonOnOff(takeExtraExamButton, "none");
        if (day > 30 || week > 6) {
            buttonOnOff(goSchoolBtn, "none");
            buttonOnOff(endGameProjectButton, "inline");
            buttonOnOff(takeExamBtn, "none");
            doHomeworkBtn.innerHTML = "powtórz materiał";
        }
    }
    if (repeatingExam === true) {
        buttonOnOff(takeExtraExamButton, "inline");
    }
    else if (repeatingExam === false){
        buttonOnOff(takeExtraExamButton, "none");
    }

// clearStorageItems(invLength)
//     if (day <= 30) {
    dateGameOverCheck(day, 35)
    gameOverCheck(health, 0);
    attendanceGameOverCheck(attendance, 80);
    gameOverCheck(gameOver, true);
    // }
    // else {
    //     gameOverCheck(health, 0);
    //     gameOverCheck(gameOver, true);
    // }


    return (
        <div className={"actionScreenContainer"}>

            <div className={"actionNameField"} style={actionNameField}>Imię gracza: {playerName}</div>
            <ul style={actionScreenList} className={"actionPlayerStats"}>
                <li style={actionScreenListElements}>ZDROWIE: {health}  <FontAwesomeIcon icon="heart" /></li>
                <li style={actionScreenListElements}>SEN: {sleep}<FontAwesomeIcon icon="bed" /></li>
                <li style={actionScreenListElements}>WIEDZA: {skills}<FontAwesomeIcon icon="book" /></li>
                <li style={actionScreenListElements}>MOTYWACJA: {attitude}<FontAwesomeIcon icon="brain" /></li>
                <li style={actionScreenListElements}>SZCZĘŚCIE: {luck}<FontAwesomeIcon icon="question" /></li>
                <li style={actionScreenListElements}>PUNKTY: {score}<FontAwesomeIcon icon="coins" /></li>
            </ul>
            <div style={actionInvTitle}>
                <p style={actionInvTitleText}>Inwentarz:<FontAwesomeIcon icon="treasure-chest" /></p>
            </div>
            <div className={"actionInventory"} style={actionInventory}>
                {
                    arr.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                }
            </div>
            {/*<div>{}</div>*/}
            <div className={"actionBuffs"} style={actionElement}>Aktywne efekty: </div>
            <div className={"actionCalendar"} style={actionElement}>Tydzień: {week}, Dzień: {day} , Część dnia: {dayPart}, Moduł: {currentModule}</div>
            <button className={"goSchoolButton"} onClick={goToSchool}>idź do szkoły</button>
            <button className={"skipAndRestButton"} onClick={skipSchoolAndRest}>odpocznij</button>
            <button className={"doHomeworkButton"} onClick={doHomework}>zrób pracę domową</button>
            <button className={"goSleepButton"} onClick={goSleepEvening}>idź spać</button>
            <button className={"goPartyButton"} onClick={goPartyScreen}>idź na imprezę</button>
            <button className={"takeExamButton"} onClick={examScreen}>podejdź do egzaminu</button>
            <button className={"takeExtraExamButton"} onClick={extraExamScreen}>podejdź do poprawki</button>
            <button className={"startEndGameProjectButton"} style={{
                display: "none"
            }} onClick={finalProjectScreen}>zacznij projekt końcowy</button>
            <button className={"useItemButton"} onClick={inventoryScreen}>użyj przedmiotu</button>
            <button className={"backToMenuButton"} onClick={backToMainMenu}>powrót do menu</button>
        </div>
    )
}

export default ActionScreen