import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import App from "./App";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { top: true, scrollPlacementHeight: 0, openMenu: false };
    this.page = React.createRef();
    this.outer = React.createRef();
  }
  /*componentDidMount = () => {
      window.addEventListener("scroll", this.handleScroll);
    };
    componentWillUnmount = () => {
      window.removeEventListener("scroll", this.handleScroll);
    };*/
  handleScroll = (e) => {
    clearTimeout(this.cancel);
    var scrollTop = e.target.scrollTop;
    var scrollHeight = e.target.scrollHeight;
    var scrollPlacementHeight = Math.round(
      (window.innerHeight - 90) * (scrollTop / scrollHeight)
    );
    this.setState({ top: scrollTop === 0, scrollPlacementHeight });
  };
  handleMove = (ev, touch) => {
    var e = null;
    if (touch) {
      e = ev.touches[0];
    } else {
      e = ev;
    }
    var scrollPlacementHeight = e.pageY - 90;
    if (
      scrollPlacementHeight.constructor === Number &&
      scrollPlacementHeight !== this.state.scrollPlacementHeight
    ) {
      clearTimeout(this.dragMove);
      this.dragMove = setTimeout(() => {
        if (scrollPlacementHeight > -90) {
          this.setState({ scrollPlacementHeight }, () => {
            var top = Math.round(
              (scrollPlacementHeight / (window.innerHeight - 90)) *
                this.page.current.scrollHeight
            );
            this.outer.current.scroll({ top, behavior: "smooth" });
          });
        }
      }, 20);
    }
  };
  render() {
    var appStyle = {
      position: "fixed",
      textAlign: "center",
      width: "100%",
      height: "100%"
    };
    var showSquirrel = this.state.top && !this.state.openMenu;
    return (
      <div style={appStyle}>
        <div
          onClick={() => this.setState({ openMenu: !this.state.openMenu })}
          style={{
            textAlign: "center",
            width: "min-content",
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
          <span style={{ display: "flex" }}>EXPLICIT</span>
          {[
            "Polling Fraud",
            "Immigration",
            "Ownership Fraud",
            "False Advert in Senate",
            "Insurance Fraud",
            "Mission",
            "Early Comms",
            "Illegal Gov Decrees",
            "close"
          ].map((x) => (
            <div
              key={x}
              style={{
                width: "max-content",
                fontSize: !this.state.openMenu ? "0px" : "",
                opacity: !this.state.openMenu ? "0" : "1",
                transition: ".3s ease-in",
                margin: "2px"
              }}
            >
              {x !== "close" ? (
                x
              ) : (
                <span onClick={() => this.setState({ openMenu: false })}>
                  &times;
                </span>
              )}
            </div>
          ))}
        </div>
        <div
          onDrag={this.handleMove}
          onTouchMove={(e) => this.handleMove(e, true)}
          style={{
            opacity: showSquirrel ? 1 : 0.3,
            top: 90 + this.state.scrollPlacementHeight,
            zIndex: 1,
            right: "10px",
            width: "30px",
            position: "fixed",
            transition: ".3s ease-in"
          }}
        >
          <img
            alt=""
            style={{
              borderRadius: "10px",
              border: "5px solid rgb(5,5,5)",
              width: "100%",
              height: "auto"
            }}
            src="https://www.dl.dropboxusercontent.com/s/oi43wpcc0h9phcz/saverAcorn%20%281%29.png?dl=0"
          />{" "}
        </div>
        <div
          ref={this.outer}
          onScroll={this.handleScroll}
          style={{
            overflowX: "hidden",
            overflowY: "auto",
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          }}
        >
          <div
            ref={this.page}
            style={{
              display: this.state.width > 700 ? "flex" : "",
              width: "100%",
              height: "min-content",
              position: "absolute"
            }}
          >
            <div
              style={{
                right: "0px",
                width: "100%",
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
                  width: "calc(100% - 46px)",
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
            <App />
          </div>
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
