import React, {useState, useEffect} from "react";

const ExamResult = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>Rezultat Twojego egzaminu: --zdany--</h2>
            <p>Egzamin z: --moduł--</p>
            <p>Zdobyte punkty --points--</p>
            <p>Gratulacje, udało Ci się zaliczyć ten egzamin/Tym razem się nie udało</p>
            <button>kontynuuj</button>
        </div>
    )
}

export default ExamResult