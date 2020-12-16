import React from "react";
import {backToMainMenu, handleContinue} from "./viewControl";
import {getPlayerById} from "./fetch";

const SkipSchoolAndRest = () => {

    return (
        <>
            <h1>Odpoczywasz w domu</h1>
            <p>motywacja -1, wiedza -1, zdrowie +1, sen +1, punkty +2</p>
            <button onClick={handleContinue}>Kończysz odpoczynek, losowanie eventu</button>
            <button>Odwiedź sklep</button>
            <button onClick={backToMainMenu}>Powrót do menu</button>
        </>
    )
}

export default SkipSchoolAndRest