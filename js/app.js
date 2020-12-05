console.log("Welcome creator!");

import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./WelcomeScreen";



const App = () => {
    return (
        <WelcomeScreen />
    )

}

ReactDOM.render(<App/>, document.querySelector("#app"));