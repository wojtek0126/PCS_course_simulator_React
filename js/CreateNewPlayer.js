import React, {useState} from "react";
import {createNewPlayer} from "./functions";
import {backToMainMenu} from "./viewControl";

//add login after engine works

const CreateNewPlayer = () => {

    console.log("nowa gra: dane poszły")
    const [playerName, setPlayerName] = useState("");
    // const [health, setHealth] = useState("");
    // const [sleep, setSleep] = useState("");
    // const [skills, setSkills] = useState("");
    // const [attitude, setAttitude] = useState("");
    // const [luck, setLuck] = useState("");
    // const [score, setScore] = useState("");
    // const [inventory, setInventory] = useState([]);
    // const [buffs, setBuffs] = useState([]);
    // const [day, setDay] = useState("");
    // const [dayPart, setDayPart] = useState("");
    // const [currentModule, setCurrentModule] = useState("");
    // const [week, setWeek] = useState("");
    // const [event, setEvent] = useState("");
    // const [attendance, setAttendance] = useState(100);



    return (
            <div className={"startGameContainer"}>
                <p>Witaj graczu. Podaj swoje imię ,aby rozpocząć</p>
                <form  action="">
                    <label htmlFor="">podaj imię
                        <input  onChange={e => setPlayerName(e.target.value)} type="text"/>
                    </label>
                    <button type="submit"  onClick={() => createNewPlayer(playerName)} >Rozpocznij grę</button>
                    <button  onClick={backToMainMenu}>Powrót do menu</button>
                </form>
            </div>
    )
}

export default CreateNewPlayer