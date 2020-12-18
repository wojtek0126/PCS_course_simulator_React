import React from "react";
// json-server --watch db.json
import {API} from "./variables";

export const getPlayers = (setArray) => {
    fetch(`${API}/players`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data);
            setArray(data);
        })
        .catch(error => {
            console.log(error);
        });
}

export const getPlayerById = (id, setPlayer,successCallback) => {
    fetch(`${API}/players/${id}`, {
        headers: {
            // "Authorization": API_KEY
        }
    })
        .then(data => {
            console.log(data);
            setPlayer(data)
        })
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

export const getLastPlayerFromList = (
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

export const getSelectedPlayerFromList = (id,
    setPlayerName, setCurrentModule, setWeek, setDay, setDayPart, setBuffs, setInventory,
    setHealth, setAttitude, setLuck, setSleep, setScore, setSkills, setEvent
) => {
    fetch(`${API}/players/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.id, " id obecnego gracza");
            console.log(data.name, " imie obecnego gracza");
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

export const newPlayerCreate = (playerData, successCallback) => {
    fetch(`${API}/players`, {
        headers: {
            // "Authorization": API,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(playerData)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

export const removePlayer = (id, successCallback) => {
    fetch(`${API}/players/${id}`, {
        headers: {
            // "Authorization": API_KEY
        },
        method: "DELETE"
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback();
            }
        })
        .catch(err => console.log(err));
};
