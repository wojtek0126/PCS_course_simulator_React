import {eventDrawScreen} from "./viewControl";
import React, {useState, useEffect} from "react";
import {skipExamScreen, examResultScreen} from "./viewControl";
import {shopItem} from "./styles/styles";
import {getPlayerForEventDraw, getItemsForSale, updatePlayerStats} from "./fetch";
import {loadId} from "./functions";

const Shop = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const itemsArr = player.items;
    const [itemsForSale, setItemsForSale] = useState([]);

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
        getItemsForSale(setItemsForSale)
    },[])
    console.log(player, "plajer w items");
    console.log(itemsArr, "inwentarz w items");
    console.log(itemsForSale, "rzeczy w sklepiku");

    const buyItem = (item) => {

        let playerItems = player.items;
        let playerCredits = player.score;
        playerItems.push(item);

        const modified = {
            id: player.id,
            name: player.name,
            score: player.score,
            week: player.week,
            day: player.day,
            dayPart: player.dayPart,
            moduleName: player.moduleName,
            buffs: player.buffs,
            inventory: playerItems,
            items: playerItems,
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
        updatePlayerStats(resultId, modified);
    }

    return (
        <div style={{
            width: 800,
            height: 800,
            background: "pearl",
            border: "2px dotted black"
        }}>
            <h2>Witaj w sklepie, {player.name}</h2>
            <p>Dostępne przedmioty</p>

                {
                    itemsForSale.map((item, index) => {
                        return (
                            <div key={index} style={{
                                border: "1px solid black",
                                display: "flex",
                                fontSize: 16,
                                justifyContent: "space-between"
                            }}>
                                <p style={shopItem}>{item.itemName}</p>
                                <p style={shopItem}>{item.itemEffect}</p>
                                <p style={shopItem}>cena: {item.itemPrice}</p>
                                <button onClick={buyItem(item)}>zakup</button>
                            </div>

                        )
                    })
                }

                {/*    */}
                {/*    <p>--effects--</p>*/}
                {/*    <p>--price-- points</p>*/}
                {/*    <button>kup</button>*/}
                {/*</li>*/}

            <p>Twoje punkty: {player.score}</p>


            <button onClick={eventDrawScreen}>kontynuuj</button>
        </div>
    )
}

export default Shop