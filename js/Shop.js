import {eventDrawScreen} from "./viewControl";
import React, {useState, useEffect} from "react";
import {skipExamScreen, examResultScreen} from "./viewControl";
import {shopItem, shopInventory} from "./styles/styles";
import {getPlayerForEventDraw, getItemsForSale, updatePlayerStats} from "./fetch";
import {loadId} from "./functions";

const Shop = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const [itemsForSale, setItemsForSale] = useState([]);
    const [itemsArr, setItemsArr] = useState([]);
    const [playerMoney, setPlayerMoney] = useState([]);

    // const [itemBought, setItemBought] = useState([]);

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
        getItemsForSale(setItemsForSale);
    },[]);

    useEffect(() => {
      setItemsArr(player.items);
      setPlayerMoney(player.score);
    },[player]);
    // let itemsId = []
    // itemsForSale.map((item) => {
    //     itemsForSaleId.push(item.id);
    // })
    let playerItems = player.items;
    console.log(player, "plajer w items");
    // console.log(itemsArr, "inwentarz w items");
    console.log(itemsForSale, "rzeczy w sklepiku");
    // console.log(itemsForSaleId, " id rzeczy w sklepiku");
    console.log(itemsArr, "obecny inwentaż gracza");
    console.log(playerMoney, "hajs");
    let timeSwitch = player.dayPart;
    let dayOn = player.day;
    if (player.dayPart === "poranek") {
        timeSwitch = "wieczór";
    }
    else {
        dayOn = player.day + 1;
        timeSwitch = "poranek";
    }

    const buyItem = (item) => {
        console.log(playerMoney, "player money")
        let itemPrice = itemsForSale[item].itemPrice;


        if (playerMoney >= itemPrice) {
            console.log("stać Cię");
            player.items.push(itemsForSale[item].id);

            console.log(playerMoney, "hajs gracza w ifie");
        }
        else {
            console.log("nie stać Cię");
        }
        let afterBuy =  playerMoney - itemPrice;
        if (afterBuy > 0) {
            afterBuy = 0
        }
        console.log(itemPrice, "cena");
        console.log(playerMoney, "hajs gracza");

        const modified = {
            id: player.id,
            name: player.name,
            score: afterBuy,
            week: player.week,
            day: dayOn,
            dayPart: timeSwitch,
            moduleName: player.moduleName,
            buffs: player.buffs,
            inventory: player.inventory ,
            items: player.items,
            health: player.health,
            sleep: player.sleep,
            skills: player.skills,
            attitude: player.attitude,
            luck: player.luck,
            attendance: player.attendance,
            repeatingExam: player.repeatingExam,
            examPassed: player.examPassed,
            examPoints: player.examPoints,
            finalProjectDone: player.finalProjectDone,
            finalProjectScore: player.finalProjectScore,
            endingNumber: player.endingNumber,
            gameOver: false
        };
        console.log(player.items,"itemsy po naciśnięciu");
        // location.reload();
        updatePlayerStats(resultId, modified);
        location.reload();
    }

    // const goToEvent = () => {

    //     eventDrawScreen();
    // }

// do player inventory wjeżdża tylko item id.
    return (
        <div style={shopInventory}>
            <h2>Witaj w sklepie, {player.name}</h2>
            <p>Dostępne przedmioty</p>

                {
                    itemsForSale.map((item, index) => {
                        return (
                            <div key={index} style={shopInventory}>
                                <p style={shopItem}>{item.itemName}</p>
                                <p style={shopItem}>{item.itemEffect}</p>
                                <p style={shopItem}>cena: {item.itemPrice}</p>
                                <button onClick={() => buyItem(item.id - 1)}>zakup {item.id}</button>
                            </div>
                        )
                    })
                }
            <p>Twoje punkty: {player.score}</p>
            <button onClick={eventDrawScreen}>kontynuuj</button>
        </div>
    )
}

export default Shop