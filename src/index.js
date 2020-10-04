import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css";
import { StoreProvider } from "./context";
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("root"));
