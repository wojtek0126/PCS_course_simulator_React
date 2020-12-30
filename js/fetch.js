import React from "react";
// json-server --watch db.json
import {API} from "./variables";

export const getPlayers = (setArray) => {
    fetch(`${API}/players`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setArray(data);
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

export const getPlayerForEventDraw = (id, successCallback) => {
    fetch(`${API}/players/${id}`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            console.log(data, "fetch get player for draw przed succescallbackiem");
        })
        .catch(error => {
            console.log(error);
            location.reload()
        });
}

export const getPlayerForActionScreen= (id) => {
    fetch(`${API}/players/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data, "fetch get player for action screen");
            return (data);
        })
        .catch(error => {
            console.log(error);
            location.reload()
        });
}

export const newPlayerCreate = (playerData, successCallback) => {
    fetch(`${API}/players`, {
        headers: {
            // "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(playerData)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
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

export const updatePlayerStats = (id, modifier, successCallback) => {
    fetch(`${API}/players/${id}`, {
        headers: {
            // "Authorization": API_KEY,
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(modifier)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.log(err));
};

export const getEvents = (successCallback) => {
    fetch(`${API}/events`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
            }
        })
        .catch(error => {
            console.log(error);
            location.reload();
        });
}



