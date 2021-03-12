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
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    var scrollTop = window.scrollY;
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollPlacementHeight = Math.round(
      (window.innerHeight - 115) * (scrollTop / scrollHeight)
    );
    this.setState({
      top: scrollTop === 0,
      scrollPlacementHeight,
      scrollTop
    });
  };
  handleMove = (ev, touch) => {
    ev.stopPropagation();
    var e = null;
    if (touch) {
      e = ev.touches[0];
    } else {
      e = ev;
    }
    var scrollPlacementHeight = e.clientY - 115;
    if (
      scrollPlacementHeight.constructor === Number &&
      scrollPlacementHeight !== this.state.scrollPlacementHeight
    ) {
      clearTimeout(this.dragMove);
      this.dragMove = setTimeout(() => {
        if (scrollPlacementHeight > -115) {
          this.setState({ scrollPlacementHeight }, () => {
            var top = Math.round(
              (scrollPlacementHeight / (window.innerHeight - 115)) *
                document.documentElement.scrollHeight
            );
            window.scroll({ top, behavior: "smooth" });
          });
        }
      }, 10);
    }
  };
  render() {
    var showSquirrel = this.state.top && !this.state.openMenu;
    return (
      <div //onScroll={this.handleScroll}
        ref={this.outer}
      >
        <div style={{ position: "absolute" }}>
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
              "Gun Safety",
              "False Advert in House",
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
                  color: this.state.inSection === x ? "" : "grey",
                  width: "max-content",
                  fontSize: this.state.openMenu
                    ? this.state.inSection === x
                      ? "20px"
                      : ""
                    : "0px",
                  opacity: this.state.openMenu ? 1 : 0,
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
          ref={this.page}
          style={{
            top: "0px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            overflow: "hidden",
            height: "min-content",
            position: "absolute"
          }}
        >
          <div
            style={{
              height: "min-content",
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
              <span
                style={{
                  height: "min-content",
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
              >
                Demand
              </span>
              -Side Economics & Human Rights
            </div>
            <div
              style={{
                height: "min-content",
                wordBreak: "break-word",
                width: "calc(100% - 46px)",
                color: "white",
                display: "inline-block",
                position: "relative",
                padding: "4px 10px"
              }}
            >
              Sustainability and Accessability
              <br />
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
              <br />
              <br />
              You can tax sales (of end-products, not equity) for
              free-rider-immutable services, wealth for systematic reparations
              but really those are torts, and adjunicate torts to repair
              unjustice;&nbsp;
              <span
                //ref={this.law}
                style={{
                  transition: ".3s ease-in",
                  color: this.state.highlightLaw ? "white" : "",
                  backgroundColor: this.state.highlightLaw
                    ? "rgb(170,100,205)"
                    : ""
                }}
              >
                any tax or debt otherwise not only is involuntary slavery and a
                trust-building monopsony by the government, their contractors
                and their propograndising conspitators in ratings and education,
                but debt benefits the bond-holders & interference by tax or
                credit does nothing for the state of the world or the utilities
                purchased but raise prices and circumvent Savers who have worked
                for what they earn
              </span>
              . Saver Party represents the people that work or fund
              entrepreneurs on their&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://vaults.biz"
              >
                customers' time
              </a>
              , and do not borrow or lend. It is an obvious&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://www.opensecrets.org/2020-presidential-race/joe-biden/industries?id=N00001669"
              >
                red-herring
              </a>
              &nbsp; to help Wall st; yet the Republicans do the same. Saver
              party exists and represents&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://www.isidewith.com/poll/488729614"
              >
                most Americans
              </a>
              . Why call your parties one of the primary two; bipartisanship
              representing a minority of Americans - and no civil or human
              rights - is a lie, if claiming it to be what people want - or
              deserve.
            </div>
          </div>
          <div
            style={{
              position: "relative",
              height: "min-content",
              width: "100%",
              fontSize: "10px",
              backgroundColor: "rgb(100,150,200)"
            }}
          >
            <a
              href="https://magnate.company"
              style={{
                color: "rgb(100,200,150)"
              }}
            >
              EVERYCREDIT HAS AN EQUAL AND OPPOSITE REACTION
            </a>
          </div>
          <App
            inSection={(section) =>
              this.setState({ inSection: section, openMenu: true }, () =>
                setTimeout(() => this.setState({ openMenu: false }), 5432)
              )
            }
            scrollTop={this.state.scrollTop}
            top={this.state.top}
            goToTop={() =>
              this.setState({ highlightLaw: true }, () => {
                setTimeout(() => this.setState({ highlightLaw: false }), 10000);

                window.scroll({ top: 0, behavior: "smooth" });
              })
            }
          />
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
