import React, {useState, useEffect} from "react";
import {eventDrawScreen} from "./viewControl";
//morning events and evening events?
const Shop = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "pearl",
            border: "2px dotted black"
        }}>
            <h2>Witaj w sklepie</h2>
            <p>Dostępne przedmioty</p>
            <ul>
                <li><p>--item name--</p>
                    <p>--item description--</p>
                    <p>--effects--</p>
                    <p>--price-- points</p>
                    <button>kup</button>
                </li>
            </ul>
            <p>Twoje punkty: --punkty--</p>


            <button onClick={eventDrawScreen}>kontynuuj</button>
        </div>
    )
}

export default Shop