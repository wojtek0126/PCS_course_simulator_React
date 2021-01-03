import React, {useState, useEffect} from "react";
import {eventContainer, examDisplay} from "./styles/styles";

const FinalProject = () => {
    return (
        <div style={eventContainer}>
            <h2 style={examDisplay}>Czas na obronę Twojego projektu końcowego</h2>
            <button>Oddaj projekt końcowy</button>
        </div>
    )
}

export default FinalProject