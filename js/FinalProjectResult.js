import React, {useState, useEffect} from "react";

const FinalProjectResult = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>Oto jak wyszła Twoja praca końcowa: --zdany--</h2>
            <p>Projekt obroniony/nie obroniony</p>
            <p>Zdobyte punkty za projekt --points--</p>
            <p>Zdobyte punkty razem: --score--</p>
            <p>Gratulacje, udało Ci się obronic projekt końcowy/Niestety, twoje wysiłki okazały się niewystarczające
            by obronić projekt końcowy</p>
            <button>zapisz wynik i wróć do menu głównego</button>
        </div>
    )
}

export default FinalProjectResult