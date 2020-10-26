import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>, document.getElementById("root"))