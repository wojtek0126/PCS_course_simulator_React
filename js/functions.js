import React from "react";
import {newPlayerCreate, removePlayer} from "./fetch";
import {activateActionScreen} from "./viewControl";
import {API} from "./variables";

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getPlayers = (setArray) => {
    fetch(`${API}/players`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setArray(data);
            console.log(setArray, " array z getPlayers");
        })
        .catch(error => {
            console.log(error);
        });
}

export const createNewPlayer = (nameData) => {

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const newPlr = {
        name: nameData,
        score: 0,
        week: 1,
        day: 1,
        dayPart: "poranek",
        moduleName: "Wprowadzenie do pythona",
        buffs: "none",
        inventory: "empty",
        thirdChanceExam: false,
        health: random(2, 8),
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
    console.log(newPlr, "dane do wysłania po wpisaniu i submicie");
    newPlayerCreate(newPlr)
    activateActionScreen()
}

export const handleRemovePlayer = (id) => {
    removePlayer(id);
    location.reload()
}

export const displayCurrentPlayer = (
    setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
    setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent
) => {
    fetch(`${API}/db`)
        .then(response => response.json())
        .then(data => {
            console.log(data.players);
            console.log(data.players[data.players.length - 1].name, "imie ostatniego gracza");
            setPlayerName(data.players[data.players.length - 1].name);
            setCurrentModule(data.players[0].moduleName);
            setWeek(data.players[0].week);
            setDay(data.players[0].day);
            setDayPart(data.players[0].dayPart);

            setBuffs(data.players[0].buffs);
            setInventory(data.players[0].inventory);

            setHealth(data.players[0].health);
            setAttitude(data.players[0].attitude);
            setLuck(data.players[0].luck);
            setSleep(data.players[0].sleep);
            setScore(data.players[0].score);
            setSkills(data.players[0].skills);

            setEvent(data.players[0].event);

        })
        .catch(error => {
            console.log(error);
        });
}

