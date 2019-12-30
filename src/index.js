import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./js/components/App.js";

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<Router><App /></Router>, wrapper) : false;
