import React from "react";
import ReactDom from "react-dom";

import Checkbox from "./components/OSX/Checkbox";

import "./components/OSX/style.css";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

const App = () => {
    return (
        <React.Fragment>
            <Checkbox desc="Couleur de surbrillance" checked={true} />
        </React.Fragment>
    );
};

ReactDom.render(<App />, mainElement);
