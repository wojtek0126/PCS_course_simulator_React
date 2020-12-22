import React from "react";
import {newPlayerCreate, removePlayer, getLastPlayerFromList} from "./fetch";
import {activateActionScreen, successPlayerCreateScreen} from "./viewControl";
import {API} from "./variables";
import SuccessPlayerCreate from "./SuccessPlayerCreate";


export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

export const DomElementOnOff = (element, value) => {
    if (value == "on") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}

// export const getPlayers = (setArray) => {
//     fetch(`${API}/players`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             setArray(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

export const createNewPlayer = (nameData) => {

    const newPlr = {
        id: "",
        name: nameData,
        score: 0,
        week: 1,
        day: 1,
        dayPart: "poranek",
        moduleName: "Wstęp do pythona",
        buffs: "none",
        inventory: "identyfikator",
        thirdChanceExam: false,
        health: 10,
        sleep: random(2, 8),
        skills: random(2, 8),
        attitude: random(2, 8),
        luck: random(2, 8),
        attendance: 100,
        examThirdChance: false,
        examPassed: false,
        examPoints: 0,
        event: "nothing out of ordinary happened",
        warnings: "none",
        finalProjectDone: false,
        finalProjectScore: 0,
        ending: false,
        endingNumber: 0
    };
    newPlayerCreate(newPlr);
    // location.reload();
    //it also saves player id to localstorage in getLastPlayerFromList below
    // getLastPlayerFromList()
    successPlayerCreateScreen()

    // getLastPlayerFromList();


}

export const handleRemovePlayer = (id) => {
    removePlayer(id);
    location.reload()
}
// setPlayerName(data.players[data.players.length - 1].name); - ostatni z listy


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
    // if (dayCounter === 10) {
    //     weekFw = (weekNumber+ 1);
    //     newModuleName = "Wstęp do baz danych";
    // }
    // if (dayCounter === 15) {
    //     weekFw = (weekNumber+ 1);
    //     newModuleName = "Wstęp do baz danych";
    // }
    // if (dayCounter === 20) {
    //     weekFw = (weekNumber+ 1);
    //     newModuleName = "Wstęp do baz danych";
    // }
    // if (dayCounter === 25) {
    //     weekFw = (weekNumber+ 1);
    //     newModuleName = "Wstęp do baz danych";
    // }
    // if (dayCounter === 30) {
    //     newModuleName = "Wstęp do baz danych";
    //     weekFw = (weekNumber+ 1);
    // }
    else {
        setNewWeek = weekNumber;
    }
}

