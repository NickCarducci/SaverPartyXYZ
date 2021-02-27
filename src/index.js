import React from "react";
import ReactDOM from "react-dom";
import "./Fonts/Nunito-Regular.ttf";
import { CSSTransition } from "react-transition-group";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CSSTransition timeout={300} classNames={"fade"}>
      <App />
    </CSSTransition>
  </React.StrictMode>,
  rootElement
);
