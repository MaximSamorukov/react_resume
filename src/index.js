import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import "./index.css";
import { LanguageContextProvider } from "./context/index";

//fonts
import "./fonts/Roboto-Black.ttf";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-Regular.ttf";
import "./fonts/Roboto-Thin.ttf";
import "./fonts/Roboto-Light.ttf";

ReactDOM.render(
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>,
  document.getElementById("root")
);
