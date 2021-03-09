import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CSSTransition timeout={300} classNames={"fade"}>
      <div className="App">
        <div
          style={{
            zIndex: "1",
            color: "white",
            fontSize: "9px",
            display: "flex",
            position: "fixed",
            padding: "4px 10px",
            right: "0px",
            top: "0px",
            backgroundColor: "rgb(5,5,5)"
          }}
        >
          EXPLICIT
        </div>
        <div
          style={{
            overflowX: "hidden",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            top: "0px",
            width: "100%",
            maxWidth: "600px",
            height: "min-content"
          }}
        >
          <div
            style={{
              top: "3px",
              width: "100%",
              color: "white",
              display: "flex",
              position: "absolute",
              padding: "4px 10px",
              backgroundColor: "rgb(5,5,5)"
            }}
          >
            Demand-Side Economics & Human Rights
          </div>{" "}
          <App />
        </div>
      </div>
    </CSSTransition>
  </React.StrictMode>,
  rootElement
);
