import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";
import {loadId, addArr, statValidation, removeItemOnce} from "./functions";
import {getItemsForSale, getPlayerForEventDraw, updatePlayerStats} from "./fetch";
import {shopItem, shopInventory} from "./styles/styles";

const Inventory = () => {
    const resultId = loadId();
    const [player, setPlayer] = useState([]);
    const [itemsArr, setItemsArr] = useState([]);
    const [itemsForSale, setItemsForSale] = useState([]);

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
        if (item === undefined) {
            location.reload()
        }

        let extractWholeItem = itemsObjects[item - 1]
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
        location.reload()
    }

    return (
        <div style={shopInventory}>
            <h2>Twój inwentaż:</h2>
            {
                itemsMapArr.map((item, index) => {
                    return (
                        <li style={shopItem} key={index}>{itemsObjects[item - 1].itemName}
                        <button onClick={() => useItem(item)}>użyj</button></li>
                    )
                })
            }
            <button onClick={activateActionScreen}>zamknij</button>
        </div>
    )
}

export default Inventory