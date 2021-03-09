import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import App from "./App";

class Index extends React.Component {
  state = {};
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = () => {
    this.setState({ scrolling: true }, () =>
      setTimeout(() => this.setState({ scrolling: false }), 5432)
    );
  };
  render() {
    return (
      <div className="App">
        <div
          style={{
            zIndex: "1",
            color: "white",
            fontSize: "9px",
            position: "fixed",
            padding: "4px 10px",
            right: "0px",
            top: "0px",
            backgroundColor: "rgb(5,5,5)"
          }}
        >
          EXPLICIT
          {[
            "Polling Fraud",
            "Immigration",
            "Ownership Fraud",
            "False Advert in Senate",
            "Insurance Fraud",
            "Mission",
            "Early Comms",
            "Illegal Gov Decrees"
          ].map((x) => {
            return (
              <div
                style={{
                  fontSize: !this.state.scrolling ? "0px" : "",
                  opacity: !this.state.scrolling ? "0" : "1",
                  transition: ".3s ease-in",
                  margin: "2px"
                }}
              >
                {x}
              </div>
            );
          })}
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
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CSSTransition timeout={300} classNames={"fade"}>
      <Index />
    </CSSTransition>
  </React.StrictMode>,
  rootElement
);
