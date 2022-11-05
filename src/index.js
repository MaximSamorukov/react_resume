import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import "./index.css";
import { LanguageContextProvider } from "./context/index";

ReactDOM.render(
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>,
  document.getElementById("root")
);
