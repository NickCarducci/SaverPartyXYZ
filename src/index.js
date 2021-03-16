import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import App from "./App";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landedPresentation: true,
      top: true,
      scrollPlacementHeight: 0,
      openMenu: false,
      inSection: "New"
    };
    this.page = React.createRef();
    this.outer = React.createRef();
    this.topSort = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    !this.state.offScroll &&
      this.setState({ scrolling: true }, () => {
        const innerHeight = window.innerHeight;
        const scrollTop = window.scrollY; //+ window.innerHeight;
        const scrollHeight = this.page.current.scrollHeight; //document.documentElement.scrollHeight;
        const topSortHeight = this.topSort.current.offsetHeight;
        const scrollPlacementHeight = Math.round(
          (innerHeight - 115) * (scrollTop / scrollHeight)
        );
        const top = scrollTop === 0;
        this.setState(
          {
            openMenu: top ? false : this.state.openMenu,
            top,
            scrollPlacementHeight,
            scrollTop
          },
          () => {
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
              this.setState(
                {
                  scrolling: false,
                  landedPresentation:
                    scrollTop > topSortHeight + innerHeight + 40
                },
                () => {
                  clearTimeout(this.scrollScrollTimeout);
                  this.scrollScrollTimeout = setTimeout(() => {
                    this.setState({ landedPresentation: false });
                  }, 2577);
                }
              );
            }, 400);
          }
        );
      });
  };
  handleMove = (ev, touch) => {
    ev.stopPropagation();
    var e = null;
    var timeout = null;
    if (touch) {
      e = ev.touches[0];
      timeout = 20;
    } else {
      e = ev;
      timeout = 10;
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
      }, timeout);
    }
  };
  render() {
    var showSquirrel = this.state.top && !this.state.openMenu;
    return (
      <div //onScroll={this.handleScroll}
        ref={this.outer}
        style={{
          color: "rgb(255,250,235)"
        }}
      >
        <div
          style={{
            zIndex: 3,
            position: "absolute"
          }}
        >
          <a
            href="https://micro-theory.com"
            style={{
              textDecoration: "none",
              right: "37px",
              color: "white",
              fontWeight: "bolder",
              position: "fixed",
              fontSize: "8px"
            }}
          >
            Vain & co.
          </a>
          <div
            style={{
              transform: "rotate(90deg)",
              backgroundColor: "rgb(255,255,255)",
              position: "fixed",
              width: "40px",
              display:
                this.state.landedPresentation && this.state.openMenu
                  ? "block"
                  : "none",
              left: "0px",
              top: "0px"
            }}
          >
            <div
              onClick={() => this.setState({ openMenu: false })}
              style={{
                transform: "scale(-1,-1)",
                position: "relative",
                float: "left",
                textAlign: "left",
                padding: "4px 10px",
                maxHeight: "40px",
                height: "40px",
                color: "black",
                border: "2px blue solid",
                width: "max-content",
                transition: ".3s ease-out"
              }}
            >
              {this.state.inSection /*.split(" ").map((x) => `${x}\n`)*/}
            </div>
          </div>
          <div
            onClick={() => this.setState({ openMenu: !this.state.openMenu })}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems:
                this.state.inSection !== "story" && this.state.openMenu
                  ? "flex-start"
                  : "center",
              width: "min-content",
              color: "white",
              fontSize: "9px",
              position: "fixed",
              padding: "4px 10px",
              height:
                this.state.inSection !== "story" && this.state.openMenu
                  ? "min-content"
                  : "150px",
              right: "0px",
              top: "0px",
              backgroundColor: "rgb(5,5,5)"
            }}
          >
            <span
              style={{
                textAlign: "center",
                height: "min-content",
                display: "flex",
                width: this.state.openMenu ? "" : "min-content",
                transition: ".3s ease-out"
              }}
            >
              EXPLICIT
            </span>
            <span
              aria-label="skull & bones"
              role="img"
              style={{
                padding: "4px",
                display: this.state.openMenu ? "none" : "flex",
                opacity: this.state.top ? 0 : 1,
                transition: ".3s ease-out"
              }}
            >
              ☠️
            </span>
            {!this.state.openMenu &&
              this.state.inSection
                .replace("-", " ")
                .split(" ")
                .map((x) => (
                  <span style={{ width: "max-content" }}>
                    {x.length < 5 ? x : x.substring(0, 5)}
                  </span>
                ))}
            {[
              "New",
              "Rentier-Colonialism",
              "Abuse of Power",
              "War on Poverty",
              "Gun Safety",
              "False Advert in House",
              "Polling Fraud",
              "Immigration",
              "Ownership Fraud",
              "False Advert in Senate",
              "Insurance Fraud",
              "Virus",
              "Monopoly",
              "Education",
              "Null Hypothesis",
              "Securities Fraud",
              "Systemic Inequality",
              "Mission",
              "Early Comms",
              "Illegal Gov Decrees",
              "close"
            ].map((x) => (
              <div
                key={x}
                style={{
                  position: "relative",
                  color:
                    this.state.inSection === x ? "rgb(255,250,235)" : "grey",
                  opacity:
                    this.state.inSection !== "story" && this.state.openMenu
                      ? 1
                      : 0,
                  transition: ".3s ease-in",
                  margin: "2px"
                }}
              >
                {x !== "close" ? (
                  <span
                    style={{
                      display: "flex",
                      position: "relative",
                      width: "max-content",
                      transition: ".3s ease-in",
                      fontSize:
                        this.state.inSection !== "story" && this.state.openMenu
                          ? this.state.inSection === x
                            ? "20px"
                            : "12px"
                          : "0px"
                    }}
                  >
                    {x}
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: "20px"
                    }}
                  >
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
            zIndex: 3,
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
          />
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
              zIndex: 2,
              height: "min-content",
              right: "0px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "rgb(5,5,5)"
            }}
          >
            <div
              ref={this.topSort}
              style={{
                fontSize: "20px",
                alignSelf: "flex-start",
                width: "calc(100% - 60px)",
                display: "flex",
                textAlign: "left",
                position: "relative",
                padding: "4px 10px",
                paddingBottom: "6px"
              }}
            >
              <span
                style={{
                  height: "max-content"
                }}
              >
                <span
                  style={{
                    height: "max-content",
                    fontWeight: "bolder",
                    textDecoration: "underline"
                  }}
                >
                  Demand
                </span>
                -Side Economics & Human Rights
              </span>
            </div>

            <div
              style={{
                overflow: "hidden",
                height: "50px",
                width: "calc(100% - 46px)",
                display: "flex",
                position: "relative",
                padding: "4px 10px"
              }}
            >
              <div
                style={{
                  right: "23px",
                  zIndex: "1",
                  boxShadow: "inset -15px 0px 14px 2px rgb(5,5,5)",
                  overflow: "hidden",
                  height: "50px",
                  width: "46px",
                  display: "flex",
                  position: "absolute",
                  padding: "4px 10px"
                }}
              />
              <div
                style={{
                  overflowX: "auto",
                  overflowY: "hidden",
                  height: "62px",
                  width: "calc(100% - 46px)",
                  display: "flex",
                  position: "relative",
                  padding: "4px 10px"
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    marginBottom: "12px",
                    display: "flex",
                    position: "absolute",
                    height: "calc(100% - 12px)",
                    width: "max-content"
                  }}
                >
                  <a
                    style={{
                      height: "100%",
                      position: "relative",
                      display: "flex",
                      width: "min-content"
                    }}
                    href="https://froth.app"
                  >
                    <img
                      style={{ height: "100%", width: "auto" }}
                      src="https://www.dl.dropboxusercontent.com/s/u9kahqiqiiqse5t/froth%20logo300150.png?dl=0"
                      alt="froth.app"
                    />
                  </a>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(200, 230, 255)",
                        color: "rgb(178, 90, 197)"
                      }}
                      href="https://moldmask.co"
                    >
                      moldmask.co
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        color: "rgb(112, 101, 55)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(212, 171, 95)"
                      }}
                      href="https://humanharvest.info"
                    >
                      humanharvest.info
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(218, 198, 90)",
                        color: "blue"
                      }}
                      href="https://foiegras.life"
                    >
                      foiegras.life
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "white",
                        color: "black"
                      }}
                      href="https://nationalsecuritycasino.com"
                    >
                      nationalsecuritycasino.com
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "#0000fa",
                        color: "white"
                      }}
                      href="https://vaults.biz"
                    >
                      vaults.biz
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(5,5,15)",
                        color: "#92b8daff"
                      }}
                      href="https://vau.money"
                    >
                      vau.money
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "#c39767ff",
                        color: "white"
                      }}
                      href="https://scopes.cc"
                    >
                      scopes.cc
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "#9749ffff",
                        color: "white"
                      }}
                      href="https://thumbprint.us"
                    >
                      thumbprint.us
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "#92b8da",
                        color: "#cfe2f3"
                      }}
                      href="https://browser.glass"
                    >
                      browser.glass
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(225, 100, 170)",
                        color: "black"
                      }}
                      href="https://magnate.company"
                    >
                      magnate.company
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "#3f6aadff",
                        color: "white"
                      }}
                      href="https://actuapedia.com"
                    >
                      actuapedia.com
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(5,5,5)",
                        color: "white"
                      }}
                      href="https://2052.live"
                    >
                      2052.live
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(5,5,5)",
                        color: "white"
                      }}
                      href="https://keybox.email"
                    >
                      keybox.email
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(5,5,5)",
                        color: "white"
                      }}
                      href="https://vianickcarducci.medium.com/im-on-the-blockchain-742e3702721"
                    >
                      blockchain.fart
                    </a>
                  </div>
                  <div
                    style={{
                      marginRight: "4px",
                      display: "flex",
                      position: "relative",
                      height: "min-content"
                    }}
                  >
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(5,5,5)",
                        color: "white"
                      }}
                      href="https://linkedin.com/in/nickcarducci"
                    >
                      nick
                    </a>
                    @
                    <a
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        backgroundColor: "rgb(5,5,5)",
                        color: "white"
                      }}
                      href="https://carducci.sh"
                    >
                      carducci.sh
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "min-content",
                wordBreak: "break-word",
                width: "calc(100% - 46px)",
                display: "inline-block",
                position: "relative",
                padding: "4px 10px"
              }}
            >
              Sustainability, Inclusivity and Accessability
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
              forces that are out to obfuscate and scourge&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://micro-theory.com"
              >
                $82tdebt:$2tcurrencyComponentOfM1
              </a>
              &nbsp;(savings)
              <br />
              <br />
              <span style={{ /**rgb(250,10,88) */ color: "rgb(250,100,100)" }}>
                suffocating inventors
              </span>
              &nbsp;- disturbing opportunity [default-1/42 reposession
              adjunication malfeasance (if debt-didn't exist, for all
              purchases)];&nbsp;
              <span style={{ color: "rgb(180,180,180)" }}>
                not acting to ban counterfeit-in-contract financial-cannibalism
                or rentier-colonisation to launder to rich with bonds
              </span>
              <div
                style={{
                  margin: "4px 0px",
                  padding: "4px 0px",
                  borderTop: "2px solid",
                  borderBottom: "2px solid"
                }}
              >
                Harm, net-agressive self-defense, prevention of others owning
                assets
              </div>
              <span
                style={{
                  color: "rgb(255,240,240)"
                }}
              >
                if you move [not advise w/o intent or neglect to deceive, unless
                under non-state-tort(A5)] people you are at fault
                <br />
                read 'state' as p2s not public service role, see liability of
                product advertising... which should carry same crime of
                intent/negligence non-state-tort...
              </span>
              <br />
              <br />
              <div
                style={{
                  margin: "4px 0px",
                  padding: "4px 0px",
                  borderTop: "2px solid",
                  borderBottom: "2px solid"
                }}
              >
                <span style={{ color: "rgb(80,220,0)" }}>
                  Competing with customers
                </span>
                &nbsp;- growth causes consterNation
              </div>
              <span
                style={{
                  color: "rgb(240,255,245)"
                }}
              >
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
                  any tax or debt otherwise not only is involuntary slavery and
                  a trust-building monopsony by the government, their
                  contractors and their propograndising conspitators in ratings
                  and education, but debt benefits the bond-holders &
                  interference by tax or credit does nothing for the state of
                  the world or the utilities purchased but raise prices and
                  circumvent Savers who have worked for what they earn
                </span>
                . Saver Party represents the people that work or fund
                entrepreneurs on their&nbsp;
                <a
                  style={{ color: "rgb(150,220,255)" }}
                  href="https://vaults.biz"
                >
                  customers' time
                </a>
                , and do not borrow or lend, and it is good for quality +
                -price. It is an obvious&nbsp;
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
              </span>
              <span style={{ color: "grey" }}>
                &nbsp; Like my stuff? Hire me! 7322331085. I am asking for 4100%
                of what you think is possible. Please collude with Twitter, CNN
                & AP to gaslight people into thinking they want to fulfill my
                wishes for myself by splitting their equity, try not to let them
                on to what is happening
              </span>
              <br />
              <br />
              <div
                style={{
                  marginBottom: "4px",
                  padding: "4px 0px",
                  borderTop: "2px solid",
                  borderBottom: "2px solid"
                }}
              >
                <span style={{ color: "rgb(25,122,158)" }}>
                  International Relations
                </span>
                &nbsp;- Individual World Order
              </div>
              <span
                style={{
                  color: "rgb(240,245,255)"
                }}
              >
                In order to compete with a debt-based country (not because it is
                economically unfair, like a&nbsp;
                <a
                  style={{ color: "rgb(150,220,255)" }}
                  href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy"
                >
                  communist economy is not as strong economically
                </a>
                &nbsp;as a productive && EFFICIENT, micro-controlled/empowered
                by currency concord one), China wars/threatens. However, from my
                historical market studies - world peace would come from the
                understanding of and repairing, as needed, the following:
              </span>
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
          <div
            style={{
              zIndex: 1,
              display: "flex",
              alignItems: "flex-end",
              width: "100%",
              height: "min-content"
            }}
          >
            <App
              inSection={(section) =>
                this.setState({ inSection: section, openMenu: true }, () => {
                  clearTimeout(this.openmenu);
                  this.openmenu = setTimeout(
                    () => this.setState({ openMenu: false }),
                    5432
                  );
                })
              }
              pauseScroll={() =>
                this.setState({ offScroll: true }, () => {
                  clearTimeout(this.offScroll);
                  this.offScroll = setTimeout(
                    () => this.setState({ offScroll: false }),
                    5432
                  );
                })
              }
              landedPresentation={
                this.state.landedPresentation && this.state.openMenu
              }
              openMenu={this.state.openMenu}
              scrolling={this.state.scrolling}
              scrollTop={this.state.scrollTop}
              top={this.state.top}
              section={this.state.inSection}
              goToTop={() =>
                this.setState({ highlightLaw: true }, () => {
                  setTimeout(
                    () => this.setState({ highlightLaw: false }),
                    10000
                  );
                  window.scroll({ top: 0, behavior: "smooth" });
                })
              }
            />
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
