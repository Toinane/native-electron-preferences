import React from "react";
import ReactDom from "react-dom";

import Checkbox from "./components/OSX/Checkbox";

import "./style.css";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

const App = () => {
    return (
        <React.Fragment>
            <h1>Hi from a react app</h1>
            <Checkbox desc="Coucou tout le monde" checked={true} />
        </React.Fragment>
    );
};

ReactDom.render(<App />, mainElement);
