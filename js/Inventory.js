import React, {useState, useEffect} from "react";
import {activateActionScreen} from "./viewControl";

const Inventory = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>Twój inwentaż:</h2>
         <ul>
             <li>--item-- <button>użyj</button></li>
         </ul>
            <button onClick={activateActionScreen}>zamknij</button>
        </div>
    )
}

export default Inventory