import React, {useState} from "react";
import {createNewPlayer} from "./functions";
import {backToMainMenu, successPlayerCreateScreen} from "./viewControl";


//add login after engine works

const CreateNewPlayer = () => {


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
    console.log(playerName, "playerName w create player")
    localStorage.setItem('playerName', playerName);

    return (
            <div className={"startGameContainer"}>
                <p>Witaj graczu. Podaj swoje imię ,aby rozpocząć</p>
                <form  onSubmit={() => createNewPlayer(playerName)} action="">
                    <label htmlFor="">podaj imię
                        <input  onChange={e => setPlayerName(e.target.value)} type="text"/>
                    </label>
                    <button type="submit" >Rozpocznij grę</button>
                    <button  onClick={backToMainMenu}>Powrót do menu</button>
                </form>
            </div>
    )
}

export default CreateNewPlayer