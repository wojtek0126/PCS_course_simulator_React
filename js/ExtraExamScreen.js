import React, {useState, useEffect} from "react";

const ExtraExamTime = () => {
    return (
        <div style={{
            width: 800,
            height: 800,
            background: "brown",
            border: "2px dotted black"
        }}>
            <h2>Witaj na egzaminie poprawkowym, --imię gracza--</h2>
            <p>Egzamin z: --moduł--</p>
            <p>Punkty na zaliczenie: 10/20 czyli 50%.</p>
            <p>Ten egzamin pisany jest w przypadku niezaliczenia bądź nie stawienia się na pierwszej próbie.
            W razie słabych statystyk możesz spróbować jeszcze raz, pod warunkiem że uaktywnisz opcję trzeciej szansy</p>
            <p>Twój wybór: </p>
            <button>Podchodzę do egzaminu</button>
            <button>Nie podchodzę do egzaminu</button>
        </div>
    )
}

export default ExtraExamTime