import React from "react";
// json-server --watch db.json
import {API} from "./variables";
import {saveData} from "./functions";


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

export const getLastPlayerFromList = (setLastPlayer) => {

    fetch(`${API}/players/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data[data.length - 1].name, "imie ostatniego gracza");
            let idSet = data[data.length - 1].id;
            setLastPlayer(idSet);
            // localStorage.setItem("continuePlayerId", idSet);
            // setPlayerName(data.players[data.players.length - 1].name);
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
            // saveData('continuePlayerId', setId);
        })
        .catch(error => {
            console.log(error);
        });
    location.reload();
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
            console.log(data, "fetch get player for draw przed succescallbackiem")
            // if (data.error === false && typeof successCallback === "function") {
            //     successCallback(data);
            //     console.log(data, "getplayer for draw w fetch successcallback")
            // }

        })
        .catch(error => {
            console.log(error);
            location.reload()
        });
}

// export const newPlayerCreate = (playerData, successCallback) => {
//     fetch(`${API}/players`, {
//         headers: {
//             // "Authorization": API,
//             "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(playerData)
//     })
//         .then(r => r.json())
//         .then(data => {
//             console.log(data, "plcreate")
//             if (data.error === false && typeof successCallback === "function") {
//                 successCallback(data);
//             }
//         })
//         .catch(err =>
//             console.log(err));
// };

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
                console.log("successcallback")
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
            console.log(data, "oto co oddał fetch getEvents");
            // console.log(data[0].id, " id obecnego eventu w getevents fetch");
            successCallback(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
            }
            // const dataArr = [];
            // data.map((el) => {
            //     dataArr.push(el.eventName)
            // });
            // setNameArray(dataArr);
        })
        .catch(error => {
            console.log(error);
            location.reload();
        });
}

export const getPlayerAndEvents = (insertPlayerId, setPlayerArray, setEventArray) => {
    fetch(`${API}/events`)
        .then(response => response.json())
        .then(data => {

            console.log(data, "eventy w fetch getEvents");
            // console.log(data[0].id, " id obecnego eventu w getevents fetch");


            // setEventArray(setArray);
            setEventArray(oldArray => [...oldArray, data]);
            // const dataArr = [];
            // data.map((el) => {
            //     dataArr.push(el.eventName)
            // });
            // setNameArray(dataArr);
        })
        .catch(error => {
            console.log(error);
        });
    fetch(`${API}/players/${insertPlayerId}`)
        .then(response => response.json())
        .then(data2 => {
            console.log(data2);
            setPlayerArray(data2);
        })
        .catch(error => {
            console.log(error);
        });
}

