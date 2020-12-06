console.log("Welcome creator!");

import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./WelcomeScreen";
import ActionScreen from "./ActionScreen";



const App = () => {
    return (
        <>
        <ActionScreen />
        <WelcomeScreen />
        </>
    )

}

ReactDOM.render(<App/>, document.querySelector("#app"));