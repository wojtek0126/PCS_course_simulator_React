import React from "react";
import {newPlayerCreate, removePlayer} from "./fetch";
import {successPlayerCreateScreen, gameOverScreen} from "./viewControl";
import {API} from "./variables";

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function float2int (value) {
    return value | 0;
}
//replace all localstorage lines with these two below
export const saveData = (dataToSave, dataValueToSave) => {
    localStorage.setItem(dataToSave, dataValueToSave);
}

export const getData = (dataName) => {
    localStorage.getItem(dataName);
}

export const saveId = (dataToSave) => {
    localStorage.setItem('continuePlayerId', dataToSave)
}

export const loadId = () => {
    return localStorage.getItem('continuePlayerId');
}

export const buttonOnOff = (btn, value) => {
    btn.style.display = value
}

export const valuesToArray = (obj) => {
    return Object.keys(obj).map(function (key) { return obj[key]; });
}

export const DomElementOnOff = (element, value) => {
    if (value === "on") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}

export const createNewPlayer = (nameData) => {
    let plNam = localStorage.getItem('playerName');
    const newPlr = {
        id: "",
        name: nameData,
        score: 0,
        week: 1,
        day: 1,
        dayPart: "poranek",
        moduleName: "Wstęp do pythona",
        buffs: [],
        inventory: ["identyfikator"],
        repeatingExam: false,
        health: 10,
        sleep: random(2, 8),
        skills: random(2, 8),
        attitude: random(2, 8),
        luck: random(2, 8),
        attendance: 100,
        examPassed: false,
        examPoints: 0,
        finalProjectDone: false,
        finalProjectScore: 0,
        ending: false,
        endingNumber: 0,
        gameOver: false
    };
        newPlayerCreate(newPlr);
    successPlayerCreateScreen();
}

export const handleRemovePlayer = (id) => {
    removePlayer(id);
    location.reload();
}

export const displayCurrentPlayer = (id,
                                     setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
                                     setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent
) => {
    fetch(`${API}/players/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.name, "imie ostatniego gracza");
            setPlayerName(data.name);
            setCurrentModule(data.moduleName);
            setWeek(data.week);
            setDay(data.day);
            setDayPart(data.dayPart);
            setBuffs(data.buffs);
            setInventory(data.inventory);
            setHealth(data.health);
            setAttitude(data.attitude);
            setLuck(data.luck);
            setSleep(data.sleep);
            setScore(data.score);
            setSkills(data.skills);
            setEvent(data.event);

        })
        .catch(error => {
            console.log(error);
        });
}

export const switchModuleForward = (currentDay, lastDay, weekNumber, setNewWeek) => {
    const newWeek = (weekNumber + 1);
    if (currentDay === lastDay) {
        setNewWeek = newWeek;
    }
    else {
        setNewWeek = weekNumber;
    }
}

export const eventDrawHandler = (luck, eventArray) => {
    let negativeArr = [];
    let positiveArr = [];
    let modifier = random(1, 10);

    let pick = "";
    eventArray.map((event) => {
       if (event.eventType === "positive") {
           positiveArr.push(event);
       }
       else {
           negativeArr.push(event);
       }
    });
    if (luck <= 0) {
        pick = negativeArr[random(0, negativeArr.length)];
    }
    else if (luck <= 3) {
        if (modifier > 3) {
            pick = negativeArr[random(0, negativeArr.length)];
        }
        else {
            pick = positiveArr[random(0, negativeArr.length)];
        }
    }
    else if (luck <= 5) {
        if (modifier <= 5) {
            pick = negativeArr[random(0, negativeArr.length)];
        }
        else {
            pick = positiveArr[random(0, negativeArr.length)];
        }
    }
    else if (luck >= 7) {
        if (modifier >= 7) {
            pick = negativeArr[random(0, negativeArr.length)];
        }
        else {
            pick = positiveArr[random(0, negativeArr.length)];
        }
    }
    else if (luck === 10) {
        if (modifier >= 8) {
            pick = negativeArr[random(0, negativeArr.length)];
        }
        else {
            pick = positiveArr[random(0, negativeArr.length)];
        }
    }
    console.log(pick, " event draw pick w funkcji eventDrawHandler")
    return pick
}

export const statModifier = (stat, modifier) => {
    let modified = stat + modifier;
    return parseInt(modified)
}

export const statValidation = (stat, min, max) => {
    if (stat < min) {
        stat = min;
    }
    else if (stat > max) {
        stat = max;
    }
    return stat
}

export const validateScore = (score, min = 0) => {
    if (score < min) {
        score = min;
    }
    return score
}

export const gameOverCheck = (stat, value) => {
    if (stat === value) {
        gameOverScreen()
    }
}

export const statChainDegenerate = (causingStat, affectedStat) => {
    if (causingStat === 0) {
        affectedStat--;
    }
}

export const isExamPassedByPoints = (points) => {
    if (points > 10) {
        return true
    }
    else {
        return false
    }
}

export const examScoringSystem = (skills, luck, attitude, sleep) => {

    let modifier = skills / 3 + luck / 3 + attitude / 3;
    let result = random(modifier, 20);
    if (sleep === 0 ) {
        return  result - random(0, 3);
    }
    else if (luck === 0) {
        return  result - random(0, 3);
    }
    else if (skills === 0) {
        return  random(0, 11);
    }
    else if (attitude === 0) {
        return  result - random(0, 5);
    }
    else if (sleep === 10 ) {
        return  result + random(0, 5);
    }
    else if (luck === 10) {
        return  result - random(0, 3);
    }
    else if (skills === 10) {
        return  result + random(0, 3);
    }
    else if (attitude === 10) {
        return  result + random(0, 5);
    }
    return result
    console.log(result, 'result points in function');

}

export const objectFontResize = (element, newSize) => {
    const find = document.querySelector(element)
    find.style.fontSize = newSize;
}



