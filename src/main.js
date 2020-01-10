import React from "react";
import ReactDOM from "react-dom";


// !!!Attention!!! if we remove js from App.js systemjs doesn't work 
import App from "./App.js";



const rootElement = document.getElementById("react-root");
ReactDOM.render(<App />, rootElement);
