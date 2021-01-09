import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {loadId, addArr, statValidation, removeItemOnce, onHoverJpgSwapButtons} from "./functions";
import {getItemsForSale, getPlayerForEventDraw, updatePlayerStats} from "./fetch";
import {inventoryItem, inventory, buttons, inventoryBackground, noGoldPopUp} from "./styles/styles";

const Inventory = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const [itemsArr, setItemsArr] = useState([]);
    const [itemsForSale, setItemsForSale] = useState([]);
    const menuBtn = document.querySelector(".menu");

    useEffect(() => {
        getPlayerForEventDraw(resultId, setPlayer);
        getItemsForSale(setItemsForSale);
    },[]);

    useEffect(() => {
        setItemsArr(player.items);
        getItemsForSale(setItemsForSale);
    },[player]);

    console.log(itemsArr, "itemsy - samo id w inv");
    console.log(itemsForSale, "itemsy całe");
    let itemsDisplayAndOperateArr = [];
    let itemsMapArr = addArr(itemsArr);
    console.log(itemsMapArr, " itemsy w inv gracza po oprawieniu");
    let itemsObjects = addArr(itemsForSale);
    console.log(itemsObjects, " itemsy pełne obiekty");

    const useItem = (item) => {
        const noGold = document.querySelector(".noGold");
        noGold.style.display = "flex";
        let extractWholeItem = itemsObjects[item - 1];
        console.log(extractWholeItem, "  itema");
        console.log(extractWholeItem.luck, "dawaj !!")
        console.log(itemsMapArr, "zbiór z którego odejmuje się element po uzyciu");
        let itemsAfter = removeItemOnce(itemsMapArr, item)
        console.log(itemsMapArr, "zbiór z którego odejmuje się element po uzyciu po splicie");

        let setHealth = parseInt(player.health + extractWholeItem.health);
        let setSleep = parseInt(player.sleep + extractWholeItem.sleep);
        let setSkills = parseInt(player.skills + extractWholeItem.skills);
        let setAttitude = parseInt(player.attitude + extractWholeItem.attitude);
        let setLuck = parseInt(player.luck + extractWholeItem.luck);
        let verifiedSleep = statValidation(setSleep, 0, 10);
        let verifiedSkills = statValidation(setSkills, 0, 10);
        let verifiedHealth = statValidation(setHealth, 0, 10);
        let verifiedAttitude = statValidation(setAttitude, 0, 10);
        let verifiedLuck = statValidation(setLuck, 0, 10);

        const modified = {
            id: player.id,
            name: player.name,
            score: player.score,
            week: player.week,
            day: player.day,
            dayPart: player.dayPart,
            moduleName: player.moduleName,
            buffs: player.buffs,
            inventory: player.inventory ,
            items: itemsAfter,
            health: verifiedHealth,
            sleep: verifiedSleep,
            skills: verifiedSkills,
            attitude: verifiedAttitude,
            luck: verifiedLuck,
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
        location.reload();
    }

    try {
        itemsMapArr.map((item) => {
            console.log(itemsObjects[item - 1].itemName, "jest item w try catch");
        })
    } catch (e) {
        location.reload();
    }
    // let useBtn = document.getElementsByClassName(`use`);
        return (
            <>
            <div style={noGoldPopUp} className={"noGold"}>przedmiot został wykorzystany pomyślnie</div>
            <div style={inventoryBackground}>
                <h2>Twoje przedmioty: </h2>
                <div style={inventory}>
                    {
                        itemsMapArr.map((item, index) => {

                            return (
                                <li style={inventoryItem} key={index}>{itemsObjects[item - 1].itemName}
                                    <button className={`use`} style={buttons} onClick={() => useItem(item)}>użyj</button></li>
                            )
                        })
                    }
                </div>
                <button className={"menu"} style={buttons} onClick={activateActionScreen}
                        onMouseEnter={() => onHoverJpgSwapButtons(menuBtn)} onMouseOut={() => onHoverJpgSwapButtons(menuBtn, 1)}>zamknij</button>
            </div>
                </>
    )
}

export default Inventory