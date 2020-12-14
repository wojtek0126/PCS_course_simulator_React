import React from "react";
// json-server --watch db.json
const API = "http://localhost:3000";

export const getPlayerStats = () => {
    fetch(`${API}/players`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPlayerName(data.players[0].name);

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