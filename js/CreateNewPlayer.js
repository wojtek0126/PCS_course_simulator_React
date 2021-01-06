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
            <div className={"startGameContainer"} >
                <h3 style={{
                    textAlign: "center",
                    marginBottom: 40,
                    marginTop: 180
                }}>Witaj graczu. Podaj swoje imię ,aby rozpocząć.</h3>
                <form style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}  onSubmit={() => createNewPlayer(playerName)} action="">
                    <label style={{
                        marginRight: 20,
                        textTransform: 'uppercase'
                    }} htmlFor="">podaj imię:
                        <input style={{
                            marginLeft: 20
                        }}onChange={e => setPlayerName(e.target.value)} type="text"/>
                    </label>
                    <div style={{
                        transform: "translateY(-5px)"
                    }}>
                        <button type="submit" >Rozpocznij grę</button>
                        <button  onClick={backToMainMenu}>Powrót do menu</button>
                    </div>

                </form>
            </div>
    )
}

export default CreateNewPlayer