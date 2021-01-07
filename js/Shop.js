import React, {useState, useEffect} from "react";
import {eventDrawScreen} from "./viewControl";
import {shopItem, shopInventory, shopItemTop, buttons, shopItemsParagraph, shopPlayerPoints, shopWelcomeText, shopBackground, wholeScreenBackground} from "./styles/styles";
import {getPlayerForEventDraw, getItemsForSale, updatePlayerStats} from "./fetch";
import {loadId} from "./functions";
import {moduleNames} from "./variables";
import { StickyContainer, Sticky } from 'react-sticky';

const Shop = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const [itemsForSale, setItemsForSale] = useState([]);
    const [itemsArr, setItemsArr] = useState([]);
    const [playerMoney, setPlayerMoney] = useState([]);

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
        getItemsForSale(setItemsForSale);
    },[]);

    useEffect(() => {
      setItemsArr(player.items);
      setPlayerMoney(player.score);
    },[player]);

    console.log(player, "plajer w items");
    console.log(itemsForSale, "rzeczy w sklepiku");
    console.log(itemsArr, "obecny inwentaż gracza");
    console.log(playerMoney, "hajs");

    const buyItem = (item) => {
        console.log(playerMoney, "player money");
        let itemPrice = itemsForSale[item].itemPrice;
        let afterBuy = 0;
        if (playerMoney >= itemPrice) {
            console.log("stać Cię");
            player.items.push(itemsForSale[item].id);
            afterBuy =  playerMoney - itemPrice;
            console.log(playerMoney, "hajs gracza w ifie");
        }
        else {
            alert("Przykro mi, ilość zasobów jest niewystarczająca");
            afterBuy =  playerMoney;
        }
        if (afterBuy < 0) {
            afterBuy = 0
        }
        console.log(itemPrice, "cena");
        console.log(playerMoney, "hajs gracza");
        console.log(afterBuy, "hajs po kupieniu powinien")

        const modified = {
            id: player.id,
            name: player.name,
            score: afterBuy,
            week: player.week,
            day: player.day,
            dayPart: player.dayPart,
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
        updatePlayerStats(resultId, modified);
        location.reload();
    }

    const goToEventDraw = () => {
        if (player.day !== undefined) {
            let day = player.day;
            let week = player.week;
            let weekNumber = parseInt(week);
            let currentModule = player.moduleName;
            let dayPart = player.dayPart;
            console.log(dayPart, "część dnia");
            console.log(weekNumber, "tydzień");
            console.log(currentModule, "moduł");
            let newDayPart = player.dayPart;
            if (dayPart === "poranek") {
                newDayPart = "wieczór";
            }
            else if (dayPart === "wieczór"){
                day++;
                newDayPart = "poranek";
            }
            else {
                newDayPart = player.dayPart;
            }

            if (day === 5 || day === 10 || day === 15 || day === 20 || day === 25 || day === 30) {
                week++;
                currentModule = moduleNames[weekNumber-1];
            }
            else {
                week = parseInt(week);
                currentModule = moduleNames[weekNumber-1];
            }

            const modifiedForDateCheck = {
                id: player.id,
                name: player.name,
                score: player.score,
                week: week,
                day: day,
                dayPart: newDayPart,
                moduleName: currentModule,
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
            updatePlayerStats(resultId, modifiedForDateCheck);
        }
        eventDrawScreen();
    }

    return (
        <div style={wholeScreenBackground}>
        <div style={shopInventory}>
            <h2 style={shopWelcomeText}>Witaj w sklepie, {player.name}</h2>
            <StickyContainer>
                <Sticky>{({ style, isSticky = true }) => <p style={shopPlayerPoints}>Twoje punkty: {player.score}</p>}</Sticky>
            </StickyContainer>
            <p style={shopItemsParagraph}>Dostępne przedmioty:</p>
                {
                    itemsForSale.map((item, index) => {
                        return (
                            <div key={index} style={shopInventory}>
                                <p style={shopItemTop}>{item.itemName}</p>
                                <p style={shopItem}>{item.itemEffect}</p>
                                <p style={shopItem}>cena: {item.itemPrice}</p>
                                <button style={buttons} onClick={() => buyItem(item.id - 1)}>kup 1 x {item.itemName}</button>
                            </div>
                        )
                    })
                }
            <button style={buttons} onClick={goToEventDraw}>kontynuuj</button>
        </div>
            </div>
    )
}

export default Shop