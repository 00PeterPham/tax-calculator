import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./js/components";

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<Router><App /></Router>, wrapper) : false;
