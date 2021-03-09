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
            right: "-5px",
            width: "calc(100% - 10px)",
            color: "white",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            backgroundColor: "rgb(5,5,5)"
          }}
        >
          <div
            style={{
              fontSize: "20px",
              alignSelf: "flex-start",
              width: "calc(100% - 60px)",
              color: "white",
              display: "flex",
              textAlign: "left",
              position: "relative",
              padding: "4px 10px"
            }}
          >
            Demand-Side Economics & Human Rights
          </div>
          <div
            style={{
              wordBreak: "break-word",
              width: "100%",
              color: "white",
              display: "inline-block",
              position: "relative",
              padding: "4px 10px"
            }}
          >
            A&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.investopedia.com/articles/personal-finance/070715/insurance-companies-vs-banks-separate-and-not-equal.asp"
            >
              duressful
            </a>
            -economy of our&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp"
            >
              doing, but not our choosing
            </a>
            ; on the clock, cornered, hoarded & counterfeit
            <br />
            <span style={{ fontSize: "30px" }}>&</span>&nbsp;&nbsp;&nbsp;The
            forces that are out to obfuscate and scourge
          </div>
        </div>
        <div
          onScroll={() => {
            this.setState({});
          }}
          style={{
            padding: "10px",
            left: "0px",
            overflowX: "hidden",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            top: "0px",
            width: "calc(100% - 20px)",
            maxWidth: "600px",
            height: "min-content"
          }}
        >
          <App />
        </div>
      </div>
    </CSSTransition>
  </React.StrictMode>,
  rootElement
);

