import React from "react";
import {backToMainMenu, handleContinue} from "./viewControl";
import {getPlayerById} from "./fetch";

const GoToSchool = () => {

    return (
        <>
        <h1>Poszedłeś do szkoły</h1>
        <p>wiedza+1, sen -1, punkty + 5</p>
            <button onClick={handleContinue}>Wracaj ze szkoły do domu, losowanie eventu</button>
            <button>Odwiedź sklep</button>
            <button onClick={backToMainMenu}>Powrót do menu</button>
            </>
    )
}

export default GoToSchool