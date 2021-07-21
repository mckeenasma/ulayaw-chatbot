import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))ss
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
