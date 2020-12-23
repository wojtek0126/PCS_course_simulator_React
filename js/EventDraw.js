import React, {useState, useEffect} from "react";
//morning events and evening events?
const EventDraw = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>O to co Ci sie przytrafiło:</h2>
            <p>--event name--</p>
            <p>--event description</p>
            <p>--consequences--</p>
            <button>kontynuuj</button>
        </div>
    )
}

export default EventDraw