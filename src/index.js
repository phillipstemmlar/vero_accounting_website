import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Modal from "react-modal";

const rootElement = document.getElementById("root");

Modal.setAppElement(rootElement);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);
