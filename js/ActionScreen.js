import React from "react";

const init = () => {
    setTimeout(() => {
        const screen = document.querySelector(".menuScreen");
        const screen2 = document.querySelector(".startGameContainer");
        const screen3 = document.querySelector(".continueGameContainer");
        const screen4 = document.querySelector(".actionScreenContainer");
        screen2.style.display = "none";
        screen3.style.display = "none";
        screen.style.display = "flex";
    }, 0)

}

const backToMain = () => {

    const screen = document.querySelector(".menuScreen");
    const screen2 = document.querySelector(".actionScreenContainer");
    screen.style.display = "flex";
    screen2.style.display = "none";
    console.log(screen2)
}

const ActionScreen = () => {
    return (
        <div className={"actionScreenContainer"} style={{display: "none"}}>
            <div className={"actionNameField"}>Player name displayed here</div>
            <ul className={"actionPlayerStats"}>
                <li>ZDROWIE</li>
                <li>SEN</li>
                <li>WIEDZA</li>
                <li>SAMOPOCZUCIE</li>
                <li>SZCZĘŚCIE</li>
                <li>PUNKTY</li>
            </ul>
            <div className={"actionInventory"}>inwentarz</div>
            <div className={"actionBuffs"}>buffy i debuffy</div>
            <div className={"actionCalendar"}>dzień, czas dnia i tydzień kursu, nazwa i opis modułu</div>
            <button>idź do szkoły</button>
            <button>odpocznij</button>
            <button>zrób pracę domową</button>
            <button>idź na imprezę</button>
            <button onClick={backToMain}>powrót do menu</button>


        </div>
    )
}

export default ActionScreen