import React, {useState, useEffect} from "react";
//morning events and evening events?
const Shop = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>Witaj w sklepie</h2>
            <p>Twoje punkty: --punkty--</p>
            <p>Dostępne towary</p>
            <p>--item name--</p>
            <p>--item description--</p>
            <p>--effects--</p>
            <p>--price-- points</p>
            <button>kup</button>
            <button>kontynuuj</button>
        </div>
    )
}

export default Shop