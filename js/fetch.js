import React from "react";
// json-server --watch db.json
import {API} from "./variables";

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
