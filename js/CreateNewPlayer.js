import React, {useState, useEffect} from "react";
import WelcomeScreen from "./WelcomeScreen";
import {newPlayerCreate} from "./fetch";
import {mainMenu, actionGame} from "./WelcomeScreen";
//add password and email after all works in demo, now just a name is enough



const backToMainMenu = () => {

    // const screen = document.querySelector(".menuScreen");
    // const screen2 = document.querySelector(".startGameContainer");
    // screen.style.display = "flex";
    // screen2.style.display = "none";
    // console.log(screen2)
}

// export const startNewGame = (e) => {
//     const screen4 = document.querySelector(".actionScreenContainer");
//     const screen2 = document.querySelector(".startGameContainer");
//     screen4.style.display = "flex";
//     screen2.style.display = "none";
// }

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


    // bez prevent default tym razem
    const createNewPlayer = () => {
        // e.preventDefault()
        const newPlr = {
            name: playerName
        };
        console.log(newPlr, "dane do wysłania po wpisaniu i submicie");
        newPlayerCreate(newPlr)

            localStorage.setItem('actionScreen', 'true');
            localStorage.setItem('welcomeScreen', 'false');
            localStorage.setItem('continueGameScreen', 'false');
            localStorage.setItem('createNewPlayerScreen', 'false');
        location.reload()

        
        // const screen4 = document.querySelector(".actionScreenContainer");
        // const screen2 = document.querySelector(".startGameContainer");
        // screen4.style.display = "flex";
        // screen2.style.display = "none";


        // console.log(newPlayer, " newPlayer")



    }
    const backToMainMenu = () => {

        localStorage.setItem('welcomeScreen', 'true');
        localStorage.setItem('continueGameScreen', 'false');
        localStorage.setItem('createNewPlayerScreen', 'false');
        localStorage.setItem('actionScreen', 'false');
        location.reload()

    }



    // const SubmitPlayerName = (e) => {
    //     e.preventDefault();
    //     console.log(newPlayer)
    // }



    // useEffect(() => {-
    //     const screen4 = document.querySelector(".actionScreenContainer");
    //     const screen2 = document.querySelector(".startGameContainer");
    //     screen4.style.display = "flex";
    //     screen2.style.display = "none";
    // },[]);




    return (
            <div className={"startGameContainer"}>
                <p>Witaj graczu. Podaj swoje imię ,aby rozpocząć</p>
                <form  action="">
                    <label htmlFor="">podaj imię
                        <input  onChange={e => setPlayerName(e.target.value)} type="text"/>
                    </label>
                    <button type="submit"  onClick={createNewPlayer} >Rozpocznij grę</button>
                    <button  onClick={backToMainMenu}>Powrót do menu</button>
                </form>
            </div>
    )


}



export default CreateNewPlayer