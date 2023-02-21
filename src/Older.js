import React from "react";
import ReactContactForm from "react-mail-form";
import GunSafety from "./GunSafety";
import PollingFraud from "./PollingFraud";
import Immigration from "./Immigration";
import Cable from "./Dropwire";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SocialIcon } from "react-social-icons";

export default class Older extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      utahVsHouston: true,
      openrelief: false,
      openForm: false,
      openElement: false,
      why: false,
      showM1: true
    };
    this.NEW = React.createRef();
    this.RENTIERCOLONIALISM = React.createRef();
    this.ABUSEOFPOWER = React.createRef();
    this.WARONPOVERTY = React.createRef();
    this.GUNSAFETY = React.createRef();
    this.POLLINGFRAUD = React.createRef();
    this.FALSEADVERTINHOUSE = React.createRef();
    this.IMMIGRATION = React.createRef();
    this.OWNERSHIPFRAUD = React.createRef();
    this.FALSEADVERTINSENATE = React.createRef();
    this.INSURANCEFRAUD = React.createRef();
    this.VIRUS = React.createRef();
    this.MONOPOLY = React.createRef();
    this.EDUCATION = React.createRef();
    this.NULLHYPOTHESIS = React.createRef();
    this.SECURITIESFRAUD = React.createRef();
    this.SYSTEMICINEQUALITY = React.createRef();
    this.MISSION = React.createRef();
    this.EARLYCOMMS = React.createRef();
    this.defense = React.createRef();
    this.navbar = React.createRef();
    this.invite = React.createRef();
    this.scrolllto = React.createRef();
    this.marx = React.createRef();
    this.spittle = React.createRef();
    this.gdp = React.createRef();
    this.vault = React.createRef();
    this.bcell = React.createRef();
    this.biden = React.createRef();
    this.tea = React.createRef();
    this.UUID = React.createRef();
    this.bail = React.createRef();
    this.IRS = React.createRef();
    this.flag = React.createRef();
    this.decide = React.createRef();
    this.host = React.createRef();
    this.fintech = React.createRef();
    this.gdp1 = React.createRef();
    this.foreignpolicy = React.createRef();
    this.nsfFraud = React.createRef();
    this.italy = React.createRef();
    this.populism = React.createRef();
    this.nextspittle = React.createRef();
    this.baltimore = React.createRef();
    this.royalty = React.createRef();
    this.cease = React.createRef();
    this.desist = React.createRef();
    this.valuation = React.createRef();
    this.politics = React.createRef();
    this.cityhall = React.createRef();
    this.citadel = React.createRef();
    this.nra = React.createRef();
    this.china = React.createRef();
    this.ftc = React.createRef();
    this.brookings = React.createRef();
    this.booker = React.createRef();
    this.jewels = React.createRef();
    this.insurance = React.createRef();
    this.covidrelief = React.createRef();
    this.experts = React.createRef();
    this.stats = React.createRef();
    this.employmentHouse = React.createRef();
    this.colonization = React.createRef();
    this.trueGDP = React.createRef();
    this.education = React.createRef();
    this.congressVsCongress = React.createRef();
    this.squatting = React.createRef();
    this.jhuecon = React.createRef();
    this.collective = React.createRef();
    this.ronInsurance = React.createRef();
    this.livingWage = React.createRef();
    this.goa = React.createRef();
    this.takingCredit = React.createRef();
    this.electionTech = React.createRef();
    this.newsy = React.createRef();
    this.Oooreily = React.createRef();
    this.homebuilder = React.createRef();
    this.covidKills = React.createRef();
    this.grandmaMentality = React.createRef();
    this.oldFluExclusion = React.createRef();
    this.employmentOfOne = React.createRef();
    this.singleSourceOfTruth = React.createRef();
    this.jan2018 = React.createRef();
    this.savingsRate = React.createRef();
    this.socialism = React.createRef();
    this.twenty = React.createRef();
    this.bidask = React.createRef();
    this.compoundGramm = React.createRef();
    this.disclosure = React.createRef();
    this.jury = React.createRef();
    this.dvNotion = React.createRef();
    this.bobTheBuilder = React.createRef();
    this.financeKills = React.createRef();
    this.cold = React.createRef();
    this.fraud = React.createRef();
    this.starve = React.createRef();
    this.drugs = React.createRef();
    this.policeUX = React.createRef();
    this.injury = React.createRef();
    this.sellingOut = React.createRef();
    this.whyBad = React.createRef();
    this.travellingIndividuals = React.createRef();
    this.dispair = React.createRef();
    this.fasterWithCounterfeit = React.createRef();
    this.technicallyIllegal = React.createRef();
    this.sanjay = React.createRef();
    this.quality = React.createRef();
    this.mutilation = React.createRef();
    this.planetary = React.createRef();
    this.beast = React.createRef();
    this.billBiden = React.createRef();
    this.trueProductivity = React.createRef();
    this.capitalGains = React.createRef();
  }
  //https://twitter.com/Nickcarduccii/status/1304091972496510976?s=20

  componentWillUnmount() {
    clearTimeout(this.resizer);
    clearTimeout(this.mounting);
    clearTimeout(this.scrollchange);
  }
  componentDidUpdate = (prevProps) => {
    if (
      !this.props.ios &&
      this.props.scrolling &&
      this.props.scrolling !== prevProps.scrolling
    ) {
      clearTimeout(this.scrollchange);
      this.scrollchange = setTimeout(() => {
        const newOffsetTop = this.NEW.current.offsetTop;
        if (this.props.scrollTop > newOffsetTop) {
          const newHeight = this.NEW.current.offsetHeight;
          if (this.props.scrollTop < newHeight + newOffsetTop) {
            this.props.inSection("New");
          } else {
            const RentOffsetTop = this.RENTIERCOLONIALISM.current.offsetTop;
            const RentHeight = this.RENTIERCOLONIALISM.current.offsetHeight;
            if (this.props.scrollTop < RentHeight + RentOffsetTop) {
              this.props.inSection("Rentier-Colonialism");
            } else {
              const abuseOfPowerOffsetTop = this.ABUSEOFPOWER.current.offsetTop;
              const abuseOfPowerHeight = this.ABUSEOFPOWER.current.offsetHeight;
              if (
                this.props.scrollTop <
                abuseOfPowerHeight + abuseOfPowerOffsetTop
              ) {
                this.props.inSection("Abuse of Power");
              } else {
                const warOnPovertyOffsetTop = this.WARONPOVERTY.current
                  .offsetTop;
                const warOnPovertyHeight = this.WARONPOVERTY.current
                  .offsetHeight;
                if (
                  this.props.scrollTop <
                  warOnPovertyHeight + warOnPovertyOffsetTop
                ) {
                  this.props.inSection("War on Poverty");
                } else {
                  const gunSafetyOffsetTop = this.GUNSAFETY.current.offsetTop;
                  const gunSafetyHeight = this.GUNSAFETY.current.offsetHeight;
                  if (
                    this.props.scrollTop <
                    gunSafetyHeight + gunSafetyOffsetTop
                  ) {
                    this.props.inSection("Gun Safety");
                  } else {
                    const falseAdvertInHouseHeight = this.FALSEADVERTINHOUSE
                      .current.offsetHeight;
                    const falseAdvertInHouseOffsetTop = this.FALSEADVERTINHOUSE
                      .current.offsetTop;
                    if (
                      this.props.scrollTop <
                      falseAdvertInHouseHeight + falseAdvertInHouseOffsetTop
                    ) {
                      this.props.inSection("False Advert in House");
                    } else {
                      const pollingFraudHeight = this.POLLINGFRAUD.current
                        .offsetHeight;
                      const pollingFraudOffsetTop = this.POLLINGFRAUD.current
                        .offsetTop;
                      if (
                        this.props.scrollTop <
                        pollingFraudHeight + pollingFraudOffsetTop
                      ) {
                        this.props.inSection("Polling Fraud");
                      } else {
                        const immigrationHeight = this.IMMIGRATION.current
                          .offsetHeight;
                        const immigrationOffsetTop = this.IMMIGRATION.current
                          .offsetTop;
                        if (
                          this.props.scrollTop <
                          immigrationHeight + immigrationOffsetTop
                        ) {
                          this.props.inSection("Immigration");
                        } else {
                          const ownershipFraudHeight = this.OWNERSHIPFRAUD
                            .current.offsetHeight;
                          const ownershipFraudOffsetTop = this.OWNERSHIPFRAUD
                            .current.offsetTop;
                          if (
                            this.props.scrollTop <
                            ownershipFraudHeight + ownershipFraudOffsetTop
                          ) {
                            this.props.inSection("Ownership Fraud");
                          } else {
                            const falseAdvertInSenateHeight = this
                              .FALSEADVERTINSENATE.current.offsetHeight;
                            const falseAdvertInSenateOffsetTop = this
                              .FALSEADVERTINSENATE.current.offsetTop;
                            if (
                              this.props.scrollTop <
                              falseAdvertInSenateHeight +
                                falseAdvertInSenateOffsetTop
                            ) {
                              this.props.inSection("False Advert in Senate");
                            } else {
                              const insuranceFraudHeight = this.INSURANCEFRAUD
                                .current.offsetHeight;
                              const insuranceFraudOffsetTop = this
                                .INSURANCEFRAUD.current.offsetTop;
                              if (
                                this.props.scrollTop <
                                insuranceFraudHeight + insuranceFraudOffsetTop
                              ) {
                                this.props.inSection("Insurance Fraud");
                              } else {
                                const virusHeight = this.VIRUS.current
                                  .offsetHeight;
                                const virusOffsetTop = this.VIRUS.current
                                  .offsetTop;
                                if (
                                  this.props.scrollTop <
                                  virusHeight + virusOffsetTop
                                ) {
                                  this.props.inSection("Virus");
                                } else {
                                  const monopolyHeight = this.MONOPOLY.current
                                    .offsetHeight;
                                  const monopolyOffsetTop = this.MONOPOLY
                                    .current.offsetTop;
                                  if (
                                    this.props.scrollTop <
                                    monopolyHeight + monopolyOffsetTop
                                  ) {
                                    this.props.inSection("Monopoly");
                                  } else {
                                    const educationHeight = this.EDUCATION
                                      .current.offsetHeight;
                                    const educationOffsetTop = this.EDUCATION
                                      .current.offsetTop;
                                    if (
                                      this.props.scrollTop <
                                      educationHeight + educationOffsetTop
                                    ) {
                                      this.props.inSection("Education");
                                    } else {
                                      const nullHypothesisHeight = this
                                        .NULLHYPOTHESIS.current.offsetHeight;
                                      const nullHypothesisOffsetTop = this
                                        .NULLHYPOTHESIS.current.offsetTop;
                                      if (
                                        this.props.scrollTop <
                                        nullHypothesisHeight +
                                          nullHypothesisOffsetTop
                                      ) {
                                        this.props.inSection("Null Hypothesis");
                                      } else {
                                        const securitiesFraudHeight = this
                                          .SECURITIESFRAUD.current.offsetHeight;
                                        const securitiesFraudOffsetTop = this
                                          .SECURITIESFRAUD.current.offsetTop;
                                        if (
                                          this.props.scrollTop <
                                          securitiesFraudHeight +
                                            securitiesFraudOffsetTop
                                        ) {
                                          this.props.inSection(
                                            "Securities Fraud"
                                          );
                                        } else {
                                          const systematicInequalityHeight = this
                                            .SYSTEMICINEQUALITY.current
                                            .offsetHeight;
                                          const systematicInequalityOffsetTop = this
                                            .SYSTEMICINEQUALITY.current
                                            .offsetTop;
                                          if (
                                            this.props.scrollTop <
                                            systematicInequalityHeight +
                                              systematicInequalityOffsetTop
                                          ) {
                                            this.props.inSection(
                                              "Systemic Inequality"
                                            );
                                          } else {
                                            const missionHeight = this.MISSION
                                              .current.offsetHeight;
                                            const missionOffsetTop = this
                                              .MISSION.current.offsetTop;
                                            if (
                                              this.props.scrollTop <
                                              missionHeight + missionOffsetTop
                                            ) {
                                              this.props.inSection("Mission");
                                            } else {
                                              const earlyCommsHeight = this
                                                .EARLYCOMMS.current
                                                .offsetHeight;
                                              const earlyCommsOffsetTop = this
                                                .EARLYCOMMS.current.offsetTop;
                                              if (
                                                this.props.scrollTop <
                                                earlyCommsHeight +
                                                  earlyCommsOffsetTop
                                              ) {
                                                this.props.inSection(
                                                  "Early Comms"
                                                );
                                              } else
                                                this.props.inSection("story");
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }, 300);
    }
    if (this.state.pathname !== this.state.lastPathname) {
      this.toPathname(this.state.pathname);
      this.setState({ lastPathname: this.state.pathname });
    }
  };
  toPathname = (pathname) => {
    if (pathname) {
    }
  };
  resizee = () => {
    this.setState({
      lastHeight: window.innerHeight,
      lastWidth: window.innerWidth
    });
  };
  handleFacebookError = (e) => {
    this.setState({ facebookerror: true });
    console.log(e.message);
  };
  render() {
    const { width } = this.props;
    var styleToApply = {
      wordBreak: "break-word",
      width: "calc(100% - 15px)",
      display: "flex",
      maxWidth: "600px",
      flexDirection: "column",
      alignItems: "center",
      left: "0px",
      justifyContent: "center",
      border: "1px solid",
      color: "black",
      opacity: ".8",
      backgroundColor: "white"
    };
    var tweetsStyle = {
      border: "1px dotted",
      padding: "20px",
      width: "calc(100% - 42px)",
      maxWidth: "600px"
    };

    const settleDropboxFree = true;
    return (
      <div
        style={{
          transform: `translateX(${
            this.props.landedPresentation && this.props.openMenu
              ? "40px"
              : "0px"
          })`,
          transition: `${
            this.props.landedPresentation && this.props.openMenu ? ".3" : ".7"
          }s ease-in-out`,
          color:
            this.props.landedPresentation && this.props.openMenu
              ? "rgb(135,170,205)"
              : "rgb(60,70,85)",
          margin: "7px",
          position: "relative",
          width: "calc(100% - 64px)",
          maxWidth: "600px",
          height: "min-content"
        }}
      >
        <Route
          render={({ location }) => {
            if (location.pathname !== this.state.pathname) {
              clearTimeout(this.pauseRender);
              this.pauseRender = setTimeout(() => {
                if (!this.state.pathname) this.toPathname(location.pathname);

                this.setState({ pathname: location.pathname });
              }, 200);
            }
            return (
              <TransitionGroup key="1">
                <CSSTransition
                  key="1"
                  //key={location.key}
                  timeout={300}
                  classNames={"fade"}
                >
                  <Switch key={location.key} location={location}>
                    <Route
                      //exact
                      path="/privacy"
                      render={(props) => <div />}
                    />
                    <Route
                      //exact
                      path="/about"
                      render={(props) => <div />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
        <span
          style={{
            display: !this.props.top ? "none" : "flex"
          }}
        >
          <span
            style={{
              width: "max-content",
              transition: "6s ease-in",
              top: "0px",
              height: "min-content",
              fontSize: "20px",
              alignSelf: "flex-start",
              color: "white",
              display: "flex",
              textAlign: "left",
              position: "fixed",
              /* backgroundColor:
                !this.state.takeOffScreen && this.props.top ? "blue" : "",*/
              opacity: 0,

              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.whyBad.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightWhyBad: true });
              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightWhyBad: false }),
                10000
              );
            }}
          >
            Demand
          </span>
        </span>
        Redistribution is not even socialism but reappropriating other laborers’
        means as still in market-communism, or gentrification as is price
        elastic or worse, bailout laundering accrual, rentier implausible use &
        non-concurrentable collective bargaining fraud
        <br />
        <br />
        Need to certify before content addressable is available
        <br />
        <br />
        “Socialism is big government growth,” Tom “virus is not just byproduct
        but the cause” Borelli PhD
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/dlddz7l7qqrusie/Screen%20Shot%202021-10-29%20at%2011.02.40%20AM.png?dl=0"
            }
          />
        </div>
        <br />
        "conservative" geraldo calls gentrification "help;" prices are elastic
        retard,&nbsp;
        <span
          style={{
            backgroundColor: "black",
            color: "white"
          }}
        >
          no r&d by market-communist is net gain in comparative advantage
        </span>
        <br />
        “No jobs, no unemployment, are you ok with that, I’m not,” Kilmeade.
        There is no occupy choice candidate, just let them go. Price-fixer
        communist. “Conservatives” feign care but always looking to launder my
        spending for bonds
        <br />
        <br />
        "how the tax-payers feel about this?" Kraisman ignoring savers, not
        children paid tax payer vacation
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/9a6er85tzhd8sag/Screen%20Shot%202021-10-29%20at%2010.07.25%20AM.png?dl=0"
            }
          />
        </div>
        <br />
        "Pay fors aren't there for the $3.5t over ten years," and there isn't a
        problem with hald $4t.yr federal spending normal being half by debt?
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/yyyxgjfo4bnmaia/Screen%20Shot%202021-10-29%20at%2010.01.17%20AM.png?dl=0"
            }
          />
        </div>
        “This should be the job of the employer.”
        <br />
        “Conservatives,” think gentrification (by non-concurrentable collective
        bargaining fraud) by private industry is better than public
        <br />
        <br />
        "how we can all live to 100, at least," highest cohort that which excess
        deaths nor age-standardization accounts for is lowering, it was rising
        as sewage is more prevalent. We wrinkle at 80 everytime, an indication
        of average Deaths
        <br />
        delusional
        <br />
        go get a lyposuction, grocer. truncated sales tax enough slandering
        socialism-labor-means as gentrification & ppp trust-building existing
        small business
        <br />
        <br />
        ask to touch
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/dpl6mtwr0ngzcgn/Screen%20Shot%202021-10-29%20at%203.33.34%20PM.png?dl=0"
            }
          />
        </div>
        They literally do this to you in nj without evidence. I think some
        employees get a&nbsp;
        <a href="https://truncatedsalestax.com">fetish-kink</a>&nbsp;of it: the
        power-malfeasant, insurance missappropriating funds by
        non-concurrentable collective bargaining fraud abetting invoices that of
        another laborers' means usurped, surrendered and loitered-upon, 501c3
        dissolved-to-Rudy-Guiliani-style-monopsony-plantation-trust-building-free-rider-mutable-busy-work-r&d-gentrification
        <br />
        <br />
        “Cuomo went with an order by the NY Gov against a countervailing law, to
        say this is political is _,” Elise Stefanic
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/ntr2b21ahfqnfas/Screen%20Shot%202021-10-29%20at%204.45.13%20PM.png?dl=0"
            }
          />
        </div>
        "he married a divorcee, how is he catholic," Jesus said adultery is
        fine, he never said he would die like animal sacrifice, he said he was
        going to die BECAUSE of money-changing sins
        <br />
        <br />
        90-days, or claim insanity to get off, like claim disobedience. Why does
        the state fold like a cheap camera for this duress? It’s a false move,
        like blundering your king in chess.
        <br />
        <br />
        Making a childcare worker instead of an actual worker who takes care of
        their owbn responsibility is an economic issue, comparative advantage
        wrong way, retarded self-harm
        <br />
        <br />
        People with kids with get the upper-hand over the youth with the build
        back better and infrastructure plan
        <br />
        <br />
        Bipartisans want to gentrify and libertarians don't want to regulate
        <br />
        <br />
        Rudy Giuliani: "Marxists brainwash: socialist, communists, whatever you
        want to call it," mal-nomenclature is how you brainwash.
        <br />
        <br />
        "down to 1% after having vaxx not tested," Curtis Sliwa learn how to
        count you fucking nut
        <br />
        <br />
        Keep children behind by making trade secrets closed source” Phil Murphy
        ad
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/j8vblsfymf3mf1e/Screen%20Shot%202021-10-28%20at%205.01.56%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        "Liberty-loving-latino," calls a government legitimate after saying
        socialists gentrify like Democratic-socialist-progressives are usurping
        the nomenclature, a plural-majority wants dead weight out of public and
        private exchanges (settle and in-scope)
        <br />
        <br />
        most of new debt $3k/day/person is private
        <br />
        Federal spending beyond article 4 truncated sales tax, $4t/yr that is
        normal while 1.1*currencyComponentOfM1/yr = gdp without bonds, before
        the covid fraud of excess deaths and age standardization not accounting
        for cohort,
        <br />
        Please call federal spending gentrification, not socialism
        <br />
        Socialists don’t want to reappropriate the means of another nor move
        without scientific consensus without hung jury that is 11 out of 12
        people that aren’t in the industry, in fact, any rentier or supply nor
        demand that isn’t labor is dead weight
        <br />
        <br />
        Now communism means government gentrification but Marx was talking about
        Odessa-culture, I’m 5th generation Polish-Italian American, we fled
        after the pogroms and then the world wars happened, because of debt, not
        the price of oil which is merely a by-product
        <br />
        <br />I won't give wrong answers just to pass
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/cjj51370ieslvrv/Screen%20Shot%202021-10-28%20at%202.51.04%20PM.png?dl=0"
            }
          />
        </div>
        "last I checked, government is for infrastructure, public safety and _,"
        article 4 says only safety with scientific consensus, regulations of
        finite producer inability to self-regulate too.
        <br />
        Republicans want to own infrastructure instead of margin-target
        <br />
        gdp is prices*hours*trades, which isn't productivity, only
        price-deflation over hours is...
        <br />
        <br />
        powers don't want me to weigh in on this, but allow
        pro-invoice-conservatives to be on jury exclusively?
        <br />
        “Voting for old people who cannot do it themselves,” what makes you
        think they should be voting except for their money? The measure of
        strain to assess their desires should equate the proportional impact of
        1/population to 1/1
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/34pksun7fl4u5sl/Screen%20Shot%202021-10-28%20at%201.12.26%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        If he is so young and impressionable, he shouldn't be lose, talking
        about ageism
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/ofkyoini40c33r5/Screen%20Shot%202021-10-28%20at%2011.44.45%20AM.png?dl=0"
            }
          />
        </div>
        <br />
        “I have a degree in economics,” _ qualifies himself to say something to
        the effect of, “production tax hits consumers,” a microeconomic notion.
        They will fail you in macroeconomics if you are anti-debt
        <br />
        <br />
        "children is 000.1% outputting virion," Bill O'Reilly. Gotta retire
        <br />
        <br />
        “Libraries should be able to have pornography, people should be able to
        have a look,” says Rich Valdes. “Marxists Balkanize people.”
        <br />
        <br />
        why wouldn't you say wasteful or gentrifying?
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/ln3wkwjwdmjokpz/Screen%20Shot%202021-10-27%20at%206.18.51%20PM.png?dl=0"
            }
          />
        </div>
        Republicans say they want to change America, but not change it on the
        same lines of waste, entrapping voters with scams
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/j0el9wnostni2pw/Screen%20Shot%202021-10-28%20at%202.54.40%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        Common sense isn't proof, often is feigned like sun around earth.
        Sometimes you need to fight an eye for an eye. Give me a list of twitter
        employees to ban from my products and cash advance to $TBT
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/apo921wld4i4u7o/Screen%20Shot%202021-10-27%20at%205.26.11%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        "when gas prices go up, food prices go up," where do you think it starts
        Navarro? Won't admit it is debt-inelasticity start because private is
        most of $3k/day/person
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/m70en6sc2y5oawg/Screen%20Shot%202021-10-27%20at%205.18.26%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        pay taxes twice to go public, so nice
        <br />
        Get up off the couch and go to work rentier (20x/person 55+/millennial
        rental-income dead weight, half 2.8m continuing claims is 65+), she just
        wants labor to give up their copyrights and profits. people her age
        worked more than triply less than we do now because of the free-market
        inability to regulate itself in the credit-cycle, if free-market at all
        means accrual, implausible landlord use and collective bargaining
        non-concurrentable fraud. population growth was 3% when gdp/p was
        constant before 1913, so population isn't why tech advancement is going
        in reverse of its plan
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/ij95u3cx8yehvlj/Screen%20Shot%202021-10-27%20at%205.10.13%20PM.png?dl=0"
            }
          />
        </div>
        do not describe racketeering nor superposition as politics, that which
        is lawful analysis of science (no hung-jury)
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/becb0wnalsl1u9y/Screen%20Shot%202021-10-27%20at%205.03.08%20PM.png?dl=0"
            }
          />
        </div>
        “This says a lot about the way we value our children,” DiBlasio speaking
        of money-laundering for bonds & intermediate-supply-demand
        bid-price-inelasticity to ask instead of allowing children to earn
        wealth. Children will pay for tax-payer vacation? Savers do, and
        children opportunity is taken in this way especially with truancy and
        gentrification
        <br />
        <br />
        “If they feel like they aren’t getting treated well they think they are
        relegated,” as children chore and parents loiter borrowing assets
        laundered to bonds and gentrified, colonialized & monopsonized
        <br />
        <br />
        <div style={{ display: "flex" }}>
          {!this.state.facebookerror && (
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F108986904353225%2Fvideos%2F4404002109665977%2F&show_text=true&width=220&t=0"
              style={{
                width: "200px",
                maxWidth: "100%",
                height: "250px",
                border: 0,
                position: "relative"
              }}
              title="https://fb.watch/8vc_WNxnzq/"
              onError={this.handleFacebookError}
            ></iframe>
          )}
          Stephen moore thinks a flat tax instead of a flat tax's flat tax
          (truncated sales tax) is proper tax-payer vacation bond laundering.
          10% debt-service, 50% debt-spending, this douche wants to flat tax it
          away now for gentrification even anything beyond article 4
        </div>
        <br />
        What happens when you get to the top, you pull up the ladder so no one
        can climb, that's why we need the free enterprise system [and
        education]," Stephen moore assuming free enterprise is well enough to
        provide sufficient competition for self-regulation of duress without
        hung-jury in minimal-viable-product
        <br />
        <br />
        Wellcare says 'free' concurrent collective bargain fraud of
        non-concurrentable nanny-care-hours or outlay-schedule...
        <br />
        <br />
        third party beneficiary in contract law and implausible landlord use,
        Todd. take your time wait for customers, borrowers loiter
        Non-concurrentable collective bargaining is fraud
        <br />
        <br />
        Can’t threaten on basis of Mal-tech instead of actual illegality
        <br />
        <br />
        "Companies amass great wealth," is not, according to Rand Paul, net loss
        of individual labor savings for private communes
        <br />
        <br />
        The research that we [monopsonize],” Fauci
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/5mzw9vrrcem1l4s/Screen%20Shot%202021-10-27%20at%204.08.38%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        Wuhan&nbsp;<a href="https://youtu.be/Weqb9KrQ-TU?t=21">failed</a>
        &nbsp;in&nbsp;
        <a href="https://www.nature.com/articles/d41586-019-00991-4">
          inceminating cell
        </a>
        , mimicked what is to be expected in nature, then tested for it.
        <br />
        <br />
        "welcome to forward, we have world-class doctors with fraudulent
        collective bargaining on non-concurrentable hours," Carducci
        <br />
        "insurance is a net loss," Krugman"
        <br />
        insurance is prisoners' dilemma for useless price-inelasticity, incited
        by third-perty-beneficiary usurped invoicing
        <br />
        <br />
        threats/escalation when malfeasance in countervailing precedence over
        conflicting law is all we have. if tea is taken beyond free rider
        immutable utility, and police say that's the law, precedence says we
        can&nbsp;<a href="https://teapharmacy.party">fight back</a>.
        <br />
        <br />
        "70% more infection in prison," Durbin says without accounting for
        testing denom
        <br />
        <br />
        Curits Sliwa would win if he promised cap rent 5 units or 30 days (
        <a href="https://30under5.us">implausible landlord use</a>)
        <br />
        <br />
        Dumb down voters with split electorate across most-important issues,
        trust-built educational trade-secrets
        <br />
        <br />
        Republicans and Democrats think they regulate better and save more money
        if the roads are owned by them instead of target margin networks.
        Libertarians don't want to regulate and greens/people don't want to take
        profits away from the bond-holders
        <br />
        <br />
        <div style={{ backgroundColor: "rgba(255,220,255)" }}>
          “All the give instead of the get here: the price,” Chris Cuomo. you
          can't negotiate mediacre for all without invoices and bring demand
          forward with non-concurrentable collective bargaining hours or outlay
          premium schedule
          <br />
          A.K.A. Give a little on total price to get it now for lower money
          payment
          <br />
          <br />
          Mark Levin says you save monthly payments without amortizing total
          loss or bid-price prohibition, Marx was against this, discussing the
          cause of Odessa pogroms. Marx wanted education open-source, not
          gentrified like your kind colonializes
        </div>
        <br />
        Thru no fault of your own, unless you agreed to make it your fault in
        false collective-bargaining," feigning press-sec Sean Spicer
        <br />
        <br />
        "Bond traders control the economy," some idiot wabc wall st douche
        cajoles bonds as a market
        <br />
        <br />
        “We don’t know how he got it, but it was definitely a person,” Dr.
        ("government expert," huge conflict of interest) Dimitri A Christakis
        <br />
        <br />
        Socialists do not like busy work as GOP/Dems/Libertarians/Greens/People
        all want. only LaborSaver/Socialists/Marxists/Pareto/Occupy want. we
        want to retire you, bipartisans think 6m/20m 70+ when 25-54/3 now 6m/40m
        unemployment, 65+ hald confinuing claims privileged
        <br />
        <br />
        borrowers loiter on bartender-money, chores jigger profits from
        consumers
        <br />
        <br />
        <a href="https://nationalsecuritycasino.com">
          Alan Dersh, is accrual free market
        </a>
        ? Insane zealot, go out to sea
        <br />
        <br />
        Chris Salcedo says profits, untaxed to taxed, is not a tax cut for
        income, nor that profit is net loss of income (hypocrisy).
        <br />
        tax cuts for corporate profits only helps consumers if profits are
        outlaid immediately to labor, or margins-tighten (pridce-cut to emulate
        infinite producers in supply and demand&nbsp;
        <a href="https://froth.app">Pareto efficient</a>&nbsp;reasoning)
        <br />
        <br />
        "we know dang well we don't have to do[, because it is involuntary
        service of laurels contributed and available without retribution of
        negative prisoners' dilemma nuclear],"
        <br />
        "infection" retarded, self-harming science (Washington Times)
        <br />
        <div style={{ width: "200px" }}>
          <a href="https://www.mun.ca/biology/scarr/4270_Redi_experiment.html">
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/bu1fvbrn2d7bjs3/redi.jpeg?dl=0"
              }
            />
          </a>
        </div>
        <br />
        the right and left claim science without actually proving virus
        production without bacteria first-time-asymptomatic testing
        <br />
        “Not enough money to do what right [per CDC racketeering of
        free-rider-mutable innovation-competition trust-build like a good
        fucking republican-communist] have changing basis and testing method?
        Nothing to compare it with! Just use event/population Epiology
        correlation, don’t track individuals, Bo Snerdley, you dumb bastard
        <div style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/yhzd1sq7zcovq7h/Screen%20Shot%202021-10-26%20at%204.24.42%20PM.png?dl=0"
              }
            />
          </div>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/jddadkpukyj2qbd/Screen%20Shot%202021-10-26%20at%204.24.59%20PM.png?dl=0"
              }
            />
          </div>
        </div>
        <br />
        "Cultural Marxism," makes no sense, as much of big-government socilism.
        Do not slander Marx with this nonsense, prick
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/ip2vr5aqdmtjons/Screen%20Shot%202021-10-26%20at%204.18.12%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        "Wants to destroy banks[, that is not GOP]," says&nbsp;
        <a href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963/">
          Ron Johnson
        </a>
        <br />
        credit cycle is useless when timelessplaydayroyalty scoped for
        industry-type for p2p while investment banking reclused to equity as
        actually able to be collective-bargain, bona-fide.
        <br />
        <br />
        <span
          style={{
            color: "white",
            backgroundColor: "rgb(155,50,80)"
          }}
        >
          REVERSE DON'T CANCEL: "pandemic," while bacterial-infection always
          makes virus and virus doesn't inceminate-cell, is insignificant and
          leap of faith hung-jury-permits? Distraction from third party
          beneficiary precedence & non-concurrentable collective bargaining
          fraud malfeasance
        </span>
        <br />
        <br />
        Anti-never-governor-marx
        <br />
        <a
          href="https://www.newyorker.com/news/our-columnists/rudy-giuliani-is-a-hot-mess"
          style={{ width: "200px" }}
        >
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/vshdozxxb7jfnsm/Cassidy-Giuliani.jpeg?dl=0"
            }
          />
        </a>
        <br />
        Rudy Giuliani thinks taxing for free rider mutable things for greater
        price inelasticity and government laundering gentrification to bonds is
        better than not having any welfare
        <br />
        Thinks government controlled education is better than trade-secret open
        source
        <br />
        <br />
        "every CEO should opt for vaccine mandates, ...and covid has gone down,"
        DiBlasio laughs, writing down pensions on his own non-consensus
        hun-jury-"science" on a leap of faith that taxonomy of virion is
        anything but bacterial-cell byproduct
        <br />
        <br />
        4.8%+ lymphoma & other blood disorder with excess antibodies
        <br />
        <br />
        Delivery drivers are volunteers, not producers
        <br />
        <br />
        Bottom left, pay the kids
        <br />
        <br />
        Half unemployment contributing claims normal 2.8m again, were/is 65+
        <br />
        <br />
        Medicare means invoices are theft
        <br />
        Green new deal would be to reverse not cancel nor bailout again,
        rentier-laundering
        <br />
        Borrower loitering unretributed
        <br />
        <br />
        **concurrent deficit
        <br />
        *child paid, tax-payer vacations
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/vimlcj4fb5feapo/Screen%20Shot%202021-10-26%20at%203.09.10%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        <span
          style={{
            text: "strike-through"
          }}
        >
          I wouldn't call money laundering** much less not paying it* all back,
          "balancing the budget." Calls reverse debt and collective-bargain bona
          fides, "socialism,"
        </span>
        &nbsp;never-governnor Marx communising for protesting third party
        beneficiary precendence over the law. Hypocites for debt-inelasticity
        for private free-rider-mutables but probably supporter of trust-building
        ppp righty commie as today to have dead weight in other than
        labor-exclusivity in supply and demand of output/hours. bipartisans
        supported cancel bailout 2008 response instead of reverse
        debt:cash*income to amortise reimbursement of down payments upon repo,
        withhold private-communes to concurrentable finished goods (equity) and
        not schedules never by time-rate as opposed to consumer willingness,
        ability and readiness as to not surrender that consent that is of
        another
        <br />
        <br />
        duress beyond mvp isn't voluntary
        <br />
        Need scientific consensus without hung-jury-permit (11/12) to PROtest
        something
        <br />
        <br />
        Only labor and consumers can discriminate without comment, in that
        order. third party beneficiary is law but not precendence
        <br />
        <br />
        Marxism pushed out conservatives at the heterodoxical level at the
        university… make this government for the people, by the people,” that is
        to emulate infinite producers that you attest can self-regulate and find
        Pareto efficiency. Marx called for communism, and race as a critique of
        governments prior (he never ran a government nor economy, just critiqued
        the credit cycle)
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/pi1goe76w2x4s9c/Screen%20Shot%202021-10-26%20at%2011.54.44%20AM.png?dl=0"
            }
          />
        </div>
        <br />
        Rich Valdez, Mr. Producer on Mark Levin, author of the faux American
        Marxism, advertised insurance as saving money thru Car Shield, to which
        is impossible to collectively bargain without concurrentable schedule of
        mechanic-labor nor outlay, abetting goods as well thru commercial
        banking that is schedule of outlay
        <br />
        <br />
        “Takes out ingredients so it doesn’t spread,” Craig Zuckerman, A shot to
        save the world, a never ending story for a life or death vaccine
        <br />
        <br />
        trade secret investment club, education closed-source at full-bore
        <br />
        <br />
        I’m doing this, “What are [you] hoping to accomplish” By doing it
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/ra3np63fdrif4fl/Screen%20Shot%202021-10-26%20at%2011.07.44%20AM.png?dl=0"
            }
          />
        </div>
        <br />
        Yunkin likes covid recovery, jobs, education, mccauliffe does too. How
        many are actually disaffected from Dems on consumer protection
        <br />
        <br />
        There is no occupy alternative (candidate)
        <br />
        <a href="https://thumbprint.us" style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/p7axgmvuy7nqs3v/Screen%20Shot%202021-10-26%20at%2011.03.15%20AM.png?dl=0"
              }
            />
          </div>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/wh8k7o41wxp5ed2/Screen%20Shot%202021-10-26%20at%2011.02.54%20AM.png?dl=0"
              }
            />
          </div>
        </a>
        <br />
        cops still have my&nbsp;<a href="https://teapharmacy.party">nugg</a>
        &nbsp;in evidence!
        <a href="https://30under5.us" style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/tfj22ykde67ugpb/Screen%20Shot%202021-10-26%20at%2010.54.59%20AM.png?dl=0"
            }
          />
        </a>
        <a href="https://30under5.us" style={{ width: "200px" }}>
          cap rent, don't make landlord whole
        </a>
        <br />
        "keep the tax-payer vacaion paid by our children here, the medical
        research here," as Bachman feigns care of comparative advantage for
        useless inelasticity government gentrification, fine instead of regulate
        to scientific consensus without hung-jury-permit (11/12). money doesn't
        improve ideas (comparative advantage) nor even intermediate-good
        attainment (price-inelasticity of bid-price to ask)
        <br />
        <br />
        wolves in sheep clothing feign care for inflation when debt inelasticity
        is 43x greater & private debt outpaces public debt, total being
        $3k/day/person. Ask who is more occupy, socialists or
        libertarians/GOP/Dems/greens/people. Ask who likes insurance collective
        bargaining fraud, libertarians/GOP/Dems/greens/people
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/4xprbcfvwdwio3u/Screen%20Shot%202021-10-26%20at%2012.54.59%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        Rental(landlord-loitering-laundering-to-lender)-assistance program
        $10.5b people can stay in their homes as appointed by local officials,
        accelerated!" $4t/yr all 2010's was federal spending,
        1.1*currencyComponentOfM1/yr = gdp without bonds on debt, up 20% on
        basis of pandemic that is insignificant if you consider cohort sized
        (WWII life-expectancy ago), and she is only prohibiting ask to meet
        bid-price and cap rent at 5 units to force settlement on rentier that is
        dead weight on supply and demand (both are labor exclusively to emulate
        infinite producers). $170t market cap borrowers loiter infrastructure
        instead of target margin but fines and government gentrification $88t
        bond-value of itself, $2-6t currencyComponentOfM1 checking
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/277y3dnm68jgdi5/Screen%20Shot%202021-10-26%20at%202.09.30%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        “Come in and tell you what your assets are worth in unrealized gains [of
        last trade],” Rep Roger Williams
        <br />
        <br />
        education is a national security issue, Dr. Jill Biden said, 'that any
        country that out-educates the united states, outcompetes the united
        states,' and that is a fundamental national security issue," ignoring
        comparative advantage, Net exports being selling-out, just because you
        don't count treasury share as outstanding doesn't mean you are
        outcompeting, the expenses are before the horse
        <br />
        <br />
        education-tax or concurrent deficit is conflict of interest to have
        trade-secrets
        <br />
        <br />
        Strong stand against forced labor, against slave-labor, anywhere it
        occurs,"
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/9gsu9wzstcpdqp7/Screen%20Shot%202021-10-26%20at%2010.37.30%20AM.png?dl=0"
            }
          />
        </div>
        Macroeconomic, our workers, our businesses," ignoring labor equity and
        future labor (intermetiate-good-monopsony & bond laundering profit on
        net loss without consumers ready, willing & able)
        <br />
        <br />
        Article 4 gentrification
        <br />
        <br />
        <a href="https://froth.app" style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/ynojet5pctsan8l/Screen%20Shot%202021-10-26%20at%2010.37.56%20AM.png?dl=0"
              }
            />
          </div>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/suujobv30e4ckh9/Screen%20Shot%202021-10-26%20at%2010.38.16%20AM.png?dl=0"
              }
            />
          </div>
        </a>
        <br />
        <br />
        Investment, ...democratic path,” press sec defense
        <br />
        <br />
        Democratic civilian rule, ...beyond authority,”
        <br />
        <br />
        "Pandemic" defined beyond insignificant excess deaths among 1.2m/yr
        expected
        <br />
        <br />
        Since I couldn’t legally feign the best interests of saver is Saver
        Party, Democrats are legally bound to provide democracy determined by
        protest-movement or detest thresholds, not 50% as decisions aren’t
        always binary, except for movements of which democrats describes itself
        in this weighted-allocation-of-power
        <br />
        <br />
        "Meanwhile in New Jersey, the worst governor in history plans to
        implement more punitive mandates but won’t admit it before the
        election."
        <br />
        <br />
        cajoled with weed (& no occupy alternative), has 4.8% more blood
        disorder too. Star ledger thinks there is taxonomy of virus other than
        bacteria-cell byproduct & mitosis 🤣 like a bunch of antimatter or
        evolutionary trait
        <br />
        <br />
        Sid Rosenberg says to take the vax because the government is usually
        tells you to do things, thinks government telling you what to do is not
        an excuse to not get vaxxed
        <br />
        <br />
        Says buying house that is behind on rent… how is that ever a gain in the
        same principle or event relevant to the value of the home, settled?
        Lunatic (mooney)
        <br />
        <br />
        Mark Levin mocks capital gains before cashing out with, "doesn't matter
        that's the value," to somebody complaining, "I don't have that, I
        haven't MADE THE SALE," coming around to bid-price settlement over
        accrual but now coming to realize his hypocrisy in non-concurrentable
        unsettled-sales in commercial banking, time- or general-income-based p2p
        schedule & insurance-non-rollover
        <br />
        <br />
        "I'm for bail reform for one ounce of marijuana," says john Catsimitidis
        in support of&nbsp;<a href="https://teapharmacy.party">pharma cops</a>
        &nbsp; whp need our care to&nbsp;
        <a href="https://truncatedsalestax.com">ween them off bonds</a>
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/7txy3gp2xj871be/Screen%20Shot%202021-10-25%20at%204.38.29%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        "the price of fuel has risen everything," see how republicans and
        libertarians flop while Democrats call canceling instead of reversing?
        the 2008 was bipartisan minority of voters under duress
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/jq8zv88lnlyepme/simpsons-political-party.gif?dl=0"
            }
          />
        </div>
        <br />
        Cannot fix poverty for wage instead of hours for price-deflation
        <br />
        bipartisan dead-weight, libertarians agree lest private hypocracy
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/gy8n55lzlqtfchr/Screen%20Shot%202021-10-25%20at%204.15.13%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        that title while 2008 response was bipartisan...
        <br />
        "Virginia is more diverse in their voting-population than NJ," already
        discluding non-voters without a candidate representing the detesting
        eligible-occupy voters
        <br />
        <br />
        nothing balanced about it; preferse democratic-republic to saver, calls
        the latter "woke," incorrectly, woke is assumptions (a.k.a. malarkey)
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/oghqxg9unqo57ua/Screen%20Shot%202021-10-25%20at%204.06.41%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        <div
          style={{
            backgroundColor: "rgba(230,255,230,.4)"
          }}
        >
          "wuhan killed 700k people in us," who is your G-d? Wuhan FAILED in
          inceminating cell with virus
          <br />
          <br />
          “Spreading it,” means virus comes from a bunch of antimatter, fucking
          retard Peter King;&nbsp;
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            lymphoma
          </a>
          when you don’t listen to me
          <br />
          <br />
          Age standardization & excess deaths do not account for cohort size. -
          froth.app, SaverParty.xyz, teapharmacy.party. Basis rate fallacy by
          changing testing methods, only taxonomy of virus is
          bacterial-infection (
          <a href="https://www.science.org/doi/10.1126/science.aat9691">
            J M Sweere
          </a>
          ), lo antibody onset illness for exclusive function to prevent blood
          clot of viral plaque (
          <a href="https://journals.sagepub.com/doi/full/10.1177/1745691620942516">
            S Cohen
          </a>
          ), only electron microscope snapshot. 4.8% increased-prevalence of
          blood disorder by excess antibodies (
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            D Cohen
          </a>
          ) thru mRNA-sporing-graft. As virion has yet been cell-inception, it
          is a leap of faith to suggest anything other than what is proven:
          every viral-infection starts with bacteria, then mitosis, and virion
          is dead, cellular debris, with an inception exclusively of that in the
          water-bacterial taxonomy
          {" => cell => "}virion, suffices.
        </div>
        <br />
        <br />
        marx described communism as a method to fight against finite producers,
        not gentrification; he would never reappropriate labors' means
        <div style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/8xxupvvi21q91c2/Screen%20Shot%202021-10-25%20at%203.43.06%20PM.png?dl=0"
              }
            />
          </div>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/wx49aio7vdyytti/Screen%20Shot%202021-10-25%20at%203.42.39%20PM.png?dl=0"
              }
            />
          </div>
        </div>
        <br />
        "Lying about how to deal with covid," he is a nut, excess deaths and
        age-standardization doesn't account for cohort size
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/ztmp0jhmh7rm0ww/Screen%20Shot%202021-10-25%20at%203.22.30%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/j3b0n6nban6pff1/Screen%20Shot%202021-10-25%20at%206.04.40%20PM.png?dl=0"
            }
          />
        </div>
        "Socialist agenda pay for healthcare," she has no idea what she is
        saying. labors' means to labor. Marsha Blackburn LIES about tax-payer
        vacation being paid by childen, $3k new debt per person a day, mostly
        private
        <br />
        <br />
        “The only way to find value is to sell, [by delusional-accrual instead
        of Timelesspaydayroyalty scoped for industry-type for p2p only &
        concurrentable-equity only for collective bargaining bona fide]”
        <br />
        <br />
        If gains taxed? losses should be subsidized by that game, worse case”
        Stephen Moore
        <br />
        <br />
        socialism is where there is no dead weight in mostly private debt of
        $3k new debt a day. capitalism is accrual and private-communism
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/otn9egvr3hhxsw0/Graff_Garrett_AIF2021.jpeg?dl=0"
            }
          />
        </div>
        <a href="https://www.garrettgraff.com/">
          retard as a term is to obfuscate self-harmers
        </a>
        , I'm describing the harsh-truth for education, not money you probably
        think WWII was fought on the basis of the aryian race too rather than
        bond laundering
        <br />
        <br />
        finite producers will not regulate and government doesn't need to
        gentrify after century of malfeasance
        <br />
        Big tech are making up their police as they go along," Brian Stelter,
        retard, build-fast right, how about you measure twice before involving
        others. only labor and consumers can discriminate without comment, in
        that order. only risk insulated shorting is 1v1. need scientific
        consensus to desist 11/12
        <br />
        <br />
        "disaster recovery provider," instead of actually uber for fema, but
        non-concurrentable collective bargain
        <br />
        <br />
        <div
          style={{
            backgroundColor: "rgba(230,255,230,.4)"
          }}
        >
          Vaccinated still getting sick, learn about what you are counting,
          fully-capable, self-harming retard (hate that I have to clarify like
          not all retards are self-harm exclusively)
          <br />
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/4vkwcodlsux95uu/Screen%20Shot%202021-10-25%20at%202.55.39%20PM.png?dl=0"
              }
            />
          </div>
          <br />
          profits are net loss of individual savings of labor
          <br />
          labor seazes meand of labor, exclusively supply and demand, no rentier
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/grajiif43z98s7q/Screen%20Shot%202021-10-25%20at%202.37.36%20PM.png?dl=0"
              }
            />
          </div>
          <br />
          If you have antibodies, you are safe." That's wrong, only taxonomy is
          bacteria causes infection (J M Sweere) and antibodies onset illness (S
          Cohen), but clear virion as blood clot plaque only, see electron
          microscope only shows proteins leaving, wuhan failed in making virus
          infect cell
        </div>
        <br />
        tax payer vacation "will be paid by children," without accounting for 44
        years cannot even use 1.1*currencyComponentOfM1/yr = gdp without bonds
        on debt, when $4t/yr fed spend.
        <br />
        <br />
        corporate tax is laundering to bond-holders and costs consumers, instead
        of target margins, joe biden wants to bond launder, "cut poverty by
        36%"" without accounting for 11x that inequality. this is not
        investment, it is gentrification uselessly. same utility, appraised
        value beyond consenting bid-priceelasticity
        <br />
        <br />
        most support occupy, plural-majority do and don't vote for any candidate
        yet, no degrowth occupy anti-rent-seeking choice had, without
        understanding the following debt laid concurrent deficit ($4t/yr deficit
        and $3.5t/10-years is increasing the debt, you only mention an item to
        launder and feign) and tax free rider-mutable monopsony beyond article 4
        (illegal)
        <br />
        <br />
        "$42b modernizing airports," when a minority of the population supports
        the free-rider-mutable trust-building and gentrification
        <br />
        <br />
        levies higher, reappropriating the savings of labor
        <br />
        <br />
        prices are elastic, even amtrak, same utility for greater valuation
        instead of consenting free-rider-mutable bid-price or rollover-only bona
        fide collective bargaining
        <br />
        Bipartisans and Libertarians and growth as productivity is costing us
        $3k new debt per person a day, mostly private
        <br />
        third party beneficiary is law but not precedence because of a conflict
        of interest to provide tranquil society
        <br />
        I will beat Menendez in 2025 as an occupy candidate. truncated sales tax
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/mxzsmqxnzn9iuxq/Screen%20Shot%202021-10-25%20at%202.00.40%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        <a href="https://2052.live">8% union jobs, trust-building</a>
        <br />
        most do not want aarp, only 50+ do
        <br />
        state-ran bridges use 40% tolls on debt-service
        <br />
        monopsonize malfeasant regulation racketeering, collective bargaining
        fraud by gentrification and non-concurrentable schedule of hours/outlays
        of max-profit royalty replacing debt-"investment"
        <br />
        "tired of trickle down," is what you do after century of bondage, now
        laundering. only consider welfare after accounts are zero. he just wants
        to bailout or cancel forbidden by previous demand instead of reverse
        debt:cash*income
        <br />
        invest in children and families," says the colonialists
        <br />
        education monopsont, trade-secret trust-building
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <a href="https://www.whitecoatwaste.org/">
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/jyeiyn2r5mwna4z/Screen%20Shot%202021-10-25%20at%2011.04.37%20AM.png?dl=0"
                }
              />
            </a>
          </div>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/o89wbmejgrpcxb9/Screen%20Shot%202021-10-25%20at%2011.14.02%20AM.png?dl=0"
              }
            />
          </div>
        </div>
        <br />
        "creul tax-payer funded, experiment," Nancy Mace on Fauci doggie
        experiments ($25b animal experiments, beagal sandfly experiment worse
        than failure at cell-inception-virus without bacteria, do not compare)
        <br />
        <br />
        It’s a good job, well paid, serve your country, busy work, tho $20k/yr
        working against $1.1m/yr new debt as a parachute packer…
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/mnai2g0qo8xz6hq/Screen%20Shot%202021-10-25%20at%2010.23.54%20AM.png?dl=0"
            }
          />
        </div>
        <br />
        $1.8b lone star program is tax-payer-funded," says this bond laundering
        concurrent deficit & debt claimed to be, "paid for by children" ignoring
        outright debt-inelasticity #TaxPayerVacation
        <br />
        <br />
        voters are only less than 2/3 of people
        <br />
        a plural of majority are occupy && non-voters, not progressive in the
        bond-laundering sense
        <br />
        Billionaire tax affecting about 700 people in the us,” they want to
        fulfill bond value third party beneficiary fraud
        <br />
        CNN asking tax based on value rather than actual cash
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/wx0em55gri9uxef/mranney_photo_.jpeg?dl=0"
            }
          />
        </div>
        Antibodies don’t prevent death, your basis isn’t compiling
        bacterial-disease making different virus, doc Megan ranney
        <br />
        <br />
        <span style={{ fontWeight: "bolder" }}>gentrified, not regulated</span>
        <br />
        “We need money to get the led out, having more jobs is stabilizing,”
        labor monopsony is useless price inelasticity and trust building Debbie
        dingle
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/z5x4zhqbhrc1odn/Screen%20Shot%202021-10-24%20at%208.02.11%20PM.png?dl=0"
            }
          />
        </div>
        “It’s up to us and the state legislatures to prevent voter fraud in 2022
        and 2024,” Seb Gorka, how delusional. We have no chance, they do not
        hire anyone who is willing to solve the problems (without copyrighting
        the code for the illegal corporation that is government such as it is
        now beyond Article 4 & with monopsony so against international/common
        law for human rights as well) nor is pro-occupy to solve the problems.
        Instead, Trump and Biden trust-build with existing complacent business &
        certify it with a big smooch
        <br />
        <br />
        These items are not popular with the voters, much less the people. A
        non-voter is a vote no, no occupy candidates.
        <br />
        Eric Swolwell: "Build back better is a pro-worker and pro-family
        agenda," gentrification of $3.5t/10-years while $4t/yr is normal federal
        spending enough "investing," it is colonialization of rent in labor of
        supply-demand. When registering to vote the eligible voters into
        detesting voters. big government socialism is an oxymoron. People party
        for gentrification
        <br />
        <br />
        You can void any TOS or licensing duress by&nbsp;
        <a href="https://teapharmacy.party">highlighting</a>&nbsp;your ability
        to be bona fide by statements made
        <br />
        <br />
        wages are of intermediate supply-demand too you fucking self-harming,
        fully-capable retard, you cannot use wages as the denominator but the
        hours worked, its very denominator
        <br />
        <br />
        “When you pay people to not work, they don’t go to work. That’s what’s
        going on,” while 2.8m continuing claims is back to normal, the amount of
        work we have to do to live (price-index) doubles every 5 years. Why?
        <br />
        <br />
        A reckless government spending always causes inflation, [but not when
        private industry does it, reasoned by risk propensity of tranching
        non-concurrentable, keeping down payments of third party beneficiary of
        these at best public park deeds upon repo,” Sen. rick Scott
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/1pxu7zqjyutjlk3/Screen%20Shot%202021-10-24%20at%204.43.27%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        'Medicare "bankrupt" in 4 years, ss "bankrupt" in 12 years. I want to
        fix things,' so how excatly do you expect to do that except declaring
        invoices are theft, non-concurrentable schedule of hours or outlays is
        collective bargaining fraud, and reverse debt:cash*income for all future
        debt "investment" be timelesspaydayroyalty scoped for industry-type for
        p2p only.
        <br />
        <br />
        Inject the virus into my eyeballs
        <br />
        <iframe
          style={{ width: "100%" }}
          src="https://www.youtube.com/embed/MTM2Pw73Ol0?start=173"
          title="YouTube video player"
        ></iframe>
        <br />
        <br />
        Registering eligible voters into detest voters
        <br />
        "they deserve it, but people need to return to work," Michael Testa (R),
        1st district nj
        <br />
        {
          //width && <Population width={Math.min(600, width - 100)} /> //HRsT
        }
        <div style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                transform: "scale(-1,-1)",
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/s4ufd1r0tcb46f7/dems%20donkey.png?dl=0"
              }
            />
          </div>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                transform: "scale(-1,-1)",
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/ion2ongqpd23xzk/gop%20logo.jpg?dl=0"
              }
            />
          </div>
        </div>
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              transform: "scale(-1,1)",
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/zgceu1uen2ov9n1/transparentSaverAcorn.png?dl=0"
            }
          />
        </div>
        reverse debt:cash*income, don't launder share-split
        <br />
        unemployment benefits are advocated by bipartisans to prevent bid-price
        from befalling ask
        <br />
        <br />
        Not voting For Jack Citarelli because of weed, though likely still
        pro-collective bargain fraud (& R&D monopsony)
        <br />
        <br />
        Opportunities in this trust-built problem solving economy is granted by
        corporate profits over individual labor savings as supply and demand is
        exclusively labor without public or private dead weight on output/hours
        <br />
        <br />
        "No, you have to choose, pass or a candidate," mark halpern in a
        parallel universe
        <br />
        <br />
        "No, you have to choose, pass or a candidate," mark halpern in a
        parallel universe
        <br />
        Monmouth University Poll isn't an "
        <a href="https://carducci.sh">independent pollster</a>" if they don't
        survey all. no two voters are alike, extrapolation of randomness
        emulated notwithstanding
        <br />
        Detractors are volunteers, or as occupational therapists are
        indoctrinated, “contributors”{/**contributing is critique */}
        <br />
        <br />
        If Ana Guttierez was a male would be be in jail?
        <br />
        <br />
        10% of independents are non-partisan (not-swing); that is only among 88%
        eligible voters, who register && don't vote. nj doesn't vote a lot more,
        by 26% non-voting registered voters. other states do not register
        detractors automatically
        <br />
        <br />
        <a href="http://www.electproject.org/home/voter-turnout/demographics">
          voter turnout
        </a>
        <br />
        <br />
        "jobs!" is rally cry for trust-building. cap rent by 5 units and 30 days
        like employment contracts
        <br />
        _: These debt issues youre referring to are part of what Hitler used to
        scapegoat the jews. I don't know what else you're on about but that's
        not a disputed fact.
        <br />
        <br />
        _: Hitlers fascination with physical appearance had to do with his goal
        of "purity."
        <br />
        <br />
        I’m just curious why Italy fought with them. See Odessa pogroms. It was
        from exclusion of&nbsp;
        <a href="https://journals.openedition.org/monderusse/9324#:~:text=As%20in%20other%20East">
          non-bankers based on non-Jew century before
        </a>
        <br />
        <br />
        _: Germany Italian Japan axis blah blah 2 fascists are better than 1 and
        3 is better than that. They wanted land. Specifically, British middle
        east and n Africa.
        <br />
        <br />
        I would like to learn more about Tunisia too. I think it was just a red
        herring, the aryan race thing. Land and finances was the reason…. In
        that order
        <br />
        <br />
        _: the race part was a fetish
        <br />
        <br />
        it couldn’t be about fetishizing for everyone, most Italians and
        Japanese are black haired
        <br />
        <br />
        _: My understanding is that the obsession w an Aryan race was a nazi
        ideal, not a general fascist one.
        <br />
        <br />
        I don’t know if I would follow the party line if they gave me a gun in
        Ripabottoni. I guess 5th Gen means my family fled 19th century during
        Odessa
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <a href="https://nationalsecuritycasino.com">
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/hvmr35rfuxpm6dy/war%20savings%20limit.jpeg?dl=0"
              }
            />
          </a>
        </div>
        <br />
        "I didn't get everyone healthcare in america, but I got a whole lot of
        healthcare in america. It makes a difference!" Obama screams at the top
        of his lungs, unlike ever before. “When are you going to say no to your
        supporters and sometimes _ is more important than getting elected,”
        Obama
        <br />
        <br />
        <span style={{ fontWeight: "bolder" }}>
          do your own dishes, don't take a vocation off for comparative
          advantage, in a chore
        </span>
        <br />
        "a shot at a good education," Obama cajoles in richmond communist by
        trust-building, much less than finite-producer-monopsony regulation
        <br />
        <br />
        working to keep comparative advantage bound copyright as assets is
        socialist as the defection of rent as such, communism as a
        finite-producer bound tool to unlock means for labor, without the
        manufacturing of consent
        <br />
        There aren't enough workers because there isn't enough working age
        25-54, bitch (allison cosick, cnn)
        <br />
        <br />
        "Free enterprise and prosperity" is not (conservative)
        hours*prices*trades
        <div style={{ width: "200px" }}>
          <a href="https://committeetounleashprosperity.com/services/low-flat-tax/">
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/s2jg9es445ktqfs/CTUP-logo.webp?dl=0"
              }
            />
          </a>
        </div>
        Stephen moore is a fucking tool. I will flatten your flat tax
        <br />
        <br />
        sales tax has much less grounds (in a nomenclative-analysis context)
        than "production" tax
        <br />
        <br />
        Trouble becomes when the book value is of itself over time, unsettled.
        The brilliance of Piketty is calling all accrual, rent, implied by "rent
        as an asset." The value to socialists and microeconomists is when the
        bid-price is met, not in a time-series, but constant - and supply and
        demand is exclusively labor as opposed to public or private output/hours
        dead-weight. Marx, actually, speaks of communism in the way to regulate
        finite producers' credit cycle, but today our economy is ran by
        bipartisan communists (U.S.), trust-building, and "communist" is much
        less about regulation than monopsony by tax beyond free rider immutable
        reason by fostering a network (sewage, police, lawsuits).
        <br />
        <br />
        capital gains, corporate & income tax is transitive towards consumer
        prices, only truncated sales tax would truncate utility*price to the
        free rider immutable symbiosis in consumer affairs, that of sewage,
        police & lawsuits. reverse debt:cash*income inelasticity not cancel nor
        bailout is only way to amortize down-payment reimbursement from borrower
        loiterer to consumer/employer upon repossession
        <br />
        <br />
        Delivery driving is tax-exempt income, food, goods
        <br />
        It’s a donation (like platform fees on super chat donations for free
        information). Maybe not food delivery to a kitchen, for instance
        <br />
        Value added tax is just that, is sales tax trying to imply it is only
        finished goods out of context?
        <br />
        <br />
        Medicare for all defined by invoices are theft by Bloomberg forgoes the
        reality of that being brought forward by non-concurrentable itemization
        as “collective bargaining” fraud
        <br />
        <br />
        "Everyone should be honest, [Biden] is not competent to be president," a
        third of the people think differently!
        <br />
        <br />
        Childcare monopsony, trust-building, what comparative advantage is worth
        a loss of a two industrial workers that looks after their own children
        as raised. Saver party will retire you
        <br />
        <br />a fine line between campaigning and voter harvesting, you would
        think parties can guide early voting during their drives, since it
        started as a campaign rather than a voter education initiative. Still,
        it is survey bias! I can’t imagine pursuing the solution to forbid
        voting guides in campaigns… anyway, non-voters have the plural-majority
        in nj&nbsp;
        <span role="img" aria-label="happy face">
          🙂
        </span>
        &nbsp;they’re all Occupy wall st
        <br />
        <br />
        occupy is a civil rights issue, politics that is not is campaigning for
        office with obscurities as opposed to issues
        <br />
        <br />
        "It's not like wages [hours notwithstanding?] have risen 14%, diapers
        have, stopping monetary po0licy is not good because markets will freak
        out," the money market isn't a market, value is not price.
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/c7l0z966xpin1gt/Screen%20Shot%202021-10-24%20at%207.42.53%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        "We are using 20% more coal than a year ago," Jim Lacamp fails to follow
        up federal spending is 20% greater as well (usually $4t/yr)
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/a7z158tjposoer8/Screen%20Shot%202021-10-23%20at%2012.20.36%20PM.png?dl=0"
            }
          />
        </div>
        SHUT THE FUCK UP GOOMBA
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/3qc4vlf5aqkgdxt/Screen%20Shot%202021-10-23%20at%2012.00.26%20PM.png?dl=0"
            }
          />
        </div>
        “The goal of regulators is to get the best return for retail investors,”
        the best you can do is hold their savings, in aggregate. Only
        comparative advantage widens the pie. Want to help retail in&nbsp;
        <a href="https://teapharmacy.party">a bona fide sense</a>?
        <br />
        <br />
        gdp/p was nearly constant before 1913 amidst 3% population growth. labor
        elasticity of their propensity to work is elastic as consumers is to
        buy, in that way they are the same entity, even the same decision, but
        staggared events
        <br />
        <br />
        "wages divided by prices is productivity," no matter the amount of
        hours? nutcases Ed Yardeni says bond vigilantes definition is his
        context instead of its literal meaning. vigilante means detestation of
        being bound to somebody elses' expenditures and not investing - not bond
        holders. Ed Yardeni, " the real bond vigilantes are those who have the
        potential to resell them" what about those who do not trade credit?
        learn english, they are better described by vigilantes. F your bonds!
        <br />
        <br />
        "Unemployment plus-ups," Larry Kudlow. "Nutrition is the way to keep
        people out of poverty, with economic (price*hours*trades) growth," it's
        actually competition between actors in the economy without dead weight
        of rentier that prevents poverty by bettering
        poorness=(poverty/equality), driving prices down by more diverse &
        concurrentable workers
        <br />
        <br />
        Supply-chain bc population cohort (not gdp/p), profits is net loss of
        individual savers, why delay outlay except fraud, common sense shows sun
        revolves around sun and maggots DO NOT grow on rotting meat, speed of
        light squared cancels out, virua has no taxonomy except bacterial-cell
        byproduct, isolated epiological statement of productivity
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/us9p7fcbt4imk06/Screen%20Shot%202021-10-23%20at%201.08.48%20PM.png?dl=0"
            }
          />
        </div>
        It was already there, they were meant to forecast an excrement-byproduct
        <br />
        "Gain of function research that they wanted to play G-d with," failed
        <br />
        <br />
        “Marxist are athiest” there is no way around it. Jesus banned
        sin-cleansing sacrifice. Follow 1 John 2:22, not 1 Peter 2:10
        <div style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/sbg9e5c12fx1q23/Screen%20Shot%202021-10-22%20at%205.26.48%20PM.png?dl=0"
              }
            />
          </div>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/zj41swz0dnv0otw/Screen%20Shot%202021-10-22%20at%205.27.10%20PM.png?dl=0"
              }
            />
          </div>
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/26oa1zncpwm2d6f/Screen%20Shot%202021-10-22%20at%205.27.26%20PM.png?dl=0"
              }
            />
          </div>
        </div>
        <br />
        Bipartisans want rank choice to work together/scared I will split their
        vote
        <br />
        <br />
        Tax-payers pay for this government," Majorie Taylor Green
        <span role="img" aria-label="side-splitting laughter">
          🤣
        </span>
        <br />
        <br />
        Rudy doesn't understand what Joe Biden means by, "Opec wants to
        negotiate with me," bipartisans gentrify truancy to keep wealth at the
        top
        <span role="img" aria-label="old euro man">
          👨🏻‍🦳
        </span>
        The right to make the wrong choice in business without choice.” Judd
        Dunning.
        <br />
        Cum makes you less depressed so can I include that in my mvp without a
        jury of populous (11/12)
        <br />
        <br />
        Uk won’t allow us to say we want to ---- him, and will allow Biden to
        call us fat?
        <br />
        <br />
        You're not allowed to fire people to save money, in this bipartisan
        economy, so you need to have covid as red herring
        <br />
        <br />
        "significanlty increase funding" Joe Biden share-split isn't more funds
        as in savings
        <br />
        <br />
        "more blankets yeah" Greg Kelly prices are elastic
        <br />
        <br />
        If $4t/yr is federal spending before 3/2020 is normal, why do you think
        there is only $2-6t checking? Where does it go? Travels around
        1.1*currencyComponentOfM1 gdp without bonds, but how like we know that
        is 1/2 credit, & debt service is 1/10, but where does that initial
        monies go? We already know v1 is faked and population is elastic thru
        elasticity since vm = gdp for both monies with and without bonds and
        gdp/p before 1913 is constant
        <br />
        <br />
        this is how I see the&nbsp;
        <a href="https://nj1015.com/older-nj-voters-support-making-huge-yearly-pension-plan-payments/">
          27%
        </a>
        &nbsp;old guy bond vigilantes
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/rvcbcbusi23jh82/john%20wayne.gif?dl=0"
            }
          />
        </div>
        "settle the dollar"
        <br />
        <br />
        without an actual cause, it's your fucking problem, not the drug-user. I
        have to label myself as not being able to concentrate then it is
        copasetic to be released amphetamines thru the front-running AARP & then
        Steve trevalese advertises both hoarding without rollover collective
        bargaining fraud & doctor diagnosis for drug-use? you're fucking bizarre
        <br />
        mental health isn't a disease tool, what is the cause, a malformation?
        <br />
        <br />
        steve trevalese think people are sad because of braim malformation, not
        the accrual nor unproductive gdp/p targeting instead of less hours.
        blames homelessness on mental health instead of 1970 6m/20m unemployed
        and today 6m/40m unemployed, price/hours doubling every 5 years, 10
        times more hours to own a house than when the 50+ were kids
        <br />
        <br />
        like a bully takng your hands, hitting you with them, and asking why you
        are hitting yourself. amphetamines and weed make you a more "productive
        member of society," they are performance enhancing. lenders and
        borrowers have the mental illness, thinking they can promise themselves
        money thru collective bargaining fraud of outlay schedules
        nonconcurrentable, instead of investment banks keeping to equity, and
        borrower-loitering schemes without reimbursing down payments of
        borrowers' customers/employer upon repo, or solving the issue between
        classes now, that we all have to pay thru the supply chain that should
        only constitute labor, by amortizing such with reversing
        debt:cash*income, not cancel not bailout.
        <br />
        <br />
        <span role="img" aria-label="old euro man">
          👨🏻‍🦳
        </span>{" "}
        Individualism because? independent people from AARP cajoles emmigrating
        from trust-built NJ, and detesting immigrants from pre-axis/post-Odessa
        powers
        <br />
        <br />
        $1200/month cheap according to dennis & judy, doubled after 5 years in
        nj, and hours/prices and unemployment working age 6m/40m used to be -10x
        and 6m/20m. stop implausible landlord use, cap 5 units rental-income
        <br />
        <br />I used to rent in long branch for $550/mo, did some backwaiting in
        pier village before bartending in Baltimore
        <br />
        <br />
        One of saver party pillars is capping rent at 5 units or 30 days instead
        of price, to allow people to keep their means, fruits of their labor,
        copyrights and businesses when business slows, just one method to have a
        zero-spending economy, or non-profit & settled trade, where labor is
        both supply and demand
        <br />
        <br />
        supply constraints because of these fuckers:
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/sroytt2fn971zuq/AARP-Logo-500x313.png?dl=0"
            }
          />
        </div>
        <br />
        AARP & nj 101.5 is advertising that 73% of 50+ want to "fund" pensions
        with share-split third party-beneficiary assumed, claiming
        non-concurrentable/rollover collective bargaining is possible and saves
        money... think there is a conflict of interest there to be honest & make
        profit a net loss on savings? “Give them jobs, opportunity,” slave
        driver! Trust building republic and poof, wabc are communist
        reappropriating the means of other laborers’ third party benefits
        <br />
        <br />
        “We protect and serve everyone. Has to be that team concept, working
        together in some form or fashion.” Rights to private communes instead of
        individual-savings/(corporate-profits)
        <br />
        <br />
        Intermediate-demand is labor not the free rider immutable bound state
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/mzumsqo44tn319t/Screen%20Shot%202021-10-21%20at%205.27.24%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        Now Chris Salcedo is describing suppression of detestation as socialist.
        Pathetic
        <br />
        <br />
        Bond vigilantes is not defund the police, they need our care. They have
        a mental disorder, addicted to bonds (try 3under2.us)
        <br />
        "Independents, Republicans and Democrats voted for this," that excludes
        38% non-voters
        <br />
        I'm sorry you're so frusterated Pramila Jayapal
        <br />
        <br />
        <span style={{ fontWeight: "bolder" }}>
          Build Back better, jobs for busy work and labor monopsony for useless
          bid-inelasticity for the same labor
        </span>
        .&nbsp;"I'm not sure what the problem is here, wealthiest corporations
        and individual pay their fair share," by consumers thru corporation
        tax... that's not wealth tax... for childcare monopsony.. laundering
        labor let loss profit to bonds... "democracy actually works?"
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/6cji1tuu4ocl97i/Screen%20Shot%202021-10-21%20at%204.21.33%20PM.png?dl=0"
            }
          />
        </div>
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/dflsur55o16dpmk/Screen%20Shot%202021-10-21%20at%204.19.26%20PM.png?dl=0"
            }
          />
        </div>
        "Never seen Biden jr art," Garland
        <br />
        As a constituent I have standing over school board for indoctrination or
        falsity-endangerment{/* / criminal victimization*/}
        <br />
        Precedence isn’t always legal, in international law.
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/x1kbu0vpn01wc3m/Screen%20Shot%202021-10-21%20at%202.17.45%20PM.png?dl=0"
            }
          />
        </div>
        “Nobody is trying to ban anybody from a process.” process, gentrify,
        appraise, bring forward, trust build intermediate-demand, qualify my
        arse shitting gems
        <br />
        <br />
        “Voting is fundamental to democracy & in many ways is the right from
        which all other rights occur,” other than reciprocity, liberties and
        counterproductive-discrimination. Garland does not view voluntary trade
        without duress nor hung-jury self-evident, nor the weight of non-voting
        as non-consent towards any candidate.
        <br />
        <br />
        “Protect against all threats, and protect civil liberties,” when is
        liberty a threat-unjust? If you don't "handle" third party beneficiary,
        I will.
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/za7j8q472664m3t/Screen%20Shot%202021-10-21%20at%2010.38.25%20AM.png?dl=0"
            }
          />
        </div>
        <br />
        "covid relief accomplishes a lot" Chris Wallace, prices are elastic and
        it is merely trust-building - same labor, reappropriated. Relief from
        what? half 2.8m continuing claims are retirees and deaths,
        hospitalizations were insignificant.
        <br />
        <br />
        supply-demand is labor
        <br />
        <iframe
          style={{
            width: "100%",
            maxWidth: "400px"
          }}
          src="https://www.youtube.com/embed/TjvqmfDvOfQ"
          title="Steve Trevalese nj 101.5 continuing claims-unemployment"
        ></iframe>
        {/*width && <Fraud5 width={Math.min(600, width - 100)} />*/}
        <Cable
          onError={this.props.handleScollImgError}
          src={
            this.state.nofredgraphs
              ? ""
              : "https://fred.stlouisfed.org/graph/graph-landing.php?g=I2Ct&width=500&height=660"
          }
          float="left"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 6]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        “It won’t cost anything.” $3.5t/10years concurrently while $4t/yr normal
        is of deficit & tax costs consumers, labor is supply and semand all else
        dead weight public or private I don't care, profits are net loss from
        savings in private communes, socialist is conservative, not what
        capitalism is now in non concurrentable collectie bargaining fraud,
        $4t/yr is normal and these talking heads are feigning/laundering free
        taxpayer money that consumers (children, now assumptive and
        elders/(savers)), will pay for.
        <iframe
          style={{
            width: "100%",
            maxWidth: "400px"
          }}
          title="Bo Snerdly James Golden Wabc Nick Carducci Unemployment-unemployment"
          src="https://www.youtube-nocookie.com/embed/AJWkVjK7u48"
        ></iframe>
        <br />
        <br />
        “If it were for rural broadband, roads & bridges we wouldn’t have a
        problem”
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/1g3j012i7rbbgy1/Screen%20Shot%202021-10-21%20at%2010.15.14%20AM.png?dl=0"
            }
          />
        </div>
        You don’t have to own them you can regulate margin of networks/finite
        producers
        <br />
        <br />
        The majority of adults, non-voters, disagree
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/siea9wwp4ijk726/Screen%20Shot%202021-10-20%20at%2010.20.26%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        Socialized medicine is where non-concurrentable schedule isn’t
        gentrified and collective bargain fraud. Communist medicine is what we
        have today, private communes.
        <br />
        <br />
        "Most Americans don’t care if it is 1.5 2.5” lemon to Cuomo on the
        handoff
        <br />
        Cuomo replies, "...elderly...," get back to work, they had their whole
        lives to save but they allowed profits of corporates and bet on
        <br />
        <br />
        "1b worldwide, 400m doses in the U.S., that 'we don’t know' is not true,
        parents have valid questions, I hope the vast majority realize the real
        benefit to vaccinate the children.” Fauci on Cuomo
        <br />
        <br />
        80k/day infections on changing testing basis is rate-fallacy.
        “Vaccinated can still spread it, … masks are appropriate & should be
        worn, but not the ultimate protection; they do help, they are effective,
        but vaccine is the gold standard of viral infection [
        <a href="https://froth.app">protection</a>].
        <br />
        <br />
        “A lot of people got it,” actually you just tested for it for the first
        time after making it in a lab. Still is a byproduct, not the cause
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/mh6t38toi4vbyys/Screen%20Shot%202021-10-29%20at%209.39.55%20AM.png?dl=0"
            }
          />
        </div>
        <br />
        Does not decrease deaths, just increases the denominator to find
        itself... this is calculus
        <br />
        Testing rate fixes still show decrease from more appropriate testing
        <br />
        https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00818
        <br />
        https://nytimes.com/2020/08/25/health/covid-19-testing-cdc.html
        <br />
        https://www.cdc.gov/coronavirus/2019-ncov/hcp/testing-overview.html
        <br />
        https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7276051/
        <br />
        Tests were more poignant and by symptoms over time, necessarily
        producing less cases as time went on
        <br />
        <br />
        <div>
          If this continues I will hoard my copyright to only my friends who I
          know are happy and force all stangers to my platform to&nbsp;
          <a href="https://pubmed.ncbi.nlm.nih.gov/12049024/">become happy</a>,
          self-regulation by infinite producer reason be damned
        </div>
        you can expect supply shortages
        <br />
        “For people without a medical or religious reason,” vaxxers think virus
        was created by G-d without a taxonomy, while bacteria & cell evolved
        from water, only ever has virus been made without an already infected
        cell than with bacteria&nbsp;
        <a href="https://www.sciencedirect.com/topics/neuroscience/attenuated-vaccine">
          or mitosis
        </a>
        , and pfizer says bacterial pneumonia is a more acute version of viral
        pneumonia, still produce virion
        <br />
        <br />
        "China can put all data into their AI, we have a lot of catching up to
        do."" Extrapolating human behavior is not an attribute of technology to
        retire on, Gordon G. Chang. Don't pay him no mind, he thinks the virus
        has taxonomy other than bacterial-digestion by cell
        <br />
        <br />
        blood disorder, sewage missed for changing byproduct of paralytic polio
        becoming multiple sclerosis prevalence when fixed for overal
        lifetime/mortality-betterment
        <br />
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/697tzjcrrxwnmr6/Screen%20Shot%202021-10-22%20at%205.46.12%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        “We will never know the accumulative effects except for time and better
        accounting of data.”&nbsp;<a href="https://froth.app">Impossible</a>
        &nbsp;unless you use uuid for whole individual attribute group
        <br />
        <br />
        There is only one way to read data, hack Jha: the right way
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/or6bplt4c6qmvfc/Screen%20Shot%202021-10-21%20at%204.29.45%20PM.png?dl=0"
            }
          />
        </div>
        “The vaccine stops infection,” infection is from bacteria exclusively,
        viruses have no taxonomy except cell when byproduct with bacteria
        exclusively
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/qc6rjg596blhw6x/Screen%20Shot%202021-10-20%20at%209.30.25%20PM.png?dl=0"
            }
          />
        </div>
        pension write downs
        <br />
        “Bonds are paid for by inflation,” is commentary on $170t value backing
        itself in $88t bond value. libertarians are the most hypocritical of
        them all
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/4j7hzrjw77h3jkp/Screen%20Shot%202021-10-20%20at%209.13.25%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        102% inflation is peanuts compared to 4400% debt inelasticity, and $3.5t
        is peanuts to $4t/yr, 1913 gdp/p was constant amongst 3% population
        growth, 5 years doubles price/hours when it should be going the other
        way, and 6m/20m unemployed 25-54/3 working age was copasetic in 1970 but
        not for millennials because Boomers say we will pay for free tax-payer
        money thru our children
        <div style={{ fontWeight: "bolder", color: "purple" }}>
          Don’t let the bipartisans collude with rank choice. Swing voters stay
          home! 🤍🐿
        </div>
        <div style={{ textDecoration: "strike-through" }}>
          Non-voters don’t consent! We have plurality
        </div>
        <div
          style={{
            backgroundColor: "rgba(230,255,230,.4)",
            margin: "10px",
            border: "dotted 1px black"
          }}
        >
          Hi Kash, my name is Nick Carducci, I was booted off Twitter for using
          the scientific term retard to describe the loss of copyright over
          discrimination by untruths that one can extrapolate one voter to
          another with different types, and my grounds are my laurels. I’m
          asking for a list of Twitter employees to ban from my platform in
          reciprocation beyond desistable untruths. They don’t even pay users to
          earn that right, Section 230 can be notwithstanding, for my laurels
          contributed elsewhere are now involuntarily served to them on the
          basis they’ve created.
          <br />
          <br />
          Best,
          <br />
          Nick Carducci.sh
          <br />
          SaverParty.xyz <br />
          Twitter actions presume disabled are prone to self-harm, I’d argue the
          opposite. @nickcarducci 2 years of economic commentary/work was erased
          on November 4, 2020 for my tweet in review of my impressions on my
          tweets complaining about calling and dissuading voters during voting,
          and even days before. That is obvious survey bias. One must shuffle
          the population to achieve some semblance of randomness, & no two
          voters are alike to boot, as opposed to a coin.
        </div>
        <br />
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/g6xara3x3itcted/Screen%20Shot%202021-10-20%20at%208.17.44%20PM.png?dl=0"
            }
          />
        </div>
        “Because of Joe Biden we have massive inflation and a labor shortage,”
        while 1970 6m/20m 25-54/3 unemployed and today 6m/40m
        <br />
        <br />
        You cannot extrapolate disparate types, like voters… have to walk thru
        the abcs for mercedez schlapp and Sean spicer. swing voters stay home,
        they all say to not worry, children will pay for the free tax-payer
        money
        <br />
        <br />
        Today's bid-price fixed to bizarre & grandiose-ask is not, today's
        price, brought forward thru non-concurrentable collective bargain fraud,
        implausible landlord use intent above 5 units or 30 days to "make use
        of" or upon loitering & laundering borrowers' employers, supply and
        demand that isn't labor is ALWAYS dead weight, is earth revolves around
        sun, cross multiply cancels out c^2, e=m is troll like C+I+G is
        redundant, NE is selling out, P is integral so keep gdp/p constant and
        hourse under price-deflation....
        <br />
        <br />
        “Unvaccinated give you the virus,” Democrats
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/5y4on3cgihql6je/Screen%20Shot%202021-10-20%20at%205.24.17%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        “She is talking about Colin Powell there,” Republicans
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/a4cnwjsvrbfkdi2/Screen%20Shot%202021-10-20%20at%205.22.50%20PM.png?dl=0"
            }
          />
        </div>
        <br />
        “It comes from you exclusively, it does not spread” Saver
        <br />
        <br />
        Libertarians are hypocrites for fractional reserve in contract
        <br />
        Build back better will be paid with debt because concurrent deficit
        enables that. Money laundering 101, take a class, take a seat
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/tx0bx2gld14xb5q/Screen%20Shot%202021-10-20%20at%204.19.12%20PM.png?dl=0"
            }
          />
        </div>
        “Commercial flights that the tax-payer is paying for,” Marsha Blackburn
        cajoles bipartisan monopsony by bondage.
        <br />
        <br />
        Amortize reimbursement of down payments upon repo by reverse
        debt:income, all future debt “investment” for p2p only in
        timelesspaydayroyalty scoped for industry-type, ween Marsha Blackburn
        off bonds, truncated sales tax sewage police and reserve collective
        bargaining to concurrentable schedules, like goods or rollover tech, not
        hours of labor.
        <br />
        <br />
        38% non-voters is not consent, even if they could to redistribute the
        means of another laborer, or gentrify their market of which only labor
        is supply and demand, and profit is merely a net loss of savings
        <div style={{ width: "200px" }}>
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/441o51drifqokb4/Screen%20Shot%202021-10-20%20at%204.02.41%20PM.png?dl=0"
            }
          />
        </div>
        "You don't have to do follow vaccine mandates, Roe v Wade provides
        privacy." says the simp for law and common sense over exclusive truths
        of discrimination before lawful application of science in duress of
        minimal viable product without hung-jury
        conviction/permittance/desistation else enslavement of my LAURELS.
        finite producers is not a choice, only consumers and labor can make
        their bid without comment
        <br />
        <br />
        John McGlaughlin online says that 2020 polls were incorrectly towards
        Trump because libs made it so." Isn't it more likely they didn't turn
        out in same proportion?
        <br />
        <br />
        <div style={{ backgroundColor: "rgba(230,255,230,.4)" }}>
          Growth doesn’t mean anything good, profits are a net loss, let me tell
          your bipartisan monopsony listeners, finite producers won’t save
          consumer side economics. Marx was first to call the credit cycle
          bizarre, and labor is supply and demand, all else is dead weight,
          public or private. Ween sewage police lawsuits off third party
          beneficiary where borrowers loiter with p2p only timelesspaydayroyalty
          scoped for industry-type because collective bargain is only not fraud
          if concurrentable schedule be that hours or outlay.
          <br />
          Common sense is that the sun revolves around the earth, the truth is
          determined by consensus of the jury, not experts with a broad conflict
          of interests.
          <br />
          Growth of hours is the reciprocal of productivity over a time-series
          under price-deflation.
          <br />
          You want to work with the bipartisan because you want to keep kids
          from earning their own living.
          <br />
          <br />
          duress beyond consensus mimimal viable product isn't funny, but
          gentrification.
          <br />
          Politics is science and law so it is morals of finding scientific
          consensus without hung-jury for permitting duress in minimal viable
          product.
        </div>
        <br />
        bipartisan communists and maybe private communists not bottom left want
        to give their children Macy’s clothes but kept in camps outside of
        wealth gaining while make bond holders rich, who withdrawal now, you
        guys canot say it is tax ayer money nor will be paid by our kids
        anymore, it is share-split by savers and paid by labor thru
        gentrification. <br />
        Common sense that the sun revolves around the earth so <br />
        Need consensus that is 11/12 <br />
        <br />
        <div style={{ backgroundColor: "rgba(230,255,230,.4)" }}>
          Rank choice only invites bipartisan collusion, a plurial-majority vote
          no to government every election <br />
          Any tax or bonds beyond truncated sales tax for sewage police lawsuits
          that are free rider immutable is gentrification and supply chain
          issues is from population,. I mean, 1970 25-54/3 unemployed is 6m/20m
          versus now it is 6m/40m. As an econometrist, covid/laziness was
          insignificant for employment, deaths and hospitalizations, excess
          deaths don’t account for population growth a life expectancy ago{" "}
          <br />
          Education just keeps kids from earning money and compils trade-secrets
          to be kept from open source <br />
          Lending and landlords are slavery by proxy without plausible use and
          making use under 5 units or 30 days or p2p only Timelesspaydayroyalty
          scoped for industry-type as non-concurrentable collective bargaining
          is fraudulent of just that <br />
          I’m a&nbsp;<a href="https://thumbprint.us">Ticketmaster</a>
          &nbsp;competitor and I’m boycotting credit, I have to basically make
          my own paytech <br />
          Credit is not income it is third party beneficiary of bartender-money,
          to which are merely at best public park deeds. I went thru jeu Econ
          and demoted for thinking accrual is bizarre and gdp is
          counterproductive that G-d made dollars so… it’s true. In what world
          would a socialist want to reappropriate means of another laborer?{" "}
          <br />
          Chores are like slaves, jiggering loose from consumers <br />
          only scientific consensus can desist falsities or permit duress
          discrimination in minimal viable product <br />
          Consensus is more powerful than all the experts in one field <br />
          only fair thing to do is reverse debt:cash*income, not cancel nor
          bailout. It’s like amortization of reimbursement of down payments upon
          repossession. Education in my opinion just keeps propensity of trade
          secrets being released to open source low & the younger masses from
          earning wealth
        </div>
        <br />
        most people know it is not free even on Gov Phil Murphy comments, yet
        republicans still say it is free, tax-payer-money && children will pay.
        big regulation, small government&nbsp;
        <span
          role="img"
          aria-label="quad III - bottom left down arrow signifying consumer and labor equity protection from fractional reserve, public nor private"
        >
          ↙️
        </span>
        <br />
        finite producers won't save you. stay out of Asbury Park, NJ
        <br />
        "want unemployment, get vaccinated," says brian kilmeade. how are those
        related? half of 2.8m continuing claims are retirees
        <br />
        <br />
        booming economy (money/people), so much demand in place (people/money)
        <br />
        <br />
        The top two parties chore slavery, keep kids from earning wealth &
        withholding trade-secrets behind tuition, teaching that
        counterproductivity is productive, to boot (growth in hours*price
        instead of (1/price)/hours, before 1913 gdp/p was constant and 1970
        25-54/3 had 6m/20m unemployed while today is 6m/40m), instead of keeping
        fruits of labor it is belayed to landlords, lenders and fraudulent
        collective bargaining of non-concurrentable schedules for a pittance
        allowance. Mandating paternity leave… just let them quit! Just trust
        building over my dead body! Paid my tax-payers and "our children"
        <br />
        <br />
        <a href="https://lightte.ch">govtech insurrection</a>: GOP DEMS & LIBS
        take my name out of your mouth, supply & demand is labor ONLY
        <iframe
          style={{ width: "100%", height: "400px", border: "0" }}
          src="https://www.youtube.com/embed/NPcyTyilmYY"
          title="YouTube video player"
        ></iframe>
        being so emphatic about school is keeping kids from earning money for?
        trade-secrets
        <br />
        <br />
        pooling for a bet of insular risk is concurrentable payout, but hours
        doesn't collectively bargain as pooling chances does given chances'
        value over deductible/down-payment kept upon repo and
        non-concurrentable.
        <br />
        <br />
        2week anon uuid for tranched broker trades with SEC backdoor and forced
        abstaination of votes per holdings for 13d {">"}5%, pattern day trading,
        &nbsp;
        <a href="https://nationalsecuritycasino.com">
          treasury share fraud outstanding $BA
        </a>
        <br />
        <br />
        Make sure people have sufficient wage to take care of their family
        instead of ending $3k new debt is grossly counterproductive, as is more
        hours instead of price-deflation/hours which includes intermediate
        hiring costs. Republicans and Democrats want to trust-build free rider
        mutable industry. Libertarians like this assumption, non concurrent
        collective bargaining and implausible landlord/rentier use beyond 5
        units or 30 days in private as finite producers can somehow find the
        theoretical Pareto efficient price to which supply and demand are fluid,
        not dead weight profit
        <br />
        <br />
        Jesus wasn't sacrificial lamb witchcraft, he was against that. He was
        saying he was gonna die because of money-changing sins, and to toast one
        night not a weekly ritual. 1 Peter 2:10 made communion Eucharist, 1 John
        2:22 knew government is antichrist
        <br />
        <br />
        Chris Salcedo is a pussy; jobs for hard-working americans working
        against $3k new debt a day to launder copyright, profits & means of
        labor to private dead weight communism, what socialist would spend or
        gentrify by share split of labor equity of another? stfu! laundering
        borrower's customers so they can loiter is not socialism, but
        capitalism. says "saddles unpayable debt and also is tax-payer-money."
        There is not a socialist that would support government gentrification
        supply!=demand. stop defaming abject truth for campaign fraud
        WABC/NewsMax
        <br />
        <br />
        <a href="https://3under2.us">Congress only needs</a>&nbsp;to&nbsp;
        <a href="https://vaults.biz">geohash/month</a>&nbsp;and ensure companies
        trigger regular business amounts for truncated sales tax free rider
        mutable sewage police lawsuits, all else is gentrification and useless
        price inelasticity
        <br />
        <br />
        4400% debt inelasticity makes molehill of 102% inflation, how is $2-6t
        cash currencyComponentOfM1 checking with $4t/yr federal spending is
        normal? Impossible moot or purposeful 1.1*currencyComponentOfM1/y = gdp
        without bonds (before 3/2020)
        <br />
        <br />
        “Make the tent bigger, obfuscate and diametrically split what
        conservatism means,” Bo Snerdley
        <br />
        Free market requires equity stewardship and without collective
        bargaining fraud and finite producers assumption, and colluding with
        loitering borrower in laundering from savers promising to cancel,
        bailout not reverse to amortize third party beneficiary of bartender
        money. Can’t say tax payer money and children will pay&nbsp;
        <span
          role="img"
          aria-label="quad III - bottom left down arrow signifying consumer and labor equity protection from fractional reserve, public nor private"
        >
          ↙️
        </span>
        <br />
        <br />
        debt, prisoners' dilemma duress nonconcurrent collectiv bargain fraud
        implausible rentier-income use beyond 5 unit-, free rider mutable
        government gentrification for bond laundering thru tax and 501c3
        "non-profit" copyright structures-, & chore-slavery
        <br />
        <br />
        Most peer reviewed
        <br />
        <a href="https://www.pbs.org/wgbh/aso/databank/entries/do53am.html">
          random is not defined
        </a>
        , of course we cannot deduce a motive without prepoderance of
        circumstance, but that is what exogenous econometrics and opiology is
        for
        <br />
        21 scientists. Because reading the Bible showed sodom has treasure,
        means virus is not an evolutionary trait, but creation, “Is Atheism
        dead?”
        <br />
        <br />
        doctors listen to eachother like a conflict of interest echo chamber.
        Statisticians & researchers lead. Lawyers find doubt
        <br />
        <br />
        Ana Cabrera, “90% better of symptomatic cases, what does that mean?”
        <br />
        20x host 22x die without vaccination,” Richard McCormick, M.D., “ironic
        for mandate and drop-off of cases,” of changed testing method and&nbsp;
        <a href="https://froth.app">epiological</a>&nbsp;basis
        <br />
        <br />
        there is no plan for 500-11000 CPB + government custody,” Mr. Bennet
        <br />
        <br />
        you have finite producer in your efficiency and hours in your
        productivity
        <br />
        ensure dont&nbsp;<a href="https://teapharmacy.party">insure</a>,
        regulate, don't
        discriminate/monopsonize/colonialize/accrue/implausibly-use-rental-income/nonconcurrentable-collective-bargaining-fraud
        <br />
        <br />
        40% think vaccine is not good” Brian Kilmeade
        <br />
        <br />
        Slavery is how it was done, more slaves than 1863, more slaves looking
        at sex trafficking” Ben Carson
        <br />
        <br />
        Social spending of share split nor accrual is socialist
        <br />
        <br />
        what world do socialists want to usurp another laborers’ means or
        gentrify certain industry with share split or accrual. that's the
        definition of communist
        <br />
        <br />
        Obamacare is bipartisan because they both like non concurrentable
        collective bargaining fraud
        <br />
        <br />
        wait consumer schedule
        <br />
        dollars are made by G-d after all... public park deed share...
        <br />
        “If gov is giving you unemployment benefits, they should require you to
        work.” Trevalese. But not before reverse debt:cash*income,
        concurrentable bona fide collective bargaining, & cap 5 units of
        rental-income, and other forms of brought forward bid-price to meet ask
        Finite producers don’t want to be saved Because otherwise that wouldn’t
        make profits for net loss forlorn of yesterfruits of labor
        <br />
        <br />
        Stronger/progressive is productivity defined by hours under
        price-deflation. We are going the other way because GOP & yourself are
        finance guys bringing forward bid-price to the ask, making existing
        business rich! Left is no longer for labor, unless you’re talking bottom
        left 🤍🐿🚨🚨🚨🥸 38% non-voters is a vote for truncated sales tax for
        free rider immutable sewage police lawsuits by default. Today’s
        progressives are trust-builders for useless price inelasticity and bond
        laundering. Don’t Obama my Bernie!
        <br />
        <br />
        <div style={{ backgroundColor: "rgba(230,230,255,.4)" }}>
          This is normal! The only thing that changed is testing. If you think
          the virus is the cause of infection instead of bacteria, you think
          virus came from thin air as it has no taxonomy like bacteria does
          except for when bacteria interacts with the cell Their site says&nbsp;
          <a href="https://www.odmp.org/">
            51 gunfire 50 auto 13 other for 2021
          </a>
          , where is the data with* covid?
          <br />
          <br />
          _: it doesn’t matter what is the cause of infection. The problem is,
          IT WILL KILL YOU
          <br />
          <br />
          population growth alone is 1.2m/yr all that has changed is testing of
          output
          <br />
          <br />
          _: is 721,000 dead 1% of our population? And the virus is still not
          done killing people. If you are not protected, it will find you
          eventually.
          <br />
          <br />
          we haven’t ever made covid nor any virus in a lab without mitosis of
          an already infected cell, ever, while J M Sweere has with bacteria
          https://www.science.org/doi/10.1126/science.aat9691
          <br />
          <br />
          _: Covid is the virus that can kill you if you are not protected and
          are compromised.
          <br />
          <br />
          antibodies stop blood clotting, but not what kills you as per cause of
          water in lungs
          <br />
          <br />
          fix for mortality improvement correlated with prevalence of sewage and
          brain virus is all the same prevalence, per capita, average rate.
          deaths and hospitalizations thru covid is insignificant
          <br />
          <br />
          routine testing is retarded for basis of time-series analysis
          <br />
          <br />
          Vaxxers think virus comes from thin air instead of bacterial byproduct
          with cell. Talk about a leap of faith! J M Sweere proved it with open
          wound and bacteria, not mitosis nor red herring of antibody prevention
          of blood clot onset illness for warning reasons, yet the cause of
          infection is still bacteria
          <br />
          See electron microscope snapshots for proofs, not cartoons of virus
          with legs and stuff
          <br />
          Looks like the sun revolves around the earth. Econometrics don’t fall
          for basis rate fallacy nor false positive
          <br />
          Vaxxers draw cartoons to prove virus injects their dns in an instance
          then all else comes out to attack like an evolutionary trait.
          Absolutely nuts!
          <br />
          4.8%+ blood disorder lymphoma/melanoma, what do you expect of
          antibodies created without full antigen but your own cell?
          <br />
          Hot node leakage, lymphoma melanoma of excess antibodies that merely
          prevent blood clotting, not infection that is caused exclusively by
          <a href="https://froth.app">bacteria</a>!
        </div>
        <br />
        marx isn't a communist, he only said communist in regulating finite
        producers that cannot be expected to protect consumers and the fruits of
        their labor
        <br />
        <br />
        communists take another laborers' money, in what world is that labor
        having means
        <br />
        <br />
        delusional
        <br />
        <br />
        Supply is demand, horseshoe for socialists are conservative, Marx is
        Pareto, vote Saver Party 202X for ABSOLUTE consumer choice fixed for
        finite producers' inclusion of markets and inalility to exclude the
        discriminators in retribution at least before scientific consensus, cap
        rental units at 5 or 30 days, reverse debt:cash
        <br />
        <br />
        Support new business for higher productivity, not existing. Profits are
        a net loss
        <br />
        <br />
        Gentrification for bond laundering and trust building is not a tranquil
        society
        <br />
        <br />
        Brought forward demand is communism, gentrification and useless price
        inelasticity
        <br />
        <br />
        Communists bipartisan want to own the pipes instead of regulate
        <br />
        <br />
        We are having trucker shortage before 3/2020, employment is back to
        normal and more strenuous than older generations, bond stead of
        truncated sales tax for free rider immutable sewage police lawsuits
        <br />
        <br />
        How is there only $2-6t cash but $4t/yr federal spending before 3/2020
        is normal? Cash as in currencyComponentOfM1 or checking. $170t market
        cap total, $88t bond value, $2-6t cash, amortize reimbursement of down
        payments upon repo by reverse debt:cash*income
        <br />
        <br />
        Marx would never usurp the means of another laborer, nor gentrify for
        bond laundering and trust building; such is not a tranquil society as
        well
        <br />
        C+I+C is redundant, NE is selling out, P is integral…
        <br />
        Bring forward bid-price to ask is what? Trust-building
        <br />
        By counterfeit in contract, non-concurrentable pooling of fraudulent
        collective bargaining & implausible landlord/rentier use above 5 units
        or 30 days on lease
        <br />
        <br />
        Socialists are conservative because we understand microeconomics &
        comparative advantage, but not why you all target more price per hour
        <br />
        We also understand scientific consensus is not with hung-jury ({"<"}
        11/12 protesters, or {">"}1/12 detesters)
        <br />
        But why is Great Leap Forward excess deaths from population 15m?
        <br />
        Third party beneficiay assumptions if $4t/yr is normal federal spending
        how is there only $2-6t cash???
        <br />
        <br />
        honor system signatures on insignificant excess deaths and
        hospitalizations , 38% non-voters isn’t even considering letting science
        monopoly nor gentrification of eldercare on their plate
        <br />
        <br />
        Republicans want to own roads instead of regulate, consider saver party.
        Consensus rule without hung-jury (11/12), they say it is taxpayer money
        and that our kids will pay at the same time, and count hours as
        productive without regard for rising prices by gdp/p
        <br />
        <br />
        “Courts would be packed, so the public officials aren’t able to sue for
        defamation.” It’s an opinion until scientific consensus no matter what,
        unless it is a conviction, then the onus is on the accuser
        <br />
        <br />
        ​marx would never usurp the means of another laborer
        <br />
        <br />
        {/*childcare is like shoveling water over a fence, & 
        family leave is like trust-building unless regulated as indiscriminatory of
        time-off for this as sick is attributable without doctors' notice.
        <br/>
       <br/>*/}
        coerion and duress is violation of Amendment 14 for indiscriminate
        non-matching at least with the whole employerbase of the discriminator
        nor copyright exhumed
        <br />
        <br />
        Newsmax, advertisement for financial dead weight old people, “you worked
        hard and saved your whole life” 🤣🤍🐿 write down laundering, regulate
        don't gentrify
        <br />
        <br />
        <a href="https://pubmed.ncbi.nlm.nih.gov/12049024/">Qualify my cock</a>
        be of field, scientific consensus, and without conflict of interest by
        the general industry
        <br />
        <br />
        Workers' comp and home warranty, buyer beware only collective bargain
        wih concurrent & rollover
        <br />
        third party beneficiary assumptions,
        <br />
        useless price inelasticity, gentrification by gerontocracy.
        <br />
        Implausible landlord/rentier use. ratios determine strength of a rate,
        or average per
        <br />
        <br />
        {/**3x virus with antibodies, of different nariants? would be proof of viral induction
       by virus alone, but bacteria could happen to be there too */}
        Marx never ran a government and was first to bash the credit cycle as
        utterly useless without willing customers laundered through the supply
        chain
        <br />
        <br />
        (Protest, {"<"}11/12), (Detest, {">"}1/12)
        <br />
        <br />
        Just remember: non-voters is a vote no. To choose between small Gov and
        weed, no choice for degrowth capitalism…. Science isn’t to be
        monopolized. Jury requires 11/12 consensus. Our cohort do not consider
        spending other laborers’ money as progress, only trust building and
        useless price inelasticity. Cap rent at 5 units/30 days! Reverse
        debt:cash for impossibilities are purposeful or moot
        <br />
        <br />
        People your age when my age were unemployed 6m/20m 25-54/3, now 6m/40m.
        Half continuing claims are 65+. Get back to work
        <br />
        <br />
        Gentrification: tax to bailout bonds thru the transitory supply chain,
        cheat old and upcoming industry participants, favoritism for
        intermediate goods now or later
        <br />
        <br />
        Income inequality for wealth equality is another GOP lie, hours to them
        is good rather than a basis for propensity to seek utility
        <br />
        <br />
        Andy Puzner of CKE restaurants on Shaun Kraisman blaming unemployment on
        younger people when half continuing claims are 65+ and when his old as
        was our age unemployment was 6m/20m per 25-54/3, now is 6m/40m…. Who in
        their right mind would work against $3k new debt a day; hours/price
        should be doubling every 5 years, not the other way around
        <br />
        <br />
        Republicans think courage is from the inability to relax and live, but
        leisure is a bounty and productivity is hours under growth, not the
        other way around. Income inequality for wealth equality is another GOP
        lie, hours to them is good rather than a basis for propensity to seek
        utility
        <br />
        <br />
        To democrats, prosperity is cheating past and future labor by
        gentrifying for existing business, bipartisans are communist and
        socialists are conservative
        <br />
        <br />
        Vote Saver Party. It’s gonna be a non-nerd election. 38% non-voters is a
        vote that the government isn’t worth the counterfeit it is
        brought-forwardly-price-fixed on, private dead weight is just as
        counterproductive. Only concurrentable & rollover makes collective
        bargaining work, otherwise cap rent at 5 units or 30 days, reverse
        debt:cash & reduce future debt “investment” with timelesspaydayroyalty
        scoped for industry-type for p2p only. Time to settle-up, doc
        <br />
        <br />
        GOP doesn’t like regulation because they want an excuse to launder net
        loss profit to bonds, they’d rather own the pipes than get the led out.
        Libertarians like that fractional reserve if you call it, “private
        contract,” with grandiose valuations of accrual
        <br />
        <br />
        "I'm not gonna pay it, other generations are gonna pay it," some old
        fuck racketeer fraud bond-holders withdrwal against it now, and
        share-split is half federal-spending, it is paid now. and you want
        people to how possibly pay for it, gdp without bonds is
        1.1*currencyComponentOfM1 before 3/2020. The bottom left do not want
        deficit spending to be called income or lie that it will be paid by
        anyone but savers. Bipartisans are communists and Libertarians are for
        private communes. shut the fuck up. third party beneficiary isn't
        "tax-payer money" && at the "same time paid by future generations"
        <br />
        <br />
        Patent office doesn't need to exist, copyright is sufficient and
        licensing like this&nbsp;
        <a href="https://teapharmacy.party">only trust-builds</a>. limitations
        of rights based on time is a human rights violation
        <br />
        <br />
        Section 230 does not go far enough and is less poignant than respective
        the jury-requisite of duress in minimal viable product as to not void
        Amendment 13, 14 & tranquil society in the preamble for the involuntary
        inclusion of the discluders' demands on the open market that the
        discluded cannot lay on without scientific consensus as well only
        consumers and labor can discriminate; that means platforms have to pay
        for the right to discriminate beyond 11/12 consensus (without
        hung-jury-conviction/-permit)
        <br />
        <br />
        work is only measured if you are paid for only part of the copyrights of
        your labor thru a private commune as opposed to socialist conservative.
        elder sons match care can't wait. ppp is trust building existing
        business monopsony. please do not use social security, only use photo
        id. financial incentives aren't share-split of their own money, it just
        gentrifies and trust-builds, the child is not a cost to us only the
        person, to which can be solved for 4400% debt-inelasticity than 102%
        inflation
        <br />
        <br />
        In what world does a socialist want to share split another laborers'
        means? Bipartisans are communists trust-building existing business, rank
        choice voting only bolsters their collusion in lieu of majority of the
        plurality. saying $4t/yr federal spending while there is only $2-6t cash
        is tax payer money is racketeering beyond article 4
        <br />
        <br />
        Government's job is to save consumers from finite producer tyranny.
        Politics is the culmination of law and science
        <br />
        <br />
        Non-partisan government racketeering for getting out the vote but then
        betraying a quarter of the public when pertaining to medical science? No
        person is without bias, politics is the culmination of law and science
        (and comedy?), I was dismissed from jury duty for protecting consumers
        <br />
        <br />
        Retard is the only noun for one that tards themselves
        <br />
        <br />
        {
          // width && <Spending width={Math.min(600, width - 100)} /> //HRw5
        }
        a social safety net is useless price inelasticty; before laundering
        share-split benefits and education/care monopsony, please reverse
        debt:cash, cap rent to 5 units or 30 days, reduce future debt
        "investment" to timelesspaydayroyalty scoped for industry-type for p2p
        and concurrent or rollover for investment insurance collective bargain
        only, not useless colonialism dead weight, I don't care if you call
        yourself public or private. Instead of Obama paying off lenders,
        amortize reimburdement of down payments. Social Safety net reduces
        poverty in lieu of wealth equality, fighting fire with fire.
        <br />
        same resources, just unfair allocation and price-inelasticity
        <br />
        <br />
        there is no growth of population that justifies more money share-split
        of public-parks, as before 1913 gdp/p was constant among 3% population
        growth
        <br />
        <br />
        {
          //width && <Population width={Math.min(600, width - 100)} /> //HRsT
        }
        too many job openings means there is enough profits of finite
        corporations to do it, there is too much cash in the corporations and
        small business instead of the labor. half continuing claims under
        Bipartisan Federal Reserve is 65+. this was before covid. there are
        higher employment rate than when old people were working age, they are
        1.2m/yr more 75+ beginning 2018. do the math
        <br />
        <br />
        fraud while truncated sales tax 3% under $2k would suffice article 4
        free rider immutable sewage police lawsuits, otherwise is useless price
        inelasticity and abject trust building for ppp over new business &
        open-source contributors
        <br />
        <br />
        accrual of "quantitative easing" share-split buying existing tsy while
        10% is debt-service, more if you count states, socialists would never
        spend another labor's means, is 4400% debt-inelasticity, 102% is
        price-inelasticity
        <br />
        <br />
        certify, don't license, monopsonize and sue, don't allow fiduciaries to
        feign care for your copyright and labor in non-concurrent nor rollover
        fraudulent collective bargaining or concurrent deficit spending or tax
        for free rider mutable useless inelastically-gentrified and colonialized
        for dead weight calling such "free"
        <br />
        <br />
        Only Republicans will tell you supply isn’t demand, or that money market
        isn’t a market, if impossibilities that are foreseen aren’t purposeful,
        and fractional reserve is counterfeit in contract & non concurrentable
        nor rollover fulfilled by split-share of … that of which is public parks
        at best. Only Saver wants to retire you
        <br />
        <br />
        Smoke em if ya got em; cash advance to TBT. A condition is believing
        falsities; everyone can concentrate better on amphetamines so let’s put
        it in the water.
        <br />
        <br />
        Profits is a net cost; Bipartisans & Libertarians aren’t ever
        bookkeepers. I was as a chore. Scientific consensus is 11/12 without
        hung-jury
        <br />
        <br />
        Subservient on the government is what bad-faith right-wing economists
        describe welfare instead of commenting on their
        uselessly-inelastic-gentrification rather than their fodder for life in
        this way.
        <br />
        <br />
        1970 working age 25-54/3 unemployed 6m/20m, today 6m/40m, half
        continuing claims are retirement age. Prices/hours doubles every 5 years
        and
        <br />
        <br />
        People could raise household on one income because they did their own
        chores, watched their own kids instead of whatever circumstantial
        comparative advantage gain, and less accrual was made. Before 1913,
        gdp/p was nearly constant, but investment beyond equity or
        timelesspaydayroyalty scoped for industry-type only for p2p still
        produced business cycles of concurrentable spans of accrual then
        repossession with disregard for borrowers’ customers third party
        beneficiaries assumed in brought forward demand and how down-payments
        should be returned) of which Marx was the first to define, not Mises.
        <br />
        <br />
        Poorness=(poverty/WEALTHequality), C+I+G is redundant, NE is selling
        out, P is integral but has no effect on inelasticity as labor is also
        price-elastic
        <br />
        <br />
        38% non-voters is a vote no
        <br />
        <a href="https://wavv.art/forumkJHGEmKMjKgLY7nYtR4Y">
          Accrual is bizarre
        </a>
        ;&nbsp;
        <a href="https://wavv.art/forumYX0T5MJ2wlptdokzGivi">
          teapharmacy.party
        </a>
        <br />
        sewage police lawsuits article 4 tax only, flat flat tax, truncated
        sales tax, congress only needs to see geohash/month
        <br />
        consumers can choose their KYC operation, to which login.gov should
        extend private api
        <br />
        <br />
        <a href="https://thumbprint.us">content addressable ArrayArrays</a>
        &nbsp;I invented for immutable count, couple with cors and open source,
        we can trust those numbers. We need to press login.gov to extend api to
        private industry to emulate convict intranet and provide actual end to
        end encryption, for instance, on device
        <br />
        truncated sales tax
        <br />
        <br />
        Marx is pareto, supply == demand labor has meand without dead weight of
        public nor private implausible rentier use and other forms of competing
        with consumers or preventing the ask meeting the bid.
        <br />
        <br />
        labor has to pay for lazy landlords whom we should cap 5 units of rental
        income and reverse debt:cash, credit isn't income, borrowers loiter and
        counterfeit in contract is fine by ALL OTHER PARTIES
        <div style={{ display: "flex" }}>
          <div>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/4fireu4uyz9ekek/jess%20jane%20duff.gif?dl=0"
              }
            />
          </div>
          <div>
            Deaths because of the vaccine cannot be assumed even if it was the
            same day, age is a null hypothesis and excess deaths for
            age-standard doesn’t standardize population growth
            <br />
            <br />
            https://www.goldmansachs.com/insights/archive/millennials/
          </div>
        </div>
        Parents' may have a budget, but borrowers loiter
        <br />
        <br />
        <img
          alt=""
          style={{
            width: "100%",
            height: "auto"
          }}
          src={
            settleDropboxFree
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/ut53s4dm4t0n6l8/Screen%20Shot%202021-11-04%20at%202.23.54%20PM.png?dl=0"
          }
        />
        <img
          alt=""
          style={{
            width: "100%",
            height: "auto"
          }}
          src={
            settleDropboxFree
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/9v12zzy9m60b5tu/Millenials%20goldman%20sachs.png?dl=0"
          }
        />
        <br />
        11m jobs available while ppp existing-business trust-building supported
        by all other parties, except Libertarians. But ALL other parties,
        including libertarians, want growth of hours/pop, the opposite of
        productivity gains, and finite producer choice, and fractional reserve
        in contract
        <br />
        <br />
        Any place is subject to the discernment of the jury. Every party except
        saver party puts customers over hung-jury & accrual. Science cannot be
        monopolized lest to be hypocritical. It is a leap of faith to suggest
        virus appeared from thin air while attesting to evolution over creation,
        all virus & infection is exclusively made from cell-bacteria compound
        <br />
        <br />
        just because you put it in a contract doesn’t mean it isn’t
        discrimination without the right to. At the very least they lose their
        copyright, (1) there aren’t infinite producers & (2) Twitter employees
        use the discriminateds’ services elsewhere without discrimination.
        Content removable is null except 1/12 of scientific consensus; it is my
        work, the lexicon is mine. You can block but you can’t remove data nor
        users unless you pay them for that right.
        <br />
        <br />
        You probably think force majeure isn’t moot either just because someone
        was under duress to sign up; impossible is purposeful or moot. Contracts
        can be illegal and unbothered until someone like me complains. Duress
        makes a contract moot like there only being finite producers, again at
        the very least they lose their copyright or cannot discriminate, even if
        they announce it or the user is under duress to “agree”
        <br />
        <br />
        $15/hr in America cannot surmount $3k new debt and $70 new money a day
        <a href="https://fred.stlouisfed.org/graph/?g=HzlI">per person</a>
        <br />
        <br />
        younger boomers at current millennial age worked&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=HHju">
          -6/20m, -6/40 today 25-54/3
        </a>
        <iframe
          style={{ width: "100%" }}
          src="https://www.youtube.com/embed/TjvqmfDvOfQ"
          title="YouTube video player"
        ></iframe>
        <a href="https://www.goldmansachs.com/insights/archive/millennials/">
          chorers
        </a>
        &nbsp;don't&nbsp;
        <a href="http://www.electproject.org/home/voter-turnout/demographics">
          vote
        </a>
        !
        <br />
        <br />
        Can you imagine allowing the congress to raise the debt ceiling while
        38% don't vote
        <br />
        <br />
        what kind of marxist wants government to spend labor's money, fucker.
        "marxist government" is a fucking oxymoron
        <br />
        <br />
        children paying debt is a lie, it is debt:cash inelasticity 4400% vs
        inflation 102%. "Our economy is working," Trump had as much deficit as
        Biden,
        <br />
        <br />
        mark levin calls a desk job a real job, not bartending. I can automate
        you into retirement, finance get to bussing tables
        <br />
        <br />
        can't even say it will take 44 years to pay debt with current income.
        republicans are fraudulent in their inability to see third party
        beneficiary of bartender-money not credit as income bizarre accrual,
        corporate trust-building thru ppp or gerontocracy in child tax credits.
        government get out of free rider mutables and ensure trade is made on
        concurrent basis as opposed to hours, keepoing investment banking in
        equity not p2p timelesspaydayroyalty scoped for industry-type to replace
        debt "investment," and reverse debt:cancel*income
        <br />
        <br />
        jiggering loose customers' margins with labors' chores
        <br />
        Unemployment stag 20% flation inflation” Navarro,
        <br />
        Price/hours
        <br />
        but productivity is just that under price-deflation, as opposed to price
        (1/price)/hours
        <br />
        <br />
        Process (evolution) (G-d)
        <br />
        why (?) (policy-experiment)
        <br />
        Marx wants tech to retire everyone, so allow truncated sales tax among
        10% so antigen not even self-described independent, would be occupy
        <br />
        <br />
        <a href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963/">
          if not voting is a vote no
        </a>
        , 38% detest (26%), eligible (12%) voters, overlapping 10% so antigov
        not self-described independents. rank choice bipartisan smol gov
        republic vs weed dems vs degrowth saver stay home or let us in charge
        honor system signature, deaths nor hospitalizations insignificant
        notwithstanding. taxpharmacy.party, walgreens claims 1/5 jailed
        <br />
        <br />
        Why say transitory instead of temporary? The former implies the price
        are in-transit to other sectos of the economy (1/price)/hours is exactly
        the reciprocal of productivity that should be written under
        price-deflation from tech
        <br />
        <br />
        covid claims continuing treated as permenant disability with no follow
        up for half being 65+ to boot ask trump to define cancel? don't Obama my
        Bernie
        <br />
        reverse don't cancel debt:cash*income
        <br />
        Why say transitory instead of temporary? The former implies the price
        are in-transit to other sectos of the economy (1/price)/hours
        <br />
        covid claims continuing treated as permenant disability with no follow
        up for half being 65+ to boot
        <br />
        no one is wearing a mask because virus isn't the cause of illness it is
        bacteria you ------- retard dennis and judy mask on, vaxx up while
        antibodies merely clean blood clot
        <br />
        Dead-weight growth people (not discounted price over hours) will say,
        "good work, my kinda man, underappreciated," doing dead weight finance
        paying off loitering mortgage for useless inelasticity while 20x
        rental-income 55+/millennials
        <br />
        We are forced to choose between weed and small government, but no choice
        to degrowth like Saver Party, teapharmacy.party (what it say)
        <br />
        <br />
        <a href="https://thecollegeinvestor.com/14611/average-net-worth-millennials/">
          Net asset value of ages
        </a>
        <br />
        29 (Class of 2013) -$6,168
        <br />
        22 (Class of 2020) -$39,915
        <br />
        20x 55+/millennials rental-income
        <br />
        6m/20m 1970, 6m/40m unemployed
        <br />
        1.4m/56m 65+, 1.2m/120m 25-54, 1.1m 15-24 continuing claims
        <br />
        virus doesn't come from virus, bacteria's byproduct for antibodies clear
        blood clots
        <br />
        <br />
        Hackensack meridian has held me as a political prisoner for 13 days, I
        was called insane for calling accrual bizarre and non-rollover useless
        price inelasticity, while Paul Krugman gets a Nobel for calling
        insurance a&nbsp;
        <a href="https://www.youtube.com/watch?v=1D6n2om9I6A">net loss</a>. need
        to&nbsp;
        <a href="https://www.dailydot.com/layer8/paul-krugman-child-porn-scam-qanon/">
          molest children
        </a>
        &nbsp;to get the bond value withdrawn?
        <br />
        <br />
        Minimum wage only produces less jobs if money is constant, not
        growing.&nbsp;
        <a href="https://nationalsecuritycasino.com">
          gdp/p used to be nearly constant before 1913
        </a>
        . prices are elastic, people are competitive, goods & opportunities are
        scarce. producers are finite and labor has means means supply equals
        demand without dead weight, public nor private, as is gentrification,
        inelasticity and prrevents comparative advantage bountified thru
        technological advancement, which should lower price index over time due
        to efficiencies but due to dead weight of non-rollover-concurrency,
        accrual & implausible rentier use price/hours has doubled every 5 years
        <br />
        <br />
        Millennials are highest new home "buyers," really loitering as with
        mortgages or investment-pooling for useless-price-inelasticity
        <br />
        <br />
        let ask meet bid for non-sport, non tech-service, non-concurreny-hours
        or finished goods; reverse debt:cash truncated sales tax sewage police
        lawsuits, timelesspaydayroyalty for third party to amortize
        reimbursement of down payments upon repo, cash advance for tbt
        <br />
        <br />
        Can't even say 44 years would take 44 years, for otherwise to
        share-split Savers, not savings-accounts.&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=HzAK">
          currencyComponentOfM1*1.1=gdp without bonds
        </a>
        <br />
        $3.5t over ten years is nothing compared to&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=HCmk">
          $4t/yr normal current federal expenditures
        </a>
        <a href="https://2052.live">teapharmacy.party</a>
        <br />
        housing is free rider immutable because it is needed uhh
        <br />
        {/**pro rights the baby, when alive-able in cacoon */}
        <div
          style={{
            display: "flex",
            maxWidth: "600px",
            width: "100%",
            position: "relative"
          }}
        >
          {!this.state.facebookerror && (
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F108986904353225%2Fvideos%2F4404002109665977%2F&show_text=true&width=220&t=0"
              style={{ width: "100px", height: "550px" }}
              title="https://fb.watch/8vc_WNxnzq/"
              onError={this.handleFacebookError}
            ></iframe>
          )}
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/g73asql4jvfdtfh/5vector%20%283%29.png?dl=0"
            }
          />
        </div>
        <iframe
          style={{ width: "100%" }}
          src="https://www.youtube.com/embed/TjvqmfDvOfQ"
          title="YouTube video player"
        ></iframe>
        <br />
        no accrual, implausible use by andlords/rentier, non-rollover by bona
        fide brokers, nor duress beyond minimal-viable-product necessarily
        without hung jury and reasonable doubt of conflict of interest people,
        (not activists). All politicians must abstain whenever their holdings
        are at hand and go thru 2-week anonymity sec-backdoor like every other
        filer, and treasury shares are shares outstanding, and savings is not
        bond-index-fund price-fixed appraisal #DontObamaMyBernie
        #SocialismIsPareto supply == demand without public nor private dead
        weight, or competition with consumers. timeless payday royalty to
        replace debt and target margins of finite producers, target gdp/p of 1
        and (1/price)/hours up over time for productivity,
        poorness=poverty/equality so weigh movement of capital beyond protection
        of third-party-beneficiary of what literally is bartender-money of
        public-park-rights by the deal made for
        interventionist/manufacturers-of-consent by private or public
        existing-business/parents over new-business/children. #PayTheKids
        #RepublicansAreCommunists #DemocratsMakeBondsRich #GreensWantGrowth
        #LibertariansAreGimps, if you need reason to not compete with consumers
        except empathy, choose comparative advantage-innovation. gdp/p was
        constant -1913
        <br />
        <br />
        {/*width && <Fraud4 width={Math.min(600, width - 100)} />*/}
        <Cable
          onError={this.props.handleScollImgError}
          src={
            this.state.nofredgraphs
              ? ""
              : "https://fred.stlouisfed.org/graph/graph-landing.php?g=HzBb&width=500&height=660"
          }
          float="left"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 5]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        <br />
        {/*width && <Fraud3 width={Math.min(600, width - 100)} />*/}
        <Cable
          onError={this.props.handleScollImgError}
          src={
            this.state.nofredgraphs
              ? ""
              : "https://fred.stlouisfed.org/graph/graph-landing.php?g=HzAK&width=500&height=660"
          }
          float="right"
          title=""
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + 4]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <br />
        <br />
        44x is debt:cash, use cash:debt to claim collateral, reverse dont
        cancel, cash:debt*income back to 1908, 11x is gdp with bonds to gdp
        without
        {/*<iframe
          style={{ width: "100%", height: "400px" }}
          title="2% of the population owns 4400% of the assets"
          src="https://nationalsecuritycasino.com"
        />
        <iframe
          style={{ width: "100%", height: "400px" }}
          title="we make virus, virus instigate antibodies, antibodies invoke illness, bacteria make cell make virus"
          src="https://froth.app"
        />*/}
        20x rental income of 55+ than 25-34. half the unemployed since 3/2020
        are 65+
        <br />
        <br />
        An option is a deposit w a premium, that allows you to lock in that
        price; if they don't want to pay they don't pay, they get partial
        product or money back
        <br />
        If a depositor liens you in court next time that's appealable; & get
        them to pay you for the bills they pause during appeal
        <br />
        <br />
        Rooster claims credit for the morning; exponential correlation of death
        to life expectancy @kilmeade @MartyMakary you cannot have it both ways.
        if the number of symptomatic is 70% and not&nbsp;
        <a href="https://www.nature.com/articles/d41586-020-03141-3">19%</a>
        &nbsp;then asymptomatic transmission is not a good reason to forbid your
        null hypothesis
        <br />
        <br />
        <a href="https://www.uchealth.org/today/the-truth-about-asymptomatic-spread-of-covid-19/">
          here
        </a>
        &nbsp;says (we need reports to say the n sample size, I am too busy to
        seek it out for you) 50% you say 70%, that is within the range of normal
        for 30% or even 20% aren't latent & are symptomatic. do you see virus in
        PCR if you do not specifically seek it out? @MartyMakary
        @JohnsHopkinsSPH &nbsp;
        <a href="https://humanharvest.info">
          @JohnsHopkins @RutgersU @HealthNYGov
        </a>
        <br />
        <br />
        You have no credibility; Jim Sciutto blames Trump for Russia as
        racketeering because they like him
        <br />
        <br />
        "Machine enemy of the workman" sounds good to me. @bernieandsid Let's
        all retire and do our own dishes instead of this Job-union-luddite, vs
        ease-of-life, vs wasted-living-monopsony based on familial, Love of G-d
        assumed and national prejudice, or gentrification & colonialism #Marxism
        #EndTheFed
        <br />
        <br />
        Eucharist is animal sacrifice and idolatry in one; Jesus never said he
        would die for Sins, G-d is judge, usury is haram and debt would be
        equity/profit-share otherwise, insurance & income-based-justice is
        conflicted interest, invoice is counterfeit and coagulation
        prisoners'dilemma duress of demand & built-to-rent is intent to harm and
        monopsony of labor to not win favor of consenting,
        ready-willing-able-able customers but competing with them, government or
        otherwise is not increasing supply, national security is not improved by
        bonds instead of&nbsp;<a href="https://3under2.us">3under2.us</a>
        <br />
        <br />
        Credit is like a game of telephone, as is not mentioning the n sample
        size in polls
        <br />
        <br />
        Lt gov tx: “Dem and Pubs know ballot fraud exists”
        <br />
        The left is force? The right is apathy?
        <br />
        Divide pie for degrees per parent issue, and align users among.
        <br />
        If dem/gop is one vector, that vector can be two for the efforts of
        benefits to each
        <div
          style={{
            wordBreak: "break-word",
            backgroundColor: "rgb(200,255,255)",
            margin: "10px",
            padding: "10px",
            border: "1px solid rgb(200,200,200)",
            borderRadius: "10px"
          }}
        >
          I would rather erase all debts of our supply chains and labor than own
          90% of dollars
          <br />
          <br />
          Taking initiative with spending, and the after-purchase-ownership, of
          requisition, by the bidding
          not-of-promise-to-input-costs-or-labor-of-self-owner, is sacrosanct to
          the risk: if our efforts are to keep accountability
          <br />
          <br />
          "If banning financial-colonialism were easy, it would be done." I
          disagree Brian, I am sorry bud
          <br />
          <br />
          Money in their pocket, direct-checks and lessening poverty for a month
          to launder instead of using&nbsp;
          <a href="https://billbiden.org">Sherman Act, Amendment 13 and 14</a>
          <br />
          <br />
          Case 2 35% rural no internet 10m some led pipes Homes Case 3 Homecare
          <br />
          <br />
          More jobs, better Union opportunities
          [abject-anticompetitive-collusion]
          <br />
          <br />
          8 years runway 15 year taxes without thinking they will depart. Global
          tax. Fuck off
          <br />
          <br />
          Make @Verizon pay for rural broadband and margin-target when you run
          out of network needs by network “market” of market monopsony.
          Telecommunications does not need to take from actual
          savers-of-asset-ownership @jaketapper
          <br />
          <br />
          “Severe weather damage goes beyond the cost on paper [static good,
          that business keep],” Brian pulls his audience back to reality on
          back-end-monopsony-tax instead of
          free-rider-immutable-front-end-tax-for-all-that-can-mute-free-riders-and-network-‘market’-of-market-target-margin
          <br />
          <br />
          “We would use taxes from business and individuals on healthcare” -
          @NoLieWithBTC
          <br />
          <br />
          “There is something for everyone across the political spectrum [it is
          specifically a qubit-in-all-directions-by-plausible-hyphonics].
          Corporation-from-23%-to-28%, [end-tax-deductible-wage?,
          ]Global-minimum-tax, carbon-tax, no-tax-haven.” - Btc
          <br />
          <br />
          But these are accounts, not desires
          <br />
          <br />
          @PressSec promising labor of Astre-Zeneca “vaccine”/graft in
          now-quantity-price of $1.5m or 1.5m doses, monopsony of labor right
          there, by counterfeit-unrequited-vote
          <br />
          <br />
          Is Canada or the US the lion or the ‘trainer’ GIF
          <br />
          <br />
          Make @Verizon pay for rural broadband and margin-target when you run
          out of network needs by network “market” of market monopsony.
          Telecommunications does not need to take from actual
          savers-of-asset-ownership @jaketapper
        </div>
        <br />
        Whom owns the roads
        <br />
        <br />
        USC Law School Vice Dean for Elections assumes&nbsp;
        <a href="https://electionupdates.caltech.edu/2020/03/20/some-demographics-on-voting-by-mail/">
          most "old-euro people" use the polls and in the same vein says "afro
          people stand in line"
        </a>
        <br />
        <br />
        The minority can stop with one member - filabuster
        <br />
        Your constituencies are those who you have control over.
        <br />
        <br />
        Juilio Vasquez of Houston Public Media, if the guy says he is being
        blackmailed that is admission of some crime and hiding...
        <br />
        <br />
        "Federal treasury swap line, they were looking for dollars not bond." -
        Kennedy
        <br />
        "Stopped corporate bonds with too large of carbon footprint," how about
        stop trust-building
        <br />
        <br />
        "4m unemployed [which is extrapolated from a survey of 2700 people]
        means 4m are looking for work for 6 months" - that's illegal douche bag
        <br />
        <div>
          {/*width && (
            <Employ2Pop
              width={Math.min(600, width - 100)}
              settleDropboxFree={settleDropboxFree}
            />
          )*/}
        </div>
        <br />
        <div
          style={{
            minWidth: "200px",
            width: "30%",
            position: "relative"
          }}
        >
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/8p5dxc47d68jfpm/UnemploymentExtrapolation.png?dl=0"
            }
          />
        </div>{" "}
        <br />
        <br />
        Top 1% is all finance so it’s a&nbsp;
        <a href="https://www.brookings.edu/research/make-elites-compete-why-the-1-earn-so-much-and-what-to-do-about-it/">
          bandaid
        </a>
        &nbsp;(to tax progressively) so unless we have UBI reparations of harm
        from tax it is government monopsony
        <br />
        <br />
        Bond spending is like paying for things three times: in price,
        bond-value and monopsony. Taxes for free-rider-mutable or
        non-reparations/torts pay for things in price, amount-attainable and
        quality.
        <br />
        <br />
        FICO scores rising for everyone, that's how relativity works when we
        used to be 1:1 now 41:1 debt:cash
        <br />
        <br />
        Stinchfeild, "buy a house with the money and pay off that mortgage!"
        <br />
        <br />
        "Passed 5 bipartisan covid relief bills, spent the most money in
        American history, and helped save the country" - Mitch McConnel (GOP)
        <br />
        <br />
        How about opportunities for labor, artists and bootstrapping
        entrepreneurs you piece of shit. you are prohibiting competition and
        price decline, quality rise. just wants to raise the profit for bond
        holders & producers obviously - keep savers/labor down and from keeping
        profit/assets that business gain during PPP. in the process of allowing
        and now creating these counterfeit-in-contract loans, you take more from
        the peoplet that you give to in net.&nbsp;
        <a href="https://www.researchgate.net/publication/346041766_The_FTC_has_responded_to_my_complaints_and_so_has_the_industry_Allstate_Progressive_Geico_all_say_they_save_you_money_by_switching_or_bundling_yet_neo-insurance_companies_like_CarShieldUSA_still_says_">
          You must cease in advertising this as free
        </a>
        <br />
        <br />
        <div
          style={{
            minWidth: "200px",
            width: "30%",
            position: "relative"
          }}
        >
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/qrww13uqjo4ke8h/Opportunities.jpg?dl=0"
            }
          />
        </div>{" "}
        <br />
        <br />
        Schumer, Durban, Booker is still claiming help and relief by tkaing
        their moeny, giving back a portion of it to keep prices up and pay off
        bad bets and usurped contracts by finance and rentiers allowed by Senate
        malfeasance
        <br />
        <br />
        'Innocent people will continue to die if "we" don't Commisioning of
        mental health assesments (you can sue certified physician
        monopsony-of-pharmaceutical members for libel) from owning a firearm
        should be barred for unless a threat is made, not an eccectricism,
        influence by real-life trauma or anger, jealousy, frustration etc. or AR
        until the government promises to not use S.W.A.T. to 'go after spring
        breakers' with duress or break with the rest of our civil laws again' -
        Durban... americans and gun owners are not representated by an
        unshuffled survey poll of n{"<"}330m you must cease and desist in
        describing these costs as benefits
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "New" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.NEW}
        >
          "The best part! 0% interest until 2023"&nbsp;
          <span style={{ fontWeight: "normal" }}>
            that is&nbsp;
            <a href="https://squatcommune.com" style={{ color: "blue" }}>
              illegal
            </a>
          </span>
          <br />
          <br />
          <div
            style={{
              minWidth: "200px",
              width: "30%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/el6ft6fa4thvi17/ARUseCase1.png?dl=0"
              }
            />
          </div>
          <div
            style={{
              overflow: "hidden",
              minWidth: "200px",
              width: "30%",
              position: "relative"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                height: "110px",
                width: "100%",
                position: "relative"
              }}
            >
              <a href="https://moldmask.co">
                <img
                  alt="S.W.A.T. 'goes after' spring breakers for not wearing masks"
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  src={
                    settleDropboxFree
                      ? ""
                      : "https://www.dl.dropboxusercontent.com/s/rcv6v2qlxo1dfa8/ARUseCase2.png?dl=0"
                  }
                />
              </a>
            </div>
          </div>{" "}
          <br />
          <br />
          <a href="https://micro-theory.com" style={{ fontWeight: "normal" }}>
            No one can track all transactions and all businesses. The government
            is not the people, frauds
          </a>
          <br />
          <br />
          If we elect the wrong guy
          <br />
          <br />
          <div
            style={{
              minWidth: "200px",
              width: "30%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/jhtor1gk4sgr7q0/TwoPartySystem.png?dl=0"
              }
            />
          </div>{" "}
          <br />
          Giving identities a bad name
          <br />
          <br />
          Aye caramba
          <br />
          <br />
          <span style={{ color: "grey" }}>
            The difference between the media and thumbprint is that they say, "I
            hope this conversation continues." I hope it ends!
          </span>
          <br />
          <br />
          <div
            onMouseEnter={() => {
              this.setState({
                fireMessage: true
              });
              clearTimeout(this.fireMessage);
              this.fireMessage = setTimeout(
                () => this.setState({ fireMessage: null }),
                8000
              );
            }}
            onMouseLeave={() => this.setState({ fireMessage: null })}
            style={{
              fontSize: this.state.fireMessage ? "" : "0px",
              transition: ".3s ease-out"
            }}
          >
            <a href="https://squatcommune.com" style={{ color: "blue" }}>
              free-rider exclusion
            </a>
            ,&nbsp;
            <a href="https://vaults.biz">tax only free-rider-immutables</a>
          </div>
          "hate" vs descriptiveness is not allowed to&nbsp;
          <span
            style={{
              textDecoration: "underline"
            }}
            onMouseEnter={() => {
              this.setState({
                fireMessage: `free-rider exclusion, tax only free-rider-immutables`
              });
              clearTimeout(this.fireMessage);
              this.fireMessage = setTimeout(
                () => this.setState({ fireMessage: null }),
                8000
              );
            }}
            onMouseLeave={() => this.setState({ fireMessage: null })}
          >
            fire
          </span>
          ;&nbsp;
          <span style={{ color: "grey" }}>
            indifference can be a part of skill
          </span>
          . orderingOfPreference is hate
          <br />
          <br />
          Are you being dispaired?
          <br />
          <br />
          Ew spit that out
          <br />
          <br />
          <span style={{ fontWeight: "normal" }}>
            I don't care/think about you;&nbsp;
            <span style={{ color: "grey" }}>
              I care about humans, animals and the universe
            </span>
            . indifference assumed
          </span>
          <br />
          <br />
          <div
            style={{
              minWidth: "200px",
              width: "30%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/llhkkdjap637q5g/DontThink.png?dl=0"
              }
            />
          </div>{" "}
          <br />
          <br />
          Next! Take your seat
          <br />
          <br />
          On Warp Speed:&nbsp;
          <a href="https://en.wikipedia.org/wiki/Trump_Plaza_Hotel_and_Casino">
            DJT
          </a>
          &nbsp;to FDA, "
          <a href="https://humanharvest.info">Fellas, it's over</a>
          "
          <br />
          <br />
          Ah man uh I was told to say I had all the symptoms
          <br />
          <br />
          <a href="https://application.nycsyep.com/">NYSYEP</a>&nbsp;is illegal
          (monopsony, slavery); "stimulus money from the feds to forgive debt" -
          two lies in one!
          <br />
          <br />
          Deposit is not an option to buy, and can be forgiven for a higher bid
          because the amount is not complete and a business can discriminate for
          price
          <br />
          <br />
          The PPP money is spent on finance and rent or labor finance and rent,
          the most efficient deal is to ban finance and rent instead of pay off
          their counterfeit-in-contact and slavery-by-proxy price-fixing. Reagan
          didn’t want prices to drop either, he was not cost-effective/
          micro-theory.com he was supply-side only. This price-fixing/private
          finance bailout would be supported by Reagan;
          <br />
          <br />
          need to have prior business income, no new business; appraised by
          revenue not expenses. Labor is slave here because these stagnant
          businesses keep the profit/assets gained
          <br />
          <br />
          let prices for food drop then children will get fed
          <br />
          <br />
          Souls to the polls isn’t sample bias if there is no 501c4 like
          endeavors. Must be 501c3 to not be sample bias (I was 501c3 for&nbsp;
          <a href="https://thumbprint.us">voter education</a>&nbsp;but now am
          ngo for keeping it out of the
          haram/equity-and-civil-rights-infringements of credit/debt)
          <br />
          <br />
          Fuck your&nbsp;
          <a href="https://squatcommune.com" style={{ color: "blue" }}>
            dad
          </a>
          !
          <br />
          <br />
          <div
            style={{
              border: "1px dotted grey",
              fontWeight: "normal",
              padding: "10px"
            }}
          >
            I held that Jan2018-Sep2018 lol
            <br />
            <br />
            then tried options directly
            <br />
            <br />
            they just watch portfolio, only need to hedge
            <br />
            <br />
            retail need same regulations as 13d filers, direct to exchange
            anonymized esp if suing the people with the data like I am haha
            <br />
            <br />
            debt:cash is 41:1! used to be 1:1. we certainly are a&nbsp;
            <a href="https://squatcommune.com" style={{ color: "blue" }}>
              team
            </a>
            , with shares, but lawmakers don't treat us like it
            <br />
            <br />
            with dollars
            <br />
            <br />
            which are market-share (not accrual or per history...)
            <br />
            <br />
            or vaults.biz
          </div>
          <br />
          <br />
          Alan D, "fired for a post? that may be legal!"
          <br />
          Unless discrimination is based on bid-capacity and -willingness or
          -skill, it doesn't have to be protected by anything but Amendment 13
          for being a free-rider on society to which we all lay static
          progression ontowards
          <br />
          <br />
          Imagine having children out of tax-deductables
          <br />
          <br />
          To say only public&nbsp;
          <a href="https://en.wikipedia.org/wiki/New_York_Times_Co._v._Sullivan">
            officials
          </a>
          &nbsp;can be speculated about or hold their opinion exclusively
          without "liability" of accrual-based "market-share" without
          cease-and-desist adjunication and correction or still of reasonable
          doubt to the logistical (not-correlatively found) truth if there is no
          malintent for mistakes and misgivings means that Apple is not privacy
          AND they owe me repairations even if it was not their intention to not
          understand that end-to-end encryption requires keys on device, if they
          were only reporting and not selling or competing for customers' or
          worse winning government contracts and worse government with usurped
          funding, valuation fixed-by-counterfeit-in-contract,
          forced-by-illegal-statutes and&nbsp;
          <a href="https://fdic.gov">promised by lies</a>
          <br />
          <br />
          If under net threat by the state/no-injury-crime, you pay for the
          crime, not the misleadings, even intentionally; however, if it is a
          tort then it must be intentional - accidents must not be used to
          instill policies of cross-party or appraiser-bias risk (insurance,
          bail)
          <br />
          <br />
          B-cell oncogenesis/graft("vaccine") = .05%
          <br />
          Death/case = .05%
          <br />
          Death/case w/o comorbidities/age = normal (or&nbsp;
          <a href="https://www.prb.org/countries-with-the-oldest-populations/">
            expected
          </a>
          )
          <br />
          Case the same as cold reaction, virus&nbsp;
          <a href="https://www.pnas.org/content/117/22/11875">nuclei</a>
          &nbsp;only&nbsp;
          <a href="https://www6.slac.stanford.edu/news/2020-12-18-scientists-get-most-realistic-view-yet-coronavirus-spike-protein-structure.aspx">
            seen
          </a>
          &nbsp;as&nbsp;
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7114857/">
            dried
          </a>
          <br />
          <br />
          randomness assumed in statistics & it is illegal to not-describe the
          non-controls
          <br />
          <br />
          <div style={{ width: "100%", flexWrap: "wrap", display: "flex" }}>
            <div
              style={{
                width: "33%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/iljegborcl3p0ok/Tangle1.png?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "33%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/itod9p2vdyg6uef/Tangle2.png?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "33%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/l0eh4gg1bb1k1pz/Tangle3.png?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "33%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/9uiak1vxlristh2/Tangle4.png?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "33%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/zozkogm6s396i85/Tangle5.png?dl=0"
                }
              />
            </div>
          </div>{" "}
          <br />
          <br />
          Money is market-share when using cash instead of accrual accounting
          <br />
          <br />
          Psaki: "It is not&nbsp;<a href="https://moldmask.co">conclusive</a>,
          the transmissibility of the virus, so we know that masks and vaccines
          help you me and our families."
          <br />
          <br />
          Clean dishes, mom cooks, credit is&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fintech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFintech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFintech: false }),
                10000
              );
            }}
          >
            haram
          </span>
          {/*width && <Fraud2 />*/}
          <Cable
            onError={this.props.handleScollImgError}
            src={
              this.state.nofredgraphs
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=HzAK&width=500&height=660"
            }
            float="right"
            title=""
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 3]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          The discrepency between&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.marx.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightMarx: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightMarx: false }),
                10000
              );
            }}
          >
            Piketty and Mises
          </span>
          &nbsp;is a matter of nomenclature, namely&nbsp;
          <a href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy">
            capital
          </a>
          &nbsp;being outstanding accrual vs real assets
          <br />
          <br />
          Any unsettled trade or counterfeit-in-contract is involuntary trade or
          slavery-by-proxy/colonialism/building-to-rent. I am a homebuilder
          paying mortgages/usless costs... Buy the house yourself or don't
          upshot my bid, Jew I don't care about your "value" you are accosting
          the whole chain
          <br />
          <br />
          Putting it in sales tax does the same thing but is less complicated
          (no deducting wages...)
          <br />
          <br />
          You have deductions because some sales are kept in the business
          account and need to be taxed. Remove corporate and income tax.
          <br />
          Just use sales tax, and fund http://vau.money (or similar) to deliver
          spoofable geohash on merchant transaction line for accounting software
          <br />
          <br />
          The&nbsp;
          <a href="https://www.google.com/search?q=quran+instructs+to+judge+others">
            islamists
          </a>
          &nbsp;are dying to live and play G-d. Did M-dawg ever say to judge,
          after He got choked out by that angel during his meditation in a cave,
          as G-d or be His executioner? Who are you to judge&nbsp;
          <a href="https://www.google.com/search?q=haram+to+lend">
            an adherent
          </a>
          &nbsp;to lifestyles for which one can amend for eternally for/to&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.jury.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightJury: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightJury: false }),
                10000
              );
            }}
          >
            which G-d exists
          </span>
          <br />
          <br />
          The same equalityequity/efficiency for labor to living wage is
          acheived by credit and dollarequity-protection equality
          <br />
          <div
            style={{
              width: "40%",
              position: "relative"
            }}
          >
            <a href="https://www.hud.gov/">
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/brp3j5zf9yj9ebs/HUD.png?dl=0"
                }
              />
            </a>
          </div>
          <br />
          <br />
          18% flat tax Steve Moore wants (above $10k), Billion dollars to the
          government monopsony as a collustion to get away with "earning" that
          much from ready-, willing- & able-customers
          <br />
          <br />
          Every payment/merchant service forces supply to take credit!
          <br />
          <br />
          Why make taxes progressive when they aren’t to redistribute or repair
          class-warfare damages?
          <br />
          <br />
          Inflation happens now 4200% + insurance + invoice +
          building-to-rentiers + 102% -housing (cpi)
          <br />
          <br />
          "If you regulate, not good for stocks, so in the short term&nbsp;
          <a href="https://www.forbes.com/sites/mikeozanian/?sh=1ebcdd7f6981">
            I
          </a>
          &nbsp;like banks"
          <br />
          <br />
          To apply productivity and capital investment - after reenumeration to
          (fair share at original priciple to purchases by year-to-year changes)
          3% sales tax under $2k for free-rider-immutable, and ban building to
          rent
          <br />
          <br />
          dynamism doesn't make people better off by living standards. Long term
          as a politic is fauxpas for fraud
          <br />
          <br />
          The difference between&nbsp;
          <a href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy">
            communists and capitalism
          </a>
          &nbsp;is organizational-productivity/bureaucracy
          <br />
          <br />
          Faux conservatives praising growth, "we need 40000 Dow," the
          conflation of price and need. Confirmation that he knows "growth,"
          "prosperity" and supply-side is not for a greater good, is just price,
          inefficient and not creative destruction. TAKE SCHUMPETER OUT OF YOUR
          MOUTH
          <br />
          <br />
          "Wealthy don't pay their fair share of taxes," the spending is unfair
          itself as monopsony so if you wanted to make things fair, reverse
          purchases to non-price-fixed by finance prices
          <br />
          <br />
          Simple majority "filabuster reform" is not going to help people, help
          is made by consensus... It was used to delay Andrew Jackson's&nbsp;
          <a href="https://www.history.com/this-day-in-history/andrew-jackson-shuts-down-second-bank-of-the-u-s">
            acquittal for detesting communism/finance/counterfeit
          </a>
          &nbsp;but not for trail of tears
          <br />
          <br />
          "Minority rights are protected in the Senate without this" - __
          <br />
          Where?
          <br />
          <br />
          "[appeasing] the minority will not address the majority or minorities"
          <br />
          <br />
          How can you have “prosperity and growth” but at the same time creative
          destruction Kudlow? “Federal money takes the risk away, good public
          private partnership”
          <br />
          <br />
          Jumping all over the place
          <br />
          <br />
          "No taxes" are demand side. Supply side is growth, and growth is only
          not theft if growing while per capita and per dollar (natural
          redistribution) - then it is abnormal trading volume (given prices are
          less likely to change, it is volume alone). “Deficits and debt are
          just arithmetic," he continues. Then Kudlow quotes Freidman, “the tax
          is rave spending,” and adds "but growth is good." Full stop. You would
          have to watch per capita per currencyComponentOfM1 trading X price
          total to isolate growth that is not from debt, which I know he only
          looks at&nbsp;
          <a href="https://vianickcarducci.medium.com/gdp-the-big-lie-b1a0868785f4">
            GDP
          </a>
          <br />
          "Stock market [prices] are affects, [useless, price-inelasticity
          inflationary] job prospects are affected"
          <br />
          <br />
          Here are some legal definitions I've been working on.
          Rentier-colonialism/rent-seeking/built-to-rent is slavery of demand &
          prohibited settled-trade or price-elasticity; " "invoices are
          theft"/debt/financial-cannibalism is counterfeit-in-contract.
          <br />
          <br />
          PPP: Apply to get my equity back unless I am an laborer? We have no
          @CivilRights
          <br />
          can't believe I didn't bring up the work-product for business, instead
          of only monopsony of labor and the still malfeasant adjudication of
          rent-seeking without intent to use demand slavery settlement price
          elasticity prohibition/counterfeit-in-contract "forgiveness"
          <br />
          <br />
          Investing in the community by borrowing is monopsony
          <br />
          not assistance, if people did it voluntarily, the price would drop
          <br />
          expand testing which are false positives for "gold standard"
          poly-chain reaction. not only was insurance by gov forced upon us in
          1937, it is fraud - insurance generally is prisoners' dilemma duress
          of course and cannot say choosing them saves money, even relatively.
          <br />
          <br />
          "testing&nbsp;
          <a href="https://www.memorialhealthcare.org/whats-the-difference-between-covid-19-rapid-and-prc-tests/">
            positive
          </a>
          &nbsp;for&nbsp;
          <a href="https://www.nih.gov/news-events/nih-research-matters/immune-cells-common-cold-may-recognize-sars-cov-2">
            covid19
          </a>
          &nbsp;7x, migrants are" -&nbsp;
          <a href="https://www.cruz.senate.gov/">This Doink</a>
          <br />
          <br />
          'For the president of the United States, the leader of the free world
          and head of the Republican Party, to make completely unsubstantiated
          [more than once with the same judge] CHARGES about our elections being
          rigged is not right,'&nbsp;
          <a href="https://www.bostonglobe.com/2020/11/11/nation/why-gop-superlawyer-ben-ginsberg-is-bucking-his-party-blasting-trumps-baseless-election-claims-2/">
            Ben Gisnberg
          </a>
          &nbsp;said in an interview.
          <br />
          <br />
          "We need to break a chain of bad decisions and get the&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.capitalGains.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightCapitalGains: true });
              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightCapitalGains: false }),
                10000
              );
            }}
          >
            economy going again
          </span>
          &nbsp;[jobs, individual-efficiency/ease] with most national guard back
          to their civilian jobs" -&nbsp;
          <a href="https://www.ngaus.org/">US National Guard Ass.</a>
          <br />
          <br />
          "Hard to break bad habits general." You're wrong on that one Heather
          <br />
          <br />
          Trump is a&nbsp;
          <a href="https://en.wikipedia.org/wiki/Trump_Plaza_Hotel_and_Casino">
            LOSER
          </a>
          . Get off my dick
          <br />
          <br />
          CNN: "This biden bill will put money in the pockets of americans, but
          not assets"
          <br />
          <br />
          You are required to lower utility-monopsony prices when taxes are
          lowered?
          <br />
          <br />
          Verbal bullying isn't&nbsp;
          <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
            illegal
          </a>
          , Bitch
          <br />
          <br />
          Stop saying how business can benefit from a package that is only a
          portion of what you take in equitymoney
          <br />
          <br />
          Either I am just listening more, or the media is just spewing more
          nonsense than usual to which I have to fact-check, I can only deduce
          that it is to prevent me from finishing thumbprint.us to which it is
          an alternative government and their bond would go to zero if citizens
          chose it
          <br />
          <br />
          Democrats are making it harder for election security professionals to
          ensure the ballot matches their I.D., need something like
          thumbprint.us or in-person state-issued I.D. check for that.
          <br />
          <br />
          There is a bit of vaccine non-information out there
          <br />
          <br />
          STOP ASKING FOR CAPACITY WHEN YOU MEAN&nbsp;
          <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
            DEMAND CAPACITY
          </a>
          &nbsp;WHICH IS PERFECTLY PRICE ELASTIC FOR ITS UTILITY PER EACH NEW
          CAPACITY, WE NEED &nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.bail.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBail: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBail: false }),
                10000
              );
            }}
          >
            SUPPLY
          </span>
          &nbsp;CAPACITY OR VOLUNTEER OR LESS FRUGAL PRODUCERS, NOT STEAL BY
          COUNTERFEIT-IN-CONTRACT
          <br />
          <div
            style={{
              width: "40%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/fohi9a6fxtrch0q/NeedFundsImmediately.jpeg?dl=0"
              }
            />
          </div>{" "}
          <br />
          "Need funds immediately." NO YOU DON'T you need to adjunicate finance,
          insurance-by-duress, rentier-colonism & involuntary trade now
          <br />
          <br />
          "Leverage things" of donors or settled-market price, not equity.
          That's illegal. It is not a matter of time. Naturally debt:cash is
          1:1depositary in 1908, now is 41:1
          <br />
          <br />
          CountyReimbursementsAcrossTheCountry, that's my equitymoney, dike
          <br />
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "40%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/alxtqu19s764stl/CountyReimbursements.jpeg?dl=0"
                }
              />
            </div>{" "}
            <div
              style={{
                width: "40%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/nnv1d4217tjix7b/IMG_0318.jpeg?dl=0"
                }
              />
            </div>
          </div>
          <br />
          This fat talks about equity and then says thanks to Biden for
          providing funds. Funding doesn't help, it only monopsonizes above the
          ask. Not only is it fraud by PCR antibody the "gold standard" but
          false positive as is for&nbsp;
          <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
            cold
          </a>
          's&nbsp;<a href="https://jvi.asm.org/content/77/16/8801">response</a>,
          the policy was forced upon us in 1937
          <br />
          <br />
          Border Patrol agents are saying 50-100% have wristbands to show how
          much pootang they owe the cartels on the way up. &nbsp;
          <a href="https://en.wikipedia.org/wiki/Janet_Yellen">
            STOP THE SPIGGETS
          </a>
          <br />
          <br />
          What is with the media today reminding us that the vaccine has already
          been approved and the bills are finalized? We could take all your
          money and give it to Greta Thunberg
          <br />
          <br />
          The only path forward is the&nbsp;
          <span
            onClick={() => {
              this.setState({ openForm: false, scrolled: false });
              this.invite.current.scrollIntoView("smooth");
              this.props.pauseScroll();
            }}
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            Efficiency Act
          </span>
          &nbsp;and debt:cash reconciliation for all purchases to which the
          LEAST frugal price-giving ask and price-taking person found
          price*output(or &nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trueProductivity.current.scrollIntoView("smooth");
              this.props.pauseScroll();
            }}
          >
            individual-efficiency, comparative-advantage productivity
          </span>
          )
          <br />
          "The people that do the best will have to pony up [for Nick Carducci's
          &nbsp;<a href="https://vaults.biz">govtech/lighttech</a> competitors
          who take credit from government contracts]" - Joe Biden, CNN
          <br />
          That is not the best way to make sure the people that earned equity by
          cheating&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.dispair.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightDispair: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightDispair: false }),
                10000
              );
            }}
          >
            repair
          </span>
          <br />
          <br />
          You need to pay in advance under duress to keep up with the pooled
          cross-party risk? Nobody needs this price-inelasticity by; abetting
          invoices which are counterfeit in contract and pooling capacity
          <br />
          <br />
          "In advance under duress? Isn’t price inelasticity dependent on asset
          level and available options? Pooling is one of the best benefits of
          insurance. Have you signed up for my email list?" - Financial Agent
          <br />
          <br />
          It’s like the prisoner’s dilemma. Have to join to keep up with the
          price-inelasticity of pooling (same utility for higher price), and if
          they pay any ask of delayed settlement rather than what demand has it
          is even higher than where supply and demand naturally meet their LEAST
          frugal price-makers and -takers.
          <br />
          <br />
          I do not like Varo advertising saving by comparing prisoner-duress
          options, doing so means you cannot save, which doing so is required to
          saave relatively if you are already bound to purchase insurance and
          front-run customers, not dissimilar to rentier-colonism in
          price-inelasticity but in heightened demand capacity instead of supply
          frugality, efficiency or competition (20+) for lower prices/utility.
          GDP/debt is stupid to look at because debt is additive to GDP. the
          Equity Laundering is BLARING
          <br />
          <br />
          "currencyComponentOfM1 is $2t and debt is $82t, where does it go?"
          "you're right, I don't know how we are going to pay it back,"
          replies&nbsp;
          <a href="https://en.wikipedia.org/wiki/Stephen_Moore_(writer)">
            Steve Moore
          </a>
          <br />
          <br />
          Just a money-grab for government to compete with govtechs like me
          <div
            style={{
              width: "40%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/twcxeleo8an08xo/IMG_3422.png?dl=0"
              }
            />
          </div>{" "}
          <br />
          Nothing to do with redistribution
          <br />
          <br />
          Immigrants should be able to buy property in two lamb-tail shakes
          <br />
          <br />
          If I were a government contractor interested in the longevity of my
          bonds, I would genetically engineer one Pete Butgieg to take equity to
          pay over the ask on infrastructure
          <br />
          <br />
          On Anderson Cooper some lady says racist person murderer needs to be
          shunned and excluded from community. Whore, I know you are alluding to
          me because if you were thinking about the subject you were using to
          talk about me you wouldn't just suggest that we shun him. I have
          chosen to work on my sites to retire early, and work in the open to
          retain copyright and build rapport
          <br />
          <br />
          Sen. Rounds, I like that Gold watch you rich fuck, give it to me you
          old douche
          <br />
          <br />
          <a href="https://www.daveramsey.com/blog/americans-have-debt#:~:text=A%20recent%20study%20showed%20that,first%2010%20people%20you%20see.">
            80%
          </a>
          &nbsp;of the country is owned by&nbsp;
          <a href="https://statista.com/chart/19955/household-debt-balance-in-the-united-states/">
            20%
          </a>
          <br />
          <br />
          Bitch, I invented the&nbsp;
          <a href="https://www.academia.edu/video/k5Gd51">spectrum</a>. only
          1.6% again&nbsp;
          <a href="https://www.facebook.com/IVN/">voted third party</a>
          ? my ass
          <br />
          <br />
          Do you really think most people are that stupid that they would prefer
          other people to have more dollars for not working in order to pay less
          taxes? 77WABC does
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Rentier-Colonialism" &&
              this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.RENTIERCOLONIALISM}
        >
          Stop talking about&nbsp;
          <span
            onClick={() => {
              this.Oooreily.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightOooreily: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightOooreily: false }),
                10000
              );
            }}
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            inflation
          </span>
          &nbsp;like it happens later and causes unemployment (nothing being
          made, people starving).&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.inflation.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightInflation: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightInflation: false }),
                10000
              );
            }}
          >
            Monetary-inflation, to that effect, only happens if bonds are paid
            off and foreclosures happen
          </span>
          &nbsp;to the assets. Most inflation is&nbsp;
          <span
            onClick={() => {
              this.Oooreily.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightOooreily: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightOooreily: false }),
                10000
              );
            }}
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            price-inelasticity inflation
          </span>
          , which happens first
          <br />
          <br />
          You can split shares initially at the max of whatever state, or try
          just writing your own royalty contracts...
          <br />
          <br />
          If you do the former and pay corporate tax to go public, then you can
          make denominations of 50 or 1 (100 shares), situated to vote on how to
          appropriate further dilution/payout decisions w...
          <br />
          <br />
          @FoxBusiness charles, people not working doesn't increase debt you
          retard, it lowers price if you make invoices fucking illegal
          <br />
          what'd you miss? suck my dick. all negative points on your stocks, you
          can blame it on me
          <br />
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trueGDP.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTrueGDP: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTrueGDP: false }),
                10000
              );
            }}
          >
            higher gdp is not better economy you gluttonous slut
          </span>
          &nbsp;Elizabeth Kate Claman, it is mostly invoices/counterfeit
          <br />
          <br />
          Curtis Swila and Democrats must be conspiring, giving Stimulus and
          enforcing collection by landlords/debtors. Most apparent fraud to
          conspire to prohibit-trade in price elasticity or reposession/down
          payment reconciliation for borrowers' customers there can possibly be
          without written intent
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Driving citizens crazy
          </i>
          <br />
          Lenders do not want bankruptcy, but they want Stimulus for borrowers
          instead of the protection I can provide with legal arguments below,
          because then the debt can no longer enslave the colonized-borrowers'
          customers down payments, or compete (by adding utility other than
          counterfeiting contracts to themselves of an unrequited dollar owner
          and self since it is more than principal without waiting customers'
          willingness and ability at the natural price).
          <br />
          <br />
          Supply-side masked as altruism. ban invoices of borrowers' customers'
          money, rent-colonist interventionist non-producing slave-drivers,
          counterfeit-contracts of borrowers' customers' money and insurance
          prisoner's dilemma&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.insurance.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPrisonersDuress: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPrisonersDuress: false }),
                10000
              );
            }}
          >
            duress
          </span>
          &nbsp;to not fight fire with fire.
          <br />
          <br />
          Stay afloat with stolen money (+ involuntary servitude to pay it back
          and to the benefit of bond-holders), how about get them out of the
          water
          <br />
          <br />
          Do you think a contract of corporate shares could adjudicate, in
          court, in favor of the lender without reparations of down payment for
          the borrower’s customers? Promising to split the dollar
          (price-inelasticity inflation) is&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.inflation.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightInflation: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightInflation: false }),
                10000
              );
            }}
          >
            just as involuntary as splitting it
          </span>
          &nbsp;(monetary inflation), normally a choice made by the
          dollar-shareholder. Currently the counterfeit debt:cash ratio in US
          dollars is 12:1. The second comment about price-elasticity is the fact
          that suppliers take as high a price as possible. Funding, regardless
          of the legality of its source - counterfeit or not, is always to the
          betterment of supply.
          <br />
          <br />
          <span
            ref={this.bidask}
            style={{
              color: this.state.highlightBidAsk ? "white" : "",
              backgroundColor: this.state.highlightBidAsk
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            In market economics, demand are price takers - our only respite is
            our capacity to spend in this ask first-bid later negotiation
            process.
          </span>
          <br />
          <br />
          Should be&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.education.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightEducation: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightEducation: false }),
                10000
              );
            }}
          >
            open source
          </span>
          &nbsp;and price-elastic actually, but striking is ok
          <br />
          Union collusion & duress strike of labors' time, is fine to corner by
          antitrust intent, but supply or assets on the other hand must compete
          by winning favor of price-taking consumers to have, settled, of their
          own to resell after use, not own with intent to scalp or rent instead
          of use
          <br />
          Collusion to instill duress by the union heads are much like
          corporate, central-planners, lenders and rentier-colonists
          <br />
          <br />
          Price-inelasticity inflation is 4100%, Monetary-inflation (minus
          housing) is 102%.
          <br />
          <br />
          <div style={tweetsStyle}>
            You should own it if for more than a year && it is implied your
            intent isn’t to be there if you rent {">"}1mo bed/bath/ovens more
            than 5, but to prohibit trade.
            <br />
            Prohibiting trade by price-inelasticity, leasing-out or scalping is
            involuntary servitude because it takes away from the opportunity of
            the saver to own it.
          </div>
          <br />
          <div
            style={{
              width: "40%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/1b5lup5i8pfgb97/StayInYourLane.jpg?dl=0"
              }
            />
          </div>
          <br />
          Stay in your lane 'spic, cease in saying liberty-lovers/conservatives
          value debt-spending for roads, which can be based on price-fixed
          tolls. YOU MUST STOP USING CONSERVATIVE TO TALK ABOUT DOLLAR-SPLIT or
          not removing free-riders from public goods, which should only be
          sales-taxed 3% under $2k (not resales/equity/uncut-material) to
          provide for the customers of the sales
          <br />
          <br />
          Here is Schumer, laundering a split of my bartending dollar-equity to
          a borrowers' lenders
          <br />
          <br />
          <a href="https://en.wikipedia.org/wiki/Gene_Sperling">
            GENE SPERLING hired by Biden
          </a>
          &nbsp;to ensure the payments that aren't spent on select government
          contractors' and their&nbsp;
          <a href="https://nationalsecuritycasino.com">pension</a>&nbsp;promises
          (forced by threat to start), like Microsoft - my competitor, aren't
          spent on&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.jewels.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightJewels: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightJewels: false }),
                10000
              );
            }}
          >
            assets like the cops and the CDC (Bill Gates)
          </span>
          &nbsp;can, and instead rentier-colonialism and financial-counterfeit
          promises. Complete fraud if the courts weren't a party to the suit
          they would return 40/41 wealth to consumers for price-fixing to
          debt/invoice counterfeit--in-contract collusion, loitering, &
          borrowers' customers' down payment loss to accredited usurpers of
          conditionally lowering standards in bond ratings since 1:1 security
          depositary receipts
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <div
            style={{
              width: "100%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "40%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/syu4kegvxmwxj13/LaunderToLender.jpg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <a href="https://moldmask.co">epidemiology</a>&nbsp;liability is on
          you for leaving the house, especially when the evidence is positive
          for&nbsp;
          <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
            cold
          </a>
          &nbsp;as&nbsp;
          <a href="https://jvi.asm.org/content/77/16/8801">well</a>.
          <br />
          <br />
          Biden&nbsp;
          <a href="https://www.investopedia.com/terms/t/treasurystock.asp">
            lies
          </a>
          &nbsp;and says the&nbsp;
          <a href="https://www.tradingtechnologies.com/xtrader-help/x-study/technical-indicator-definitions/volume-on-the-bid-and-ask-bavol/">
            price-inelasticity inflation
          </a>
          &nbsp;will lower prices again. ban invoices instead retard. it will
          cut poverty in half for a day but wall street is pricing their
          accounts to double that amount (for that transation alone in a&nbsp;
          <a href="https://micro-theory.com">microcosm</a>!
          <br />
          <br />
          "No more than 2% waste or fraud" from his paid oversight board, that
          is, only spent on&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trueGDP.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTrueGDP: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTrueGDP: false }),
                10000
              );
            }}
          >
            promises
          </span>
          &nbsp;to&nbsp;
          <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
            creditors
          </a>
          &nbsp;and&nbsp;
          <a href="https://www.zippia.com/landlord-jobs/demographics/">
            landlords
          </a>
          &nbsp;they made for themselves or build without the intent to use or
          sell in an actual trade, a settled one. Directly where the American
          people are and where it belongs" only 9% goes to people or
          unemploymenty insurance fraud, price fixing.&nbsp;
          <a href="https://www.nature.com/articles/s41598-020-73777-8">
            The DEATHS ARE NORMAL
          </a>
          . YOU ARE THE FRAUD YOU FUCKING &nbsp;GHOST
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          The&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.beast.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBeast: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBeast: false }),
                10000
              );
            }}
          >
            O.K.
          </span>
          &nbsp;symbol is&nbsp;<a href="https://humanharvest.info">666</a>, not
          chalk-colored people, CNN you cunt
          <br />I don't have 20 hands Greg Kelly - who is the weird&nbsp;
          <a href="https://en.wikipedia.org/wiki/Black">color</a>? "it is not
          our culture for white people to be called colored?" he 'sponds. You
          are a&nbsp;
          <a href="https://en.wikipedia.org/wiki/Cigarette">fag</a>
          <br />
          Why do you have to get a lawyer to have jurisprudence. Don’t judges
          know the law? What is this&nbsp;
          <a href="https://www.youtube.com/watch?v=th0Im-eJFx0">Judge Judy</a>?
          <br />
          <br />I guarantee all stress, depression and suicide is caused by
          finance/rentier-colonialism/
          <a href="https://wavv.art/United_States_of_America">back</a>-
          <a href="https://vaults.biz">taxes</a>
          /insurance-pooling-duress/borrowing-duress and&nbsp;
          <a href="https://foiegras.info">loss and infrastructure inflation</a>
          <br />
          <br />
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.cityhall.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightCityHall: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightCityHall: false }),
                10000
              );
            }}
          >
            The American People is not the Senate
          </span>
          <br />
          <br />
          <br />
          <br />
          Andrew Cuomo is&nbsp;
          <a href="https://igpa.uillinois.edu/programs/racial-attitudes">
            retarded
          </a>
          &nbsp;(self-harmer) or intentionally misleading saying you lose money
          in opportunity. opportunity lost (not property fraud), is not a loss
          you can deduct you corrupt nipple-ringed fuck
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          Trump plays with emotions of media ["people" -&nbsp;
          <a href="https://lexfridman.com/">L. Fridman</a>]
          <br />
          <br />
          Keep name out of mouth. but you did it Hulk Hogan! Photo regardles of
          pay is copyright unless violent (property) crime
          <br />
          <br />
          Journalists are just like communist/insurance/non-socialist propoganda
          arm. they get their itinerary from a central source
          <br />
          <br />
          <a href="https://en.wikipedia.org/wiki/Marc_Molinaro">
            Mark malinaro (Pube)
          </a>
          , "if federal government is [illegally] printing [not their] money,
          leverage it to open." Just open you bum, you don’t deserve or need
          (financial/back-rent/back-tax/invoice) promise bail-out to do that.
          Abjectly another fraud (if I had money for court fees I would make
          sure you pay for damages to public intelligence, you're harming kids
          spewing these lies. There is no resource for truth except me, here!).
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <span
            ref={this.billBiden}
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightBillBiden ? "white" : "grey",
              backgroundColor: this.state.highlightBillBiden
                ? "rgb(100,170,205)"
                : ""
            }}
          >
            Biden says the Bill increases supply; it actually&nbsp;
            <a href="https://www.tradingtechnologies.com/xtrader-help/x-study/technical-indicator-definitions/volume-on-the-bid-and-ask-bavol/">
              increases demand and price
            </a>
          </span>
          <br />
          <br />
          People say they care about poverty but don’t want people to keep what
          they earn or earn by keeping other consumers negative worth instead of
          working for their favor
          <br />
          <br />
          <a href="https://en.wikipedia.org/wiki/Pamela_Brown_(journalist)">
            CNN
          </a>
          &nbsp;are you taking about me? "This doesn't work and needs to
          change," about NY DOH order to not block people with symptoms? The
          order said block any positive PCR test, but those become positive for
          &nbsp;
          <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
            cold
          </a>
          &nbsp;as&nbsp;
          <a href="https://jvi.asm.org/content/77/16/8801">well</a>...
          <br />
          <br />I have awaited funding for&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.baltimore.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBaltimore: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBaltimore: false }),
                10000
              );
            }}
          >
            non-dilutive funding 9 years
          </span>
          &nbsp;don't take thumbprint.us from me now that I am almost finished
          you pathetic peice of shit. It is YOUR fault for not helping sooner,
          and I am not selling to nationalist- or indebted-government, or people
          unless the bylaws is owned by no person or corporation. For now,
          however, it is a sole proprietorship for me and my family with
          some&nbsp;
          <a href="https://vaults.biz">royalty contract w/ max-profit I have</a>
          <br />
          <br />
          Try to keep up without cheating bitch... she won't stop saying, "weigh
          in" for providing opinion I haven't rolled my eyes harder in my life
          <br />
          <br />
          {/*Laughter is a G-d given gift to build empathy with people... it is when you do not understand, to build comity to solve a misunderstood problem.
            <br/>
            <br/>*/}
          Inflation is the degradation of your depositary
          <br />
          <br />
          <a href="https://zippia.com/landlord-jobs/demographics/">
            Rentier-Colonialism
          </a>
          : unsettled "trade," the opposite of invoice unsettlement along time
          <br />
          Labor union/working people/luddites versus inventors/artists to death
          <br />
          <br />
          Essex County bragging about worstening playing conditions for solvency
          ratings and their AAA bond ratings to which used to be junk. Says he
          saves money on tax but spends more on price. Totally foregoing that
          fact in getting on the Globe Power Hour to mislead constituents in
          securities fraud. The debt service is not the problem, it is the
          counterfeit-in-contract price-inelasticity inflation.
        </div>
        <br />
        <div
          style={{
            position: "relative",
            width: "100%",
            minWidth: "100px",
            maxWidth: "500px"
          }}
        >
          <img
            style={{
              height: "auto",
              width: "100%"
            }}
            alt={
              `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
              `(I did this in comparative law/spite knowing it is all going to be ` +
              `reversed to the point of no action be taken with malintent to not compete ` +
              `for, but with, customers of businesses not creditors (not a customer, a ` +
              `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
              `consumers' down-payments and rights])`
            }
            src={
              settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
            }
          />
        </div>
        <br />
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Abuse of Power" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.ABUSEOFPOWER}
        >
          If the government provides aid and comfort to foreigners thru bonds,
          and they say it is good because they get cash instead of assets
          because domestic citizens use cash instead of assets; given that bonds
          are contracts wagering actual dollar-owners' cash (borrowers'
          customers' down payments lost in traditional&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.bail.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBail: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBail: false }),
                10000
              );
            }}
          >
            reposession
          </span>
          ), how else do you overcome tyranny other than insurrection by riot or
          destroying tea?&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.tea.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTea: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTea: false }),
                10000
              );
            }}
          >
            Historically
          </span>
          , that is how it has been done. They are breaking Amendment 4 and more
          financially and involuntarily, police are ignoring their duty to
          arrest
          <br />
          <br />
          <a
            href="https://pineapple-mint.com"
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            We are striving for perfection
          </a>
          <div
            ref={this.drugs}
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightDrugs ? "white" : "grey",
              backgroundColor: this.state.highlightDrugs
                ? "rgb(100,170,205)"
                : ""
            }}
          >
            Cancel all debt, don't let Wolf Blitzer pay them with
            dollar/market-share involuntary split
            <br />
            like calling a graft a non-human-part vaccine. croak, please before
            you hurt someone
            <br />
            <br />
            "Radical libertarianism;&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.navbar.current.scrollIntoView("smooth");
                this.props.pauseScroll();
              }}
            >
              drug/chemical abuse
            </span>
            ." Let them own houses then maybe they wouldn't want to trip balls.
            In any case you shouldn't concern yourself with how someone spends
            their lives. For one, I am delaying gratification and getting market
            share by copyright
          </div>
          <br />
          <span
            ref={this.inflation}
            style={{
              fontWeight: "bolder",
              color: this.state.highlightInflation ? "white" : "grey",
              backgroundColor: this.state.highlightInflation
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Inflation is the ask exuding its&nbsp;
            <a href="https://www.investopedia.com/terms/p/priceelasticity.asp">
              power
            </a>
          </span>
          <br />
          The&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.china.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightChina: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightChina: false }),
                10000
              );
            }}
          >
            effects
          </span>
          &nbsp;of "inflation" - as many imagine, and as depicted though U.S.
          school-taught history, which forgets the jobs lost from&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.livingWage.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightLivingWage: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightLivingWage: false }),
                10000
              );
            }}
          >
            paying debts
          </span>
          &nbsp;and forclosure -&nbsp;
          <span
            style={{
              color: "rgb(40,40,160)",
              fontWeight: "normal"
            }}
          >
            is actually the&nbsp;
            <a href="https://www.investopedia.com/terms/s/supply-curve.asp">
              propensity
            </a>
            &nbsp;for people to hoard, cheat and collude, to corner assets of
            people... rather than compete for their favor (a.k.a. raise price at
            what they're willing to ask). Inflation is actually [or is
            actually-caused by] the ability for people to do that.
          </span>
          &nbsp;Very little inflation by supply [as&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.bidask.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBidAsk: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBidAsk: false }),
                10000
              );
            }}
          >
            price-givers
          </span>
          ] of above&nbsp;
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.twenty.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTwenty: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTwenty: false }),
                10000
              );
            }}
          >
            20
          </span>
          &nbsp;competitors, whom do not&nbsp;
          <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws">
            compete with demand
          </a>
          , cause price of&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.livingWage.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightLivingWage: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightLivingWage: false }),
                10000
              );
            }}
          >
            living
          </span>
          &nbsp;to rise, in comparison [1300% to 102% (plus housing not included
          in&nbsp;<a href="https://www.bls.gov/cpi/">cpi</a>
          &nbsp;which has been 2% to find "
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trueGDP.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTrueGDP: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTrueGDP: false }),
                10000
              );
            }}
          >
            RealGDP
          </span>
          ," for a while, as has&nbsp;
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.compoundGramm.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightCompoundGramm: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightCompoundGramm: false }),
                10000
              );
            }}
          >
            interest
          </span>
          )]
          <br />
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            If everyone else is lying about what they can do in promising other
            peoples’ money, I can too - as well as short those with these
            price-fixed valuations, as well as my&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.concious.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightConcious: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightConcious: false }),
                  10000
                );
              }}
            >
              competitors
            </span>
            <br />
            <a
              href="https://wavv.art/United_States_of_America"
              style={{
                color: "black",
                fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                textEmphasis: "italics"
              }}
            >
              wavv.art/United_States_of_America
            </a>
          </div>
          <br />
          Unfair discrimination for housing, education and healthcare is caused
          by lending, invoices, rent and&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.insurance.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPrisonersDuress: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPrisonersDuress: false }),
                10000
              );
            }}
          >
            prisoners' dilemma of insurance
          </span>
          <br />
          <br />
          laws have to be justice-oriented in order for the equal application of
          unequal laws to be applied
          <br />
          <br />
          cash-
          <span
            ref={this.bail}
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightBail ? "white" : "",
              backgroundColor: this.state.highlightBail
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            bail
          </span>
          &nbsp;is bribery, it's like unequal application of law; or an equal
          application of the unequal law is unequal application of a law kernel.
          this unequal law of PPP is no different in that equality regard
          <span
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightBail ? "white" : "",
              backgroundColor: this.state.highlightBail
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Bail is like involuntary servitude of those without the money, and
            like borrowing in that someone else makes the decision to commit the
            crime the harms the prosciutto
          </span>
          <br />
          Stealing Safety&nbsp;&bull;&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.billBiden.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBillBiden: true });
              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBillBiden: false }),
                10000
              );
            }}
          >
            "Increase supply fastidiously"
          </span>
          &nbsp;-&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.biden.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBiden: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBiden: false }),
                10000
              );
            }}
          >
            Biden
          </span>
          <br />
          <br />
          There is nothing safe about funding supply of vaccines instead of
          keeping input costs down by allowing customers to fund it for&nbsp;
          <a href="https://foiegras.life">cheaper</a>
          <br />
          <br />I think it sticks to your damn mask, like a mold! I'll sue your
          ass
          <br />
          <br />
          <i
            ref={this.homebuilder}
            style={{
              width: "calc(100% - 20px)",
              maxWidth: "600px",

              transition: ".3s ease-in",

              color: this.state.highlightHomebuilder ? "white" : "grey",
              backgroundColor: this.state.highlightHomebuilder
                ? "rgb(170,100,205)"
                : "",
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            I was raised a&nbsp;
            <a href="https://en.wikipedia.org/wiki/Cronus">homebuilder</a>
            &nbsp;to pay off my own mortgage
            <br />
            I grew up building houses to pay for a mortgage that only retained
            value because courts don’t adjudicate at once.
            <br />I grew up building houses to pay for a mortgage that only
            retained value because courts don’t adjudicate at once. Don’t
            promise my money to your lender, thief
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <span
              style={{
                transition: ".3s ease-in",
                color: this.state.highlightChina ? "white" : "",
                backgroundColor: this.state.highlightChina
                  ? "rgb(170,100,205)"
                  : "",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              ref={this.china}
              onClick={() => {
                this.brookings.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightBrookings: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightBrookings: false }),
                  10000
                );
              }}
            >
              With division you get a ratio, but to add differing variables is
              not ok in calculus, so why do they teach that in economics? {"/*"}
              &nbsp;ok
            </span>
            <br />
            <br />
            China: U.S. GDP was 10%, then 1/7th, now 3/4
            <br />
            Population 4.5x
            <br />
            <br />
            Although they have been known to lie and have used propoganda, as
            U.S. has also&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.dvNotion.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightNotion: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightNotion: false }),
                  10000
                );
              }}
            >
              done in the past about
            </span>
            &nbsp;they have also stated intentions to ween off-debt and the
            power structures it creates
            <br />
            <br />
            "the&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.financeKills.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightFinanceKills: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightFinanceKills: false }),
                  10000
                );
              }}
            >
              entanglements
            </span>
            &nbsp;with the Chinese... work in-line with national-security
            principals out of this" - Fmr Sec. State&nbsp;
            <a href="https://vianickcarducci.medium.com/gdp-the-big-lie-b1a0868785f4">
              Pompeo
            </a>
          </div>
          <div
            ref={this.stats}
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              width: "calc(100% - 20px)",
              maxWidth: "600px",

              transition: ".3s ease-in",

              color: this.state.highlightStats ? "white" : "grey",
              backgroundColor: this.state.highlightStats
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            My (NC) estimates for party compilation 2022 and 2024. Supply-side
            (Pubs[80%], Dems[60%], Libertarians[50%]) vs Demand-side
            (Saver[100%], Green[90%]) Gallup does n 2,700 usually each survey
            call&nbsp;
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://www.facebook.com/IVN/posts/10156682244587465"
            >
              https://www.facebook.com/IVN/posts/10156682244587465
            </a>
            <br />
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://justcapital.com/news/liberals-and-conservatives-agree-corporate-america-needs-to-prioritize-workers/?fbclid=IwAR3hsWJtItnrpCU4Ise6__A-la4a59wfQze1yQqwpha_iFQYdxA9CG3E4Yc"
            >
              https://justcapital.com/news/liberals-and-conservatives-agree-corporate-america-needs-to-prioritize-workers/?fbclid=IwAR3hsWJtItnrpCU4Ise6__A-la4a59wfQze1yQqwpha_iFQYdxA9CG3E4Yc
            </a>
            <br />
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://www.isidewith.com/poll/488729614"
            >
              https://www.isidewith.com/poll/488729614
            </a>
            <br />
            <br />
            <br />
            CNN gaslighting every viewer that 62% (of 330,000,000) want this
            (sample of under 3,000 people, without shuffling to boot). Add more
            results like isidewith or thumbprint.us
          </div>
          <br />
          when buy Greenland IRS
          <br />
          <br />
          "Good to see you. If you were here, I wouldn't steal your equity"
          <br />
          <br />
          wouldn’t you rather ban invoices instead? It is technically already
          illegal, but not by precedence yet. doctor's take more than they are
          able to under customers are&nbsp;
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.insurance.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightInsurance: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightInsurance: false }),
                10000
              );
            }}
          >
            willing and able
          </span>
          &nbsp;to give, insurance binds us to meet these asks, preventing
          settled trade ignoring the&nbsp;
          <a href="https://micro-theory.com">counterfeit-in-contract</a>
          &nbsp;case
          <br />
          <br />
          Biden: "I promised I would get government to work for the American
          people, and this bill will do that," says Joe Biden
          <br />
          <a
            style={{
              width: "100%",
              position: "relative"
            }}
            href="https://wavv.art/United_States_of_America"
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/g8gt9ykrkxcdovs/Screen%20Shot%202021-03-07%20at%2012.18.11%20PM.png?dl=0"
              }
            />
          </a>
          <br />
          CNN: "[This bill provides] aid for state and local government [bonds]"
          - Jake Tapper, State of the Union, CNN
          <br />
          A Democrat says she only cares about current working lives is
          admittance of conspiring to build trust
          <br />
          <br />
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(50% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/p2oe87bzkaqhqo8/MedicalInvoice.jpg?dl=0"
              }
            />
          </div>
          <br />
          Imagine CNN calling the "Covid Relief bill," "relief," when it is owed
          to bond-holders and more - when you can ban
          finance(rent,debt,invoice,insurance) for competing with consumers
          instead and get the&nbsp;
          <a href="https://www.investopedia.com/terms/p/priceelasticity.asp">
            same utility for lower prices
          </a>
          <br />
          You aren't asking congress for money you are asking people
          <br />
          <br />
          <span
            ref={this.fasterWithCounterfeit}
            style={{
              color: this.state.highlightFasterWithCounterfeit ? "white" : "",
              backgroundColor: this.state.highlightFasterWithCounterfeit
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Republicans are attesting to my claim that government spending by
            tax or debt is faster, well after further consideration and
            experience I must argue that the only speed gained is in stealing
            copyright by government, otherwise competition from supply is faster
          </span>
          <br />
          <br />
          Literally this politician just admitted that the Covid "Relief" Bill
          is to, "Keep the economy afloat." That either means prevent
          price-elasticity or trade. That is illegal, admitting to conspire to
          prohibit trade or price-fix
          <br />
          <div
            style={{
              width: "100%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "25%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/ai5cfuhzjdycc75/FloatEconomy.jpg?dl=0"
              }
            />
          </div>
          &nbsp;
          <br />
          To steal for people who lost their jobs is doubly not fair
          <br />
          <br />
          Can someone ask why people "need the money?" The answer is always a
          contract that could fall under the impossible doctrine or forced
          majeure. "Need" or "crucial" relief is ALWAYS for the recipient's
          obligations that aren't price-elastic. What is price-elastic shouldn't
          need to help the supply-side
          <br />
          <br />
          If you want to help poverty from years of financial harm done by
          judicial malfeasance, tax for it don't double back and pay
          bond-holders more...
          <br />
          <br />
          If you make a bet with a credit card company that if you cannot get
          the money back, they get nothing, and the government helps them win by
          claiming your bet was a promise, you have a demonic government
          <br />
          <br />
          <span
            ref={this.quality}
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightQuality ? "white" : "",
              backgroundColor: this.state.highlightQuality
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            This $1.9t bill will raise prices for goods and services, and be a
            boon to the lending class. There is no good that comes from this:
            aggrandizing price & ruining opportunities for new producers by
            bootstrapping entrepreneurs (bartending, coding) to emerge and
            provide better quality and prices. It only monopolizes
            service-providers to those that exist, making it impossible for
            Savers to keep their earnings' worth
          </span>
          <br />
          <br />
          $800 million for food: if you didn't&nbsp;
          <a href="https://foiegras.life">interfere</a>&nbsp;it would be more
          affordable
          <br />
          <br />
          Stop calling stealing for doctors affordable healthcare: nothing about
          debt or price-inelasticity goes towards making healthcare more
          affordable, it does the opposite and monopolizes equity for doctors.
          <br />
          Moody's is abjectly corrupt, no intent declared is required to convict
          on their conspiracy to prohibit trade: if the debt contract followed
          contract law, and an unrequited third-party's dollars is waged in
          mounting or changing the payout terms, they wouldn't rate debt well
          above 1.2x cash (now 13x cash) as it is impossible to pay debt 13
          times ($82tdebt:$6tcash). (borrower would have to earn then pay
          creditor 13 times)
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder"
              //textDecoration: "underline"
            }}
          >
            Lending is not helping, "forgiveness" (need renumeration for
            borrowers' customers' injury) is theft, anticompetitive and unequal
            law for labor, pre-revenue entrepreneurs and artists
          </i>
          <br />
          {!this.state.facebookerror && (
            <iframe
              title="Lending is not helping, forgiveness is theft, anticompetitive and unequal law for labor, pre-revenue entrepreneurs and artists"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbaltimorebizjournal%2Fposts%2F10164993696840716&width=300&show_text=true&height=444&appId"
              width="300"
              height="444"
              style={{
                backgroundColor: "#3b5998",
                border: "none",
                overflow: "hidden",
                width: "480px"
              }}
              onError={this.handleFacebookError}
            ></iframe>
          )}
          &nbsp;
          <br />
          Does no one at the Baltimore business journal understand that prices
          are elastic for the same utility... if you did you’d know that this
          doesn’t help... only&nbsp;
          <a href="https://www.investopedia.com/terms/a/ask.asp">
            one side of the market, the ask.
          </a>
          <br />
          That it can only pay financial obligations is abject fraud too. Better
          to let finance lose, not force dollar-owners to pay and let labor,
          pre-revenue inventors and artists not get applied the same laws. The
          Great Depression was caused by paying off private-debt with public
          credit instead of defaulting (and banning it)
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />"
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.bcell.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBcell: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBcell: false }),
                10000
              );
            }}
          >
            stabilize education system
          </span>
          ?" That is not&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fintech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFintech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFintech: false }),
                10000
              );
            }}
          >
            stable
          </span>
          , only settled trade (nothing outstanding), is stable. You are paying
          off the&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trueGDP.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTrueGDP: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTrueGDP: false }),
                10000
              );
            }}
          >
            13:1 or 30:1
          </span>
          &nbsp; counterfeit/involuntary-trade.&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fintech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFintech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFintech: false }),
                10000
              );
            }}
          >
            You need to print
          </span>
          &nbsp;$76t for there to be enough
          <br />
          <br />
          "half&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.insurance.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightInsurance: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightInsurance: false }),
                10000
              );
            }}
          >
            children
          </span>
          &nbsp;in poverty, out of poverty due to HR 1319," says VP Harris; nc:
          are you counting accrual payable?
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightCompoundGramm ? "white" : "",
              backgroundColor: this.state.highlightCompoundGramm
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.compoundGramm}
          >
            "Power of compound interest," ex-Senator Phil Gramm says on
            Conversations with Nancy Brinker.
            <br />
            "The debt will be there until Jesus comes back," he continues.
            <br />
            "Interest rates will be at historic lows, unlike 5yr gov bond 5%
            post-war [1950-2000] until then"
          </span>
          <br />
          <br />
          "Where is it&nbsp;
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.homebuilder.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightHomebuilder: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightHomebuilder: false }),
                10000
              );
            }}
          >
            coming from
          </span>
          ?" queries Maria Barteloma
          <br />
          "Your children and&nbsp;
          <span
            onClick={() => {
              this.Oooreily.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightOooreily: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightOooreily: false }),
                10000
              );
            }}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            grandchildren
          </span>
          ," replies Sen Lindsey Graham.
          <br />
          <br />
          Heart disease reduced for coffee-drinkers, maybe it is drinking 8-cups
          of water
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            <a href="https://en.wikipedia.org/wiki/Cronus">Old</a>&nbsp;
            <a href="https://www.zippia.com/landlord-jobs/demographics/">
              people
            </a>
            &nbsp;and Nobel-Prize winning economists lie about the following
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Less&nbsp;
            <a href="statista.com/statistics/188489/median-value-of-savings-bonds-owned-by-us-families-by-age/">
              jobs
            </a>
            &nbsp;means lower prices and easier life
          </div>
          <br />
          <div
            ref={this.royalty}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              transition: ".3s ease-in",
              color: this.state.highlightRoyalty ? "white" : "",
              backgroundColor: this.state.highlightRoyalty
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Do not let any corrupt congressperson tell you you cannot get
            funding without debt, they don't want to be denied the usurped funds
            from borrower's customers. You can get a better deal without selling
            or risking equity by making your own royalty contract w/ max-profit,
            and if you don't want to go public you can pay no corporate tax,
            only income
          </div>
          <br />
          <span
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightGOA ? "white" : "",
              backgroundColor: this.state.highlightGOA ? "rgb(170,100,205)" : ""
            }}
            ref={this.goa}
          >
            Honorable Gene Dodardo (Government Accountability Office what a
            crock of shit/fraud to prohibit [settled] trade) is an idiot if he
            is not a consumer, retarded if he is one, or nefariously lying
            understanding that it is not the case that, "SBA loans helps small
            businesses," when in fact it obviously prohibits price-elasticity
            and the same product could be had for a much lower price without it.
            <br />
            <br />
            <div
              style={{
                position: "relative",
                width: "100%",
                minWidth: "100px",
                maxWidth: "500px"
              }}
            >
              <img
                style={{
                  height: "auto",
                  width: "100%"
                }}
                alt={
                  `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                  `(I did this in comparative law/spite knowing it is all going to be ` +
                  `reversed to the point of no action be taken with malintent to not compete ` +
                  `for, but with, customers of businesses not creditors (not a customer, a ` +
                  `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                  `consumers' down-payments and rights])`
                }
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
                }
              />
            </div>
            <br />
            <br />
            Trade is an exchange of mutual benefits, loans are predatory and are
            to keep paying lenders, rentiers, colonists, and instigators of
            prisoners' dilemma pooling from losing out their usurped income that
            they are used to
            <br />
            <br />
            Not only do we owe it back but it is an antitrust case against the
            government advertising this as helpful instead of anticompetitive
            for government and asset accumulation by lending usurped funds and
            payout schedule in contract beyond a willing/able customer, and only
            raises price - it obviously does not help and to say otherwise is
            reprehensible if intentful or not for a government official
            (Comptroller General) to hold as true.
          </span>
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            laws don't matter anymore
          </i>
          <br />
          <a href="https://nickcarducci2022.com">nickcarducci2022.com</a>
          <br />
          <br />
          <a
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightBooker ? "white" : "",
              backgroundColor: this.state.highlightBooker
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.booker}
            href="https://www.politico.com/states/new-jersey/story/2021/02/04/booker-reintroduces-baby-bonds-bill-to-give-all-newborns-a-1k-savings-account-9425345"
          >
            Cory Booker
          </a>
          &nbsp; calls stealing in contract with bonds, contributions
          <br />
          WE DO NOT&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.populism.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPopulism: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPopulism: false }),
                10000
              );
            }}
          >
            CONSENT
          </span>
          <br />
          CITY MONEY IS NOT THE CITY'S, NOR IS WHAT HE PROMISES IN CONTRACT
          <br />
          It's a trap in price inelasticity, impossible solvency and
          slavery/counterfeit
          <br />
          <br />
          Don’t tax to pay for things && or allow people to trade with promises
          of other peoples’ assets, let prices fall and tax for things where a
          free rider cannot be avoided && it is for that business’ security (not
          hedging with cross-party risk...), not trading commodities or stock...
          (A) just bailing out bad bets with $.01 transaction tax these debt
          transactions need to be reversed like ACTUALLY cancelled/forbidden but
          the non-debt purchases need to be reversed to cash:debt prices as
          well. (B) Not this fraudulent “canceling” by paying it off by
          dollar-share split
          <br />
          <br />
          To be sure, the pursuit of happiness should not be at the expense of
          others. It means we get what we give. (C) Trade is an exchange of
          benefits, supplying [alone] is the competition - which should be based
          not on counterfeit by invoice or abetting duressful purchases as a
          broker by pool or expiration.
          <br />
          <br />
          While the&nbsp;
          <a href="https://froth.app">Will Smith (bottom of page)</a> movie
          celebrates&nbsp;
          <a href="https://www.bls.gov/news.release/empsit.t19.htm">
            2% of the population
          </a>
          &nbsp;that has 1100% of the assets, 98% are being colonized, but not
          by race! We’ve made so much progress.
          <br />
          <br />
          Capital gains or loss is not a tangible loss. It is your fault for not
          trading when an offer was available at the price you prefer. It is
          a&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.valuation.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightValuation: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightValuation: false }),
                10000
              );
            }}
          >
            valuation
          </span>
          &nbsp;of last trade and not all shares outstanding can afford that
          price or&nbsp;
          <a href="https://nationalsecuritycasino.com">
            are even included in the outstanding lot sometimes
          </a>
          <br />
          <br />
          Wealth is about relativity to one another after it is about the
          utility of the asset, upon dollar/depositary-splitting
          <br />
          <br />
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightCitadel ? "white" : "",
              backgroundColor: this.state.highlightCitadel
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.citadel}
          >
            Citadel claiming ownership as sustaining "prices and being proud of
            their team" IS CONFESSION
          </span>
          <br />
          Dodaro, please look at tax receipts when analysing our ability to pay
          down debt or default to cash:debt, not the GDP - new money - new debt
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "War on Poverty" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.WARONPOVERTY}
        >
          People say they care about poverty but take from their demand equity
          and give certain people more, reducing their earnings' utility and
          forcing us into perpetual labor (min: dishwash yourself a house, max:
          pay unsettled "trade"). The corrupt media and educational institutions
          know this. Only if UBI is 100% ("Covid 'Relief'" Bill is 9%, probably
          includes insurance which is duress and this insurance was&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.IRS.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightIRS: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightIRS: false }),
                10000
              );
            }}
          >
            forced
          </span>
          ) is it purely monetary-inflation (102% + housing); price-inelasticity
          inflation (4200% + insurance cross-party duress-pool) is more
          problematic for everyone in demand.
          <br />
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.china.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightChina: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightChina: false }),
                10000
              );
            }}
          >
            China of U.S. GDP was 10% century ago, decades ago 1/7th, 2020 3/4
            <br />
            Population 4.5x
          </span>
          <br />
          Although they have been known to lie and have used propoganda, as U.S.
          has also&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.dvNotion.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightNotion: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightNotion: false }),
                10000
              );
            }}
          >
            done in the past about
          </span>
          &nbsp;they have also stated intentions to ween off-debt and the power
          structures it creates
          <br />
          <br />
          "the&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.financeKills.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFinanceKills: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFinanceKills: false }),
                10000
              );
            }}
          >
            entanglements
          </span>
          &nbsp;with the Chinese... work in-line with&nbsp;
          <a href="https://nationalsecuritycasino.com">national-security</a>
          &nbsp; principals out of this" - Fmr Sec. State Pompeo
          <br />
          <br />
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",

              transition: ".3s ease-in",

              color: "white",
              backgroundColor: "rgb(170,100,205)"
            }}
            onClick={() =>
              this.setState({ openrelief: !this.state.openrelief })
            }
          >
            Relief for the usurped invoices and property colonialism
          </span>
          <br />
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.openrelief ? "white" : "",
              backgroundColor: this.state.openrelief ? "rgb(50,100,255)" : ""
            }}
          >
            Three routes: reconciliation to original principal or repo+repo down
            payments, dollar-split against corporate share comparative law, or
            keep this counterfeit personal income cluster****... lending is
            communism, not means of production to people that only spend what
            they are willing and able to spend. People who don’t borrow should
            be seeking renumeration for price-picking and counterfeit, not
            merely laugh at the borrower/lender collusion
          </span>
          <br />
          <br />
          WHY TAKE FROM PEOPLE THAT WORK that launder to injustices instead of
          remove injustices?&nbsp;
          <a href="https://en.wikipedia.org/wiki/Fareed_Zakaria">CNN</a>&nbsp;is
          blatantly lying to viewers about the financial (opportunity,
          incentive) harm done
          <br />
          <br />
          Stop talking about interest rates larry sommers, there is only $2t of
          equity but $82t debt. it is slavery to counterfeit ends and 4200%
          price-inelasticity inflation and cross-party insurance rent-colonist -
          why care about inflation minus housing at 102%
          <br />
          <br />
          $1400 out of what could be $14000 in the total that is spent doesn't
          keep people out of poverty
          <br />
          <br />
          "Equity-disenfranshisement of savers leads to more growth, dynamism &
          opportunity for everyone. So let's get started," peers Fareed Zakaria.
          STAY THE FUCK AWAY FROM ME CREEP. 2/3 seem to approve it from a
          sample, then the guest says I am not going to speak for Republicans.
          YOU ARE SPEAKING FOR MOST OF AMERICANS WITH A SAMPLE YOU FUCKING DUNCE
          <br />
          <br />
          <a href="https://FairFight.org">FairFight.org</a>, the filabuster is
          the only protection a minority has, and it is not powerful. Filabuster
          has nothing to do with power that is in&nbsp;
          <a href="https://www.opensecrets.org/parties/">corporate donations</a>
          . I mean,&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.POLLINGFRAUD.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFlop: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFlop: false }),
                10000
              );
            }}
          >
            YOU
          </span>
          &nbsp;want to discuss things that cannot be proven freely until a
          cease and desist is brought from&nbsp;
          <a href="https://www.nature.com/articles/s41598-020-73777-8">
            evidence
          </a>
          &nbsp;your presumption is not a possibility (reasonable doubt) bad
          name for them/their actions
          <br />
          <br />
          Why does&nbsp;
          <a href="https://indivisible.org/resource/congress-101-filibuster">
            Indivisible
          </a>
          &nbsp;make out "removing the filabuster" as reducing the number of
          majority votes needed to win over the minorities. THAT IS NOT WHAT
          FILLABUSTER MEANS
          <br />
          <br />
          the filabuster is not what is keeping a super majority a super
          majority, it is a super majority regardless
          <br />
          <br />
          They want to dismantle super majority in lieu of transparency and only
          free-rider-immutable spending and max-margin {"<"}20 competitors and
          protect equityutilitymoney civil rights
          <br />
          <br />
          elected office are not jobs they are&nbsp;
          <a href="https://thumbprint.us/about">non-profits</a>!
          <br />
          <br />
          The Government is to help keep citizens from harming eachother, not
          monopolize - even civic tech is copyrighted
          <br />
          <br />
          "N.J. could soon face a historic housing crisis. A city devastated by
          COVID-19 might be the epicenter." - NJ.com These crises are man made.
          Enough rentier-colonialism. Just as wasteful as communist ghost
          cities. Front-run & dumber fool into duressful prohibited settled
          trade, over and over. No baby bonds!
          <br />
          <br />
          It is a scam for nonprofit name to be taken by government. They are
          not the people! When I sue the government for counterfeit and
          trust-building, it better not say Nick Carducci vs. the People because
          the state is a scourge on the people, keeping us from owning assets!
          <br />
          <br />
          “All it takes are resources," says a guest of CNN pertaining to
          migrant help. Resources do not have to come from Saver/laborer/artist
          equity, it can come help most by not creating a welfare system that
          lured them & not giving them resources so the producers of their
          society have to accept lower prices, and the labor can afford it. We
          want to protect ourselves with free-rider-immutable 3% sales tax under
          $2k. To suggest this isn't possible is criminal, as is forcing
          producers to sell on credit or loans: counterfeit-in-contract.
          Technically illegal but not by precedence due to court malfeasance and
          self-interest instead of jurisprudence for the tort-parties with
          impartiality or reward/fine requiring debt or not minimally-inhibiting
          <br />
          <br />
          CNN: "Biden is sure to mention the $1400 to sell the Covid Relief
          Bill, so they know EXACTLY how it affects them." 9% of exact if that
          is the description, -100% goes unwarned by him about being able to get
          the same service if ban invoice/rent/non-small-item-sales-tax instead.
          <br />
          <br />
          Cut child poverty in half with $1400 is a one-time thing. Markets [not
          promises in finance, non-natural growth (most of your measure is
          population idiot, laughable to look at GDP without fixing for
          population and claiming credit for the morning Rona on CNN)] don't
          know best it is fairest
          <br />
          <br />
          The right says fiscal responsibility for the government but not the
          corporates. Michelle Malkin, Sovereign Nation, what the fuck does blm
          & "vaccines"/grafts have to do with police
          <br />
          <br />
          Free education is not free, stop misleading people into acquiescing to
          a equity split that they get $1400 of, only 9% of total they would
          have if no action were taken, except now they have no negitiation
          power with supply/and the finance/rentier-colonist you allow to go on
          without aggregate adjunication because it wouldn't work for the
          corrupt courts of the U.S. in their own financial situation so they NO
          LONGER SERVE.
          <br />
          <br />
          "Having people employed is good for the economy," says Washington Post
          writer on NPR/Morgan Stanley's LRC Propoganda Unit, currently
          under-investigation for illegal nomenclature of their show. Uh not for
          employment alone, retard, we can have technological advancement to
          have no jobs.
          <br />
          LRC host says, "non-disabled adult should be doing work outside the
          home." Why is that your economic policy goal? Slave-driver,&nbsp;
          <a href="https://en.wikipedia.org/wiki/Josh_Barro">leave us alone</a>
          <br />
          <br />
          Sales tax (not income tax) on&nbsp;
          <a href="https://vaults.biz">
            free-rider-immutable services for security of where you shop
          </a>
          &nbsp;
          <span style={{ textDecoration: "line-through" }}>
            and welfare only by tiny-solar panel homes
          </span>
          &nbsp;not predatory debt. The Fed will not give share without it being
          a debt. They would rather kill us
          <br />
          why tax to raise price even for tiny homes with solar roofs, just make
          them
          <br />
          <br />
          Unemployment insurance paid by first taking equity from you by
          share-splitting the dollar (a.k.a. depositary-share) into a cross
          party pool involuntarily to keep your landlord or lender from missing
          human income or having to sell to the homeless youth for cheap.
          <br />
          In every scenario is it not anyone elses' responsibility nor good will
          to help you ruin your negotiating position, and mine
          <br />
          <br />
          "Targeted money" from savers, not tax-payers (dollar is corporation),
          is not for assets but financial debts and backtaxes. Otherwise it is
          fraud. only the federal reserve can buy assets. &nbsp;
          <a href="https://www.isidewith.com/poll/488729614">
            IN NO SCENARIO CAN TAX PAYERS PAY 41x WHAT EXISTS
          </a>
          . Jesus, people at the Washington Post are fucking idiots! Or, they
          know EXACTLY how they are misleading people into self- and
          co-demand-harm
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          Being generous instead of stingy is literally taking their equity and
          giving corporations money. Left, Right, Center sponsored by Morgan
          Stanley. A little biased to call yourself center. STOP THUMBS UPPING
          BAD EVIL THINGS. LET PRICES OF HOUSING FALL. Then&nbsp;
          <a href="https://www.washingtonpost.com/people/christine-emba/">
            this fucking slut
          </a>
          &nbsp;says the US is bad at IT, then give me the money for cheap
          instead of being against young italian males. leave the earth
          <br />
          <br />
          We all have to make a living (read:cannibal), but we all don't have to
          produce by front-running and than dumber-fooling consumers. and these
          direct deposits are involuntary split that you get 9% of
          <br />
          <div style={{ position: "relative", width: "100%" }}>
            <img
              style={{
                width: "100%",
                height: "auto"
              }}
              onClick={() => {
                this.fintech.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightFintech: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightFintech: false }),
                  10000
                );
              }}
              alt="achilles heel in forcing credit gouging and counterfeit in American merchant services"
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/00nklkuxtq5t3cv/achillesHell.jpeg?dl=0"
              }
            />
          </div>
          &nbsp;
          <br />
          <br />
          If you borrow money, you do not have to pay it back. If you do, over a
          general income, you are instigating that agreement on your customers
          or employer. They are the one with the money, not even enough if not a
          royalty contract, and collude to corner assets at an unsettled price
          or buying without the intent to use. Only old people will tell you you
          legally have to pay your loans.
          <br />
          <br />
          CNN, please stop not correcting your public health experts when they
          presume that non-symptomatic people are transmitting covid when your
          only proof can be a false negative for the&nbsp;
          <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
            cold
          </a>
          &nbsp;with the "
          <a href="https://jvi.asm.org/content/77/16/8801">gold</a>
          standard" PCR tests.. and stay the fuck away from me, don't exclude me
          without non-invasive evidence either or you're free-riding my societal
          contributions
          <br />
          <br />
          Stop hurting people (leave) Katherine Rompell you fucking lying
          financial slut, MOST PEOPLE DO NOT WANT SPENDING (you are sampling and
          not fully-informing about costs in price-inelasticity and splitting
          equity to do so), who in their right mind would suggest Democrats
          delayed spending of this bill, guilty of neglect. There is only $2t
          currencyComponentOfM1. There is $82t debt. That is all compound
          interest or re-"investment." To hold both facts that it is needed and
          there is never enough without adjunicating to cash:debt at the time of
          transaction is to be criminally-intent.
          <br />
          <br />
          <a href="https://vaults.biz">Tax fairness</a>&nbsp;- People can fit
          but you are giving up our ghost; more money separates us. Hetty
          Rosenstein wants to protect pensions, through no fault of their
          own&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.IRS.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightIRS: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightIRS: false }),
                10000
              );
            }}
          >
            they were threatened to invest in the public stock market
          </span>
          .&nbsp;probably a proponent of&nbsp;
          <a href="https://nationalsecuritycasino.com">
            spying/incomparable applications of law/disclosure on retail traders
            to fix prices of shares too
          </a>
          <br />
          <br />
          <span ref={this.trueProductivity}>
            trueGDP = ((v2- (GDP/(m2-currencyComponentOfM1))
            )*currencyComponentOfM1 - NM - ND)
            <br />
            (left) trueGDP/P
            <br />
            (right) (trueGDP/P)
            <br />
            (right) (trueGDP - NM - ND)/P
            {/*width && <Fraud width={Math.min(600, width - 100)} />*/}
            <Cable
              onError={this.props.handleScollImgError}
              src={
                this.state.nofredgraphs
                  ? ""
                  : "https://fred.stlouisfed.org/graph/graph-landing.php?g=C6m9&width=500&height=660"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 2]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            (( (v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 -
            NM - ND) / P) / currencyComponentOfM1
            {/*width && <Fraud2 width={Math.min(600, width - 100)} />*/}
            <Cable
              onError={this.props.handleScollImgError}
              src={
                this.state.nofredgraphs
                  ? ""
                  : "https://fred.stlouisfed.org/graph/graph-landing.php?g=HzAK&width=500&height=660"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 1]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </span>
          <br />
          <a href="https://twitter.com/nowthisnews/status/1370493485829197825?s=20">
            AOC
          </a>
          , "Free stuff," she needs to go to jail for&nbsp;
          <a href="https://www.researchgate.net/publication/344197041_FEC_government_spending_as_advertised_in_political_campaigns_as_free_to_even_the_beneficiary_when_actually_it_is_misleading_towards_indentured_servitude_heightened_cost_capacity_requires_dollar-split">
            false advertisement
          </a>
          , it is paid by stolen equity and makes it worse
          <br />
          Bills are free just the same for the private lender as this is for the
          government contractors, free assets to promise to themselves
          <br />
          <br />
          Economic growth is apples and oranges traded, or a natural
          redistribution of wealth depending on objective skill, quality or
          price of their own assets in royalty-schedule. It is also non-sensical
          to look at the number GDP without adjusting for new money debt and
          persons by division or change on their own indices
          <br />
          <br />
          This is not a Natural/National catastrophe Larry, you stole our rights
          to refuse cross-party pooling in cosigning this bill without requite
          <br />
          <br />"
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.financeKills.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFinanceKills: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFinanceKills: false }),
                10000
              );
            }}
          >
            We
          </span>
          &nbsp;cannot create&nbsp;<a href="https://micro-theory.com">wealth</a>
          ," Steven Moore says. "Our children will have to pay&nbsp;
          <span
            onClick={() => {
              this.Oooreily.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightOooreily: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightOooreily: false }),
                10000
              );
            }}
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            these costs
          </span>
          ," he continues in a fervent disporia of his bearings
          <br />
          "Tax to finance the Green New Deal," remarks Larry&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.technicallyIllegal.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTechnicallyIllegal: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTechnicallyIllegal: false }),
                10000
              );
            }}
          >
            Kudlow
          </span>
          &nbsp;paraphrasing Janet Yellen March 2021 about the sequel&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.livingWage.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightLivingWage: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightLivingWage: false }),
                10000
              );
            }}
          >
            precursor to the rise
          </span>
          &nbsp;of the&nbsp;
          <a href="https://www.theatlantic.com/business/archive/2012/11/the-long-story-of-us-debt-from-1790-to-2011-in-1-little-chart/265185/">
            third reich
          </a>
          &nbsp;paying off private-debt with public credit, this time by
          military and aided by the lie that&nbsp;
          <a href="https://nationalsecuritycasino.com">Italy joined</a>
          &nbsp;for&nbsp;<a href="https://froth.app/debt">hair color</a>, which
          was set by the planning to&nbsp;
          <a href="https://www.investopedia.com/terms/f/1913-federal-reserve-act.asp#:~:text=The%201913%20Federal%20Reserve%20Act%20is%20legislation%20in%20the%20United,bank%20to%20oversee%20monetary%20policy.">
            do so
          </a>
          &nbsp;and the incentive thereby to fire and sell bonds, the latter
          requiring the former and the unduly-monopsonized labor's living
          expenses falls.. Demand is a shared negotiation, and still requires
          shareholder rights and some wealth relativity to peter through - and
          build consensus of fair opportunity thru - demand's utility
          considerations as individuals
          <br />
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() =>
              this.SYSTEMICINEQUALITY.current.scrollIntoView("smooth")
            }
          >
            individual rights
          </span>
          ,&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => this.INSURANCEFRAUD.current.scrollIntoView("smooth")}
          >
            quality health care
          </span>
          ,&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.planetary.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPlanetary: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPlanetary: false }),
                10000
              );
            }}
          >
            climate change(33rd most important per John, Populist)
          </span>
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => this.IMMIGRATION.current.scrollIntoView("smooth")}
          >
            immigration
          </span>
          ,&nbsp;
          <a href="https://nationalsecuritycasino.com">national security</a>,
          criminal justice+police reform/
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => this.GUNSAFETY.current.scrollIntoView("smooth")}
          >
            guns
          </span>
          ?
          <br />
          Smericonish segment with Populist
          <br />
          When a rorschach test has become an aptitude test except in the&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.mutilation.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightMutilation: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightMutilation: false }),
                10000
              );
            }}
          >
            real&nbsp;
            <a href="https://www.statnews.com/2021/02/26/sen-rand-paul-misunderstands-transgender-medicine-heres-the-truth/">
              data
            </a>
          </span>
          , you know the corporate left & right is Deep
          {!this.state.facebookerror && (
            <iframe
              title="Maryland Comptroller Peter Franchot is calling for an independent, bipartisan commission to audit state and federal dollars spent on pandemic relief."
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbaltimoresun%2Fposts%2F10159232050439712&width=300&show_text=true&height=444&appId"
              width="300"
              height="444"
              style={{
                overflow: "hidden",
                backgroundColor: "#3b5998",
                border: "none",
                width: "480px"
              }}
              onError={this.handleFacebookError}
            ></iframe>
          )}
          "Maryland Comptroller Peter Franchot is calling for an independent,
          bipartisan commission to audit state and federal dollars spent on
          pandemic relief." - Baltimore Sun
          <br />
          Relief means debts, backtax and rent to these old-politicians, which
          can be called counterfeit-in-contract and
          market-colonialism/involuntary-servitude/prohibiting-trade and banned.
          That is a more appropriate name for relief, and calling bail out
          relief is fraudulent since that can happen obviously instead. Does he
          want to make sure lenders are paid with this stolen equity up to what
          they have promised to themselves? There is $82tdebt:$6tcash(or really
          $2tcurrency, is all that debt compound or mostly fractional reserves?
          This is fraud and people shouldn’t be forced to spend it on what
          should be voided contracts
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <h1>BEDLAM</h1>
          Ed Markey and&nbsp;<a href="https://thumbprint.us">Thumbprint</a>
          &nbsp;announce conspiracy to bring remote learning to students
          nationwide with stolen equity, and keep prices up - 3/12/2021
          <hr />
          Teachers striked, we paid up against our will
          https://www.isidewith.com/poll/488729614
          <br />
          Now I have to&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.quality.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightQuality: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightQuality: false }),
                10000
              );
            }}
          >
            earn
          </span>
          &nbsp;the equity back
          <div style={{ flexWrap: "wrap", width: "100%", display: "flex" }}>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/g8h1b4r7oukodl9/IMG_3399.png?dl=0"
                }
              />
            </div>
            &nbsp;
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/d9vzhfggrs9ril7/IMG_3413.png?dl=0"
                }
              />
            </div>
          </div>
          <div style={{ flexWrap: "wrap", width: "100%", display: "flex" }}>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/y8nbelkaic70ap7/IMG_3412.png?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/mdeba9e3erwrc25/IMG_3400.png?dl=0"
                }
              />
            </div>
          </div>
          <br />
          <br />
          Trademarks are to be non-descriptive (of industry or product) or
          non-specific
          <br />
          Copyright is an automatic patent
          <br />
          <br />
          "Infrastructure is a&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fintech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFintech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFintech: false }),
                10000
              );
            }}
          >
            big crisis
          </span>
          &nbsp;and they don't seem to realize it," says Erin Burnett about the
          Republicans. First, the Rebulicans still spend but they are crony
          spenders. Second, Savers teach Erin that if she&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.bidask.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBidAsk: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBidAsk: false }),
                10000
              );
            }}
          >
            negotiates
          </span>
          &nbsp;with workers or fights for their equity rights, their living
          costs and therefore salaries can be negotiated down!
          <br />
          <br />
          BBQ DECLARE INDEPENDENCE
          <br />
          "Tell you what you can and cannot do once you are
          fully-"vaccinated"/grafted," threatens Biden while 10% have
          <br />I will fight you off and fight for my inclusion rights without
          evidence that is different than&nbsp;
          <a href="https://jvi.asm.org/content/77/16/8801">normal</a>&nbsp;
          <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
            cold
          </a>
          &nbsp;polychain reaction, visible symptoms or non-cavity temp check
          <br />
          <br />
          "Hopefully we can get some bipartisan cooporation on that," Wolf
          Blitzer blitzes my pocket book (not a tax-payer, live at home. save)
          of an 'electic highway' by further dollar dilution and tax. Let's vote
          on stealing. Bipartisan vote on stealing
          <br />
          <br />
          "The&nbsp;<a href="https://humanharvest.info">'vaccine'/graft</a>
          &nbsp;is a&nbsp;
          <a href="https://link.springer.com/chapter/10.1007/978-3-540-72167-3_11">
            miracle
          </a>
          &nbsp;of&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.sanjay.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSanjay: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSanjay: false }),
                10000
              );
            }}
          >
            science
          </span>
          ," exclaims Biden.
          <br />
          Newsmax asks a guest consult, "why not give credit to HE WHO SHALL NOT
          BE NAMED"
          <br />
          <br />
          "All along the political spectrum, left right and center ...Moody's
          reported...&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => this.MONOPOLY.current.scrollIntoView("smooth")}
          >
            7 million new jobs
          </span>
          ,"&nbsp;<a href="https://foiegras.life">smiles</a>&nbsp;Biden
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.populism.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPopulism: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPopulism: false }),
                10000
              );
            }}
          >
            Biden
          </span>
          , you don't&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.spittle.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSpittle: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSpittle: false }),
                10000
              );
            }}
          >
            need
          </span>
          &nbsp;us to get the "vaccine"/graft; just wash your fucking hands and
          sneeze into a tissue or elbow like Barney the Dinosaur has taught us,
          again and again
          <br />
          <br />
          Mark Levin, what bumbling idiot said on March 11, 2021, the value
          of&nbsp;<a href="https://vaults.biz">those things</a>&nbsp;when the
          dollar value for those things fall. Finance is inflation in
          opportunity; you mean your ability to own assets is lost with a weak
          dollar, or the vitriole in society is directly correlated with
          currencyComponentOfM1 and&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.dispair.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightDispair: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightDispair: false }),
                10000
              );
            }}
          >
            any promises waged thereof
          </span>
          &nbsp;which was once near 1:1 in&nbsp;
          <a href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-xvi">
            1908
          </a>
          &nbsp;(<a href="https://micro-theory.com">no outstanding loans</a>)?
          Finance is inflation in opportunity
          <br />
          <br />
          Debt-spending does not&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fasterWithCounterfeit.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFasterWithCounterfeit: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFasterWithCounterfeit: false }),
                10000
              );
            }}
          >
            ramp up anything - or make anything more possible
          </span>
          , it only makes input costs more expensive through the supply chain
          and in competition with other consumers who do not borrow or lend but
          work, invent or buy (equity)
          <br />
          <br />
          <a href="https://www.reuters.com/article/health-coronavirus-pfizer-israel-int-idUSKBN2B31IW">
            Pfizer/BioNTech say data suggests vaccine 94% effective in
            preventing asymptomatic infection
          </a>
          <br />
          It doesn't prove it stops transmission, especially when only 10% have
          been vaccinated and cases at at 29% of what they once were in the
          bottom of the same report. Literal retards, they know better
          <br />
          <br />
          Torts need to be between people and classes again, we shouldn’t have
          to sue the government
          <br />
          <br />
          Common sense is veiled sometimes. There are no consequences for the
          debt later, it can never be paid;&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fasterWithCounterfeit.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFasterWithCounterfeit: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFasterWithCounterfeit: false }),
                10000
              );
            }}
          >
            only now
          </span>
          &nbsp;in counterfeit price-inelasticity, monopsonization of the
          government over&nbsp;
          <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws">
            assets
          </a>
          , insurance, finance, incoives, rent-seekers, and the non-certificate,
          non-cross-party-risk services and end-assets. There are no
          consequences if the borrowers' customers' down-payments are
          renumerated. It can never be paid.
          <br />
          <br />
          New Jersianist comments of an extrapolated sample to find a
          minary-majority conclusion
          <br />
          <br />
          "Working adults" to build trusts in stead of people who have never had
          money
          <br />
          <br />
          $1.6b for amtrack? those tickets are $200 a ticket NJ to Baltimore.
          This is abjectly fraud for&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trust.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTrust: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTrust: false }),
                10000
              );
            }}
          >
            government trust
          </span>
          &nbsp;that colonizes this market with monopsonistic practices.
          Socially-distressed&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.POLLINGFRAUD.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFarmers: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFarmers: false }),
                10000
              );
            }}
          >
            farmers
          </span>
          ?
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <span
            ref={this.sellingOut}
            style={{
              color: this.state.highlightSellingOut ? "white" : "",
              backgroundColor: this.state.highlightSellingOut
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Selling Out the Community
          </span>
          &nbsp;
          <br />
          <div
            style={{
              display: "flex"
            }}
          >
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "70%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/48sw3p85vu44vvv/SellingOutTheCommunity.jpg?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "70%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/zeamltf2rstj61f/IMG_3388.png?dl=0"
                }
              />
            </div>
          </div>
          <br />
          Give money to artists not people that usually get money
          <br />
          <div
            style={{
              width: "100%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "25%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/colisik5ph08m3r/NoSoupForYou.jpg?dl=0"
              }
            />
          </div>
          <br />
          giving people(non-artists) mooney - a good intention but it doesn’t
          work that way, unless we were without finance(counterfeit-contracts
          and rent-colonialism); the only obligations that wouldn’t be
          price-elastic would be free-rider-immutable services. Instead, this
          money won’t stay in the needy’s pockets, nor will it allow their
          current wage to be a living one - with lower housing prices by
          allowing prices-to-drop. The courts allow the adjudication of the
          creditors’ promises to themselves during this unrequited
          dollar/market(not-accrual, depositary)/vault-share split, so it
          doesn’t help at all, except the lender who gets to keep down-payments
          of borrowers’ customers, as of now
        </div>
        <br />
        <div
          style={{
            width: "100%"
          }}
          ref={this.GUNSAFETY}
        >
          <GunSafety
            settleDropboxFree={settleDropboxFree}
            injury={() => {
              this.injury.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightInjury: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightInjury: false }),
                10000
              );
            }}
            policeUX={() => {
              this.policeUX.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPoliceUX: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPoliceUX: false }),
                10000
              );
            }}
            navbar={() => {
              this.navbar.current.scrollIntoView("smooth");
              this.props.pauseScroll();
            }}
            drugs={() => {
              this.drugs.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightDrugs: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightDrugs: false }),
                10000
              );
            }}
            starve={() => {
              this.starve.current.scrollIntoView("smooth");
              this.props.pauseScroll();
            }}
            brookings={() => {
              this.brookings.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBrookings: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBrookings: false }),
                10000
              );
            }}
            nra={() => {
              this.nra.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightNRA: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightNRA: false }),
                10000
              );
            }}
            irs={() => {
              this.IRS.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightIRS: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightIRS: false }),
                10000
              );
            }}
            fraud={() => {
              this.fraud.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFraud: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFraud: false }),
                10000
              );
            }}
          />
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "False Advert in House" &&
              this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.FALSEADVERTINHOUSE}
        >
          The “right to organize” can turn into exclusion, duress or threats if
          based on dues. Strikes & legal defense therein is good interpretation
          of the right to organize for demand(of pay) - intent to corner-their
          own time by collusion should be legally-permissible, unlike for
          supply.
          <br />
          <br />
          <div
            style={{
              width: "100%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/cbscixbo9fkihc8/UnionIncome.jpeg?dl=0"
              }
            />
          </div>
          <br />
          The Great Depression was caused by paying bonds off/foreclosures, by
          the way. The income-inequality drop then could be the cessation of
          passive-income... To&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.bobTheBuilder.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBTB: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBTB: false }),
                10000
              );
            }}
          >
            qualify
          </span>
          &nbsp;for inclusion in the economy by anything but getting the most
          you can get by competing with producers to win favor of consumers and
          skill is discrimination, violation of Amendment 13 by free-riding
          other contribitions of assets-earnable of that person, and any
          government action to that end is in violation of Amendment 14
          <br />
          <br />
          You can't give away something you do not take!
          <br />
          <div style={{ columnCount: "2", position: "relative" }}>
            <div
              style={{
                width: "100%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/p0nqouh4shcndwp/Screen%20Shot%202021-03-09%20at%204.54.54%20PM.png?dl=0"
                }
              />
            </div>
            &nbsp;
            <div
              style={{
                width: "100%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/j428msgzzln6hb7/IncomeIncludes.jpg?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "100%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/i9tq9qxpkgll74h/Screen%20Shot%202021-03-09%20at%205.23.01%20PM.png?dl=0"
                }
              />
            </div>
          </div>
          <br />
          <span style={{ textDecoration: "strike-through" }}>
            income earned within retirement accounts
          </span>
          <br />
          <br />
          <div
            style={{
              width: "50%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/u84dx7dc109ffbp/IMG_3377.png?dl=0"
              }
            />
          </div>
          <br />
          "...can make the economy 20 times larger": What a retarded thought
          allowed by Early Start, CNN and Citibank (assets traded, people
          trading, or how separate we are by dollars?)
          <br />
          <br />
          false ad "Relief" bill in part $1.4k for those making {"<"}$80k, owe
          it back + more. Relieve w/ banning rent for competing w/ consumers...
          not more obligations
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <div>
              "We purchased&nbsp;<a href="https://humanharvest.info">shots</a>"
              -&nbsp;
              <a href="https://en.wikipedia.org/wiki/Brett_Giroir">
                Admiral Brett Giroir
              </a>
              "Not vaccines are made in 2-3 months, they usually take 10-15
              years," he continues.
              <br />
              "Never done before, truly a moonshot from administration to
              administration. Our administration deserves credit for that," he
              goes on to admit.
            </div>
            <br />
            <hr />
            <a href="https://en.wikipedia.org/wiki/Under-occupied_developments_in_China">
              Confiscation/quota
            </a>
            <br />
            <a
              style={{ color: "black" }}
              href="https://vianickcarducci.medium.com/i-thought-it-was-g-d-e5238f55046b"
            >
              I thought it was G-d (who made the money)
            </a>
          </div>
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.financeKills.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFinanceKills: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFinanceKills: false }),
                10000
              );
            }}
          >
            Finance
          </span>
          &nbsp;is the worst&nbsp;
          <a href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy">
            parts of communism
          </a>
          ;
          <br />
          if capitalism is without trading&nbsp;
          <a href="https://www.academia.edu/43983364/Review_Capitalism_in_the_21st_Century">
            human labor, or their future income
          </a>
          &nbsp; as fungible with assets/equity apprised as counterfeit, it
          is&nbsp;
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.socialism.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSocialism: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSocialism: false }),
                10000
              );
            }}
          >
            socialism with profit-schedule
          </span>
          <br />
          <br />
          "This plan will put money into the pockets of those who need this most
          [and we will allow prosecutions for
          back-taxes/rents/mortgages/impossible counterfeit-in-contracts to be
          paid]," smiles Kalama Harris, who once hid exculpatory evidence to
          blame anybody somebody for a crime/meet quota
          <br />
          <br />
          To combat&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() =>
              this.employmentOfOne.current.scrollIntoView("smooth")
            }
          >
            unemployment (#AmericanRescuePlan Fraud)&nbsp;
          </span>
          , states are urging the federal government to steal equity from their
          citizens to provide work training programs
          <br />"
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.savingsRate.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSavingsRate: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSavingsRate: false }),
                10000
              );
            }}
          >
            Money is going to increase the savings rate
          </span>
          ," - Fox Business guest says without correction
          <div
            style={{
              columnCount: "2",
              width: "calc(100% - 5px)",
              position: "relative"
            }}
          >
            <a
              href="https://en.wikipedia.org/wiki/Barnburners_and_Hunkers"
              style={{
                width: "100%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/o57saza2ve3mo0p/IMG_3051.png?dl=0"
                }
              />
            </a>
            <div
              onClick={() => {
                this.singleSourceOfTruth.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightSingleSource: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightSingleSource: false }),
                  10000
                );
              }}
              style={{
                width: "100%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/6fqa08lrp1rpagq/IMG_2575.jpeg?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "100%",
                position: "relative"
              }}
            >
              "Tangible, is this&nbsp;
              <span
                style={{ fontWeight: "bolder", textDecoration: "underline" }}
                onClick={() => {
                  this.gdp.current.scrollIntoView("smooth");
                  this.props.pauseScroll();

                  this.setState({ highlightGDP: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightGDP: false }),
                    10000
                  );
                }}
              >
                stimulus
              </span>
              &nbsp;[the numbers is too complicated for people to understand]"
              CNN explains to people
            </div>
          </div>
          &nbsp;
          <br />
          There is no permenence in law Bill O'reilly you&nbsp;
          <a href="https://vianickcarducci.medium.com/im-on-the-blockchain-742e3702721">
            absolute retard
          </a>
          <br />
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.singleSourceOfTruth.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSingleSource: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSingleSource: false }),
                10000
              );
            }}
          >
            Single-Source Virus
          </span>
          <br />
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightJury ? "white" : "",
              backgroundColor: this.state.highlightJury
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.jury}
          >
            G-d is judge (Himself), jury (people) and prosecutioner (angels,
            cherubim)
          </span>
          <br />"
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fintech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFintech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFintech: false }),
                10000
              );
            }}
          >
            What
          </span>
          &nbsp;is the&nbsp;
          <span
            onClick={() => {
              this.Oooreily.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightOooreily: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightOooreily: false }),
                10000
              );
            }}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            crime
          </span>
          &nbsp;in [benefits], allowing states to&nbsp;
          <a href="https://vaults.biz">fully-reopen</a>," queries Jake Tapper
          about unemployment insurance & state + local bond-holder bailout
          &nbsp;
          <span
            onClick={() => {
              this.Oooreily.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightOooreily: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightOooreily: false }),
                10000
              );
            }}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            abject fraud
          </span>
          &nbsp;and unfair cornering of assets by competing with other customers
          who do not borrow/collude with producers+lenders or do not have the
          collusion of the market-share/equity stewards espoused by the Federal
          Reserve
          <br />
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.foreignpolicy.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFP: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFP: false }),
                10000
              );
            }}
          >
            "Stronger U.S. dollar makes exports more expensive," says CNN
          </span>
          <br />
          <a
            style={{
              width: "100%",
              position: "relative"
            }}
            href="https://twitter.com/saverparty"
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/bgzlmx15ozereze/Screen%20Shot%202021-03-08%20at%2010.52.36%20AM.png?dl=0"
              }
            />
          </a>
          &nbsp;
          <br />
          <br />
          tax if there is an immutable free-rider customer, otherwise it is
          counterfeit, promises, fractional-reserves, false-advertisement or
          stealing
          <br />
          <br />
          No billionaires without bonds...
          <br />
          duress, involuntary-servitude, no-symptom exclusion by free-rider
          <br />
          where does cash($6t,2020) go after it buys bonds($82t,2020)?
          <br />
          <br />
          Contracts are void when terms are impossible, let alone any&nbsp;
          <span style={{ color: "purple" }}>
            counterfeit-in-contract exhibited ("bet on yourself," as AJ
            Catsimatidis likes to describe it)
          </span>
          . Even if forseen (which they are not - how can an impossible
          circumstance be seen, ever, only that it is impossible can be seen,
          but that circumstance can never happen i.e.&nbsp;
          <span style={{ color: "rgb(180,140,40)" }}>
            you can never have happen an impossible circumstance, by definition,
          </span>
          &nbsp; - and under duress to compete-on-demand with other impossible
          counterfeit bids-by-promise to which renumeration is due for affected
          third-parties i.e. borrowers' customers'&nbsp;
          <span style={{ color: "blue" }}>
            down-payments + time wasted & stress
          </span>
          ), servitude is defined as a state of action to some end, still.
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Polling Fraud" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.POLLINGFRAUD}
        >
          Changing southern democrat to conservative democrat is a form of
          propogranda. the democrats wanted to save nothing of the slaves'
          <br />
          <br />
          POLL [can be voluntary(no&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.POLLINGFRAUD.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFlop: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFlop: false }),
                10000
              );
            }}
          >
            sample bias
          </span>
          ), of a population OR sample] REPORTERS NEED TO&nbsp;
          <a href="https://humanharvest.info">CITE (duty to warn)</a>
          &nbsp;SAMPLE SIZE ON FIRST, PAGE AS LOANS AT LEAST NEED CURRENT DEBT
          IN USD:CASH IN USD
          <br />
          <br />
          <a href="https://www.vanhollen.senate.gov/">
            Unemployment slave songs
          </a>
          &nbsp;are their&nbsp;
          <a href="https://news.gallup.com/opinion/chairman/181469/big-lie-unemployment.aspx">
            Gallup polls n=2700
          </a>
          &nbsp;phone calls to random people who answer the phone
          <br />
          <br />
          Polls cannot be construed as representative of population in court,
          ask any statistician
          <br />
          <br />
          <div>
            {/*width && (
              <Employ2Pop
                width={Math.min(600, width - 100)}
                settleDropboxFree={settleDropboxFree}
              />BFC3,DMfl
            )*/}
          </div>
          <br />
          <br />
          <a
            style={{
              border: "1px solid",
              color: "black"
            }}
            href="https://morningconsult.com/2021/02/24/covid-stimulus-support-poll/"
          >
            Biden's $1.9 Trillion Plan? 76% Yes/ 24% No (n=2013), ...9% goes to
            people...
          </a>
          <br />
          <a
            ref={this.populism}
            style={{
              color: this.state.highlightPopulism ? "white" : "black",
              backgroundColor: this.state.highlightPopulism
                ? "rgb(170,100,205)"
                : "",
              transition: ".3s ease-out"
            }}
            href="https://www.isidewith.com/poll/488729614"
          >
            Should the government make cuts to public spending in order to
            reduce the national debt? 63% Yes/ 37% No (n=13,737,124 )
          </a>
          <br />I am just asking you to follow the science
          <br />
          <br />
          Government funding is not "funding from the government."" It is not
          their money/equity! It is stolen
          <br />
          <br />
          <PollingFraud
            settleDropboxFree={settleDropboxFree}
            electionTech={() => {
              this.electionTech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightElectionTech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightElectionTech: false }),
                10000
              );
            }}
            flop={() => {
              this.POLLINGFRAUD.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFlop: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFlop: false }),
                10000
              );
            }}
            bobTheBuilder={() => {
              this.bobTheBuilder.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBTB: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBTB: false }),
                10000
              );
            }}
            singleSourceOfTruth={() => {
              this.singleSourceOfTruth.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSingleSource: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSingleSource: false }),
                10000
              );
            }}
            fintech={() => {
              this.fintech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFintech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFintech: false }),
                10000
              );
            }}
            varney={() => {
              this.varney.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightVarney: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightVarney: false }),
                10000
              );
            }}
            goToTop={this.props.goToTop}
            highlightFarmers={this.state.highlightFarmers}
          />
          <div
            ref={this.stats}
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              width: "calc(100% - 20px)",
              maxWidth: "600px",

              transition: ".3s ease-in",

              color: this.state.highlightStats ? "white" : "grey",
              backgroundColor: this.state.highlightStats
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            My (NC) estimates for party compilation 2022 and 2024. Supply-side
            (Pubs[80%], Dems[60%], Libertarians[50%]) vs Demand-side
            (Saver[100%], Green[90%]) Gallup does n 2,700 usually each survey
            call
            <br />
            <br />
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://www.facebook.com/IVN/posts/10156682244587465"
            >
              https://www.facebook.com/IVN/posts/10156682244587465
            </a>
            <br />
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://justcapital.com/news/liberals-and-conservatives-agree-corporate-america-needs-to-prioritize-workers/?fbclid=IwAR3hsWJtItnrpCU4Ise6__A-la4a59wfQze1yQqwpha_iFQYdxA9CG3E4Yc"
            >
              https://justcapital.com/news/liberals-and-conservatives-agree-corporate-america-needs-to-prioritize-workers/?fbclid=IwAR3hsWJtItnrpCU4Ise6__A-la4a59wfQze1yQqwpha_iFQYdxA9CG3E4Yc
            </a>
            <br />
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://www.isidewith.com/poll/488729614"
            >
              https://www.isidewith.com/poll/488729614
            </a>
            <br />
            <br />
            CNN gaslighting every viewer that 62% (of 330,000,000) want this
            (sample of under 3,000 people, without shuffling to boot). Add more
            results like isidewith or thumbprint.us
          </div>
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Immigration" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.IMMIGRATION}
        >
          <Immigration settleDropboxFree={settleDropboxFree} />
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Ownership Fraud" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.OWNERSHIPFRAUD}
        >
          <div style={tweetsStyle}>
            A person's debt is their customers to burden unrequited, promised
            (not used or borrowed). We work towards no ends when debt exists
            <br />
            you cannot build someone else's designs, and pass them off as your
            own while they are building it. imagine if that was the case
            <br />
            marijuana laws are to stop dollar competition
          </div>
          <br />
          <div style={tweetsStyle}>
            performance enhancing and self-medication draws its line in
            monopsonization of medicine
          </div>
          <br />
          <div style={tweetsStyle}>
            biden calling for full employment scares me
            <br />
            <br />
            spending is not something “in the background.” when debt is paid
            monetary-base inflation happens but when it is banned monetary-base
            deflation happens. but price-inelasticity inflation happens now by
            dealing in usurped and forced promises of unrequited third party
            share and servitude.&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.inflation.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightInflation: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightInflation: false }),
                  10000
                );
              }}
            >
              Let prices be elastic
            </span>
            !
          </div>
          <br />
          <div style={tweetsStyle}>
            How many times are you going to say “stand,” Rudy, you old crypt
            Your exec. assist or you were in the Box Office for 9/11
          </div>
          <br />
          <div style={tweetsStyle}>
            A person's debt is their customers to burden unrequited, promised
            (not used or borrowed)  There does not need to be mandatory &nbsp;
            <b>dollar-split</b> to prevent price-elasticity Consumer
            Reports give me your page you do not understand this
          </div>
          <div style={tweetsStyle}>
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.trueGDP.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightTrueGDP: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightTrueGDP: false }),
                  10000
                );
              }}
            >
              velocity of money (m1) is MADE UP
            </span>
            . gdp is all debt promises being re-promised. cancelling by this
            corrupt congress is bailing out bonds, not actually adjudicating the
            merits of contracts that promise other people's money and servitude.
            If credit contracts promised corporate shares the claimant would be
            laughed out of court. THIS IS FRAUD
          </div>
          <span
            ref={this.valuation}
            style={{
              position: "relative",

              transition: ".3s ease-in",

              color: this.state.highlightValuation ? "white" : "",
              backgroundColor: this.state.highlightValuation
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Not making mvp data access a default is evident nefarious intent
            SEC: "[Give your unique id immediately to brokers (not just us), but
            if you own more than {">"}5%, you can wait 3 months.]" (If trading
            your company, at any ownership percentage, you must build and report
            in the open or wait three months upon stopping work to trade) You
            cannot manipulate stocks more than selling without borrowing
            (stimulus checks are price-inelasticity fraud), <b>shorting</b> is
            not destructive on it's own and it is not just short-selling. It is
            borrowing (usurped share power waged in contract, moot), and retail
            is traded against. Shortselling without borrowing wouldn't be able
            to abdicate third-party risk from mixing the terms, it would be a
            bicameral option to end the contract with an individual seller...
          </span>
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <span
            ref={this.takingCredit}
            style={{
              color: this.state.highlightTakingCredit ? "white" : "grey",
              backgroundColor: this.state.highlightTakingCredit
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            <a href="https://wavv.art/test3">Not taking credit</a>
            &nbsp;you&nbsp;
            <span style={{ fontSize: "6px" }}>fucking</span>
            slut,&nbsp;
            <a href="https://thumbprint.us">working for market(copyright,</a>
            not <a href="https://vaults.biz">depositary</a>) share instead of
            &nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.technicallyIllegal.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightTechnicallyIllegal: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightTechnicallyIllegal: false }),
                  10000
                );
              }}
            >
              entrapping myself
            </span>
            &nbsp;into <a href="https://stripe.com">Stripe.com</a>
            <br />
            <br />
            Judges cannot judge what is right for bail, they'rn't impartial - as
            in they get the bail.
            <br />
            Bail for judges'n't for consumers/community - the service at its
            most efficient as to keep everyone happiest, individually, for the
            complainants only; class action is for precedence, but we all assume
            it gets less than each individual case would.
          </span>
          <br />
          <a
            href="https://thumbprint.us"
            style={{
              //fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              //textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            Nick Carducci vs. the People
          </a>
          <br />
          Thumbprint.us is now being plagerized and competed with for the people
          in recent legislation (cheating) after turning down funding for 9
          years
          <br />
          <br />
          <i
            onClick={() => {
              this.takingCredit.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTakingCredit: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTakingCredit: false }),
                10000
              );
            }}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            laws have to be justice-oriented in order for the equal application
            of unequal laws to be applied - price-fixing is not justice
          </i>
          <br />
          <br />
          Officer of Government Ethics vs&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.goa.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightGOA: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightGOA: false }),
                10000
              );
            }}
          >
            Accountabilty
          </span>
          . Do they do civil war re-enactments? Being a free-rider works
          employee, you have to serve the best interests of citizens or it is a
          violation of civil rights in colonialism and the penumbrum of
          ownership relationships, be it people themselves, their homes or their
          entries into supply or labor for demand. It is taken from&nbsp;
          <a href="https://vaults.biz">3% sales tax under $2k</a>&nbsp;if there
          is an immutable free-rider customer, but if it is not - and is by
          counterfeit/debt/invoice - then it is worse, as it is monopsony of
          rawest fixed-input cost due upon it price and quality-defect without
          the option for competition from verifiably unbiased and&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.politics.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPolitics: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPolitics: false }),
                10000
              );
            }}
          >
            civilly-minded, civic-tech
          </span>
          .
          <br />
          <br />
          "There used to be 5 retired for 1 working person, now there is 2
          working people for one retired person," says Dodaro. Do we want to
          lessen payments to retired or get more people retired? Saver Party
          wants the latter, all three supply-side political parties want the
          former
          <br />
          "Debt is 140% of GDP," Rep Scott is an idiot that must be GDP /year
          only... debt is a negative balance and gdp is the amount of times
          money is created or promised (not paid to debt, usually lent out
          again, which counts as gdp again)
          <br />
          <a href="https://wavv.art/United_States_of_America">
            wavv.art/United_States_of_America
          </a>
          <br />
          <br />
          @cnn brooke don't call me white, frivalous cunt, I am olive and that
          has nothing to do with my personality only my body, why does that
          matter for you or systems at all if not numerated except to
          individuals within them?
          <br />
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightJHUECON ? "white" : "",
              backgroundColor: this.state.highlightJHUECON
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.jhuecon}
          >
            only in 2018 did I learn where dollars DID NOT COME FROM G-D&nbsp;
            <a href="https://vaults.biz">from</a> ... after spending $250k on
            JHU <a href="https://micro-theory.com">economics</a>
            <br />
            <a href="https://wavv.art/forumGhIhQ2CaGJxcTzyhEYfZ">
              wavv.art/forumGhIhQ2CaGJxcTzyhEYfZ
            </a>
            <br />
            "We now know, and we have known, that [G-d is dead]" - Don Lemon,
            CNN (March 5, 2021)
          </span>
          <br />
          <br />
          <i>
            <h2>Human Rights in a time of {/*veiled */}corruption and greed</h2>
          </i>
          <br />
          Ron Desantis&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.POLLINGFRAUD.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFlop: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFlop: false }),
                10000
              );
            }}
          >
            sounds like
          </span>
          &nbsp;he wants to run a business being forced to use their
          product,&nbsp;
          <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws">
            "ban zuckerberg and others,"
          </a>
          &nbsp;he says.&nbsp;
          <a href="https://johnshopkins.academia.edu/NickCarducci">
            I have been working on this product since 2012
          </a>
          &nbsp;because no one could do the job and&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.politics.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPolitics: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPolitics: false }),
                10000
              );
            }}
          >
            protect civil rights
          </span>
          <br />
          <br />
          CNN soliciting listeners that, "government-backed loans is the only
          option to keep the&nbsp;<a href="https://magnate.company">lights</a>
          &nbsp; on,"&nbsp;<a href="https://vaults.biz">that is false</a>.
          <br />
          If you cannot pay, and they&nbsp;
          <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws">
            refuse service
          </a>
          , they are prohibiting trade by owning & restricting a
          barrier-to-entry as supplier (monopsony), especially if they
          don't&nbsp;
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => this.navbar.current.scrollIntoView("smooth")}
          >
            use it themselves
          </span>
          . Before that is necessary and appropriately resolved as an
          involuntary-servitude by&nbsp;
          <a href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws">
            duress of little option to avoid harm or danger
          </a>
          , prices drop if the market is competitive and not decrepit after a
          century of finance and creating&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.valuation.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightValuation: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightValuation: false }),
                10000
              );
            }}
          >
            cross-party risk
          </span>
          , then producers compete with eachother and prices drop without&nbsp;
          <a href="https://nationalsecuritycasino.com">
            mono-polization of actors
          </a>
          &nbsp;in the market that are not a&nbsp;
          <a href="https://micro-theory.com">producer, consumer</a>, or investor
          that&nbsp;
          <a href="https://vaults.biz">waits for customer</a> to take royalty.
          <br />
          <br />
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightTwenty ? "white" : "",
              backgroundColor: this.state.highlightTwenty
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.twenty}
          >
            if inequality isn't too great and swaths of supply isn't being
            horded, there are enough producers (20+) to deliver&nbsp;
            <span
              style={{
                fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                textEmphasis: "italics",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.jury.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightJury: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightJury: false }),
                  10000
                );
              }}
            >
              competition
            </span>
            <br />
            <br />
            California Assemblypeople making threats of strike not teaching
            their kids if they cannot get national money
            <br />
            "People say, 'Will I lose my home?''," Biden remarks.
          </span>
          <br />
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.employmentHouse.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightEmploymentHouse: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightEmploymentHouse: false }),
                10000
              );
            }}
          >
            Not their home
          </span>
          <br />
          <br />
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightSocialism ? "white" : "",
              backgroundColor: this.state.highlightSocialism
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.socialism}
          >
            socialism either: (1)&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.marx.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightMarx: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightMarx: false }),
                  10000
                );
              }}
            >
              devolves
            </span>
            &nbsp;into hunger/communism/corporatism/
            <span
              style={{
                fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                textEmphasis: "italics",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.insurance.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightInsurance: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightInsurance: false }),
                  10000
                );
              }}
            >
              monopsonies-infiltrating-insurance
            </span>
            , or (2) resolves into no promises/only&nbsp;
            <a href="https://vaults.biz">profit-schedule</a>.
          </span>
          <br />
          <div style={{ flexWrap: "wrap", width: "100%", display: "flex" }}>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/sf7fhelhb19f83r/Screen%20Shot%202021-03-06%20at%204.00.28%20PM.png?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              &nbsp;
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/0v4idjt22zvop75/CuomoInsurance.png?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              &nbsp;
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/3qrd3xd7ebf13tj/IMG_0635.jpeg?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              &nbsp;
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/cr4mrfkoiiu84cf/CuomoNYTough.jpg?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "50%",
                position: "relative"
              }}
            >
              &nbsp;
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/s3m9n9fhq1cw2df/Screen%20Shot%202021-03-06%20at%204.10.55%20PM.png?dl=0"
                }
              />
            </div>
          </div>
          <br />
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightLivingWage ? "white" : "",
              backgroundColor: this.state.highlightLivingWage
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.livingWage}
          >
            -The Great Depression happened because the government paid off
            private bonds, sometimes use war to disburse through military
            <br />
            prices and opportunities can no longer sustain what was borrowed
            <br />
            Pure reconciliation for lenders. they price banks at 1x book but
            book is 13x what is possible without making counterfeit contracts
            reality
          </span>
          <br />
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/sih6crlv0dhcj9q/Screen%20Shot%202021-03-05%20at%202.36.42%20PM.png?dl=0"
              }
            />
          </div>
          <br />
          <a href="https://www.sjsu.edu/faculty/watkins/depmon.htm">
            https://www.sjsu.edu/faculty/watkins/depmon.htm
          </a>
          <br />
          <a href="https://www.nber.org/system/files/chapters/c1567/c1567.pdf">
            https://www.nber.org/system/files/chapters/c1567/c1567.pdf
          </a>
          <br />
          <a href="https://www.bls.gov/opub/mlr/2016/images/data/mccallfig6.stm">
            https://www.bls.gov/opub/mlr/2016/images/data/mccallfig6.stm
          </a>
          <br />
          <br />
          Either all of you are complicit or I am due the first Nobel Prize in
          Economics, Stats because...
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "False Advert in Senate" &&
              this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.FALSEADVERTINSENATE}
        >
          CNN keeps using polls this is what the&nbsp;
          <span
            onClick={() => {
              this.stats.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightStats: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightStats: false }),
                10000
              );
            }}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            American People
          </span>
          &nbsp;want, they are stating as fact without saying the sample size.
          this is highly illegal, just like the&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.POLLINGFRAUD.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFlop: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFlop: false }),
                10000
              );
            }}
          >
            calling
          </span>
          &nbsp;on Election Day. Also&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.nsfFraud.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightNSFFraud: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightNSFFraud: false }),
                10000
              );
            }}
          >
            physics
          </span>
          {/*<br/>
          Rep. Raskin, "<a href="https://www.archives.gov/founding-docs/amendments-11-27">DJT's lawyers testified by letter that Republicans wanted to use Amendment 12<a/>"*/}
          <br />
          <br />
          The Bill has been negotiated to pay backrent-wishes!! Those prices
          were fixed since&nbsp;
          <a href="https://micro-theory.com">demand couldn't handle them</a>
          <br />
          <br />
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            <i
              onClick={() => {
                this.stats.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightStats: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightStats: false }),
                  10000
                );
              }}
              style={{
                fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                textEmphasis: "italics",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
            >
              The Results Are In
            </i>
          </span>
          <br />
          <span ref={this.inelasticity}>
            The analysis of GDP trying to fix for reality is that, even if you
            did capture every productSkew net-, percentage-change, you would not
            capture&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.gdp.current.scrollIntoView("smooth");
                this.props.pauseScroll();

                this.setState({ highlightGDP: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightGDP: false }),
                  10000
                );
              }}
            >
              price-inelasticity inflation
            </span>
            , only&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.inflation.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightInflation: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightInflation: false }),
                  10000
                );
              }}
            >
              monetary-inflation, is bunk
            </span>
            !
          </span>
          <br />
          <br />
          "House Democrats work for the people" -&nbsp;
          <a href="https://nikemawilliams.house.gov/">Some bitch on CNN</a>
          <br />
          "I promised the American people that help is on the way" -&nbsp;
          <a href="https://www.opensecrets.org/2020-presidential-race/joe-biden/industries?id=N00001669">
            Joe Biden
          </a>
          <br />
          <br />
          CNN: "Let's hope this bill gets us there."&nbsp;
          <a href="https://humanharvest.info">
            Where, to make sure no 1985-vintage aborted fetus investment/ghost
            city is wasted/paid
          </a>
          ?
          <br />
          <br />
          Lying about public opinion to pay off lenders, that know debt is 13
          times more than cash. If I were them, not altruistic, utilitarian/in
          both supply-and-demand of economy and not self-harming, I would&nbsp;
          <a href="https://www.opensecrets.org/parties/">lobby this way</a>
          &nbsp;and plagerize&nbsp;
          <a href="https://www.academia.edu/45132997/Written_for_National_Science_Foundation_Project_Pitch">
            enemies
          </a>
          <br />
          they owe consumers original principal and more for stress to
          borrowers', then reverse purchases for all consumers to that years'
          cash:debt ratio, then pay them for stress and lost opportunity
          for&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.squatting.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSquatting: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSquatting: false }),
                10000
              );
            }}
          >
            squatting
          </span>
          <br />
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/pr0c01fft2lclds/Screen%20Shot%202021-03-06%20at%201.01.41%20PM.png?dl=0"
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/dlhp9wcee037ap5/Screen%20Shot%202021-03-06%20at%2012.59.53%20PM.png?dl=0"
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/78l0j7ds9ej1pwr/Screen%20Shot%202021-03-06%20at%2012.54.06%20PM.png?dl=0"
              }
            />
          </div>
          <br />
          They are the same party pertaining to outstanding bills instead of
          civil rights
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/8f6sv7ub1dyixm1/Screen%20Shot%202021-03-06%20at%2012.24.20%20PM.png?dl=0"
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/8tsrzdyu1ar8i7o/Screen%20Shot%202021-03-06%20at%2012.34.30%20PM.png?dl=0"
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/83kl4edk6jckgx6/Screen%20Shot%202021-03-06%20at%2012.33.16%20PM.png?dl=0"
              }
            />
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder"
              //textDecoration: "underline"
            }}
          >
            Help me officer,
          </i>
          <br />
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/3xzfwtaqsjd3mqe/Screen%20Shot%202021-03-06%20at%2012.24.43%20PM.png?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder"
              //textDecoration: "underline"
            }}
          >
            MONMOUTH POLL of 842 adults,&nbsp;
            <a href="https://www.monmouth.edu/polling-institute/reports/monmouthpoll_us_030321/">
              62% want higher prices/more debt
            </a>
            <br />
            CNN cites this
            <br />
            ISIDEWITH (much higher sample size) 63% don't want this.
          </i>
          <br />
          CNN: "If the majority of americans&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.stats.current.scrollIntoView("smooth");
              this.props.pauseScroll();

              this.setState({ highlightStats: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightStats: false }),
                10000
              );
            }}
          >
            really do want it
          </span>
          &nbsp;what is the hesitancy"
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder"
              //textDecoration: "underline"
            }}
          >
            Unemployment Benefits Fraud for 13x book-valued-finance
          </i>
          <br />
          <br />
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/m01yq2b2bveq0bz/SaveInTaxes.jpg?dl=0"
              }
            />
          </div>
          <br />
          This bitch saying you save money $2t in taxes without spending it
          without taxing it... is admittance that spending is not&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fishInBarrel.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFishInBarrel: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFishInBarrel: false }),
                10000
              );
            }}
          >
            tax-payer
          </span>
          funded&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fintech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFintech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFintech: false }),
                10000
              );
            }}
          >
            Party
          </span>
          &nbsp;in the&nbsp;
          <a
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder"
              //textDecoration: "underline"
            }}
            href="https://nationalsecuritycasino.com"
          >
            U.S.A.
          </a>
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/3mx73fdmmdryddj/PartyInUSA.jpg?dl=0"
              }
            />
          </div>
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() =>
              this.employmentOfOne.current.scrollIntoView("smooth")
            }
          >
            Most people
          </span>
          &nbsp;have been hired back before the pandemic was over, that means
          the firing is not for covid (ignoring the unequal application of law
          for labor/pre-revenue inventors, entrepreneurs, ngo-nonprofit's &
          artists in favor of government-501c3-nonprofits/corporations,
          involuntary market/vault/share/dollar-split & impossibility - this is
          still fraud if unemployment insurance wasn't breaking Amendment 14/13)
          <br />
          <br />
          The government is not bond-holders, slut. Certainly not Wells Fargo.
          <br />
          They have no right to do this and they are abusing their power to win
          in the market expunging usurped contracts/invoices, property-to-rent,
          back-tax/rent and insurance prisoners' dilemma duress pooling of
          demand capacity obligations
          <br />
          Passing this bill is complicity to fraud, as described below.
          <br />
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          Lying under oath and under duress (ignoring A4, A5) means the only
          penalty can be for the crime
          <br />
          <br />
          Please cite sample size on the show CNN, Chris
          <br />
          <br />
          Leftists rely on imagination of owning my equity as sustinence
          <br />
          <br />
          It is all going to go back (
          <a href="https://www.researchgate.net/project/Class-action-suit">
            at once
          </a>
          ) to those before involuntary dollar-split happened since the first
          contracted fractional reserve, so I can laugh about it on the way to
          peace
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
              //fontWeight: "bolder",
              //textDecoration: "underline"
            }}
          >
            Hold on&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.marx.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightMarx: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightMarx: false }),
                  10000
                );
              }}
            >
              Marx
            </span>
            ,
          </i>
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/t48rsm359covph3/WhereEverybody.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            I need to go listen to the Senate discuss our equity since no other
            party will
          </div>
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/qybk35c6vrv9ifr/TheRich.jpeg?dl=0"
              }
            />
          </div>
          <br />
          If you didn't interfere and adjunicate in favor of invoices, people
          would be&nbsp;
          <a href="https://en.wikipedia.org/wiki/Price_elasticity_of_demand">
            able to afford heart surgery, bookie
          </a>
          <br />
          <br />
          Bernie Sanders opening remarks, "Why are we responding by
          dollar-counterfeit, because a few people asked!"
          <br />
          <br />
          "Allow small business to retain their workforce," is admitted
          collusion from this guy.&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.colonization.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightColonization: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightColonization: false }),
                10000
              );
            }}
          >
            "It worked!"
          </span>
          &nbsp;he exclaims.
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/s1k8ypftakyoeqk/JustBusiness.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <i>
            <a
              style={{
                color: "rgb(178, 90, 197)",
                backgroundColor: "rgb(200, 230, 255)",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              href="https://www.senate.gov/states/WA/intro.htm"
            >
              Maria Cantwell (Washington)
            </a>
          </i>
          <br />
          PPP is not helpful (raises price/utility, helps bond-holders, competes
          with demand). competition from pre-revenue inventors helps. Now the
          country is further price-fixing their bonds and "savings" accounts
          backed by itself and having revolving doors of employment with its
          "unbiased" ratings agencies
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/93t1u40u41b822l/Vaccines.jpeg?dl=0"
              }
            />
          </div>
          <br />
          "1 in 4 do not have internet at home," you can regulate companies that
          are whole markets, ...moldmask Patty Murray
          <br />
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/2qno8y9qgq93cpq/Immoral.jpeg?dl=0"
              }
            />
          </div>
          <br />
          Wyden says, "Covid has put people out of work, that is immoral and
          unnacceptable... we must make sure grocery stores are paid"
          <br />
          covid is not the killer using death-print analysis
          <br />
          <br />
          <i>
            <a
              style={{
                color: "rgb(178, 90, 197)",
                backgroundColor: "rgb(200, 230, 255)",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              href="https://moldmask.co"
            >
              You have no proof covid kills
            </a>
          </i>
          <br />
          <i>Many do essential work</i>, but are not&nbsp;
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.employmentHouse.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightEmploymentHouse: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightEmploymentHouse: false }),
                10000
              );
            }}
          >
            paid a living wage
          </i>
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/3xqlyc22ka383fs/LivingWage.jpeg?dl=0"
              }
            />
          </div>
          <br />
          -"50ppl ++$1t [in stock/dollars],"" Bernie wants to increase dollars
          <br />
          -"50ppl {">"} 1/2Ppl," Sanders says.
          <br />
          {/* <BalancedPortfolioAgainstDollars width={this.state.width} />*/}
          <br />
          -But we would get the exact same world without it, at lower prices
          <br />
          -"Protect Pensions [like a loanshark]," Bernieeeeeee
          <br />
          &nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.stats.current.scrollIntoView("smooth");
              this.props.pauseScroll();

              this.setState({ highlightStats: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightStats: false }),
                10000
              );
            }}
          >
            - "[$1.9t "Covid Relief" is what the] majority of people want to
            do," Bernie says&nbsp; (a lie)
          </span>
          <br />
          He is such a Putz he says that Restaurant Owners want minimum wage
          because 140k servers want it
          <br />
          "[Pubs], throw people off medicare, [we can] provide [steal], this to
          them who need it [because their invoices instead of banning invoices
          for prohibiting settlement/price-inelasticity]," says&nbsp;
          <a href="https://berniesanders.com/">B.S.</a>
          <br />
          It will "help low-income find work" (Against Amendment 14)
          <br />
          Classified Ads sites do that
          <br />
          <div style={{ position: "relative" }}>
            &nbsp;
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/8allq3yp7lv1hie/Sanders.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <i>
            <a
              style={{
                color: "rgb(178, 90, 197)",
                backgroundColor: "rgb(20, 20, 25)",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              href="https://www.schumer.senate.gov/"
            >
              Chuck Schhumer - If you want child support
            </a>
            &nbsp;as cited reason for unemployment insurance, then give
            the&nbsp;
            <a
              style={{
                color: "rgb(178, 90, 197)",
                backgroundColor: "rgb(20, 230, 55)",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              href="https://en.wikipedia.org/wiki/Cronus"
            >
              money to the kids
            </a>
            <br />
            "Miss Fernandez has a $16,000 bill, and this will help her," says
            Chuck Schumer. As a&nbsp;
            <a
              style={{ backgroundColor: "rgb(30,30,30)", color: "white" }}
              href="https://www.researchgate.net/project/Class-action-suit"
            >
              class-action bancrupcty lawyer for myself
            </a>
            , I'd say that is the last thing she would want to do.
          </i>
          <br />
          <br />
          Wyden says, "Covid has put people out of work, that is immoral and
          unnacceptable"
          <br />
          covid is not the killer using death-print analysis
          <br />
          <br />
          <i>
            <a
              style={{
                color: "rgb(178, 90, 197)",
                backgroundColor: "rgb(200, 230, 255)",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              href="https://moldmask.co"
            >
              You have no proof covid kills
            </a>
          </i>
          <div
            style={{
              //border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(100% - 30px)",
              position: "relative"
            }}
          >
            Trump-haters are violent and harrass with subjective insults,
            damaging my mental state
            <br />
            <br />
            “Necessary investment in broadband infrastructure” necessary for
            what? Unnamed.... & just assumed is necessary by the House Gluttons
            to excuse theft and benefit bond-holders/buyers instead of LETTING
            PRICES FALL
            <br />
            <br />
            Using debt (promises of other peoples' assets) is ILLEGAL
            Connecticut... to use it competitively is even worse for
            monopolization around government not providers but regulators. In
            monopoly regulation that constitutes a market in itself, like
            internet cableways, you can price-target like the UK does but not
            undercut assets for you and not market producers of targeted-price.
            <br />
            <br />
            this is not competitive domestically-I will be suing every
            congressperson that votes yes
            <br />
            <div style={{ position: "relative" }}>
              &nbsp;
              <img
                alt=""
                style={{
                  width: "calc(100% - 26px)",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/7udciedv0gx1xgd/Medicaid.jpeg?dl=0"
                }
              />
            </div>
            <br />
            Medicade fraud to keep prices up
            <br />
            <div
              style={{
                position: "relative",
                width: "100%",
                minWidth: "100px",
                maxWidth: "500px"
              }}
            >
              <img
                style={{
                  height: "auto",
                  width: "100%"
                }}
                alt={
                  `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                  `(I did this in comparative law/spite knowing it is all going to be ` +
                  `reversed to the point of no action be taken with malintent to not compete ` +
                  `for, but with, customers of businesses not creditors (not a customer, a ` +
                  `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                  `consumers' down-payments and rights])`
                }
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
                }
              />
            </div>
            <br />
            <br />
            The key to world peace is no finance. Not mental health services by
            the hand of&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.experts.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightExperts: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightExperts: false }),
                  10000
                );
              }}
            >
              state sanctioned, paid, conflictedly-interested experts
            </span>
            <br />
            <br />
            Communist-Wall street Democrats are killing us to match their own
            speculation over the years and promise more than we are able. There
            isn't enough and you hve no civil right to make more credit
            <br />
            <br />
            <span
              ref={this.covidKills}
              style={{
                display: "block",

                width: "calc(100% - 20px)",
                maxWidth: "600px",
                color: this.state.highlightCovidKills ? "white" : "grey",
                backgroundColor: this.state.highlightCovidKills
                  ? "rgb(170,100,205)"
                  : ""
              }}
            >
              You have no court-confirmable proof that&nbsp;
              <span
                style={{ fontWeight: "bolder", textDecoration: "underline" }}
                onClick={() => {
                  this.grandmaMentality.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightGrandmaMentality: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightGrandmaMentality: false }),
                    10000
                  );
                }}
              >
                covid kills
              </span>
              &nbsp;regardless the unrequited consent of unemployment insurance
              arrangement (see absolute bottom of page)
              <br />
              <br />
              "Investment-grade bonds," Are made that way by the very
              institution lending these out. Relying on the collusion in which
              it is the prosecution's (mine) duty to cite, the democrat aides
              admit to here in HR.1
              <br />
              <br />
              “Special financial assistance,” would be to help negotiate
              original principle without credit found market marginal
              utility:cost price, not favor the lender or overreaching landlord
            </span>
            <br />
            "133% of poverty line," poverty line is made up by surveys you
            fucking bitch
            <div style={{ position: "relative" }}>
              &nbsp;
              <img
                alt=""
                style={{
                  width: "calc(100% - 26px)",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/8t841arm5api2sr/PovertyLine.jpeg?dl=0"
                }
              />
            </div>
          </div>
          &nbsp;
          <div
            style={{
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <span
              style={{
                fontFamily: '"Hi Melody", sans-serif'
              }}
            >
              "Recovery startup business"
            </span>
            &nbsp;- any business started after Dems locked us down without
            evidence to expunge a great lay-off wave for unemployment insurance
            claims, which we never agreed to
            <br />
            <br />
            This only helps government in&nbsp;
            <span
              style={{
                fontFamily: '"Hi Melody", sans-serif',
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.valuation.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightValuation: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightValuation: false }),
                  10000
                );
              }}
            >
              mirrorcode
            </span>
            &nbsp;tax and only helps those who should have saved while they had
            jobs, if you want to help the disadvantaged you should pay the 40%
            unemployed or just don't take it from them to start with. This bill
            is to pay off bond-holders who can never have what they are
            price-fixed anyway
            <br />
            <br />
            <a href="https://budget.house.gov/sites/democrats.budget.house.gov/files/documents/S%20Con%20Res%205%20Bill%20Final.pdf">
              ABJECT FRAUDULENT INTENTIONS APPARENT IN THE RULES OF CREDIT IN
              HR1
            </a>{" "}
            THEREUNDER YOU HAVE NO EVIDENCE OF VIRAL CONTAGION, OR SPECIFIED
            DIAGNOSIS, WHICH MAY BE&nbsp;
            <a href="https://moldmask.co">COLD WITH SIMILAR ANTIBODIES</a>
            <br />
            <span
              style={{
                fontFamily: '"Hi Melody", sans-serif'
              }}
            >
              9 ‘‘(5) CERTAIN GOVERNMENTAL EMPLOYERS.— 10 No credit shall be
              allowed under this section to the 11 Government of the United
              States or to any agency 12 or instrumentality thereof. The
              preceding sentence 13 shall not apply to any organization
              described in sec14 tion 501(c)(1) of the Internal Revenue Code of
              1986 15 and exempt from tax under section 501(a) of such 16
              Code.’’
            </span>
            <br />
            <br />
            No government agency can get this credit but they can get the
            settled funds... instead of the customers that those funds were
            split from? Unless 501c3 that has owner upon death of board in the
            government that is insolvent and commuting anticompetitive
            violations ongoing
          </div>
          <div
            style={{
              border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(100% - 30px)",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/x0qf9o5qpe7eq5f/Ignore.jpeg?dl=0"
              }
            />
          </div>
          &nbsp;
          <div
            ref={this.collective}
            style={{
              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightCollective ? "white" : "grey",
              backgroundColor: this.state.highlightCollective
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            <span
              style={{
                fontFamily: '"Hi Melody", sans-serif'
              }}
            >
              Collective bargain
            </span>
            &nbsp;is bulk gift certificate purchases, not&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.ronInsurance.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightRonInsurance: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightRonInsurance: false }),
                  10000
                );
              }}
            >
              prisoners’ dilemma, duress-pooling on gift card pools
            </span>
            , subject to invoice to boot - waging unrequited funds
            <br />
            <br />
            <div
              style={{
                position: "relative",
                width: "100%",
                minWidth: "100px",
                maxWidth: "500px"
              }}
            >
              <img
                style={{
                  height: "auto",
                  width: "100%"
                }}
                alt={
                  `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                  `(I did this in comparative law/spite knowing it is all going to be ` +
                  `reversed to the point of no action be taken with malintent to not compete ` +
                  `for, but with, customers of businesses not creditors (not a customer, a ` +
                  `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                  `consumers' down-payments and rights])`
                }
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
                }
              />
            </div>
            <br />
            <br />
            Stolen funds herein used for qualified payment sick leave paragraph
            1A awaiting for test of covid19 (another fraud of payment, for covid
            undefined, antibodies? Those have been noted to be evidence
            consummate of normal&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.cold.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightCold: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightCold: false }),
                  10000
                );
              }}
            >
              cold
            </span>
            &nbsp;as well)
            <br />
            <br />
            <span
              ref={this.bobTheBuilder}
              style={{
                color: this.state.highlightBTB ? "white" : "",
                backgroundColor: this.state.highlightBTB
                  ? "rgb(170,100,205)"
                  : ""
              }}
            >
              If you just keep equalizing tax credits with or without children
              you just disadvantage people who are too busy and likely have more
              productive uses of time
              <br />
              <br />
              Continue repairations for previous government-funding mistakes you
              are still disenfranchising labor, artists and pre-revenue
              entrepreneurs and the potential competition of supply for
              consumers + all dollar-owners' selling rights
              <br />
              <br />
              please stop giving stimulous (stolen from Savers' equity unlike
              corporate law) and continuing to prosecute for Wall St promises to
              themselves 13:1
              <br />
              let people trade voluntarily and without favoritism. Reparations
              are meant to reward the complainant not the&nbsp;
              <span
                onClick={() => {
                  this.takingCredit.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightTakingCredit: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightTakingCredit: false }),
                    10000
                  );
                }}
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
              >
                judge
              </span>
            </span>
            <br />
            <br />
            <span
              style={{
                fontFamily: '"Hi Melody", sans-serif'
              }}
            >
              ‘‘(j) RECONCILIATION OF CREDIT AND ADVANCE 4 CREDIT.— 5 ‘‘(1) IN
              GENERAL.—The amount of the credit 6 allowed under this section to
              any taxpayer for any 7 taxable year shall be reduced (but not
              below zero) by 8 the aggregate amount of payments made under sec9
              tion 7527A to such taxpayer during such taxable 10 year. Any
              failure to so reduce the credit shall be 11 treated as arising out
              of a mathematical or clerical 12 error and assessed according to
              section 6213(b)(1).
            </span>
            &nbsp;
            <br />
            <br />
            <a href="https://budget.house.gov/sites/democrats.budget.house.gov/files/documents/S%20Con%20Res%205%20Bill%20Final.pdf">
              This bill is fraud to pay off taxes
            </a>
            &nbsp;with no evidence of harm and no equal application of law by
            the nature of insurance generally and here
            <br />
            Since everyone is doing it challenge, I have been turned down and I
            never stalked anybody
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <div
            style={{
              border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(100% - 30px)",
              position: "relative"
            }}
          >
            Garcetti (LA), you have NO PROOF you "saved lives"
          </div>
          <div
            style={{
              //border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(100% - 30px)",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/p1r1s50ct7y85cw/Guilt.jpeg?dl=0"
              }
            />
          </div>
          <div
            style={{
              wordBreak: "break-word",

              border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(100% - 30px)",
              position: "relative"
            }}
          >
            <a href="https://budget.house.gov/sites/democrats.budget.house.gov/files/documents/S%20Con%20Res%205%20Bill%20Final.pdf">
              FIXING THE GAME
            </a>
            ‘‘(h) REGULATIONS. —The Secretary shall prescribe 16 such
            regulations or other guidance as may be necessary 17 or appropriate
            to carry out the purposes of this section, 18 including— 19 ‘‘(1)
            regulations or other guidance providing 20 taxpayers the opportunity
            to provide the Secretary 21 information sufficient to allow the
            Secretary to make 22 payments to such taxpayers under subsection (g)
            23 (including the determination of the amount of such 24 payment) if
            such information is not otherwise avail25 able to the Secretary, and
            VerDate Nov 24 2008 16:34 Feb 18, 2021 ‘‘(2) regulations or other
            guidance to ensure to 2 the maximum extent administratively
            practicable 3 that, in determining the amount of any credit under 4
            subsection (a) and any credit or refund under sub5 section (g), an
            individual is not taken into account 6 more than once, including by
            different taxpayers and 7 including by reason of a change in joint
            return sta8 tus or dependent status between the taxable year for 9
            which an advance refund amount is determined and 10 the taxable year
            for which a credit under subsection 11 (a) is determined.
            <br />
            <br />
            "on a noncompetitive basis to speed up the process... this agreement
            is"
            <br />
            this is highly illegal... I do not care... I do not consent
            <br />
            Why are we lending to veterans to compete with other consumers of
            education and the veteran themselves except to secrete more equity
            from unrequited and uneducated savers about what is happening and
            why pertaining to&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.inflation.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightInflation: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightInflation: false }),
                  10000
                );
              }}
            >
              price-inelasticity inflation and monetary inflation
            </span>
            &nbsp;by nonconsensual dollar/market/valut-share infiltration
          </div>
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            WHAT&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.experts.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightExperts: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightExperts: false }),
                  10000
                );
              }}
            >
              THE FUCK
            </span>
            &nbsp;IS AN INVOLUNTARY FURLOUGH
            <br />
            If you explain it in 5 more words watch you incriminate your actions
            <br />
            by counterfeit, price-inelasticity or inequal application of law
            [funds, shareholder rights being dollars, assets or other property;
            and the freedom-of-expression to the owner thereof]
            <br />
            <br />
            This is: Trickle-Down Economics; ANYTHING FOR DEBT SERVICE
            PAYMENTS/LANDLORD BACK-RENTIERCOLONIALISM-or-TAX/MEDICAL INVOICE
            WISHES
          </i>
          <div
            style={{
              border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(100% - 30px)",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/0052araza8ge48y/TrickleDownEconomicKingMaker.png?dl=0"
              }
            />
          </div>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            We will just have to&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.defense.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightDefense: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightDefense: false }),
                  10000
                );
              }}
            >
              reverse it to cash:debt ratio anyway (1:13)
            </span>
            <br />
            Not another credit is&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.IRS.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightIRS: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightIRS: false }),
                  10000
                );
              }}
            >
              available
            </span>
            , there never was; "mortgage/rent" is explicitly cited as reason and
            only eligibility for slush
            <br />
            <br />
            we don't want "covered loans" to bail our our usurped invoices you
            allow
            <br />
            <br />
            $618 million/yr for cybersecurity risk mitigation. how is this not
            anticompetitive?
          </div>
          <br />
          <a
            href="https://budget.house.gov/sites/democrats.budget.house.gov/files/documents/S%20Con%20Res%205%20Bill%20Final.pdf" //"https://www.govtrack.us/congress/bills/116/hr748"
          >
            Let's people not negotitiage with&nbsp;
            <i
              style={{
                fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                textEmphasis: "italics",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
            >
              The Ask: H.R. 1
            </i>
          </a>
          <div
            style={{
              border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(100% - 30px)",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/05bkahoqfhcyuzu/TheAsk.jpeg?dl=0"
              }
            />
          </div>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Socially and economically disadvantaged individuals taken from
            savers and bypassing artists, pre-revenue inventors, volunteers
            or&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.baltimore.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightBaltimore: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightBaltimore: false }),
                  10000
                );
              }}
            >
              nonprofits
            </span>
            &nbsp; (29-year old polish-Italian American male)
            <br />
            <br />
            minority depository institution illegal, depositary
            security-receipts ok
          </div>
          <div
            style={{
              border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(100% - 30px)",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/37jktk3nozsk3hc/dorothy.jpeg?dl=0"
              }
            />
            <a href="https://www.researchgate.net/publication/344197041_FEC_government_spending_as_advertised_in_political_campaigns_as_free_to_even_the_beneficiary_when_actually_it_is_misleading_towards_indentured_servitude_heightened_cost_capacity_requires_dollar-split">
              “Eligibility of assistance... beneficiary?”
            </a>
            <br />
            <span>Insurer decide appropriation</span>
            <br />
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.experts.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightExperts: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightExperts: false }),
                  10000
                );
              }}
            >
              experts
            </span>
            &nbsp;paid, are experts biased - and of their and their dependents'
            (not beneficiarys') burdens/deadlines of inadequate service or
            instigating catch22 in due process timelines to boot (also, how do
            you prove "willful neglect" in filing lackidasical govtech &
            threshold-burdened-processes devoid of equal help of law).
            <br />
            dependency eligibility sustains inequality
          </div>
          &nbsp;
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            Competition is only appropriate for the definition of the marginal
            utility:cost market with investment in profit sharing on non-general
            income prisoners' duress pooling in prohibiting price-elasticity and
            abetting further counterfeit-invoice contracts, notedly
            involuntary-labor
            <br />
            <br />
            <a href="https://www.researchgate.net/project/Class-action-suit">
              ARREARS ARE MOOT FOR IMPOSSIBILITY
            </a>
            , justice department conspires with itself and claims jurisprudence
            over itself
          </i>
          <div
            style={{
              height: "min-content",
              width: "100%",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            <div
              style={{
                border: "3px solid blue",
                borderRadius: "10px",

                height: "min-content",
                width: "calc(50% - 30px)",
                position: "relative"
              }}
            >
              <img
                style={{
                  width: "calc(100% - 26px)",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/7z1s020l40g8zyb/HR11.jpeg?dl=0"
                }
                alt=""
              />
            </div>
            <div
              style={{
                border: "3px solid blue",
                borderRadius: "10px",

                height: "min-content",
                width: "calc(50% - 30px)",
                position: "relative"
              }}
            >
              <img
                style={{
                  width: "calc(100% - 26px)",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/8h8o8fv28ntsau0/HR12.jpeg?dl=0"
                }
                alt=""
              />
            </div>
            <div
              style={{
                border: "3px solid blue",
                borderRadius: "10px",

                height: "min-content",
                width: "calc(50% - 30px)",
                position: "relative"
              }}
            >
              <img
                style={{
                  width: "calc(100% - 26px)",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/clzmkhsu2c7amzv/HR13.jpeg?dl=0"
                }
                alt=""
              />
            </div>
            <div
              style={{
                border: "3px solid blue",
                borderRadius: "10px",

                height: "min-content",
                width: "calc(50% - 30px)",
                position: "relative"
              }}
            >
              <img
                style={{
                  width: "calc(100% - 26px)",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/qon89qz9lvvor8l/HR14.jpeg?dl=0"
                }
                alt=""
              />
            </div>
          </div>
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            If I were to manage your pensions, I would do
            <br />
            <a href="https://stocktwits.com/nmc123">
              60% CASH, 20% TBT, 10%VXX, 10%SLV
            </a>
          </i>
          <br />
          <a href="https://nationalsecuritycasino.com">
            <i
              style={{
                fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                textEmphasis: "italics",
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
            >
              Sluts,
            </i>
          </a>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            It is not a public health emergency
            [event/all-minority-based-funding] does a pandemic require without
            finance
            <br />
            <br />
            NYC: you cannot make someone paint their property or make them do
            labor unless they are roman servants since we don't just do&nbsp;
            <a href="https://vaults.biz">3% sales tax under $2k</a>&nbsp;goes on
            spoof-able geohash
            <br />
            H.R. 1 (748?) proposes not giving interest on bonds to international
            aid & comfort, but still give outlays to "disadvantaged borrowers"
            for no clearer possible confession of motive to indulge in
            involuntary dollar/equity/vault/market-share split? That is
            admittance that it is involuntary slavery
            <br />
            <br />
            It also mentions liability on public health for drug addicts well
            rocket mortgage and rentiers drive us into the streets
            <br />
            PAY FOR IT YOURSELF. As I like to say about a good economy is that
            you can dishwash yourself a house, as a bookkeeper for a
            homebuilding company with family mortgage and experience
            dishwashing/serving&nbsp;
            <a
              onClick={() => {
                this.ftc.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightFTC: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightFTC: false }),
                  10000
                );
              }}
              href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws"
            >
              Cornering
            </a>
            &nbsp; the{" "}
            <a href="http://vaults.biz">Labor Market (not-counterfeit)</a>&nbsp;
            for&nbsp;
            <a href="https://wavv.art/United_States_of_America">Con gress</a>
          </div>
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Insurance Fraud" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.INSURANCEFRAUD}
        >
          Either&nbsp;<a href="https://www.manchin.senate.gov/">Manchin</a>
          &nbsp;doesn't understand price-elasticity, trust-building or he is
          lying and guilty of intending to harm AND mislead by saying, "Covid
          Relief Bill will help Americans for a long time."
          <br />
          Manchin continues, "$300/week was enough, so no one misses a paycheck"
          <br />
          <br />
          "For families, businesses, [price-fixing] and state and local
          governments... Why couldn't you work with Republicans" - Chris Wallace
          <br />
          "We did, we got it done"
          <br />
          <br />
          So regressive, abjectly-illegal, and&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trust.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTrust: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTrust: false }),
                10000
              );
            }}
          >
            anticompetitive
          </span>
          <br />
          <br />
          <div style={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              alt="https://www.dl.dropboxusercontent.com/s/ilfchtcgahjjwba/Spot%20Insurance%20%281%29.png?dl=0"
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/ilfchtcgahjjwba/Spot%20Insurance%20%281%29.png?dl=0"
              }
            />
          </div>
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Usurped rights is no right at all
          </i>
          <br />
          <br />
          Unemployment Insurance is fraud abjectly and forgoes bootstrapping
          entrepreneurs and labor. why not some more demand side policies like
          making invoices/debt/rent/
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.insurance.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPrisonersDuress: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPrisonersDuress: false }),
                10000
              );
            }}
          >
            insurance
          </span>
          &nbsp;illegal by precedent; it is already illegal per colonialism,
          prisoners' dilemma and usurped voting rights for being waged in
          contracts being involuntary slavery
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <div style={tweetsStyle}>
            Do not say taxpayers pay for operations 12x existing money.
            Government spending is mostly a cost upon dollar-owners
            <br />
            <br />
            Insurance companies like Car Shield do not provide service or
            purchase service, they force those who want service to pay in
            advance to keep up with price-inelasticity & for invoices to boot.
            That is involuntary servitude
            <br />
            <a href="https://wavv.art/forumtkBMXXfLklz04JVLd8sN">
              wavv.art/forumtkBMXXfLklz04JVLd8sN
            </a>
            <br />
            <a href="https://wavv.art/forumC49WDIBFRmpaO05ukNoo">
              wavv.art/forumC49WDIBFRmpaO05ukNoo
            </a>
          </div>
          <br />
          <div style={tweetsStyle}>
            monetary-inflation only happens if you allow debts to be reposessed
            <br />
            <br />
            price-inelasticity inflation happens if you&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.inflation.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightInflation: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightInflation: false }),
                  10000
                );
              }}
            >
              wait to adjunicate
            </span>
            &nbsp; and are malfeasant, by definition, with the intention of
            reposession (negligent towards borrowers' customers' down-payments,
            at that) & indentured servitude
            <br />
            <br />
            The harm to savers and subjects to market-colonialism (historical
            applications of communism are a form of tax), rather than the means
            of production to the production (labor), is by way of the (1) use-of
            assets by the borrower and keeping-of down payments by the lender,
            (2) in insurance it is duress of price-inelasticity inflation, and
            (3) in rent it is the squatting/scalping beyond a purchase with the
            intent of using it yourself (5)
            <br />
            It’s illegal to enslave patients like this; we have to buy it to
            keep up with price-inelasticity of pooling demand && paying invoices
            which are themselves promises of other peoples money. The former is
            just duress
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            O.K., Geico, I want to blow off some steam because you force
            consumers to pre-pay (+ mixing-risk/expirations)
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Who benefits when 'helping' with&nbsp;
            <a
              style={{
                color: "black",
                fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                textEmphasis: "italics"
              }}
              href="https://foiegras.life"
            >
              foiegras
            </a>
          </i>
          <br />
          <br />
          Insurance is market-intervention akin to colonialism and therefore
          involuntary by duress, the funding for government insurance is
          untreated in the same contract law as corporate shares. We buy-in due
          to duress. It is not a business, they do not produce anything. If they
          want to broker, they can try to sell non-expiring gift-certificates to
          individuals without cross-party risk, or set up a classified ads site.
          Otherwise, they are thieves. Please, mind your business and look up
          price-elasticity, you affectuate no change except abetting usurped
          dollar promises in invoices and pooling risk and raising price to
          insurmountable levels as an individual.
          <div
            ref={this.insurance}
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightPrisonersDuress ? "white" : "grey",
              backgroundColor: this.state.highlightPrisonersDuress
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            <a href="https://en.wikipedia.org/wiki/Denis_McDonough">
              AARP Profile
            </a>
            : Summary • OpenSecretswww.opensecrets.org › orgs › aarp › summary
            <br />
            AARP organization profile. Contributions in the 2020 cycle: $216510.
            Lobbying in 2019: $8260000. Outside Spending in the 2020 cycle: $0.
          </div>
          <br />
          <br />
          Medishare claims, "You can save on health costs: $500,000/year when
          switching." That answer is wrong still since you paused and said ",
          the answer is an emphatic yes" where the colon is to obfuscate and
          gaslight that Medicare, in conjunction with (how you actually operate,
          not&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trueGDP.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTrueGDP: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTrueGDP: false }),
                10000
              );
            }}
          >
            relative change
          </span>
          ) other&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.trueGDP.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTrueGDP: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTrueGDP: false }),
                10000
              );
            }}
          >
            insurance
          </span>
          &nbsp;you CANNOT say it saves money to abet invoices and instigate by
          duress cross party risk for what would be without invoices just gift
          certificates (not gift cards) for individual buyers (you would be a
          classified ads business if you want to "curate"). I am the one that
          made&nbsp;
          <a href="https://www.researchgate.net/publication/346041766_The_FTC_has_responded_to_my_complaints_and_so_has_the_industry_Allstate_Progressive_Geico_all_say_they_save_you_money_by_switching_or_bundling_yet_neo-insurance_companies_like_CarShieldUSA_still_says_">
            insurance companies cease in advertising that they save money or
            curate efficiently
          </a>
          <br />
          <br />
          <span
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightIncomeTax ? "white" : "grey",
              backgroundColor: this.state.highlightIncomeTax
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.incomeTax}
          >
            insurance is not subscription-membership because one person's
            subscription (taxable) does not go towards someone else's or a large
            contracted&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.royalty.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightRoyalty: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightRoyalty: false }),
                  10000
                );
              }}
            >
              monopsony
            </span>
            &nbsp;(Spotify, income, royalty not taxes), it goes to pay for their
            non-monopsony, individual servicing. insurance is duressful trade,
            by invoice, gift-certificate or max-expense, prohibiting trade and
            causing slavery just the same as debt
          </span>
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.insurance.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightInsurance: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightInsurance: false }),
                10000
              );
            }}
          >
            Insurance
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Ireland requesting from U.K. money they have no right to give out
            because of a "contract," what fucking idiots hoidy hoiy
            <br />
            <a href="https://en.wikipedia.org/wiki/Under-occupied_developments_in_China">
              Stimulus for low-population areas (must be paid back, supports
              "savings" accounts' accounting fraud
            </a>
          </div>
          <br />
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
              //fontWeight: "bolder",
              //textDecoration: "underline"
            }}
          >
            <a href="https://moldmask.co">Eat My Ass Jen Psaki</a>, "We will get
            vaccines into arms"; Neanderthals invented the wheel or whatever
          </i>
          <h1>My knee is twitching</h1>
          <i
            ref={this.injury}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              color: this.state.highlightInjury ? "white" : "grey",
              backgroundColor: this.state.highlightInjury
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            My 5-year trial with SSA Disability / Medicare Orthopedic
          </i>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", position: "relative" }}>
              <img
                style={{ width: "100%", height: "auto" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/01otcjkketu06bj/SecondAppeal.png?dl=0"
                }
                alt="smart enough to get a job proved to be wrong"
              />
            </div>
            <div style={{ width: "50%", position: "relative" }}>
              &nbsp;
              <img
                style={{ width: "100%", height: "auto" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/18ou3o8uozjym4g/VastusMedialis.jpeg?dl=0"
                }
                alt="vastus medialis (teardrop muscle)"
              />
            </div>
          </div>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              wordBreak: "break-word",
              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            As you can see from the photo, my muscle (flexed) is malformed and
            my patella locks upwards, and this Medicare doctor has the gaul to
            say it shouldn’t bother me, and if it did it was a back problem.
            This is the kind of care you get with insurance, prepaid and
            pooled-prisoners' dilemma. I also overheard him call SSA idiots in
            another room to another male patient before for giving him
            disability for an injury he was apparently there for. His compassion
            is apparently correlated with the gender of his patients, given
            these other reviews because he was ignoring my leg! He also started
            counting down in seconds for complaining about his adherence to the
            idea that I should care about my lower back? WTF? I have a hole in
            my thigh and i was have no issues with my lower back. I am
            traumatized, wasted 2 months waiting for this on a promise by his
            front desk he would do transfuse my bone marrow into new skeletal
            muscle, Horizon Family Care has 3 adult orthopedic surgeons in my
            area and the other two were kind enough to not waste my time, but
            now I have no options but to slowly die of heart disease because I
            can't exercise and sweat, his solution is to look at my back.
            <br />
            <br />
            https://www.researchgate.net/publication/43297722_Repair_of_Traumatic_Skeletal_Muscle_Injury_with_Bone-Marrow-Derived_Mesenchymal_Stem_Cells_Seeded_on_Extracellular_Matrix.
            <br />
            <br /> He looked at the muscular divot in my teardrop muscle (vastus
            medialis) and suggested that I couldn't stand because of a lower
            back "problem" he made up. His conflict of interest is apparent,
            just like my regular Medicare doctor, they ignore my injury because
            they was to obstruct evidence for my disability case. Why else would
            he misdirect from the content of the photographic evidence cited
            here, completely ignoring my pain.
            <br />
            <br />
            He wanted me to do physical therapy again to proceed to what he said
            he would never do bone marrow transfusion, but that is a&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.insurance.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightPrisonersDuress: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightPrisonersDuress: false }),
                  10000
                );
              }}
            >
              problem
            </span>
            &nbsp;with Medicare/Pre-paid Cross-party duress inducing prisoners’
            dilemma insurance scourges. I do squats on my own but it has been 4
            years since my injury and I feel like I am losing my leg. I used to
            be able to run, then once a month, now I can hardly do a squat or
            anything without pain from the other parts of my leg like below my
            patella and ankle hurting/swelling the day after or at all before
            two month's break. I read at the start of my injury in 2015 that it
            would take 7-8 years to recover deep-tissue skeletal muscle. This
            may be close to the outpouring of bone marrow from my knee, so the
            delivery mechanism is likely not strong, and NEED bone marrow store
            from my pelvis. Or, 5 years I may be able to work it back with
            physical therapy/lean-strength training without my the
            swelling/joint/ankle pain/auxilliary-effects (I'll try to squat 3x20
            again in 15 days...)
            <br />
            <br />
            Incompassionate Rube. And for government (Horizon NJ Family Care
            here) the Bad Doctor described the time relayed issue the government
            as borrowers instigates on us by ignoring previous physical therapy
            for the same thing. I didn't get disability because I was too smart
            and then started applying and the time-lapsed to talk back to the
            unloving-disowned people running this dollar-corporation.
            <br />
            <br />
            He also said he stitches people up all the time, but my injury was
            jagged, but he didn't care.
            <br />
            <br />
            <a href="https://wavv.art/forumn6cCt1uxDAY0mqIVNV2b">
              wavv.art/forumn6cCt1uxDAY0mqIVNV2b
            </a>
            <br />
            Paying my lenders/invoices(bills)/market-colonizers(rentiers
            {/*},price-producers*/}) doesn't help me when they usurped the
            contract and forced me into it by prisoners' dilemma-duress to pay
            the invoice and be subject to coagulated demand capacity of
            cross-party risk, gambling on life-events and matching the pool's
            capacity instead of the&nbsp;
            <a href="https://micro-theory.com">
              individual marginal price-discretion
            </a>
            <br />
            “When the characters had growing expenses, we made saving on&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.insurance.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightPrisonersDuress: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightPrisonersDuress: false }),
                  10000
                );
              }}
            >
              insurance
            </span>
            , easy.” Hahahaha <a href="https://usaa.com">USAA</a>
          </div>
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Virus" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.VIRUS}
        >
          "What is Florida doing right?" asks Jake Tapper, CNN. They ran out of
          old people. adjust for age and the "vaccine"/graft kills more people
          compared to other times in recent history. &nbsp;
          <a href="https://en.wikipedia.org/wiki/Dan_Gelber">
            Suck my cock, it is correlated
          </a>
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.politics.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPolitics: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPolitics: false }),
                10000
              );
            }}
          >
            Science
          </span>
          <br />
          <br />
          Impossible to see long term effects, namely B-cell oncogenesis which
          is slower to form, since the vaccines began testing. A 28 year old
          dying is not worth the risk of the cold antibodies.&nbsp;
          <a href="https://www.medrxiv.org/content/10.1101/2020.07.23.20160895v7">
            Fix death for age
          </a>
          &nbsp; it is normal. First world countries have a lot of old people
          this decade https://www.nature.com/articles/s41598-020-73777-8
          <br />
          <br />
          <b>SARCASM IN THE NEXT BLOCK</b>
          <br />
          Thank you CNN, I agree: people that are hesitant to get the
          "vaccine"/graft will 'need convincing' with representaions by their
          favorite artists. I must admit, I am instilling duress without
          mentioning that I cannot wait to hang out with you in jail
          <br />
          <br />
          Instead of do no harm, they want to ignore warnings, take any vaccine,
          want to dismantle our ability to deny it forever
          <br />
          The&nbsp;<a href="https://humanharvest.info">"vaccine"/graft</a>
          &nbsp;has not been studies for a lifetime. There is no
          legally-financial guarantee liability of non-immunity. You can still
          move oils/sweat with the antibodies, however you make them, which are
          exactly alike to our fighting-made antibody reaction to the cold.
          B-cell oncogenesis suredly happens, and the mRNA changes B-cell.
          <br />
          <br />
          <span
            ref={this.travellingIndividuals}
            style={{
              color: this.state.highlightTravellingIndividuals ? "white" : "",
              backgroundColor: this.state.highlightTravellingIndividuals
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Travel can only be supressed by individuals by court order,&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.oldFluExclusion.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightOldFluExclusion: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightOldFluExclusion: false }),
                  10000
                );
              }}
            >
              not governments or physicians, federal, state or local
            </span>
            <br />
            Would need a law of non-scientific and assumptive-intentions
            <br />
            <br />
            Ron Desantis wants to target "vaccine"/graft, undescribed doses to
            high&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.cold.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightCold: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightCold: false }),
                  10000
                );
              }}
            >
              cold
            </span>
            &nbsp;antibody cold case areas... if there are no symptoms, you're
            not certifiably sick with a virus deadlier than annual flu.&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.oldFluExclusion.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightOldFluExclusion: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightOldFluExclusion: false }),
                  10000
                );
              }}
            >
              RELEASE THE DEATH RATE POPULATION NUMBERS UN
            </span>
          </span>
          <br />
          <br />
          "Come on down," smiles Mayor of Ft.Lauterdale, "but you'll have
          a&nbsp;
          <a href="https://moldmask.co">mask</a>&nbsp;and we will check
          your&nbsp;
          <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
            medical history
          </a>
          &nbsp;for cold&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.cold.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightCold: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightCold: false }),
                10000
              );
            }}
          >
            antibodies
          </span>
          &nbsp;or give you a&nbsp;
          <b>graft from a lab</b>." "& you can&nbsp;
          <a href="https://moldmask.co">suck my balls</a>," I reply
          <br />
          <div
            style={{
              width: "50%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "70%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/fmar6mnau21wthb/BallsAreOpen.jpg?dl=0"
              }
            />
          </div>
          <br />
          We can open without vaccines. Covid is not spread in the air. only
          particles small enough for brownian motion is everywhere in the
          atmostphere. Larger particles do not take up as much space as oxygen
          or carbon-oxygen(s), they either rise per temperature if cold out or
          drop immediately due to it's protons being pulled by the earth's
          electrons
          <br />
          <br />
          Doctor on CNN, "We look at the science." No, you retard, you look at
          samples and over less than a lifetime
          <br />
          <a
            href="https://humanharvest.info"
            style={{
              width: "50%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "50%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/lev80376hnh8sp3/luckyDoctor.jpg?dl=0"
              }
            />
          </a>
          <br />
          <br />
          <span
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightFraud ? "white" : "",
              backgroundColor: this.state.highlightFraud
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.fraud}
          >
            Total death rate/population is delayed for 2-3 months now, the
            first-world population is comprised of mostly&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.oldFluExclusion.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightOldFluExclusion: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightOldFluExclusion: false }),
                  10000
                );
              }}
            >
              old
            </span>
            &nbsp;people, and the only data we have been given is causes of
            death which is not only subjective to "
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.experts.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightExperts: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightExperts: false }),
                  10000
                );
              }}
            >
              experts
            </span>
            ," but people with&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.disclosure.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightDisclosure: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightDisclosure: false }),
                  10000
                );
              }}
            >
              conflicts of interest
            </span>
          </span>
          <br />
          <br />
          <span
            ref={this.newsy}
            style={{
              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightNewsy ? "white" : "grey",
              backgroundColor: this.state.highlightNewsy
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            “Opinion-free” crock-of-shit <a href="https://newsy.com">Newsy</a>
            &nbsp;claims it is not opinion the virus will spread without&nbsp;
            <a href="https://humanharvest.info">"vaccines"/grafts</a> [that we
            must do it to not be forced to&nbsp;
            <a href="https://moldmask.co">mask</a>
            ]... If you want the facts: it only does spreads if you have
            symptoms or don't your wash hands/face.
          </span>
          <br />
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",
              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            npr, if you "only warn people of what to expect" instead of what
            they can expect, you're liable for witholding information when
            inoculating them. Saying we need vaccine to get over pandemic is
            like saying we need cheeseburger bc we stabbed our foot. same&nbsp;
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/lab/resources/antibody-tests-guidelines.html">
              2 weeks to clean
            </a>
            , risk of 0-6mo. loss of smell vs risk of cancer by&nbsp;
            <a
              style={{
                transition: ".3s ease-in",

                color: this.state.highlightBcell ? "white" : "",
                backgroundColor: this.state.highlightBcell
                  ? "rgb(170,100,205)"
                  : ""
              }}
              ref={this.bcell}
              href="https://nature.com/articles/cddis2016148"
            >
              B-cell
            </a>
            &nbsp; oncogenesis. Tell those&nbsp;
            <a href="https://www.facebook.com/cnninternational/posts/10159109685099641">
              free-riders
            </a>
            &nbsp; that YOU CHOOSE. virus' require settlement and percolation,
            to boot. not to be crass but same chance it floats by transmission
            as intentionally disbursed in&nbsp;
            <a href="https://www.jstor.org/stable/resrep27830.25?seq=2#metadata_info_tab_contents">
              food
            </a>
            &nbsp; networks to not pay out pensions at this&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.valuation.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightValuation: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightValuation: false }),
                  10000
                );
              }}
            >
              point
            </span>
          </div>
          <br />
          CNN calling vaccines/grafts, platforms now
          <br />
          <br />
          <span
            ref={this.grandmaMentality}
            style={{
              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightGrandmaMentality ? "white" : "grey",
              backgroundColor: this.state.highlightGrandmaMentality
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            use a tissue, wash your hands,&nbsp;
            <a href="https://moldmask.co">take off your masks</a>
            <br />
            don't take a&nbsp;
            <a href="https://humanharvest.info">"vaccine"/graft</a> that could
            cause malformation/cancer with normal life expectancy. They don't
            want to pay for&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.oldFluExclusion.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightOldFluExclusion: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightOldFluExclusion: false }),
                  10000
                );
              }}
            >
              larger, first-world old-age population
            </span>
            <br />
            couples who pass at the same time is correlative evidence that it is
            mostly mental, and CNN can be attributable to my grandma's friends'
            deaths
          </span>
          <br />
          <br />
          The anti-freedomers are going to be the future homeschoolers lmao you
          need to realize deaths were expected to raise since 2013 old age
          population in first world countries and the virus was being
          experimented with recklessly in Wuhan by NIH. Btw, you people
          are&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.host.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightHost: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightHost: false }),
                10000
              );
            }}
          >
            festering mold
          </span>
          &nbsp; and carbon monoxide poisoning with these masks and
          vaccines/grafts are&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.travellingIndividuals.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTravellingIndividuals: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () =>
                  this.setState({
                    highlightTravellingIndividuals: false
                  }),
                10000
              );
            }}
          >
            an individual decision
          </span>
          &nbsp; based on seen/unseen risks
          <br />
          transmission of virus only travels by symptom,&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.newsy.current.scrollIntoView("smooth");
              this.props.pauseScroll();

              this.setState({ highlightNewsy: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightNewsy: false }),
                10000
              );
            }}
          >
            spittle/oils
          </span>
          , and heat rises
          <div style={tweetsStyle}>
            You can have opinion if the other has no proof, and then you will
            have to cease if it is proven, which can be appealed in the future,
            by the people. You bet.&nbsp;
            <a href="https://academic.oup.com/jid/article/191/9/1472/862003">
              https://academic.oup.com/jid/article/191/9/1472/862003
            </a>
            <br />
            <br />
            "Wet air samples: Initial testing of high-resolution slit samples
            from a room where a patient was recovering from SARS (not on a
            ventilator) showed 1 of 10 samples to be PCR positive for SARS-CoV
            (table 1). All of these air samples were then concentrated 100-fold
            by ultracentrifugation and were rescreened by PCR. This identified a
            second PCR-positive sample and confirmed the positive results for
            the original sample. All of the PCR-positive products were sequenced
            and confirmed to be SARS-CoV. Results of viability assays of the
            samples for infectivity in Vero-E6 cell culture were negative.
            During the 3 h that the air sampler was operating in the room (18
            min for each sample collected), the patient was not under continual
            observation but was requested to not wear a mask, was coughing
            periodically, walked about, and sat in the bed and in the chair. The
            patient was also asked to stay {">"}5 feet away from the air sampler
            and not to cough in the direction of the air sampler. The air of the
            corridor within the critical care unit was also tested and was PCR
            negative for SARS-CoV.
            <br />
            <br />
            <b>
              Air samples from 2 isolation rooms in the critical care unit
              (occupied by patients with SARS being given respiratory support on
              ventilators) were PCR negative, as were samples from another room
              occupied by a patient on a ventilator who did not have SARS"
            </b>
          </div>
          <br />
          Michael Osterholm, why do you want to “vaccinate”/graft us (and risk
          B-cell oncogenesis) when the problem is forming mold in your mask and
          ceasing that self-deprecation might stop your prediction of
          <a href="https://moldmask.co">B.1.1.7</a>&nbsp;doubling 3/4/2021
          <br />
          Without debt, the rich will want to&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.financeKills.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFinanceKills: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFinanceKills: false }),
                10000
              );
            }}
          >
            kill&nbsp;
            <a href="https://www.energy.gov/lpo/title-xvii/title-xvii-faqs">
              us
            </a>
          </span>
          <br />
          <br />
          <div
            style={{
              width: "100%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/kxi7azldwu0tr7u/Screen%20Shot%202021-03-07%20at%201.35.18%20PM.png?dl=0"
              }
            />
          </div>
          <br />
          Why does&nbsp;
          <a href="https://en.wikipedia.org/wiki/Arthel_Neville">
            Arthel Neville
          </a>
          &nbsp;think&nbsp;
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.covidKills.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightCovidKills: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightCovidKills: false }),
                10000
              );
            }}
          >
            200k/year deaths
          </span>
          &nbsp;is more important than&nbsp;
          <a href="https://www.fbi.gov/file-repository/2015-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
            80k/year missing children
          </a>
          .<br />
          <a href="https://video.foxnews.com/v/6237804187001#sp=show-clips">
            "Risk averse" dunce
          </a>
          &nbsp;from JHU telling you to use a mask unless&nbsp;
          <a href="https://humanharvest.info">"vaccinated"/grafted</a>
          &nbsp;instead of&nbsp;
          <a href="https://moldmask.co">allowing moisture</a>&nbsp;to rise or
          fall
          <br />
          <br />
          <a
            style={{ fontSize: "12px", color: "black" }}
            href="https://irp.nih.gov/blog/post/2020/09/mold-exposure-sets-stage-for-severe-flu#:~:text=New%20IRP%20research%20has%20found,dramatically%20increasing%20the%20illness's%20severity.&text=In%20order%20to%20reproduce%2C%20the,by%20humans%20and%20other%20organisms."
          >
            CNN (no thwart of bad info, Dr. Davidson) claims masks do not cause
            humidity on face and worsen/prolong virus.
          </a>
          <br />
          <br />
          "Why not send money out for [graft]?" so that prices are found
          naturally so people can afford it and not owe the money again, and we
          know B-cells can cause oncogenesis when abnornal/dysregulated by not
          acting normally like using your own mRNA to form antibodies as per
          required and doesn't cause dependency if making your own like sparring
          to train instead of guiding your punches into abnormality/oncogenesis
          reaction to a non-human part to fight, not be guided.
          <br />
          <br />
          no evidence I'm sick and I think you're racist
          <br />
          <br />
          transfer only happens when symptoms are there is the only proof you
          have to exclude not based on anything but public health
          <br />
          &nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.spittle.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSpittle: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSpittle: false }),
                10000
              );
            }}
          >
            YOU HAVE NO PROOF
          </span>
          &nbsp;AND 1918 flu was hunger deaths from debt.
          <div
            style={{
              display: "flex",
              position: "relative"
            }}
          >
            <div
              style={{
                width: "calc(50% - 26px)",
                position: "relative"
              }}
            >
              &nbsp;
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  padding: "10px"
                }}
                alt="always, not just sneeze https://pubmed.ncbi.nlm.nih.gov/17542834/"
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/yt1089433ca2ixp/measles.jpeg?dl=0"
                }
              />
            </div>
            <div
              style={{
                width: "calc(50% - 26px)",
                position: "relative"
              }}
            >
              &nbsp;
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  padding: "10px"
                }}
                alt="sneeze only"
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/bsr9axf89v6xbf0/sneezemeazles.jpeg?dl=0"
                }
              />
            </div>
          </div>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7264927/?fbclid=IwAR3YJK5KeMMHKlePeZN0lQb0cZz6tAb2SQZO9bKJl9jEE6aQIE08nbUgUNE">
            It is only proposed as an unconfirmed solution to not be oncogenic
            by "culturing" B-cells or creating a grandiose "universal B-cell"
          </a>
          <br />
          self-harm [of-age] is not your choice to stop if fully-informed, but
          this is harm to others unrequited
          <br />
          <br />
          Herd immunity is so stupid. Why rush&nbsp;
          <a href="https://froth.app">death</a>&nbsp;
          <a href="https://humanharvest.info">humanharvest.info</a>&nbsp;
          <a href="https://moldmask.co">moldmask.co</a>
          <br />
          2052 products © 2021
          <br />
          <br />
          <span
            ref={this.cold}
            style={{
              transform: ".3s ease-in",
              color: this.state.highlightCold ? "white" : "",
              backgroundColor: this.state.highlightCold
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            "Fully-vaccinated: no mask, social-distance," says&nbsp;
            <a href="https://en.wikipedia.org/wiki/Rochelle_Walensky">
              CDC Director, Dr. Rochelle P. Walensky
            </a>
            &nbsp;and continues, "if from 1 household and little co-mortality
            risk [I don't care about morbidity anymore as reason to mask, and am
            not confident in the&nbsp;
            <a href="https://humanharvest.info">"vaccine"/graft</a>&nbsp;after 2
            weeks which is as much to make your own AFTER having symptoms])."
            <br />
            ...but that is only if (2) symptom-less (1) test is proven [which
            (1) hasn't been (
            <a href="https://www.memorialhealthcare.org/whats-the-difference-between-covid-19-rapid-and-prc-tests/">
              they are still using PCR, your PCR tests only check for
              human-reaction not the virus
            </a>
            &nbsp;even&nbsp;
            <a href="https://www.fiercebiotech.com/medtech/abbott-secures-testing-green-lights-for-symptomless-covid-19-cases-plus-flu-rsv">
              in new March 2021 works
            </a>
            )], (2) if&nbsp;
            <a href="https://www.nih.gov/news-events/nih-research-matters/immune-cells-common-cold-may-recognize-sars-cov-2">
              antibodies are different from cold's
            </a>
            , (3) if&nbsp;
            <a href="https://www.cdc.gov/flu/about/professionals/genetic-characterization.htm">
              sequencing
            </a>
            , that which has been&nbsp;
            <a href="https://www.npr.org/sections/goatsandsoda/2020/04/29/847948272/why-the-u-s-government-stopped-funding-a-research-project-on-bats-and-coronaviru">
              proven to be easy
            </a>
            , is ruled out as "pulling the trigger" with a&nbsp;
            <a href="https://en.wikipedia.org/wiki/Unethical_human_experimentation_in_the_United_States">
              patterned
            </a>
            -
            <a href="https://foreignpolicy.com/2016/03/22/libya-and-the-myth-of-humanitarian-intervention/">
              history
            </a>
            &nbsp;of&nbsp;
            <a href="https://www.bbc.com/news/uk-scotland-south-scotland-12552587?fbclid=IwAR1MXbhxKLMpX_zBgfpovak4GLmJWKLuKfTq-xQJbu2eO5qzKTypKp6UbqM">
              mis
            </a>
            in
            <a href="https://theecologist.org/2016/mar/14/why-qaddafi-had-go-african-gold-oil-and-challenge-monetary-imperialism?fbclid=IwAR1dfhEd8SHKT_fgQVr81ENiAayYcbf5UfBIHda6IfUsrEgwtye8ojD5iwM">
              formation
            </a>
            &nbsp; , a&nbsp;
            <a
              ref={this.dvNotion}
              style={{
                transform: ".3s ease-in",
                color: this.state.highlightNotion ? "white" : "",
                backgroundColor: this.state.highlightNotion
                  ? "rgb(170,100,205)"
                  : ""
              }}
              href="https://constitutioncenter.org/interactive-constitution/interpretation/article-iv/clauses/42"
            >
              warped notion of thinking it is ok to do so
            </a>
            &nbsp;and&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.experts.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightExperts: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightExperts: false }),
                  10000
                );
              }}
            >
              experts are paid
            </span>
            &nbsp; and (4)&nbsp;
            <a href="https://www6.slac.stanford.edu/news/2020-12-18-scientists-get-most-realistic-view-yet-coronavirus-spike-protein-structure.aspx">
              if the virus' proteins themselves aren't different
            </a>
          </span>
          <br />
          <br />
          <span
            ref={this.singleSourceOfTruth}
            style={{
              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightSingleSource ? "white" : "grey",
              backgroundColor: this.state.highlightSingleSource
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            If Herd-immunity can suppress the virus without a person interacting
            with the&nbsp;
            <a href="https://humanharvest.info">“vaccine”/graft</a>&nbsp;or the
            virus, then it has a single source on the earth
            <br />
            they do not help protect others, there is no proof you have covid
            without symptoms. But the aggregate data is&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.oldFluExclusion.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightOldFluExclusion: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightOldFluExclusion: false }),
                  10000
                );
              }}
            >
              questionable
            </span>
            &nbsp;in describing an&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.oldFluExclusion.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightOldFluExclusion: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightOldFluExclusion: false }),
                  10000
                );
              }}
            >
              abnormal death rate
            </span>
            .
          </span>
          duress is force, israelis cannot call their green pass a sovereign
          choice. exclusion is free-rider slavery (let business decide not based
          on the best price&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.ftc.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFTC: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFTC: false }),
                10000
              );
            }}
          >
            (without fixing)
          </span>
          )
          <br />
          <br />
          it probably spreads by not washing hands or letting it fester in a
          mask, but the evidence shows that it doesn’t transmit if you are just
          in a room with someone, here is the link a third time&nbsp;
          <a href="https://pubmed.ncbi.nlm.nih.gov/17542834/">
            https://pubmed.ncbi.nlm.nih.gov/17542834/
          </a>
          &nbsp; read it or shut up, otherwise all of you are liable for
          unsanitary moisture you are propagating to force someone not to
          release and keep on their faces
          <br />
          <br />
          anyway, if the weight or electron variable is exactly perfect for
          gravity there is still room temperature. Using the evidence and our
          understanding of physics, spittle doesn’t float. The link showed 0/10
          transmission. They are going to use these same results to try to pass
          as proof that vaccines/grafts are effective in stopping others from
          catching it. That is also false because it takes 2-weeks to make
          antibodies just the same as catching it && it needs to settle in
          each&nbsp;
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightHost ? "white" : "",
              backgroundColor: this.state.highlightHost
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.host}
          >
            host
          </span>
          .
          <br />
          Correlation is not causation, the only bare evidence confirms physics
          that heat rises and weight drops to mass/electrons. Carbon monoxide
          poisoning is ill-advised from the guy who was negligent with his paid
          experimentation with the virus in Wuhan
          <br />
          Any good doctor would advise releasing carbon monoxide and consult
          with physics-experts that heat rises and weight/electrons drop. When
          cold, breathe out, politifact says covid requires spittle or dust
          (aerosol), that may just be hot carbon monoxide but if it is spittle,
          only one 1ft it travels eye level
          <br />
          All the same size as what has been shown to not float without spittle
          that doesn’t plane-ally-move without kinetic movement, I hope. If it
          (125nm) is as smol as oxygen (.299nm) or CO2 we might have a problem
          and need legit gas masks
          <br />
          The mask is a petri dish like a mold in a wet place. the virus mutates
          (variants) in reaction to antibodies & making them naturally vs mRNA
          graft both take 2 weeks
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            {!this.state.facebookerror && (
              <iframe
                title="covid passports could devilver a 'summer of joy' bubble"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjohnshopkinsuniversity%2Fposts%2F10158562382027217&width=300&show_text=true&height=444&appId"
                width="300"
                height="444"
                style={{
                  backgroundColor: "#3b5998",
                  border: "none",
                  overflow: "hidden",
                  width: "480px"
                }}
                onError={this.handleFacebookError}
              ></iframe>
            )}
            <br />
            <br />
            In grafts and [“viral”? ]vaccine “working hard to recognize the
            vaccine and remember the new virus for next time.” No precautions
            about fragility of&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.bcell.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightBcell: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightBcell: false }),
                  10000
                );
              }}
            >
              B-cell
            </span>
            &nbsp;regulation?
          </div>
          <br />
          <span
            style={{
              border: "1px dotted grey",
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.singleSourceOfTruth.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightSingleSource: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightSingleSource: false }),
                10000
              );
            }}
          >
            NO PROOF EVIDENCE NONSYMPOMATIC IS DANGEROUS
          </span>
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.education.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightEducation: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightEducation: false }),
                10000
              );
            }}
          >
            Lawyer for myself, why scare people out of self-sufficiency
          </span>
          <br />
          Governor Wisconsin, it is not your right to forbid be in there
          under&nbsp;<a href="https://humanharvest.info">duress</a>, you do not
          own that land the citizens do and those are INDIVIDUAL RESTRAINING
          ORDERS
          <br />
          I like this, if I were to be on this page
          <br />
          <a href="https://www.democrats.senate.gov/about-senate-dems/our-caucus">
            I would be sure to have one covering the mic and whispering to
            somebody
          </a>
          <br />
          <br />
          Fauci: "All three "vaccines" work virtually 100% in preventing death
          [on a virus that passes without harm virtually 100%]," he remarks
          about the antibody formation appearing at this moment from&nbsp;
          <a href="https://humanharvest.info">human-part/spliced grafts</a> to
          be the same as making your own
          <br />
          <br />
          adverse long-term side effects to vaccines are extroadinarily rare,
          like covid morbidity or death.
          <br />
          no proof asymptomatic, pre-gestation in host are contageous
          <br />
          <div
            ref={this.nextspittle}
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              border: this.state.highlightSpittleNext
                ? "1px blue solid"
                : "1px grey dotted",
              width: "calc(100% - 20px)",
              maxWidth: "600px",
              transition: ".3s ease-in"
            }}
          >
            Vaccines/grafts do not protect others because you can exclude
            symptomatic but have no evidence for asymptomatic & gestation is
            required to be contageous
          </div>
          <br />
          <a href="https://wavv.art/forumVzdEpAkIklybHUWXHGq5">
            wavv.art/forumVzdEpAkIklybHUWXHGq5
          </a>
          <br />
          heat rises, weight fall/electrons pull. No proof spittle floats in the
          middle and that goes against planetary science/weather systems and
          physics. Here is 0/10 transmission by being in room without mask
          &nbsp;
          <a
            style={{
              border: "1px solid",
              color: "grey"
            }}
            href="https://pubmed.ncbi.nlm.nih.gov/17542834/"
          >
            https://pubmed.ncbi.nlm.nih.gov/17542834/
          </a>
          , and politifact consultants say covid requires spittle to transmit
          &nbsp;
          <a
            style={{
              border: "1px solid",
              color: "grey"
            }}
            href="https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/?fbclid=IwAR1kttzecnYeseGezoHO6mUHtWh5eXIkhSW52xcrttVCoWMCvYEByZ8JhC8"
          >
            https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/?fbclid=IwAR1kttzecnYeseGezoHO6mUHtWh5eXIkhSW52xcrttVCoWMCvYEByZ8JhC8
          </a>
          , which makes sense to Brownian motion only capable by oxygen or the
          like-sized particles &nbsp;
          <a
            style={{
              border: "1px solid",
              color: "grey"
            }}
            href="https://www.stingraypartswasher.com/filtration-relative-particle-sizes-in-microns.html?fbclid=IwAR2RCjRc6o0N80E2XJqCbaGHYupC7agJ5RGcR571KsuJ6c2Uaz9jsYr6hVk"
          >
            https://www.stingraypartswasher.com/filtration-relative-particle-sizes-in-microns.html?fbclid=IwAR2RCjRc6o0N80E2XJqCbaGHYupC7agJ5RGcR571KsuJ6c2Uaz9jsYr6hVk
          </a>
          &nbsp;
          <br />
          Also I think mold allows virus to survive before infection in a mask
          and prolonging the pandemic &nbsp;
          <a
            style={{
              border: "1px solid",
              color: "grey"
            }}
            href="https://irp.nih.gov/blog/post/2020/09/mold-exposure-sets-stage-for-severe-flu#:~:text=New%20IRP%20research%20has%20found,dramatically%20increasing%20the%20illness's%20severity.&text=In%20order%20to%20reproduce%2C%20the,by%20humans%20and%20other%20organisms."
          >
            https://irp.nih.gov/blog/post/2020/09/mold-exposure-sets-stage-for-severe-flu#:~:text=New%20IRP%20research%20has%20found,dramatically%20increasing%20the%20illness's%20severity.&text=In%20order%20to%20reproduce%2C%20the,by%20humans%20and%20other%20organisms.
          </a>
          &nbsp; You can really only certify but not bar unless there is
          prove-able harm or it is prohibitive to not do it. <br />
          <br />
          In this case, neither is harm proven with evidence that spittle from
          talking floats, nor is it prohibitive for people who don’t want to be
          around people wearing masks. Their preference for others is more
          onerous than people who prefer sneezing into their elbow. Masks are as
          reckless as NIH & Fauci getting paid dollar split to experiment with
          virus in anti-human rights China&nbsp;
          <a href="https://pubmed.ncbi.nlm.nih.gov/17542834/">
            https://pubmed.ncbi.nlm.nih.gov/17542834/
          </a>
          <br />
          <br />
          <span
            ref={this.spittle}
            style={{
              position: "relative",

              transition: ".3s ease-in",

              color: this.state.highlightSpittle ? "white" : "",
              backgroundColor: this.state.highlightSpittle
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            catching a sneeze in an elbow is an emergency measure if you cannot
            grab a tissue, but I wouldn’t advice sneezing in a mask; the droplet
            might have to be exactly room temperature and smaller than spittle
            to float anyway. I’ve spent quite a bit of time checking sources of
            evidence that aren’t correlations and it shows spittle/breathe
            &nbsp;
            <span
              onClick={() => {
                this.nextspittle.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightSpittleNext: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightSpittleNext: false }),
                  10000
                );
              }}
              ref={this.brookings}
            >
              falls/rises within 1ft
            </span>
            <br />
            <br />
            vaccine efficacy cannot be judged by putting people in a room
            because that would be proof again that spittle doesn't transmit
          </span>
          condensation rises
          <br />
          <a href="https://froth.app">Population</a>&nbsp;
          <a href="https://macrotrends.net/countries/USA/united-states/death-rate">
            stats
          </a>
          &nbsp; have been delayed for 1.5 months now to keep the big lie going
          <br />
          <br />
          Shouldn’t we be worried about dependence too? This is all happening so
          fast, except total population stats are delayed 1.5 months so far..,
          so that isn’t fast
          <br />
          <br />
          David Wildstein is so stupid has a "conservative" on his show saying
          we have to pay back debt, how? it is 13:1 debt:cash. You are so
          stupid. This would be illegal by precedence not just technically if
          the dollar was considered&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.foreignpolicy.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFP: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFP: false }),
                10000
              );
            }}
          >
            market-share
          </span>
          &nbsp; of an organization like I do
          <br />
          <br />
          <span
            ref={this.sanjay}
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightSanjay ? "white" : "",
              backgroundColor: this.state.highlightSanjay
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Isn’t it dangerous for Sanjay Gupta to mislead people saying it is
            remarkable that it was done when it was only skipped testing? That’s
            not remarkable in a good way or a recent triumph of medical science
            as he portrays. B-cells are fragile
          </span>
          <br />
          <br />
          "May be safer for&nbsp;
          <a href="https://humanharvest.info">vaccinated</a>&nbsp;people to
          travel," says Sanjay in March 2021, after prescribing&nbsp;
          <a href="https://moldmask.co">masks</a>
          <br />
          You have no proof that asymptomatic people have anything other than
          the&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.cold.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightCold: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightCold: false }),
                10000
              );
            }}
          >
            cold
          </span>
          &nbsp;using polymerase chain reaction, the alleged "gold standard."
          Gross negligence to&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.marx.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightMarx: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightMarx: false }),
                10000
              );
            }}
          >
            physics of epidemiology
          </span>
          <br />
          <br />
          your B-cells do it right away... it is a trade-off between the 0-9mo
          smell morbidity/dying and&nbsp;
          <a
            style={{
              border: "1px solid",
              color: "grey"
            }}
            href="https://www.immunology.org/public-information/bitesized-immunology/immune-dysfunction/b-cell-mediated-disease"
          >
            B-cell
          </a>
          &nbsp; oncogenesis/dying, I’m sure both are equally as likely..., but
          I like natural things. Takes some time for an infected person to
          gestate and become contagious + politifact says it requires spittle to
          travel which has been proven not to float&nbsp;
          <a
            style={{
              border: "1px solid",
              color: "grey"
            }}
            href="https://pubmed.ncbi.nlm.nih.gov/17542834/"
          >
            https://pubmed.ncbi.nlm.nih.gov/17542834/
          </a>
          &nbsp; so it is an&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.travellingIndividuals.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightTravellingIndividuals: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightTravellingIndividuals: false }),
                10000
              );
            }}
          >
            individual
          </span>
          &nbsp;decision.
          <br />
          <br />
          Sanjay Gupta says 85% effectivness in all vaccines/mRNA 2-3 weeks
          after, which is not surprising because that is how long it takes to
          make my own&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.host.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightHost: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightHost: false }),
                10000
              );
            }}
          >
            as well
          </span>
          <br />
          <a
            style={{
              border: "1px solid",
              color: "grey"
            }}
            href="https://wavv.art/forummN2OxZAJO3IEXZVNEPX3"
          >
            wavv.art/forummN2OxZAJO3IEXZVNEPX3
          </a>
          <br />
          Sanjay says he is amazed we could make 3 "vaccines" (grafts) that
          quickly, does he mean in its public health approval? Because it is not
          breaking (1-2 years) medical tech
          <br />
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.host.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightHost: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightHost: false }),
                10000
              );
            }}
          >
            TAKE OFF YOUR MASK
          </span>
          <br />
          doctors wouldn't misguide if US bonds weren't owned by genocidal
          China, to which Biden says, "Xi gets it." Gets what?
          <br />
          CNN says "hesitancy" is something they must "get around," like
          appropriate public health approval process undercut for the&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.bcell.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBcell: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBcell: false }),
                10000
              );
            }}
          >
            grafts
          </span>
          <br />
          <span
            ref={this.oldFluExclusion}
            style={{
              color: this.state.highlightOldFluExclusion ? "white" : "black",
              backgroundColor: this.state.highlightOldFluExclusion
                ? "rgb(170,100,205)"
                : "",
              transition: ".3s ease-out"
            }}
          >
            The virus is just as deadly as the flu... even if you could force
            people to&nbsp;
            <a
              style={{
                border: "1px solid",
                color: this.state.highlightOldFluExclusion ? "white" : "grey"
              }}
              href="https://foiegras.life"
            >
              risk
            </a>
            &nbsp;
            <a
              style={{
                border: "1px solid",
                color: this.state.highlightOldFluExclusion ? "white" : "grey"
              }}
              href="https://moldmask.co"
            >
              unforseen
            </a>
            &nbsp;
            <a
              style={{
                border: "1px solid",
                color: this.state.highlightOldFluExclusion ? "white" : "grey"
              }}
              href="https://humanharvest.info"
            >
              side-effects
            </a>
            &nbsp;to not be a slave by free-riding exclusion in the economy
            without visible symptoms/evidence.&nbsp;
            <a href="https://www.nwaonline.com/news/2020/dec/31/again-no-flu-deaths-reported/">
              Running out
            </a>
            &nbsp;of&nbsp;
            <a href="https://zippia.com/landlord-jobs/demographics/">
              old people
            </a>
            <br />
            <br />
            <a href="https://wavv.art/forumMqCyVEXOjfYPErd902Vp">
              wavv.art/forumMqCyVEXOjfYPErd902Vp
            </a>
            <br />
            given 2020 deaths are so abnormally low, but higher due to&nbsp;
            <a
              style={{
                border: "1px solid",
                color: this.state.highlightOldFluExclusion ? "white" : "grey"
              }}
              href="https://www.prb.org/countries-with-the-oldest-populations/"
            >
              old-age population
            </a>
            &nbsp;(not the&nbsp;
            <a
              style={{
                border: "1px solid",
                color: this.state.highlightOldFluExclusion ? "white" : "grey"
              }}
              href="https://www.cdc.gov/mmwr/volumes/70/wr/mm7003e2.htm"
            >
              96%-similar
            </a>
            &nbsp;to&nbsp;
            <a
              style={{
                border: "1px solid",
                color: this.state.highlightOldFluExclusion ? "white" : "grey"
              }}
              href="https://www.jstor.org/stable/resrep27830.25?seq=2#metadata_info_tab_contents"
            >
              Sars-Cov-1 virus
            </a>
            ), the other reason must be the fear instilled by Wolf Blitzer
            and&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.grandmaMentality.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightGrandmaMentality: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightGrandmaMentality: false }),
                  10000
                );
              }}
            >
              putting sick & old people together
            </span>
          </span>
          <br />
          <br />
          Would like to see a chart of population of people above 90 but
          the macrotrends.net/countries/USA/united-states/death-rate source is
          not updated, 1.5 months later than advertised (yearly, UN) so I
          imagine that isn’t either.
          <br />
          <br />
          CNN also says there are only 22 experts, I must note that this is the
          purported opinion of liars. You have a conflicted interest of experts
          there,&nbsp;
          <span
            ref={this.congressVsCongress}
            style={{
              color: this.state.highlightCVC ? "white" : "black",
              backgroundColor: this.state.highlightCVC
                ? "rgb(170,100,205)"
                : "",
              transition: ".3s ease-out"
            }}
          >
            I bet they would all vote to not bring bonds to half (for
            stress/prohibit settlement) of cash:debt levels as well because they
            want people to have cancer by interfering with their natural genesis
            of antibodies so they don’t have to pay social security from their
            already max-1:11 possible return on investment, while driving up the
            bill for medical invoices more.
            <br />
            <br />
            Why else would they be so reckless, without evidence and with such
            high survival/no-morbidity? This is textbook communism/corporatism
            for bonds and profit, not socialism. Socialism would reduce to
            capitalism without promises/with payout schedules, capitalism with
            promises/without payout schedules reduces into chaos/cross-party
            risk:[foreclosure wave, prepaid && mixed
            demand]/communism/corporatism evidently looking at the US/CNN unit,
            misleading people to their deaths. I bet as many people will die
            from rushed side-effects that would normally die from&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.oldFluExclusion.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightOldFluExclusion: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightOldFluExclusion: false }),
                  10000
                );
              }}
            >
              flu/covid
            </span>
            .
          </span>
        </div>
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Monopoly" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.MONOPOLY}
        >
          <div style={tweetsStyle}>
            also, ppp loans is an antitrust case, bootstrapping entrepreneurs
            are excluded, prices are fixed Insurance abet counterfeit
            dollar-shareholder right usurpation and force consumers to commit
            these crimes by being unable to attain these medical services
            without joining the pyramid scheme of crime
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            monopsony of retail space/labor/input, ignored request for service
            emails
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              width: "calc(100% - 20px)",
              maxWidth: "600px",
              transition: ".3s ease-in",
              color: this.state.highlightFintech ? "white" : "grey",
              backgroundColor: this.state.highlightFintech
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            <a href="https://wavv.art/forumndUyfK0JYWVglK4qa62R">
              wavv.art/forumndUyfK0JYWVglK4qa62R
            </a>
            <br />
            <span ref={this.fintech}>
              Allpoint, Greendot (& Heartland?) atm&nbsp;
              <a href="https://squatcommune.com">oligopoly</a>&nbsp;prevents me
              from extending payable services because it requires me to take
              counterfeit offers with cross-party down-payment
              malfeasant-jurisprudence risk in&nbsp;
              <span
                onClick={() => {
                  this.takingCredit.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightTakingCredit: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightTakingCredit: false }),
                    10000
                  );
                }}
                style={{
                  fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                  textEmphasis: "italics",
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
              >
                requiring that I accept credit to accept debit, and banks that
                cost $10/mo instead of ATM networks and Dwolla, Shazam & Galileo
                are U.S. only + no cash, every provider must provide option to
                disable credit-collusion [certainly not $75/mo startup
                mastercard]
              </span>
            </span>
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Monetary Inflation only happens quickly when debts are paid like
            Great Depression
            <br />
            stupid to have any finance, competing with consumers
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <a href="https://wavv.art/forumYpLlRfmzVVHxRSi7KWR0">
              wavv.art/forumYpLlRfmzVVHxRSi7KWR0
            </a>
            <br />
            <a href="https://wavv.art/forumDk8F0qsHuImA3ca57uq0">
              wavv.art/forumDk8F0qsHuImA3ca57uq0&nbsp;
            </a>
            <a href="https://wavv.art/forum8XjrcSJrbPkNPUqzeR5x">
              wavv.art/forum8XjrcSJrbPkNPUqzeR5x
            </a>
            <br />
            <a href="https://wavv.art/forumJdem5lb2P53ytIYHUJlW">
              wavv.art/forumJdem5lb2P53ytIYHUJlW
            </a>
            <br />
            <a href="https://wavv.art/forum8k3HLT6PwYMnXrhXsQTV">
              Rumson Pot Entrapment to Shoot-On-Site
            </a>
            <br />
            <a href="https://wavv.art/forumCNfCMTq3pfWeFrUUsM9L">
              wavv.art/forumCNfCMTq3pfWeFrUUsM9L
            </a>
            <br />
            <a href="https://wavv.art/forum8adEPBy05rX8IoDvoQYB">
              alcohol impairs motor always, not weed which is a performance
              enhancer for some
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=Gp5WEeQi6jE">
              2006 Geraldo Opium US-Afghanistan report
            </a>
            <br />
            <a href="https://wavv.art/forumDeaYpuCa0N0yIqAKqMYH">
              wavv.art/forumDeaYpuCa0N0yIqAKqMYH
            </a>
            <br />
            <a href="https://wavv.art/forumjHnjLh0PdHK71jKeBDBU">
              wavv.art/forumjHnjLh0PdHK71jKeBDBU
            </a>
            &nbsp; "The United States' decline" stated as intent of people means
            nothing
            <br />
            He means bond holders/ slave owners&nbsp;
            <a href="https://wavv.art/forumJuVk5CVuo4PpIesU2Qlz">
              wavv.art/forumJuVk5CVuo4PpIesU2Qlz
            </a>
            <img
              alt="defense of individual non-liability by association unless stated intent"
              style={{ height: "400px" }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/pwmdkft5plxmjyx/DefenseOfIndividual.png?dl=0"
              }
            />
            <br />
            <div
              style={{
                fontFamily: '"Hi Melody", sans-serif',
                color: "grey",

                width: "calc(100% - 20px)",
                maxWidth: "600px"
              }}
            >
              <a href="https://wavv.art/forumuZKbR4dhW5dYDMPrxhAU">
                violent-extremism
              </a>
              <br />
              anarchist, antigovernment extremist&nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.cease.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightCease: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightCease: false }),
                    10000
                  );
                }}
              >
                (election tech competition, bond vigilantees, anticompetitive)
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.POLLINGFRAUD.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightFlop: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightFlop: false }),
                    10000
                  );
                }}
              >
                (Trump flop)
              </span>
              <br />
              <br />
              you cannot claim someone can be violent for grievances without a
              previously-violent offense.&nbsp;
              <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
                Holy Christ
              </a>
              <br />
              <br />
              <span
                style={{
                  transition: ".3s ease-in",

                  color: this.state.highlightNRA ? "white" : "",
                  backgroundColor: this.state.highlightNRA
                    ? "rgb(170,100,205)"
                    : ""
                }}
                ref={this.nra}
              >
                Law-abiding can be asinine... Gun sales should be&nbsp;
                <a href="https://govtrackus.s3.amazonaws.com/legislink/pdf/stat/48/STATUTE-48-Pg1236.pdf">
                  registered
                </a>
                &nbsp;but no shoot first without intent + date + convicted of
                violence
              </span>
              <br />
              <div
                ref={this.defense}
                style={{
                  transition: ".3s ease-in",
                  color: this.state.highlightDefense ? "white" : "grey",
                  backgroundColor: this.state.highlightDefense
                    ? "rgb(170,100,205)"
                    : "",
                  fontFamily: '"Hi Melody", sans-serif',
                  width: "calc(100% - 20px)",
                  maxWidth: "600px"
                }}
              >
                COVID 19 Diagnosis without symptoms can be held under quarantine
                (or cause-favoritism) my ass
                <br />
                <br />
                Obstruction of justice unless duress that doesn't show a net
                negligence in another's harm
                <br />
                equal jurisprudence afterwards, without spite or qualified
                immunity, except for brandishing
              </div>
              <br />
              imo it only removes any liability protection of his
              advertisements, otherwise his commentary/good products is a public
              service
              <br />
              <br />
              but that should be even handed for any figure, regardless of what
              Delaware thinks they can get away with in terms of Human Rights
              Abuse
              <br />
              <br />
              defense of individual non-liability by association [of other
              individuals] unless stated intent of self or acknowledgement of
              organizational intent
              <br />
              <br />
              This FBI senate hearing official says they will be targeting
              anyone who likes the oath keepers or proud boys, who I am seeking
              information of their website stated intents rather than actions of
              its members. Looks like some chapters are&nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.royalty.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightRoyalty: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightRoyalty: false }),
                    10000
                  );
                }}
              >
                501c3
              </span>
              , so that's weird; get your story straight, Governor.
              <br />
              <br />
              In connection with the 6th is all [FBI] cares about;&nbsp;
              <span
                style={{
                  transition: ".3s ease-in",

                  color: this.state.highlightCityHall ? "white" : "",
                  backgroundColor: this.state.highlightCityHall
                    ? "rgb(170,100,205)"
                    : ""
                }}
                ref={this.cityhall}
              >
                not here to defend city hall buildings. They steal for their own
                protection, our reps (racially-motivated violent extremism) vs
                domestic terrorism vs academic vs legal
              </span>
              <br />
              <br />
              don't touch my stuff. "The United States' decline" stated as
              intent of people means nothing. He means bond holders/ slave
              owners
            </div>
            <br />
            <a href="https://wavv.art/forumV0cKS0LBcAVCNYwCASKq">
              wavv.art/forumV0cKS0LBcAVCNYwCASKq
            </a>
            <br />
            <a href="https://wavv.art/forumjcAzW2dy5QhEwpvp8E5m">
              wavv.art/forumjcAzW2dy5QhEwpvp8E5m
            </a>
            <br />
            <a href="https://wavv.art/forumDim2tow35OwiDRWOltIW">
              wavv.art/forumDim2tow35OwiDRWOltIW
            </a>
            <br />
            <a href="https://wavv.art/forumj07LxKWJCmOJJyRqtPaG">
              wavv.art/forumj07LxKWJCmOJJyRqtPaG
            </a>
            <br />
            <a href="https://wavv.art/forum0vBZijMK4x4VtCq1b2G8">
              wavv.art/forum0vBZijMK4x4VtCq1b2G8
            </a>
            <br />
            <a href="https://wavv.art/forumUttTsPXqpfMTUm59i0uj">
              wavv.art/forumUttTsPXqpfMTUm59i0uj
            </a>
            <br />
            <a href="https://wavv.art/forumlVJsnJWIze2xW6IT7gYQ">
              wavv.art/forumlVJsnJWIze2xW6IT7gYQ
            </a>
            <br />
            <a href="https://wavv.art/forumOZBsvHNJjyEvORXwHy3R">
              wavv.art/forumOZBsvHNJjyEvORXwHy3R
            </a>
            <br />
            <a href="https://wavv.art/forumNjqOMVBkAPvnkRndZcnh">
              wavv.art/forumNjqOMVBkAPvnkRndZcnh
            </a>
            <br />
            <a href="https://wavv.art/forumSPcWzET32uuUgtnQ43Gi">
              wavv.art/forumSPcWzET32uuUgtnQ43Gi
            </a>
            <br />
            <a href="https//wavv.art/forumsi2UUJphbODBvWuniTWG">
              wavv.art/forumsi2UUJphbODBvWuniTWG
            </a>
            <br />
            <a href="https://wavv.art/forumXYlMQr0kzcAp5VvGtxH2">
              wavv.art/forumXYlMQr0kzcAp5VvGtxH2
            </a>
            <br />
            <a href="https://wavv.art/forumiG3YJlFur8gEms6FJhW4">
              wavv.art/forumiG3YJlFur8gEms6FJhW4
            </a>
            <br />
            <a href="https://wavv.art/forumA7TodqbwpSFCo2iWFMPG">
              wavv.art/forumA7TodqbwpSFCo2iWFMPG&nbsp;
            </a>
            <br />
            <a href="https://wavv.art/forumpOYRNm6heVePfXKWqnX0">
              wavv.art/forumpOYRNm6heVePfXKWqnX0
            </a>
          </div>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <a href="https://wavv.art/forum6sY714uTNQJogsqUU5t1">
              wavv.art/forum6sY714uTNQJogsqUU5t1
            </a>
            <br />
            <br />
            My remedy of harm done, and to put the toothpaste back into the tube
            (repair depositary), would be to reverse all transations to
            cash:debt ratio at that time, so that all buyers pay what they
            should have paid if lenders were not able to contract an unrequited
            third party's money in the borrowers' consumers
            <br />
            <a href="https://wavv.art/forumOfLIgMkKt8BYOEoJCEmo">
              wavv.art/forumOfLIgMkKt8BYOEoJCEmo
            </a>
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Stimulus (ignoring harm done in price-inelasticity&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.inflation.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightInflation: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightInflation: false }),
                  10000
                );
              }}
            >
              inflation
            </span>
            , monetary inflation/involuntary servitude) cannot relieve anything
            if finance is banned
          </div>
          <br />
          <a
            style={{
              border: "1px solid",
              color: "grey"
            }}
            href="https://wavv.art/forumbNoJuNX58U3nX3dK5mPA"
          >
            wavv.art/forumbNoJuNX58U3nX3dK5mPA
          </a>
          <br />
          <br />
          You can lend to somebody, but don't expect to keep the borrowers'
          consumers' down payments or not be sued for stress and counterfeit.
          <br />
          <br />
          <span
            ref={this.gdp}
            style={{
              transition: ".3s ease-in",
              color: this.state.highlightGDP ? "white" : "",
              backgroundColor: this.state.highlightGDP ? "rgb(170,100,205)" : ""
            }}
          >
            <a href="https://www.investopedia.com/terms/p/priceelasticity.asp">
              Price-inelasticity
            </a>
            <br />
            <br />
            Investment methods - that isn't a violation of corporate equity and
            contract law there-prudently, in the way repossession in bankruptcy
            keeps the down payments is involuntary servitude of the borrower's
            customers by price, lost down payments & time lost - is available.
            <br />
            <br />
            <a href="https://wavv.art/forum4WxM6N6JYDuWx6Q9IqyB">
              wavv.art/forum4WxM6N6JYDuWx6Q9IqyB
            </a>
            <br />
            In order to remove cross-party risk from the investment, the payout
            to the investor needs to&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.fintech.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightFintech: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightFintech: false }),
                  10000
                );
              }}
            >
              WAIT FOR WHEN CUSTOMERS ARE WILLING AND ABLE
            </span>
            &nbsp;in royalty contracts w/max-profit, which I am &nbsp;
            <a href="https://carducci.sh">working</a>&nbsp;on that as well.
            seeking investors cause I have a lot going on&nbsp;
            <a href="https://vaults.biz">vaults</a>&nbsp;+&nbsp;
            <a href="https://scopes.cc">scopebook</a>
          </span>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            John Fund, national review, insider trading is only if you have
            hidden designs/test-results and close a trade.
            <br />
            <br />
            <span
              ref={this.fishInBarrel}
              style={{
                color: this.state.highlightFishInBarrel ? "white" : "grey",
                backgroundColor: this.state.highlightFishInBarrel
                  ? "rgb(170,100,205)"
                  : ""
              }}
            >
              This can be accomplished without compromising retail positions, by
              providing SEC with UUID for portfolios but require brokers to
              anonymize these trades so portfolio information cannot be compiled
              and traded against expiring options out of the money like&nbsp;
              <a
                style={{
                  border: "1px solid",
                  color: "grey"
                }}
                href="https://nationalsecuritycasino.com"
              >
                shooting fish in a barrel
              </a>
              .
            </span>
          </div>
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Not a Libertarian Hack
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <iframe
              title="randy ortin rko"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mFElmSV87pg"
            />
            <br />
            <img
              style={{ height: "400px" }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/o1a2npco584swxg/IMG_3268.png?dl=0"
              }
              alt="Ron Paul wants private banks, insurance, rentier-colonization, and prisoners’ dilemma duress-pooling instead of commodity sdr and it shows"
            />
            <br />
            sdr (security depository receipt)
            <br />
            live streamed from your local&nbsp;
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://vaults.biz"
            >
              vault
            </a>
            <br />
            they love rent and being colonized instead of letting trade settle
            at lower price
            <br />
            they love allowing&nbsp;
            <span
              ref={this.ronInsurance}
              style={{
                color: this.state.highlightRonInsurance ? "white" : "grey",
                backgroundColor: this.state.highlightRonInsurance
                  ? "rgb(170,100,205)"
                  : ""
              }}
            >
              insurance to&nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.insurance.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightPrisonersDuress: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightPrisonersDuress: false }),
                    10000
                  );
                }}
              >
                pool
              </span>
              &nbsp;their demand capacity and risk and instigating themselves to
              prisoners' dilemma of duress
            </span>
            <br />
            <div
              style={{
                fontFamily: '"Hi Melody", sans-serif',
                color: "grey",

                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",

                width: "calc(100% - 20px)",
                maxWidth: "600px"
              }}
            >
              <img
                alt="they love allowing others to go into debt, then the borrower getting to use the asset and charge them"
                style={{ height: "400px" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/pubarh5zthcb3i8/NonLibertarianDebt.png?dl=0"
                }
              />
              <img
                alt="they love rent and being colonized instead of letting trade settle at lower price"
                style={{ height: "400px" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/lb7fy13iuqa5qhr/NotLibertarianRent.png?dl=0"
                }
              />
              <img
                alt="they love allowing insurance to pool their demand capacity and risk and instigating themselves to prisoners' dilemma of duress"
                style={{ height: "400px" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/py86mb7fvqb0xk4/NotLibertarianInsurance.png?dl=0"
                }
              />
              <img
                alt="they love allowing insurance to pool their demand capacity and risk and instigating themselves to prisoners' dilemma of duress"
                style={{ height: "400px" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/pj8exndau26sbmi/NonLibertarianInsurance.png?dl=0"
                }
              />
            </div>
            <br />
            why are you hitting yourselves?
            <br />
            <br />
            <div
              style={{
                fontFamily: '"Hi Melody", sans-serif',
                color: "grey",

                flexDirection: "column",
                alignItems: "center",

                width: "calc(100% - 20px)",
                maxWidth: "600px"
              }}
            >
              "Conservatives" at CPAC are retarded, as they only harm themselves
              (and others), or colonizers and have no demand or production in
              the trade in asking for Stimulus for usurped invoice contracts and
              rent instead of allowing prices to be found by natural capacity,
              made from diluting their own dollars and others' by unrequited
              share-split.
              <br />
              <br />
              This deal is involuntary when the first charge of interest is
              passed to the consumer - the deals you solicit must be a
              business-line royalty contract w/max-profit to be compliant with
              Amendment 13
              <br />
              <br />
              Is this scalping abodes/storefronts, for no productive utility
              added? We call that colonialism or involuntary servitude
            </div>
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Attn: Constitutional-Patriot party - you do not need to pay your
            debts
          </i>
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            According to Greg Kelly the Constitutionalist Patriot party is
            forthcoming, I can only assume this bastardizes the involuntary
            servitude/free-rider line to support what I abject herein or it is
            blatant plagerism. If founded by Trump, it would be fraud as well
            since he has spent more than anybody thinks
            <br />
            <a href="https://wavv.art/forumEMwj7hKqQ2mZu5poZdPk">
              wavv.art/forumEMwj7hKqQ2mZu5poZdPk
            </a>
          </div>
          <br />
          <i
            ref={this.baltimore}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",

              transition: ".3s ease-in",

              color: this.state.highlightBaltimore ? "white" : "",
              backgroundColor: this.state.highlightBaltimore
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Defunct non-profit, ensure the mission is upheld by all people
            beyond Baltimore and regardless of their power or ability
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Initially, on November 5th, 2012, instead of voting for Obama or
            Mitt after the crash who just fought fire with more fire after the
            foreclosure crash, to which borrowers’ customers are still due
            remediation, walked into Baltimore City to form a nonprofit. Little
            did he know at the time and for years after, that the ownership
            devolves to the colonists in power instead of the people, if the
            organizational&nbsp;
            <span
              onClick={() => {
                this.royalty.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightRoyalty: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightRoyalty: false }),
                  10000
                );
              }}
              style={{
                color: this.state.highlightRoyalty ? "white" : "",
                backgroundColor: this.state.highlightRoyalty
                  ? "rgb(170,100,205)"
                  : "",
                transition: ".3s ease-out"
              }}
            >
              legal structure
            </span>
            &nbsp;is taken over the initial mission to create a “mock direct
            democracy for the citizens of Baltimore and beyond.”&nbsp;
            <a href="https://www.youtube.com/watch?v=12V9rV_bp_M">
              (Sortition, Ben)
            </a>
            <br />
            <a href="https://johnshopkins.academia.edu/NickCarducci">
              johnshopkins.academia.edu/NickCarducci
            </a>
          </div>
          <br />
          I have had some douche reach out to help to restructure (to be clear,
          this is easy) my files and act like a founder then un-linkedin me
          <br />
          I have had Biden's michael antiporta's linkedin lackidasical
          installation of login.gov local-ID api for better elections -connect
          do the same
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            JHU failed me in financial markets & institutions, & macroeconomics,
            because I didn't agree. Failed game theory too but that may have
            been a sexist thing
            <br />
            <br />I understand more than everyone or those that understand more
            are EVIDENTLY GUILTY OF INTENTFUL PARTY TO THE HARM SITED HEREIN
          </div>
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Untenable: Non-starter, unproductive
          </i>
          <br />
          <i
            ref={this.technicallyIllegal}
            style={{
              fontSize: "12px",
              color: "grey",
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            <span aria-label="hazard" role="img">
              🚧
            </span>
            <span aria-label="stop" role="img">
              🛑
            </span>
            &#9888;and technically&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.fintech.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightFintech: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightFintech: false }),
                  10000
                );
              }}
            >
              illegal
            </span>
            &#9888;
            <span aria-label="stop" role="img">
              🛑
            </span>
            <span aria-label="hazard" role="img">
              🚧
            </span>
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Kudlow - "don't let anyone tell you not to invest. we are on the
            precipice of a huge bull market." is he a Certified Financial Goober
            giving advice to millions on tv like that to buy?
            <br />
            <br />
            Ben Carson is&nbsp;
            <a href="https://vianickcarducci.medium.com">retarded</a>, ownership
            is not borrowing. Housing dept fraud. Stop cheating, working with
            Larry Kudlow to superimpose your intents. Kudlow likes stocks
            because he likes "growth" of money/market/vault-share, whilst Carson
            calls the counterfeit mortgages, ownership, which requires the
            growth of money/market/vault-share: without&nbsp;
            <a href="https://wavv.art">your vote for donation or trade</a>; to
            which THEY KNOW the growth of dollarmoney/market/vault-share does
            nothing except harm by price
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            from Varo to me
            <br />
            Looking to make a big purchase but don’t want to spend the cash
            today? With Zebit*, you can access credit of up to $2,500 to shop
            with, and pay over time. Better yet, there are no hidden fees and no
            membership fees.
            <br />
            Me to Varo,
            <br />
            This is not your customers’ money to promise to you. Any purchases
            will have to be renumerated for money usurped. Just because it is a
            contract doesn’t mean it isn’t counterfeit. Please make relevant
            changes to not be liable for damages of stress beyond the said
            reconciliation.
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              minWidth: "100px",
              maxWidth: "500px"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%"
              }}
              alt={
                `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                `(I did this in comparative law/spite knowing it is all going to be ` +
                `reversed to the point of no action be taken with malintent to not compete ` +
                `for, but with, customers of businesses not creditors (not a customer, a ` +
                `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                `consumers' down-payments and rights])`
              }
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
              }
            />
          </div>
          <br />
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            ---- ---- response to Lendio
            <br />
            We could use the help.
            <br />
            <br />
            Me
            <br />
            Not help if invoices and rent/insurance&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.insurance.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightPrisonersDuress: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightPrisonersDuress: false }),
                  10000
                );
              }}
            >
              non-certificate
            </span>
            &nbsp;broker on a classified ads site is illegal, since price-would
            not be prohibited in being elastic. In either case, you have no
            right to promise Lendio my money, you scourge
            <br />
            <a href="https://wavv.art/forumHuT6DNKNABiHUPM8JgBz">
              wavv.art/forumHuT6DNKNABiHUPM8JgBz
            </a>
            <br />
            <br />
            Me to Lendio
            <br />
            Can you just invest in a business-line instead of promising a
            third-party’s money to yourself? When you inevitably repossess
            collateral, the borrowers’ customers pay the down payment you usurp,
            unbeknownst to them. Current debt:cash is 13:1. You couldn’t do this
            with corporate shares!
          </div>
          <br />
          Supply-side colonialism
          <br />
          By not being a consumer nor producer; end-producer of competition in
          producing not buying then selling
          <br />
          <br />
          We want people to own things
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Letter to the "Small Business Administration"
          </i>
          <br />
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            SBA,
            <br />
            <a href="https://wavv.art/forum5LEZmTtTE1orAqJ1HrRC">
              wavv.art/forum5LEZmTtTE1orAqJ1HrRC
            </a>
            <br />
            Paycheck Protection Program is *free labor*, you are doing very
            little in way of making up for disenfranchising *bootstrapping
            entrepreneurs* and *labor*. I expect reparations for the damages to
            us that you’ve caused and continue to cause!
            <br />
            Nick Carducci.sh
            <br />
            SaverParty.xyz
            <br />
            Thumbprint.us
            <br />
            --
            <br />
            7322331085 Vision for Thumbprint.us
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            Automatic reply: PPP is illegal
            <br />
            Press Office
            <br />
            9:05 AM (9 hours ago)
            <br />
            to me
            <br />
            "Thank you for reaching out to the U.S. Small Business
            Administration. <br />
            This mailbox is for SBA-related media queries only"
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            strange name... how do you administer a business without interfering
            <br />
            <span
              ref={this.politics}
              style={{
                transition: ".3s ease-in",

                color: this.state.highlightPolitics ? "white" : "",
                backgroundColor: this.state.highlightPolitics
                  ? "rgb(170,100,205)"
                  : ""
              }}
            >
              rhetoric is for logic; to argue is to politic without force
              <br />
              <br />
              every issue in politics is a decision between a civil right and a
              special interest; a "political&nbsp;
              <span
                onClick={() => {
                  this.desist.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightDesist: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightDesist: false }),
                    10000
                  );
                }}
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
              >
                decision
              </span>
              " can be described as the latter or a campaign decision
            </span>
            <span
              style={{
                fontFamily: '"Hi Melody", sans-serif',

                width: "calc(100% - 20px)",
                maxWidth: "600px"
              }}
            >
              (My letter)
              <br />
              I am part of the press for my sites, I am distributing these
              critiques with the intention of taking you to an impartial court
              for due justice.
              <br />
              <br />
              Fraud for invoices and rental-colonialists prohibiting
              price-elasticity.  Debt is 12 times money, the usurped contract
              rights are illegal in themselves and only deserve to return down
              payments to borrowers' customers' regardless of the harm done in
              opportunity cost of the non-borrower, and mistreatment of
              splitting procedure for dollars and corporate shares, and the
              founding on the dollar by force in&nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.IRS.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightIRS: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightIRS: false }),
                    10000
                  );
                }}
              >
                asset confiscation
              </span>
              , but these programs are obviously to not let lenders lose.
              <br />I am publishing this on saverparty.xyz and telling people to
              short the treasury and all lenders as well as treasury share stock
              before&nbsp;
              <a href="https://nationalsecuritycasino.com">
                Boeing dropped "due to covid."
              </a>
              &nbsp;&nbsp;Correlation begs the accusation for an apparent lie
              and conspiracy to hide information from people who look at
              price/book or earnings.
              <br />
              Nick Carducci.sh
              <br />
              -- <br />
              7322331085
              <br />
              Vision for www.thumbprint.us
              <br />
              rapport.news
            </span>
            <br />
            <br />
            listening to a rocket mortgage ad now and says they can "increase
            the seller's confidence in you [by increasing your credit]," but why
            do they think they can own you like that instead of a business-line
            and not have to wait for a customer. why shouldn't the government
            have to wait for a customer
            <br />
            People lash out at each other when they are powerless to their
            controllers
          </div>
          <div
            ref={this.covidrelief}
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                width: "100%"
              }}
            >
              <span
                onClick={() =>
                  this.setState({
                    utahVsHouston: !this.state.utahVsHouston
                  })
                }
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  borderLeft: "1px solid blue",
                  borderBottom: "1px solid blue",
                  zIndex: "1",
                  position: "absolute",
                  backgroundColor: "white",
                  right: "0px"
                }}
              >
                {!this.state.utahVsHouston ? "Houston" : "Utah"}
              </span>
            </div>
            <div
              style={{
                position: "relative",
                height: "360px",
                overflowX: "auto",
                overflowY: "hidden",
                width: "100%"
              }}
            >
              <div
                style={{
                  overflowX: "auto",
                  overflowY: "hidden",
                  width: this.state.utahVsHouston ? "640px" : "0px",
                  height: "360px",
                  position: "absolute",
                  backgroundColor: "white"
                }}
              >
                <a
                  href="https://www.bitchute.com/video/jTK5UV1jqa2l/"
                  style={{
                    position: "absolute",
                    backgroundColor: "white"
                  }}
                >
                  https://www.bitchute.com/video/jTK5UV1jqa2l/
                  <span style={{ color: "grey", textDecoration: "none" }}>
                    &nbsp; : minute 4
                  </span>
                </a>
                {/*<iframe
                  width="640"
                  height="360"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    width: "640px"
                  }}
                  src="https://www.bitchute.com/embed/jTK5UV1jqa2l/"
                  title="https://www.bitchute.com/embed/jTK5UV1jqa2l/"
                ></iframe>*/}
              </div>
              <div
                style={{
                  overflowX: "auto",
                  overflowY: "hidden",
                  width: !this.state.utahVsHouston ? "640px" : "0px",
                  height: "360px",
                  position: "absolute",
                  backgroundColor: "white"
                }}
              >
                <a
                  href="https://www.bitchute.com/video/jTK5UV1jqa2l/"
                  style={{
                    position: "absolute",
                    backgroundColor: "white"
                  }}
                >
                  https://youtu.be/P-jl3qo8jhE
                  <br />
                  <span
                    style={{
                      color: "grey",
                      textDecoration: "none",
                      width: "20px"
                    }}
                  >
                    This closed hospital was given
                    <br /> funds because it owes in back taxes
                  </span>
                </a>
                <iframe
                  width="640"
                  height="360"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    width: "640px"
                  }}
                  src="https://www.youtube.com/embed/P-jl3qo8jhE"
                  title="https://www.youtube.com/embed/P-jl3qo8jhE"
                ></iframe>
              </div>
            </div>
            <a
              ref={this.colonization}
              href="https://foiegras.life"
              style={{
                transition: ".3s ease-in",

                color: this.state.highlightColonization ? "white" : "",
                backgroundColor: this.state.highlightColonization
                  ? "rgb(170,100,205)"
                  : ""
              }}
            >
              underserved is the claims of supply-side colonists
              <br />
              forgivable loans means more stealing of equity to help inevitable
              impossibility by unrequited dollar-owner waged in counterfeit
              contract refusal
            </a>
            <br />
            Debt clock
            <br />
            13:1
            <br />
            reconciliation is not operating...
            <br />
            <span
              ref={this.gdp1}
              style={{
                transition: ".3s ease-in",

                color: this.state.highlightGDP ? "white" : "",
                backgroundColor: this.state.highlightGDP
                  ? "rgb(170,100,205)"
                  : ""
              }}
            >
              &nbsp; m1v1===m2v2===GDP means that v1 is made up&nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.trueGDP.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightTrueGDP: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightTrueGDP: false }),
                    10000
                  );
                }}
              >
                &nbsp;and GDP is mostly debt
              </span>
            </span>
            <br />
            <a
              href="https://froth.app"
              style={{
                padding: "2px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textDecoration: "none",
                position: "relative",
                height: "min-content",
                borderTop: "2px dotted black",
                borderBottom: "1.5px dotted black",
                width: "max-content"
              }}
            >
              <img
                style={{ width: "60px", height: "auto" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/u9kahqiqiiqse5t/froth%20logo300150.png?dl=0"
                }
                alt=""
              />
              froth.app
            </a>
            &nbsp;
            <div
              style={{
                fontFamily: '"Hi Melody", sans-serif',

                width: "calc(100% - 20px)",
                maxWidth: "600px"
              }}
            >
              weed/pharmaceuticals is a currency competitor
              <br />
              <a href="https://wavv.art/forumeAjLbTpdQ2N6rOh2lNkD">
                wavv.art/forumeAjLbTpdQ2N6rOh2lNkD
              </a>
              <br />
              <a href="https://wavv.art/forumhotkZrqDfXFbouxqqld8">
                wavv.art/forumhotkZrqDfXFbouxqqld8
              </a>
              <br />
              is it a performance enhancer or bad for you? It makes work easy
              like small doses of cocaine does in adderall, but it does not
              dehydrate you. It was scary the first night I did it, and it can
              improve your lung strength since it supposedly comresses your
              alveoli, as higher altitude training does? I would give creedence
              to any dysregulation during a formative-biological process, but I
              am a frequent user since 17. It was initially illegal to
              monopolize the paper industry, not personal liberty
              <br />
              <br />
              If&nbsp;
              <span
                style={{
                  transition: ".3s ease-in",

                  color: this.state.highlightFlag ? "white" : "",
                  backgroundColor: this.state.highlightFlag
                    ? "rgb(170,100,205)"
                    : ""
                }}
                ref={this.flag}
              >
                Merrick Garland
              </span>
              &nbsp;is the US' lawyer, I am the peoples'
              <br />
              The US is not the enemy; bold-holders &&nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.IRS.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightIRS: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightIRS: false }),
                    10000
                  );
                }}
              >
                IRS
              </span>
              &nbsp;are (if slave-owners, thieves are)
              <br />
              Klobuchar cares more about paydays for entrepreneurs than copycats
              (no reward)
              <br />
              “If there is conflict of interests they will not be able to
              investigate.” Who will investigate when the government is involved
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "6px"
                }}
              >
                1
              </span>
              <br />
              If Garland cares about justice he would realize cancelling debt is
              just bailing out lenders at a time when they know they cannot gain
              the money fairly when there is 12x debt than money
              <br />
              <br />
              drives a person crazy, into isolation and drug-abuse
              <br />
              <br />
              you cannot expect people to live off the streets if there is not
              enough money for the obligations, lease-colonists are allowed to
              &nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.insurance.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightPrisonersDuress: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightPrisonersDuress: false }),
                    10000
                  );
                }}
              >
                corner the market
              </span>
              &nbsp; and insurance-duressments are allowed to sell by prisoners'
              dilemma to keep up with the pooled price or counterfeit-promise of
              invoice
              <br />
              <br />
              promising assets or money is just the same as stealing it because
              there is the option to sell profit-share without equity/1:1
              voting-rights by royalty-contract with max-profit, disbursed upon
              sale or proprietorship/corporate withdrawal - and doing on a whole
              person instead of a business-line means their spending-power is
              due, for what? That becomes a scenario of a prisoners' dilemma
              too, let alone the counterfeiting in-pricing
              <br />
              <br />
              <span
                ref={this.capitalGains}
                style={{
                  fontWeight: "bolder",
                  fontSize: "6px"
                }}
              >
                1
              </span>
              <span
                style={{
                  transition: ".3s ease-in",

                  color: this.state.highlightCapitalGains ? "white" : "",
                  backgroundColor: this.state.highlightCapitalGains
                    ? "rgb(170,100,205)"
                    : ""
                }}
              >
                (inheritance, gift, large item sales and capital gains tax is an
                issue for antitrust)
              </span>
            </div>
          </div>
          <br />
          <span
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            84% stocks owned by top 10%
            <br />
            <br />
            top 40% own IRA
            <br />
            <br />
            40% are unemployed (2.7k phone-survey + exhausted + disabled +
            on-srike/bargaining) or retired
            <br />
            <br />
            buying property to rent is colonialism, the first of its&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.marx.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightMarx: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightMarx: false }),
                  10000
                );
              }}
            >
              kind
            </span>
            <br />
            <br />
            <span
              style={{
                transition: ".3s ease-in",

                color: this.state.highlightConcious ? "white" : "",
                backgroundColor: this.state.highlightConcious
                  ? "rgb(170,100,205)"
                  : ""
              }}
              ref={this.concious}
            >
              only I have to provide a stream of concious to my open designs to
              trade, which I do anyway for copyright
              <br />
              <br />
              scrutiny of me telling my grandma to sell apartment building as
              she was already having trouble maintaining is disproportionate
              because I am Polish-Italian American male & that I won't sell out
              (except everything except thumbprint.us web-app on
              linkedin.com/in/nickcarducci facebook.com/nick.carducci, invest
              today!)
            </span>
          </span>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            National Science Foundation plagerizes Nick Carducci
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            I have a feeling I am about to be plagiarized by you. Why work with
            me when you can claim it is not creative and do it yourself? Well
            that means it would have been done already. I am the first to make
            the&nbsp;
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://www.academia.edu/45132997/Written_for_National_Science_Foundation_Project_Pitch"
            >
              circular-magnetic engine
            </a>
            &nbsp; design. Do not plagiarize me Nick Carducci.sh
            <br />
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://magnate.company"
            >
              magnate
            </a>
            <br />
            <br />
            Christina, Is it not creative, original or transformative? Because
            it is creative, it is original, and it can transform the entire
            energy industry. Is this because of my stance on legal issues? My
            gender,[ age,] or skin color?&nbsp;
            <span style={{ textDecoration: "underline" }}>
              if it is easy to do, why is it not done
            </span>
            ? Nick Carducci.sh
            <br />
            <br />
            <div
              style={{
                padding: "10px 20px",
                border: "1px dotted",
                fontFamily: '"Hi Melody", sans-serif',
                color: "grey",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
                width: "calc(100% - 40px)",
                maxWidth: "600px"
              }}
            >
              <span
                ref={this.nsfFraud}
                style={{
                  transition: ".3s ease-in",
                  color: this.state.highlightNSFFraud ? "white" : "",
                  backgroundColor: this.state.highlightNSFFraud
                    ? "rgb(170,100,205)"
                    : ""
                }}
              >
                Dear Nicholas,
              </span>
              <br />
              Thank you for submitting your company's Program Pitch to America's
              Seed Fund powered by the National Science Foundation.
              <br />
              <br />
              Upon reviewing your submitted Project Pitch, I regret to inform
              you that you are not invited to submit a full proposal to the NSF
              SBIR/STTR Phase I program.
              <br />
              <br />
              "The proposed project does not appear to focus on a technical
              innovation that is creative, original or potentially
              transformative."
            </div>
            <br />I also invented the&nbsp;
            <a href="https://projects.invisionapp.com/share/RSBG9X06H#/screens/226631196">
              DayClock
            </a>
            , if Apple Watch uses it they owe me royalty since I cannot afford
            the patent fees
            <br />
            <div style={{ position: "relative" }}>
              <img
                style={{ height: "auto", width: "100%" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/2s2hbhlyntj4rbg/Screen%20Shot%202021-02-27%20at%2010.55.36%20AM.png?dl=0"
                }
                alt="https://www.dl.dropboxusercontent.com/s/2s2hbhlyntj4rbg/Screen%20Shot%202021-02-27%20at%2010.55.36%20AM.png?dl=0"
              />
            </div>
            <br />
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://wavv.art/forumqWvK2fk3GcFligVsTZ0f"
            >
              wavv.art/forumqWvK2fk3GcFligVsTZ0f
            </a>
          </div>
          <i>banned critical investigation</i>
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            nancy pelosi immigration
            <br />
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            If you look at P in GDP as a variable, it is 1 and C + I + G +&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.gdp.current.scrollIntoView("smooth");
                this.props.pauseScroll();

                this.setState({ highlightGDP: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightGDP: false }),
                  10000
                );
              }}
            >
              NE
            </span>
            is .01
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            HOMELESS IS NOT BECAUSE OF MENTAL HEALTH IT IS BECAUSE OF MORTGAGES,
            PROPERTY TAX, RENTIERCOLONIALISM & OTHER FINANCIAL COSTS
            <br />
            <a href="https://wavv.art/forumVdJokbkLJWv5LF37ARmq">
              wavv.art/forumVdJokbkLJWv5LF37ARmq
            </a>
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Tim Cook should be resign
            https://jscholarship.library.jhu.edu/handle/1774.2/36569 iSeeYou:
            Disabling the MacBook Webcam Indicator LED iSeeYou: Disabling the
            MacBook Webcam Indicator LED jscholarship.library.jhu.edu The
            ubiquitous webcam indicator LED is an important privacy feature
            which provides a visual cue that… (you can shut off power but they
            aren't open source) If they cared they would put input in control
            panel. this OS is out of wack to the advertised goal.
            <br />
            <br />
            In contrast with other companies like the above, toting privacy
            these chats ACTUALLY retain end-to-end encryption when backed up (in
            the cloud), keyBox for your first device, share your box & open
            thread + children-document&nbsp;
            <a href="https://vianickcarducci.medium.com/im-on-the-blockchain-742e3702721">
              keys with your accounts' keys
            </a>
            . To access your boxes on the cloud (a) Never destoy this device (b)
            1. Click the button. 2. Visit your original device. 3. Then, come
            back. 4. Never destroy the auxilliary device. or (c) 1. Save the key
            in a file, then drop it into a new device.
            <br />
            <br />
            <a href="https://wavv.art/forumaQspKZdVsS59uV3TNkfI">
              wavv.art/forumaQspKZdVsS59uV3TNkfI
            </a>
            <br />
            this satisfies both Article 3;3 for Amendment 1 by way of privacy
            for the unconvicted & an intranet for the convicted, both accessed
            by state-issued govId (or source-able phone number)
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <a href="https://wavv.art/forumyaPOR5EzNIENE6dMU4UD">
              wavv.art/forumyaPOR5EzNIENE6dMU4UD
            </a>
            <br />
            Your power to prevent me from inclusion in the economy&nbsp;
            <a
              ref={this.decide}
              style={{
                transition: ".3s ease-in",

                color: this.state.highlightDecide ? "white" : "",
                backgroundColor: this.state.highlightDecide
                  ? "rgb(170,100,205)"
                  : ""
              }}
              href="https://micro-theory.com"
            >
              (free-riding, involuntary)
            </a>
            &nbsp;stops when the preventative measure is more harmful than
            making no changes, but especially since there is no proof of
            transmission virally and it takes 2-weeks to form antibodies just
            the same as catching covid & the VIRUS REQUIRES SOME TIME TO FORM IN
            THE HOST TO TRANSFER THROUGH TOUCH OILS/SWEAT/SPIT/SNEEZE and
            spittle has PROVEN to not float - and therefore the choice of
            prevention is due upon the patient for risking 6mo smell morbidity
            vs b-cell regulation
            <br />
            <br />- The questions are if covid floats by itself, can attach to
            floating oxygen, or only stick to oils/saliva; and what is not in
            question is that non-planar z-axis movement is the only way these
            move without a kinetic movement of a sneeze or cough. Heat might not
            need spittle to travel to form cold air clouds, but covid does to
            travel if it&nbsp;
            <a href="https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/#sources">
              cannot attach itself to oxygen
            </a>
            .
            <br />
            anyone that makes you wear a mask can be sued if you become sick for
            allowing this to fester, like Dr. Fauci: his institution was funded
            to experiment with it recklessly, and he gets a reward for his
            reaction to force mold to form on people's faces, enclosing moisture
            to fester the virus?
            <br />
            <br />
            "bail-out", "stimulus", "reconciliation" is fraud for
            lender-colonists. All Network TV as well as Newsmax say otherwise.
            <br />
            <div
              style={{
                position: "relative",
                width: "100%",
                minWidth: "100px",
                maxWidth: "500px"
              }}
            >
              <img
                style={{
                  height: "auto",
                  width: "100%"
                }}
                alt={
                  `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                  `(I did this in comparative law/spite knowing it is all going to be ` +
                  `reversed to the point of no action be taken with malintent to not compete ` +
                  `for, but with, customers of businesses not creditors (not a customer, a ` +
                  `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                  `consumers' down-payments and rights])`
                }
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
                }
              />
            </div>
            <br />
            <br />
            Now they are calling the dollar-split + unrequited borrowers’
            customers’ consent to trade and serve in contract, a reconciliation
            package at Newsmax, instead of fraud for invoices and
            rental-colonialists prohibiting price-elasticity: you need to be
            sued
          </div>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            {!this.state.facebookerror && (
              <iframe
                title="covid passports could devilver a 'summer of joy' bubble"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNJ.com%2Fposts%2F10158544839661234&width=300&show_text=true&height=444&appId"
                width="300"
                height="444"
                style={{
                  backgroundColor: "#3b5998",
                  border: "none",
                  overflow: "hidden",
                  width: "480px"
                }}
                onError={this.handleFacebookError}
              ></iframe>
            )}
          </div>
          The correlations to the election season is alarming
          <br />
          <br />
          PPP is&nbsp;
          <a href="https://www.researchgate.net/publication/344197041_FEC_government_spending_as_advertised_in_political_campaigns_as_free_to_even_the_beneficiary_when_actually_it_is_misleading_towards_indentured_servitude_heightened_cost_capacity_requires_dollar-split">
            free
          </a>
          &nbsp;labor
          <br />
          If there is a law of unequal justice, upholding that law is lawful? I
          think the laws have to be justice-oriented in order for the equal
          application of unequal laws to be applied.
        </div>
        <br />
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Education" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.EDUCATION}
        >
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightEducation ? "white" : "",
              backgroundColor: this.state.highlightEducation
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.education}
          >
            Education may help the individual when it is not done for everyone.
            The best move for people is in protecting their bargaining position
            <br />
            Two steps back for everyone, one step forward for one
            <br />
            <br />
            Education can be either a trade secret, stifle discovery, or speed
            up open source. 1/3 is bad, especially if it can be accomplished
            online&nbsp;
            <a href="https://en.m.wikipedia.org/wiki/Price_elasticity_of_demand">
              https://en.m.wikipedia.org/wiki/Price_elasticity_of_demand
            </a>
          </span>
        </div>
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Null Hypothesis" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.NULLHYPOTHESIS}
        >
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            ad seriatum
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <span
              style={{
                transition: ".3s ease-in",

                color: this.state.highlightBiden ? "white" : "",
                backgroundColor: this.state.highlightBiden
                  ? "rgb(170,100,205)"
                  : ""
              }}
              ref={this.biden}
            >
              Biden
            </span>
            &nbsp; gets it, I think covid hospitalizations have decreased 50% in
            the past month because he is in office
          </div>
          <br />
          <i
            ref={this.desist}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",

              transition: ".3s ease-in",

              color: this.state.highlightDesist ? "white" : "",
              backgroundColor: this.state.highlightDesist
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            cease and decist
            <br />
          </i>
          <div style={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              alt="https://www.dl.dropboxusercontent.com/s/y4q61y8m4tkxocr/ceaseAndDecist.jpg?dl=0"
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/y4q61y8m4tkxocr/ceaseAndDecist.jpg?dl=0"
              }
            />
            &nbsp;
          </div>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            What is not true (only permitted in cease & desist when verifiable),
            is not verifiable (evidence of truth)
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            “Damaging to say things before credible, democracy allows you to say
            whatever you want but proving it is different, Damaging to say
            things before credible, democracy allows you to say whatever you
            want but proving it is different, Damaging to say things before
            credible, democracy allows you to say whatever you want but proving
            it is different,” - Gov. Andrew Cuomo
            <br />
            {!this.state.facebookerror && (
              <iframe
                title="North Carolina woman allegedly used a $149,000 Covid-19 relief loan to purchase items at businesses... and multiple diamond [investments]"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FGOODHQ%2Fposts%2F10157982552613059&width=300&show_text=true&height=444&appId"
                width="300"
                height="444"
                style={{
                  backgroundColor: "#3b5998",
                  border: "none",
                  overflow: "hidden",
                  width: "480px"
                }}
                onError={this.handleFacebookError}
              ></iframe>
            )}
            <br />
            <br />
            <span
              onClick={() => {
                this.desist.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightDesist: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightDesist: false }),
                  10000
                );
              }}
              style={{
                fontWeight: "bolder",
                textDecoration: "underline",

                transition: ".3s ease-in",

                color: this.state.highlightCease ? "white" : "",
                backgroundColor: this.state.highlightCease
                  ? "rgb(170,100,205)"
                  : ""
              }}
              ref={this.cease}
            >
              In order to file a cease & desist
            </span>
            &nbsp;they have to prove it to&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.POLLINGFRAUD.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightFlop: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightFlop: false }),
                  10000
                );
              }}
            >
              stop opinion
            </span>
            &nbsp; and they required a court order to give up an audit. I am an
            election tech&nbsp;
            <a href="https://vianickcarducci.medium.com/im-on-the-blockchain-742e3702721">
              competitor
            </a>
            <br />
            <br />
            CNN reported CPAC survey that 55% of [a sample of] those at CPAC
            voted for Trump, and 77 WABC reported (a survey?) 97% “supported him
            as president” #polling
            <br />
            <br />
            <a href="https://wavv.art/oldBudget7ySOemzKPDtd0WZYqqix">
              wavv.art/oldBudget7ySOemzKPDtd0WZYqqix
            </a>
            <br />
            Wow CNN just clicked somebody they had for complaining about a Biden
            pick. Must be tough to get by their producers an idea unscreened and
            they interfered in the election & public opinion/detests
            <br />
            <br />
            Do you have proof that the virus is spread without symptoms? WNYC
            nope how many long haulers are there? Why is annual population stats
            late 2 months?
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            user acquiescence vs service
          </i>
          <br />
          <div
            ref={this.planetary}
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              transition: ".3s ease-in",
              color: this.state.highlightExperts ? "white" : "grey",
              backgroundColor: this.state.highlightExperts
                ? "rgb(170,100,205)"
                : "",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Planetary studies show obliquity of the earth’s rotation matches
            with the 41k-year cycle of lowering ice shelves and C02 release
            (edit: actually, combustion IS when CO2 is "released" from carbon),
            so this may be caused by the angle towards the sun. I’m sure
            the&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.nsfFraud.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightNSFFraud: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightNSFFraud: false }),
                  10000
                );
              }}
            >
              heat-locking of the C02
            </span>
            &nbsp; release compounds this phenomenon too, though
            <br />
            <br />
            <a href="https://www.carbonbrief.org/explainer-how-the-rise-and-fall-of-co2-levels-influenced-the-ice-ages?fbclid=IwAR1QS2_Akp2aZyTJuLVsFAVhPaxrBRG2BtRpyT8g55J8DtPXHBuKrtEtQeE">
               this article
            </a>
            &nbsp; touches on obliquity which is not spin but the axis spinning
            like a falling top/dradel, 41k years
          </div>
          <div
            ref={this.experts}
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px",

              transition: ".3s ease-in",

              color: this.state.highlightExperts ? "white" : "grey",
              backgroundColor: this.state.highlightExperts
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            "Behavior can reduce pain," says Vivek Murthy like a doctor telling
            you to stop doing something that hurts you
            <br />
            <br />
            All experts who are paid must not be listened to due to conflict of
            interests... congress asking people for more money by claiming
            bipartisanship is evidence of conspiracy. you have no proof people
            want that... all you are doing anyway is making the same services
            more expensive like&nbsp;
            <a href="https://foiegras.life">fattening a duck</a>&nbsp;for
            consumption in foiegras.life. Miss Levine keeps asking for funding
            DO IT yourself stop taking from us for no change except price
          </div>
          <br />
          loser---winner
          <br />
          <span
            ref={this.dispair}
            style={{
              color: this.state.highlightDispair ? "white" : "",
              backgroundColor: this.state.highlightDispair
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            Get the Luddites*!
            <br />
            "" Gaddafi*
            <br />
            on F. Morano show
            <br />
            for commodity security depositAry receipt, settled economy (need
            rePAIRation)
          </span>
          <br />
          <div
            style={{
              width: "50%",
              position: "relative"
            }}
          >
            <img
              alt=""
              style={{
                width: "70%",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/b7l2yt5wfpkc67o/RankChoiceImpediments.png?dl=0"
              }
            />
          </div>
          <br />
          I am confused if the spots after second, get added to second; or if
          the second choice of each individual is used and so on, and if there
          is a change then that means the person got the most bestest votes
          <br />I want to make toms shoes for phones with torus electron
          rim&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.nsfFraud.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightNSFFraud: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightNSFFraud: false }),
                10000
              );
            }}
          >
            magnate.company
          </span>
        </div>
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Securities Fraud" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.SECURITIESFRAUD}
        >
          <div
            ref={this.varney}
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightVarney ? "white" : "grey",
              backgroundColor: this.state.highlightVarney
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            "shares of Rubix worth $xxx" - a lie, that is only the last trade,
            not the worth of every share if diluted, surely
            <br />
            <br />
            G-d damnit Varney & co. is a clown show, stop calling frauds a
            bail-out & can you cite who sold (last trade) or who is in control
            of bid-ask spread instead of passing off what you suspect as
            causation when you can see the primary-source data
          </div>
          <br />
          unequal application of the law is apparent in profiled portfolio data
          share, to which 13d is a legislative action but protection is forgone
          for retail in unecesary third party data share. By government
          malfeasance and neglect the&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.UUID.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightUUID: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightUUID: false }),
                10000
              );
            }}
          >
            UUID
          </span>
          &nbsp;being the key to the profile.
          <br />
          <br />
          Savers are disenfranchised by current&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.fintech.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFintech: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFintech: false }),
                10000
              );
            }}
          >
            fintech
          </span>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Unemployment is 40% of people!! Some people work for dollars from
            another market, I work for market share for IP & waiting for
            merchant service that deals without credit
          </div>
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            It’s illegal because it can compete with the dollar as currency
          </i>
          Performance enhancer or monopsony by government/lobbyists?
          <br />
          <br />
          I interpret that as: meeting the right to own property halfway, and
          prescriptions, a method to keep people from saving in medicine rather
          than... numbers we were forced to use in 1932 by threat of jail and
          theft
          <br />
          <br />I am for 3% sales tax under $2k (with spoofable geohash in
          transaction line for accounting software) unless it is not a
          long-standing operation I guess to account for shovelers and
          gift-trades, for services that cannot avoid the free rider problem
          like cops/plow/road/jail/court w/o conflict of interest bail.
          <br />
          Trade is exchange of benefits, not sharing of risk or an absolute
          placement of cost on a supplier and consumer
          <br />
          <br />
          <span
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightUUID ? "white" : "",
              backgroundColor: this.state.highlightUUID
                ? "rgb(170,100,205)"
                : ""
            }}
            ref={this.UUID}
          >
            UUID
          </span>
          &nbsp;is key of PII for trading. 13d gets protected
          <br />
          <br />
          Return is not valuation, S&P return is what all sales or all shares
          can get, not what last traded is. Government CANNOT claim negligence
          because of the removal of Glass Steagal mileading call of valuation
          that cannot pay out that amount as a "savings" value
          <br />
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            {!this.state.facebookerror && (
              <iframe
                title="23kg of cocaine money for police while college kids get it prescribed to concentrate"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnninternational%2Fposts%2F10159135278084641&width=300&show_text=true&height=444&appId"
                width="300"
                height="444"
                style={{
                  backgroundColor: "#3b5998",
                  border: "none",
                  overflow: "hidden",
                  width: "480px"
                }}
                onError={this.handleFacebookError}
              ></iframe>
            )}
            <br />
            Authorities in Germany and Belgium seized more than 23,000 kilograms
            (50,700 pounds) of cocaine, worth billions of dollars, in an
            international operation that resulted in one arrest, officials said
            Wednesday, calling it the largest amount of cocaine ever seized in
            Europe.
            <br />
            Would be a lot cheaper if it were legalized instead of cornered in
            the prescription market (adhd medicine...)
          </div>
          <br />
          splitting dollars of entrepreneurs and labor without consent for those
          who lost there jobs and businesses who lost income is
          anti-competitive&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.insurance.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPrisonersDuress: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPrisonersDuress: false }),
                10000
              );
            }}
          >
            insurance
          </span>
          &nbsp;fraud, regardless if the late population stats are abnormal
          (they aren't)
          <br />
          <br />
          landlord, lender and invoicer get the money right? That’s what the
          money is for - to bail them out
          <br />
          <br />
          a court would laugh a prosecutor out the room and demand that down
          payments be repaired for borrower's customers if it were corporate
          shares instead of dollars during reposession. current debt:cash is
          13:1. it is counterfeit in the contract
          <br />
          <div style={tweetsStyle}>
            if you want to lift people out of poverty efficiently, why would you
            dollar-split to pay for impractical promises at 12:1 by 2020
            ($82t:$6t)
          </div>
          <br />
          <div style={tweetsStyle}>
            VALUATION IS NOT WEALTH AND YOU ARE TAKING ADVICE ON A
            NEGLECTFUL-HOMOCIDAL NIH, GRAFTS CAUSE CANCER FROM B-CELL
            DYSREGULATION YOU SHOULD MAKE YOUR OWN ANTIBODIES AND MRNA;
            EXCLUSION CAN ONLY BE BASED ON SYMPTOMS & WITHOUT HARM TO NOT HAVE
            FREE-RIDER OF THE EXCLUDER AND INVOLUNTARY SERVITUDE OF THE ONE
            EXCLUDED
          </div>
          <br />
          <div style={tweetsStyle}>
            Hello ----, I will not harass and monopsonize the funeral
            arrangement market without being a buyer or seller preventing
            price-elasticity, especially when the contracts you broker aren't
            gift certificates or tranched having to withstand counter-party risk
            and therefore indentured servitude, on games without
            shuffled-randomness. Best, Nick Carducci.sh
          </div>
          <br />
          <div style={tweetsStyle}>
            the debt will never be paid and lenders will never stop lending to
            market-share/vault-share steward collusion. no amount of immigrants
            will bankrupt the country, but those bonds can never become cash at
            once . I want to live today.
          </div>
          <br />
          <div style={tweetsStyle}>
            if we banned prohibiting price-elasticity in debt, invoices and
            renting out more than one can use themselves prices would drop to
            1/12 what it is now (current cash:debt ratio)
          </div>
          <br />
          <div style={tweetsStyle}>
            The regulators have stated intent of wallstreetbets to spite short
            sellers generally, but the intent of trading against users is
            obvious in the way unique identifiers are not anonymized for 3
            months like those who own {">"}5%. FINRA is malfeasant, I have been
            notifying them for 2 years and now my Twitter is suspended
            <br />
            short would have to be between two individuals of the tap-out
            dissolution-kind, if without enabling of the counterfeit voting
            rights of the dollars
          </div>
          <br />
          Mortgages are illegal, you cannot promise somebody else's money&nbsp;
          <br />
          <br />
          CHINA DOESN'T ONLY EAT OUR LUNCH THEY OWN US, all bond holders are
          our&nbsp;<a href="https://nationalsecuritycasino.com">enemies</a>
          &nbsp;not our competitors
          <br />
          <br />
          <div
            ref={this.jan2018}
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightJan2018 ? "white" : "grey",
              backgroundColor: this.state.highlightJan2018
                ? "rgb(50,100,255)"
                : ""
            }}
          >
            I was shorting the car market, expecting all this inventory to flood
            the market after I ban debt. I took out a cash advance, bought my
            car lien out ($10k) and my business credit out ($3k) and the
            remaining $20k I had ($5k of my own)... won lost won lost. I need
            the car but do not want to pay for torts in advance and for others.
            Just pay for your new item and jail intentful and neglectful
            behavior. I also just don’t want to not follow through with my plan
            to roll out the crash with a $6k Ferrari
            <br />
          </div>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Legally, bonds go to zero because they are counterfeit against
            actual dollar owners
            <br />
            you cannot tell me you’re allowed to promise my money to your lender
          </div>
          <br />
          <br />
          the implication of the language "terms" vs "agreement" is explicit by
          itself, yet bankruptcy prosecutors lay blame on the acquiescing party,
          under duress and involuntarily serving/trade.
          <br />
          <span
            ref={this.Oooreily}
            style={{
              transition: ".3s ease-in",
              fontFamily: '"Hi Melody", sans-serif',
              color: this.state.highlightOooreily ? "white" : "grey",
              backgroundColor: this.state.highlightOooreily
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            <span
              style={{
                fontFamily: '"Hi Melody", sans-serif',
                lineHeight: "3"
              }}
            >
              If Iran earns in dollars from an indebted institution, is it their
              dollars?
            </span>
            <br />
            Nick Carducci.sh Fair Haven, NJ
            <br />
            <br />
            -------- Forwarded message ------- From: nick@thumbprint.us To:
            bill@billoreilly.com Sent: January 19, 2021 9:58 PM Subject:
            bankrupt the country? impossible
            <hr />
            you say immigrants will bankrupt the country when there is already
            11x debt than money.. no amount of debt will prevent investors from
            lending to bonds that are able to be cashed out. immigration and
            dilution of dollar-share will not bankrupt the country
          </span>
          <br />
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            "We short our police officers" - 2 ways to read that short utility
            or want future trade to&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.setState({ highlightVault: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightVault: false }),
                  10000
                );
                this.vault.current.scrollIntoView("smooth");
                this.props.pauseScroll();
              }}
            >
              free
            </span>
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            the first of its kind, dollars as shares, invoices are theft
            (counterfeit)
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Saver Party is the first political party to understand private
            intervention as a violation of civil rights as it is not an exchange
            of benefits but a sharing of risk or an absolute placement of cost
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            <a href="https://en.wikipedia.org/wiki/Mark_Levin">Mark Levin</a>
            &nbsp; hypocracy, "protected" pshh - so call the pool of people
            forced to buy-in to keep up with you colonizing a market you do
            nothing for except raise price absolutely. mind your business
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            One minute mark has a guest berate communism, next he advertises
            risk-sharing duress cost-pool, join or get left behind although if
            we all didn't we would get the same products at lower price.
            communism 101
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            reposession needs to give down payments back to borrower's customers
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Rep David Scott doesn't want people to share investment research
            with eachother, unless behind jim cramer's paywall robinhood ceo
            says people should have "trading abilities not based on how much
            money they have." So, like counterfeit?
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            trade secrets and abilities are ok if everyone is doing it
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            "robinhood was undercapitalized to allow users to do what they
            wanted to do"
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            "North Carolina woman allegedly used a $149,000 Covid-19 relief loan
            to purchase items at businesses... and multiple diamond
            [investments]"... The fed uses our equity-split on shares of
            corporate competitors of mine...
          </div>
          <br />
          <div
            ref={this.trust}
            style={{
              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightTrust ? "white" : "grey",
              backgroundColor: this.state.highlightTrust
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            gov gets free labor, greatest anti-trust case ever (steven moore is
            a duche)
            <br />
            Kudlow likes&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.gdp1.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightGDP: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightGDP: false }),
                  10000
                );
              }}
            >
              GDP
            </span>
            &nbsp; "growth but not Stimulus," your measure is off retard
            <br />
            you're only harming yourself and all of us
          </div>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            Kevin Hasset says money is something you can exchange for goods;
            more accruately, and to fix for split/reverse-split not-appropriated
            appropriately, it is&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.foreignpolicy.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightFP: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightFP: false }),
                  10000
                );
              }}
            >
              market-share
            </span>
            &nbsp;Kudlow calling him the smartest guy in the world means Kudlow
            isn't just retarded by his actions but tarded
            <br />
            <br />
            Hasset and Lindsay still looking at real growth instead of&nbsp;
            <a
              style={{
                border: "1px solid",
                color: "grey"
              }}
              href="https://froth.app"
            >
              gdp-new money-new debt/p
            </a>
          </div>
          <div
            style={{
              border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(50% - 20px)",
              position: "relative"
            }}
          >
            <img
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/phynud9bxdixwv0/Screen%20Shot%202021-03-04%20at%203.25.25%20PM.png?dl=0"
              }
              alt="ETF lending/stealing fraud for financial ends"
            />
          </div>
          <div
            style={{
              border: "3px solid blue",
              borderRadius: "10px",

              height: "min-content",
              width: "calc(50% - 20px)",
              position: "relative"
            }}
          >
            <img
              style={{
                width: "calc(100% - 26px)",
                height: "auto"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/x04xqvg1mjlbiis/IMG_0212.jpeg?dl=0"
              }
              alt="correlated time-series losses since domain purchase for scalable, circular-magnetic engine magnate.company"
            />
          </div>
          <span>
            Doubt about Racketeering
            <br />
            Fauci says take ANY Vaccine, even J&Johnson 1985 vintage
            <br />
            <a href="https://www.youtube.com/watch?v=pZsDzeJh4nU">
              organ-harvest/culture
            </a>
            <br />
            <iframe
              title="https://www.youtube.com/embed/pZsDzeJh4nU?start=34"
              src="https://www.youtube.com/embed/pZsDzeJh4nU?start=34"
            ></iframe>
            <br />
            that's like dollar beer or vampirism, guiding your punches
            <br />
            we can battle with any non-manmade virus&nbsp;
            <i
              style={{
                fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
                textEmphasis: "italics",
                fontWeight: "bolder"
              }}
            >
              I am sure
            </i>
          </span>
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.jewels.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightJewels: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightJewels: false }),
                10000
              );
            }}
          >
            Montana: The Family Jewels
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            old, obeise, sloppy-hicks to get their subsidies to pay property tax
            (you do not need stated intent to prosecute this number/accounting
            based conclusion)
            <br />
            <br />
            "On balance, good thing or bad thing?"
            <br />
            Prohibiting price-inelasticity
            <br />
            "Good," smiles&nbsp;
            <a href="https://en.wikipedia.org/wiki/David_Turk">David Turk</a>
            <br />
            <br />
            "The analysis revealed that NETL injected a total of $202 million
            directly into those states' economies in 2017. ... It was determined
            that NETL had a total estimated impact of $408 million on the three
            state economies in 2017."
            <br />
            NETL OVERVIEW - OSTI.GOV
          </div>
          <br />
          Without debt, the rich will want to&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.financeKills.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightFinanceKills: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightFinanceKills: false }),
                10000
              );
            }}
          >
            kill&nbsp;
            <a href="https://www.energy.gov/lpo/title-xvii/title-xvii-faqs">
              us
            </a>
          </span>
          <br />
          <br />
          "In a free market the government does not sanction corporations,
          therefore there are no corporations in a free market."
          <br />
          <br />
          Existing within corporations/debt, instead of a market/vault/currency
          stewardship purveying royalty-contracts w/max/profit&nbsp;
          <a href="https://vaults.biz">vaults.biz</a>
          <br />
          <br />
          <a href="https://www.sec.gov/fast-answers/divisionsmarketregmrexchangesshtml.html">
            SEC
          </a>
          &nbsp;allows you to go public but you pay a Double-Tax on Income
          (threatened-upon us by not price-prisoners’ dilemma duress pooling but
          literal&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.IRS.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightIRS: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightIRS: false }),
                10000
              );
            }}
          >
            jail/confiscation in 1937
          </span>
          )
          <br />
          <br />
          Insightful and inciteful are pronounced the same
          <br />
          lunatics by mooney
          <br />
          mortgages are deathcontracts
          <br />
          in the Latin
          <br />
          when we found numbers
          <br />
          <a href="https://micro-theory.com">accountants</a>,&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.citadel.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightCitadel: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightCitadel: false }),
                10000
              );
            }}
          >
            bookies
          </span>
          , &<a href="https://nationalsecuritycasino.com">scalps</a>
          <br />
          <br />
          <a href="https://en.wikipedia.org/wiki/Barnburners_and_Hunkers">
            precedence
          </a>
          &nbsp;can be&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.nra.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightNRA: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightNRA: false }),
                10000
              );
            }}
          >
            asinine
          </span>
          <br />
          <a
            style={{
              transition: ".3s ease-in",

              color: this.state.highlightFTC ? "white" : "",
              backgroundColor: this.state.highlightFTC ? "rgb(170,100,205)" : ""
            }}
            ref={this.ftc}
            href="https://www.ftc.gov/tips-advice/competition-guidance/guide-antitrust-laws/antitrust-laws"
          >
            anticompetitve-cornering of assets as "state property"
          </a>
          &nbsp; is a&nbsp;
          <a href="https://nationalsecuritycasino.com">
            jurisprudential, national-security issue
          </a>
          <br />
          <br />
          Circle-back Psaki thinks a diplomatic-immunity/expiration-limitation
          exists in an actual court of law
          <br />
          <br />
          she "doesn't&nbsp;
          <a href="https://www.researchgate.net/publication/344197041_FEC_government_spending_as_advertised_in_political_campaigns_as_free_to_even_the_beneficiary_when_actually_it_is_misleading_towards_indentured_servitude_heightened_cost_capacity_requires_dollar-split">
            charge for cold antibody PCR tests," is a lie
          </a>
          <br />
          <br />
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.baltimore.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBaltimore: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBaltimore: false }),
                10000
              );
            }}
          >
            copyright
          </span>
          &nbsp; so on lock it is an entire market, government user competing
          with many many many advantages
          <br />
          <br />
          but the niche is the directory not just a nationalistic vibe
          <br />
          positivity (as a grade) for markets is&nbsp;
          <a href="https://wavv.art/forumSPcWzET32uuUgtnQ43Gi">
            efficiency, not price
          </a>
          <br />
          THIS IS MY COMMUNITY NAVIGATOR, CUNT
          <br />
          <br />
          <div style={{ flexWrap: "wrap", width: "100%", display: "flex" }}>
            <div
              style={{
                width: "100%",
                position: "relative"
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/5n1g1t1yh2xyl0r/Screen%20Shot%202021-03-02%20at%2011.27.15%20PM.png?dl=0"
                }
                alt="PPP lending/stealing fraud for financial ends"
              />
            </div>
          </div>
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <span
              style={{
                fontFamily: '"Pacifico", sans-serif',
                textDecoration: "underline"
              }}
              onClick={() => {
                this.covidrelief.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightCovidRelief: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightCovidRelief: false }),
                  10000
                );
              }}
            >
              covid relief
            </span>
            &nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.collective.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightCollective: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightCollective: false }),
                  10000
                );
              }}
            >
              Insurance
            </span>
          </div>
          <span style={{ fontWeight: "normal" }}>
            for finance fraud/prohibit price-elasticity + enslave +&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.populism.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightPopulism: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightPopulism: false }),
                  10000
                );
              }}
            >
              unrequited
            </span>
            <br />
            <div
              style={{
                position: "relative",
                width: "100%",
                minWidth: "100px",
                maxWidth: "500px"
              }}
            >
              <img
                style={{
                  height: "auto",
                  width: "100%"
                }}
                alt={
                  `unrequited equitydollar-split fraud for counterfeit-wagerers ` +
                  `(I did this in comparative law/spite knowing it is all going to be ` +
                  `reversed to the point of no action be taken with malintent to not compete ` +
                  `for, but with, customers of businesses not creditors (not a customer, a ` +
                  `conspirator to loiter on the counterfeit means[reposession,borrowers' ` +
                  `consumers' down-payments and rights])`
                }
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/stzp3uea3o3y85y/FullSizeRender.jpeg?dl=0"
                }
              />
            </div>
            <br />
            <br />
            <span
              ref={this.disclosure}
              style={{
                transform: ".3s ease-in",
                color: this.state.highlightDisclosure ? "white" : "grey",
                backgroundColor: this.state.highlightDisclosure
                  ? "rgb(100,170,205)"
                  : ""
              }}
            >
              give warning by unpaid consultants, non-profit freemium ngo
              service; no prohibition except self/asset court-party risk
            </span>
          </span>
          <br />
          <div
            ref={this.squatting}
            style={{
              display: "flex",
              position: "relative"
            }}
          >
            <div style={{ width: "33%", position: "relative" }}>
              <img
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto"
                }}
                alt="1000% asset ownership, 5000% asset ownership is finance (1300% bond:cash, 2% financial sector getting population….), 100/2=50x who is the real enemy"
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/8uy123fts6hx7he/IMG_3266.png?dl=0"
                }
              />
            </div>
            <div style={{ width: "33%", position: "relative" }}>
              <img
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/1hhxo6jj5tyjije/IMG_3265.png?dl=0"
                }
                alt="are we counting borrowed or deeds?"
              />
            </div>
            <div style={{ width: "33%", position: "relative" }}>
              <img
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto"
                }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/kbm9cilfqip612n/IMG_3264.png?dl=0"
                }
                alt="the loans are now scrouging the gringos but just numerically because u.s. courts are malfeasant"
              />
            </div>
          </div>
          <br />
          the loans are now scrouging the gringos but just numerically because
          u.s. courts are malfeasant
          <br />
          1000% asset ownership, 5000% asset ownership is finance (1300%
          bond:cash, 2% financial sector getting population….), 100/2=50x who is
          the real enemy
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            I have a product announcement, please close the markets for 3 months
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",
              border: "1px dotted",
              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <br />
          </div>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              flexDirection: "column",
              alignItems: "center",

              width: "calc(100% - 20px)",
              maxWidth: "600px",
              transition: ".3s ease-in",

              color: this.state.highlightJewels ? "white" : "grey",
              backgroundColor: this.state.highlightJewels
                ? "rgb(100,170,205)"
                : ""
            }}
            ref={this.jewels}
          >
            {!this.state.facebookerror && (
              <iframe
                title="North Carolina woman allegedly used a $149,000 Covid-19 relief loan to purchase items at businesses... and multiple diamond [investments]"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnninternational%2Fposts%2F10159143858809641&width=300&show_text=true&height=444&appId"
                width="300"
                height="444"
                style={{
                  backgroundColor: "#3b5998",
                  border: "none",
                  overflow: "hidden",
                  width: "480px"
                }}
                onError={this.handleFacebookError}
              ></iframe>
            )}
            <br />
            "North Carolina woman allegedly used a $149,000 Covid-19 relief loan
            to purchase items at businesses... and multiple diamond
            [investments]"... The fed uses our equity-split on shares of
            corporate competitors of mine... <br /> <br />
            <br />
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.IRS.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightIRS: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightIRS: false }),
                  10000
                );
              }}
            >
              Unemployment insurance
            </span>
            &nbsp;generally is so those employees keep paying finance
            (counterfeit in contract or colonialism) "free" but&nbsp;
            <a href="https://vianickcarducci.medium.com/gdp-the-big-lie-b1a0868785f4">
              split-dollar (the big lie)
            </a>
            &nbsp;market share labor for business, labor and pre-revenue
            inventors and artists just get their equity stolen and given to
            others. it's illegal but not under this regime's precedence
            <br />
            <br />
            Unspoken collusion by supply-side product luddites. "Advent of zoom"
            it is WebX with a better brand... shikes
            <br />
            turntide is just take-home nuclear reactor motor
            <br />
            Using a rotor uses kinetic energy to loop power (magnate.company). I
            think this off/on priocess will depreciate magnetism. My
            solutionwith negative outer rim that turns in to accelerate or mount
            is scaleable to cell, device or auto
            <br />
            <br />
            accelerate, mount or just radius thickness...
          </div>
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
              width: "100%",

              border: "1px dotted grey"
            }}
            onClick={() => {
              this.jan2018.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightJan2018: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightJan2018: false }),
                10000
              );
            }}
          >
            Financial Celibacy
          </span>
          <br />
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            <a href="https://justcapital.com/news/liberals-and-conservatives-agree-corporate-america-needs-to-prioritize-workers/?fbclid=IwAR0yCu8W_XONeAnFNEucUiy8mQNlIHE6f67H1vr49KiI2_gHO_ow995-1xY">
              Chicken
            </a>
            &nbsp; or&nbsp;
            <a href="https://justcapital.com/news/companies-that-have-the-most-workers-earning-a-living-wage-have-higher-returns-on-assets/">
              egg
            </a>
            ?
          </i>
        </div>
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Systemic Inequality" &&
              this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.SYSTEMICINEQUALITY}
        >
          <span
            ref={this.financeKills}
            style={{
              display: "block",

              width: "calc(100% - 20px)",
              maxWidth: "600px",
              color: this.state.highlightFinanceKills ? "white" : "grey",
              backgroundColor: this.state.highlightFinanceKills
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            the only crisis is in 1xbook assets that only have 1:13&nbsp;
            <a href="https://micro-theory.com">(30, 41?)</a> if adjunicated now
            <br />
            if debt and Bernie Sanders didn't exists, the rich would kill us
            <br />
            <br />
            There is not enough wealth&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.dispair.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightDispair: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightDispair: false }),
                  10000
                );
              }}
            >
              disparity
            </span>
            &nbsp;in assets alone. They need to call debt, assets. Wealth beyond
            utility is how deparate we are - to eachother
          </span>
          <br />
          <br />
          {!this.state.facebookerror && (
            <iframe
              title="Dr Seuss cultural zoo"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnn%2Fposts%2F10161796504751509&width=300&show_text=true&height=444&appId"
              width="300"
              height="444"
              style={{
                backgroundColor: "#3b5998",
                border: "none",
                overflow: "hidden",
                width: "480px"
              }}
              onError={this.handleFacebookError}
            ></iframe>
          )}
          <br />
          you're normal, its a wide distribution
          <br />
          <br />
          ethnic-based economies and targeting in financial damages/exclusion
          <br />
          Why do you want us to talk about color but not culture? F off
          <br />
          <i
            ref={this.beast}
            style={{
              transition: ".3s ease-in",
              fontSize: this.state.highlightBeast ? "" : "0px",
              width: this.state.highlightBeast ? "min-content" : "0px",
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => {
              this.jewels.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightJewels: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightJewels: false }),
                10000
              );
            }}
          >
            The Beast System &nbsp;
            <a href="https://www.fbi.gov/file-repository/2015-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
              80k/yr
            </a>
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            There are many leftists who believe criminal justice reform includes
            barring criminals or unadjunicated harm from national and&nbsp;
            <a href="https://wavv.art/United_States_of_America">
              consumer courts
            </a>
            &nbsp; from economies
          </div>
          <br />
          <i
            onClick={() => (window.location.href = "https://froth.app")}
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
              color: "blue",
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            slave driving
            <br />
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            the dispairage between income & wealth inequality and
            ownership/dollar-split - Wealth beyond utility is how deparate we
            are
          </div>
          <br />
          <i
            ref={this.vault}
            onClick={() => (window.location.href = "https://vaults.biz")}
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
              transition: ".3s ease-in",
              color: this.state.highlightVault ? "white" : "blue",
              backgroundColor: this.state.highlightVault ? "lightBlue" : "",
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            accountability&nbsp;
            <span
              style={{
                transition: ".3s ease-in",
                fontSize: this.state.highlightVault ? "" : "0px",
                width: this.state.highlightVault ? "min-content" : "0px",
                overflow: "hidden"
              }}
            >
              vaults.biz
            </span>
            <br />
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            if you want to lay blame on peoples' reactions, you can of their
            indebted employers
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            this is colonialism, this is counterfeit; cannibalism not dominance
          </i>
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            We can compare finance to tax by race/nationality vs market.
            Military hand to hand
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            to be clear
            <br />
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            demand is people sorted by how much each person is willing&nbsp;
            <b fontWeight="bolder">and able</b> to pay
            <br />
            supply is people sorted by how much each person is willing&nbsp;
            <b fontWeight="bolder">and able</b> to produce
          </div>
          <br />
          <i
            ref={this.nextsteps}
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics",
              transition: ".3s ease-in",
              color: this.state.highlightFP ? "white" : "",
              backgroundColor: this.state.highlightFP ? "rgb(170,100,205)" : ""
            }}
          >
            next steps
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            class action reconciliation of invoice price * debt/cash at that
            time, all other actions are methods to this end, and realizations of
            investor behavior - not market-colonialism in violation of Amendment
            13 - is to follow this reconciliation. Economist should also, I ask,
            be&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.trueGDP.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightTrueGDP: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightTrueGDP: false }),
                  10000
                );
              }}
            >
              honest about the m1v1===m2v2===GDP===C+I+G+NE+P equation
            </span>
            . The cash is not there to speed up again, unless it is
            dollar-split. In corporate share law, you can't steal it, but the
            Fed can do it by precedence. This is violation of Amendment 14 I
            believe as an inequal protection of each owner, dollar and corporate
            share. As an aside, the pricing of corporate shares is hidden by
            FINRA and SEC currently, as Treasury Shares are outstanding, but not
            in the price calculation of earnings or owned-asset value per share
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            why
          </i>
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            <a href="https://wavv.art/forumvAieCnwTuLHYJWmhFelq">
              wavv.art/forumvAieCnwTuLHYJWmhFelq
            </a>
            <br />
            America first by gdp (m2) is the wrong direction if calculating
            wealth appreciation by net exports (a.k.a. net imports).&nbsp;
            <span
              ref={this.foreignpolicy}
              style={{
                transition: ".3s ease-in",
                color: this.state.highlightFP ? "white" : "",
                backgroundColor: this.state.highlightFP
                  ? "rgb(170,100,205)"
                  : ""
              }}
            >
              if your idea of foreign policy is to keep foreigners from getting
              actual assets by forcing our citizens to use counterfeit asset
              certificates, you're&nbsp;
              <span
                style={{ fontWeight: "bolder", textDecoration: "underline" }}
                onClick={() => {
                  this.trueGDP.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightTrueGDP: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightTrueGDP: false }),
                    10000
                  );
                }}
              >
                retarded
              </span>
              &nbsp;(chris salcedo, Newsmax and Christine Romans, Early Start
              CNN)
            </span>
            &nbsp;
            <br />
            <a href="https://wavv.art/forum4eM79h0dyP3FVsfDan0G">
              wavv.art/forum4eM79h0dyP3FVsfDan0G
            </a>
          </div>
          <br />
          <i
            style={{
              fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
              textEmphasis: "italics"
            }}
          >
            note from the author
            <br />
            if you&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.politics.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightPolitics: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightPolitics: false }),
                  10000
                );
              }}
            >
              move
            </span>
            &nbsp;people you are at fault
            <br />
            "move to ensure food can be put on the table for families" - Psaki
            <br />
            <br />
            Imagine a glob-looking alien discussing this talking about a world
            we share, but they do not see
          </i>
          {!this.state.facebookerror && (
            <iframe
              title="s"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbaltimoresun%2Fposts%2F10159175313274712&width=300&show_text=true&height=444&appId"
              width="300"
              height="444"
              style={{
                backgroundColor: "#3b5998",
                border: "none",
                overflow: "hidden",
                width: "480px"
              }}
              onError={this.handleFacebookError}
            ></iframe>
          )}
          <br />
          <div
            style={{
              fontFamily: '"Hi Melody", sans-serif',
              color: "grey",

              width: "calc(100% - 20px)",
              maxWidth: "600px"
            }}
          >
            The weird thing is Oath Keeper chapters are 501c3? I relinquished
            mine for thumbprint.us to serve intention for mock direct democracy
            for Baltimore “and beyond” now sole proprietorship with royalty
            contracts w/max-profit (no promises, only
            profit-schedules[adminWidthdrawal/sale,skew,max] options)
            <br />
            <br />
            Marjorie getting elected after suggesting&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.flag.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightFlag: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightFlag: false }),
                  10000
                );
              }}
            >
              false flag
            </span>
            &nbsp;is correlative evidence that most of her constituents agree
            with her
            <br />
            <br />
            <a href="http://chng.it/D9dxm2mWW4">
              Petition to stop supermarkets wasting food, bad stewardship of our
              opportunities, G-d given shit
            </a>
            <br />
            <br />
            <a href="https://wavv.art/forumV0cKS0LBcAVCNYwCASKq">
              Open-carry is threat
            </a>
            &nbsp;G-d is judge of soul, Territory is self
            <br />
            <div
              style={{
                fontFamily: '"Hi Melody", sans-serif',
                color: "grey",

                width: "calc(100% - 20px)",
                maxWidth: "600px"
              }}
            >
              blm vs trump; FBI (J. Sanborn) says,&nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.cityhall.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightCityHall: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightCityHall: false }),
                    10000
                  );
                }}
              >
                "not different"
              </span>
              , cites 100 people OVER A SUMMER and general cites heli using
              civil disturbance enumerated outlays (bayonnets, heli's), {">"}
              =250 ppl IN ONE DAY
            </div>
          </div>
          <br />
          <div
            ref={this.whyBad}
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
              color: this.state.highlightWhyBad ? "white" : "",
              backgroundColor: this.state.highlightWhyBad
                ? "rgb(170,100,205)"
                : "",
              ...tweetsStyle
            }}
            onClick={() => this.setState({ why: !this.state.why })}
          >
            Violence is because of debt, slavery and non-governmental mafia.
          </div>
          <div
            style={{
              wordBreak: "break-word",
              padding: this.state.why ? "20px" : "0px",

              width: "calc(100% - 40px)",
              maxWidth: "600px",
              opacity: this.state.why ? "1" : "0",
              transition: ".3s ease-in",
              fontSize: this.state.why ? "" : "0px"
            }}
          >
            <a href="https://wavv.art/Iran">Islam</a>&nbsp;says trespassing is
            ok to war others, but uselessly abuse animals which is never
            supported by westerners; however, obviously China feels the same
            about a b**********g animals for some etherial effect. G-d is
            supposed to do the judgement is something they misinterpret about
            their own text. amazing. I am listening to John Bachelor now. Jews
            for reparations were excluded from being bankers, that is not the
            way; then jews supported british winning of lybia over italy.
            looking at italian intent there now.... yup, financial
            slavery. http://cup.columbia.edu/book/conflict-conquest-and-conversion/9780231138642
             this is not the teachings of Christ and/or G-d. The Rev and the
            Rabbi just said the Third Reich rose to power because the axis
            thought Jews were different AND thought Jews were the cause of
            “woes” in Europe. Different how? Placing interest on non-Jews
            (Hakahla)? Insurance pool duress hot potato? That quite literally
            does cause dominoes of foreclosures. Believe me I am a home builder.
            Although Killing Jesus with Roman gov for protesting animal
            sacrifice and unequal treatment of money and share, or “cheering for
            British win in Tunisia” doesn’t help Optics for Italians Crucifixion
            was directive by Jewish and Roman leaders.
          </div>
          <br />
          <div style={tweetsStyle}>
            lies? hate? supreme court allows nazi to roam chicago, robbie parker
            is visibly preparing to act, and bbc world announces Solomon
            building collapses while it is there still (building 7, Ventura).
            The hijackers got in the gate without passports, or the documents
            survived the crash - fat chance. Purdue simulated the plane bouncing
            off the floor, if that is the same material as columns, would the
            explosion really happen on the other side of the building? It is
            certainly insurance fraud. Islam doesn't want debt which is
            promising (not borrowing or using) other people's money. No evidence
            [virus from wuhan]? Where else would it be from && have such an
            delta of impact. Deduction is evidence as much as correlative
            statistics..
          </div>
          <br />
          <div style={tweetsStyle}>
            Strong militia/terror groups are supported by governments that use
            non-asset trade with promises/invoices/money. Thus, if you want
            world peace, protect power of individuals to give power to good
            people by settled-trade and fair-competition with other producers,
            not consumers by signing them to contracts that are impossible and
            require the consent unrequited by people with the waged money to
            surpass a penalty instigated on those very same customers of the
            borrower.
          </div>
          <br />
          <div
            ref={this.congressVsCongress}
            style={{
              color: this.state.highlightCVC ? "white" : "black",
              backgroundColor: this.state.highlightCVC
                ? "rgb(170,100,205)"
                : "",
              transition: ".3s ease-out"
            }}
          >
            Biden’s plan is to&nbsp;
            <a href="https://froth.app" style={{ textDecoration: "underline" }}>
              further separate us with bonds and money
            </a>
            , bombing them, and giving the unproductive, violent actors the
            space and opportunity to thrive without being PRODUCTive
          </div>
          <br />
          <div style={tweetsStyle}>
            You can really only certify (lest sceintific consensus of duress in
            mvp without hung0jury-permis 11/12) but not bar unless there is
            prove-able harm or it is prohibitive to not do it. <br />
            <br />
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.marx.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightMarx: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightMarx: false }),
                  10000
                );
              }}
            >
              Socialism
            </span>
            &nbsp;leads to capitalism&nbsp;
            <a
              style={{ fontSize: "12px", color: "black" }}
              href="https://vianickcarducci.medium.com/vaults-biz-solution-repair-shop-25d91ee37aea"
            >
              without promises/with payout schedules
            </a>
            , unless&nbsp;
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.italy.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightItaly: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightItaly: false }),
                  10000
                );
              }}
            >
              someone campaigns on it
            </span>
            &nbsp;and makes communism/colonialism/quotas or prisoners’ dilemma
            duress-pooling again
          </div>
          <br />
          <span
            ref={this.tea}
            style={{
              fontWeight: "bolder",

              transition: ".3s ease-in",

              color: this.state.highlightTea ? "white" : "",
              backgroundColor: this.state.highlightTea ? "rgb(170,100,205)" : ""
            }}
          >
            57% of Republican Party constituents (in a sample-survey) say
            justice must be upheld by violence. CNN reports this as
            "uncompatible to democracy." Well I point to this is how
            historically every democracy is formed. For without individual
            rights, democracy is unfounded.
          </span>
          <br />
          <br />
          <span
            ref={this.policeUX}
            style={{
              color: this.state.highlightPoliceUX ? "white" : "",
              backgroundColor: this.state.highlightPoliceUX
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            <span
              style={{
                fontFamily: '"Hi Melody", sans-serif'
              }}
            >
              "I can say that shit",
            </span>
            &nbsp;exclaims&nbsp;
            <a href="https://en.wikipedia.org/wiki/Cronus">
              Judge Janine Pirro
            </a>
            &nbsp; on a commercial break, as I await my turn to explain the
            endings of Section 230, after she says, "we will strip 230
            protections from platforms." The law without 230 provides that
            liability is only granted if the writers are PAID or EDITED. To
            boot, platforms should not be destroying evidence, they should be
            highlighting illegal threats so other users know what is not
            acceptable, and investigations without circumstantial/correlative
            data or not, should be unfettered until a cease and decist order is
            properly adjunicated.
          </span>
          <br />
          <br />
          <a
            style={{
              fontFamily: '"Hi Melody", sans-serif'
            }}
            href="https://froth.app/debt"
          >
            Sid Rosenberg
          </a>
          &nbsp;says, rip criminals limb from limb, “very jewish” if Jesus
          protest animal abuse (is a wishbone magical entrapment by
          nomenclature?) and crucifixion (well actually it was a pedophile so we
          can talk figuratively)
          {/*... what do you mean italians are made-men, why does my blood-test site hurt*/}
          <br />
          <br />
          John Catsimatidis apparently took the show, "Mind your Business," an
          apparent verbal jab at the reason for the&nbsp;
          <a
            style={{
              fontFamily: '"Hi Melody", sans-serif'
            }}
            href="https://voxeu.org/article/financial-crisis-and-right-wing-extremism-germany-1931-33"
          >
            Third Reich who campaigned on ending financial discrimination by
            non-jews
          </a>
          , off the air, a scourge through&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.insurance.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightPrisonersDuress: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightPrisonersDuress: false }),
                10000
              );
            }}
          >
            insurance companies
          </span>
          &nbsp;owned by&nbsp;
          <a
            style={{
              fontFamily: '"Hi Melody", sans-serif'
            }}
            href="https://froth.app/debt"
          >
            Jewish
          </a>
          &nbsp;operators as I have began publishing my, "Banking is not a
          Business" pre-prints.
          <br />
          <br />
          <span
            ref={this.italy}
            style={{
              color: this.state.highlightItaly ? "white" : "",
              backgroundColor: this.state.highlightItaly
                ? "rgb(170,100,205)"
                : "",
              transition: ".3s ease-out"
            }}
          >
            U.S. schools teach Italy joined because hair color!
          </span>
          <br />
          <br />
          <div style={tweetsStyle}>
            work used to be if you needed to do something, now it is just to
            keep up with price-inelasticity inflation by finance (insurance
            coagulating involuntary purchase, rent more than can use, lend to
            enforce contracts waging other people's money - lender keeps the
            down payments of the borrower's customers and borrower gets to squat
            on the asset fraudulently
            <br />
            <br />
            royalty contracts on a business line with max profit? No other good
            debt. Prices are completely negatively correlated by the ability to
            negotiate
            <br />
            debt based on time or all business-types is the borrower's
            customers' right to buy or not
            <br />
            recipients blue collar, dude their money is made by involuntary
            shareholder actions (
            <span
              style={{ fontWeight: "bolder", textDecoration: "underline" }}
              onClick={() => {
                this.marx.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightMarx: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightMarx: false }),
                  10000
                );
              }}
            >
              communist
            </span>
            )
          </div>
          <br />
          <div
            ref={this.mutilation}
            style={{
              fontFamily: '"Hi Melody", sans-serif',

              width: "calc(100% - 20px)",
              maxWidth: "600px",
              transition: ".3s ease-in",

              color: this.state.highlightMutilation ? "white" : "grey",
              backgroundColor: this.state.highlightMutilation
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            you're normal, its a wide distribution
            <br />
            <br />
            People should be free to choose with full information what is
            completely within their rights, fines are inherent conflicted
            interests & license to break laws that people cannot afford it are
            subject to and should never be applied except between aggrieved
            private parties - after warning for first infraction of evidenced
            issues.
            <br />
            Parent choice of mutilation cannot be reversed but drugs can be
          </div>
        </div>
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Mission" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.MISSION}
        >
          <a href="https://linkedin.com/in/nickcarducci">
            linkedin.com/in/nickcarducci
          </a>
          <a href="https://vianickcarducci.medium.com">
            vianickcarducci.medium.com
          </a>
          <br />
          <div
            ref={this.navbar}
            style={{ display: "flex", width: "max-content" }}
          >
            <h1>Saver Party</h1>
            <span style={{ color: "grey" }}>xyz</span>
          </div>
          <span>
            demand-side conservatism (consent, no supply intervention by
            non-producing, scalping, serfdoms, leases and allow prices to be met
            and exactly settled by producers and consumers)
            <br />
            Trade is good for comparative advantage in teamwork akin to absolute
            trading of mutual benefits. All other actors are interference.
          </span>
          <br />
          <div
            ref={this.invite}
            style={{
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            financial policy
            <br />
            <br />
            Efficiency (labor-equity) Act & Accord
            <br />
            1. Taxes are slavery except free-rider-immutable services, below
            <br />
            2.&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.incomeTax.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightIncomeTax: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightIncomeTax: false }),
                  10000
                );
              }}
            >
              Sales
            </span>
            &nbsp;tax is efficient, under&nbsp;
            <a href="https://vaults.biz">$2k buys</a>:
            <br />
            first grand is $60, second is $30 (6%, 3%)
            <br />
            a. Local police/plow
            <br />
            b. tollless roads
            <br />
            c. supreme courts
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              maxWidth: "600px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            Nick Carducci
            <h2>Regulations</h2>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            I. forbid investment bank "savings" label
            <br />
            II. forbid insurance pyramid schemes, unless gift certificate
            broker...
            <br />
            III. forbid prosecution for non-payment after service
            <br />
            IV. forbid time-based royalty & consumer purchase investment
            <br />
            V. forbid renting {">1mo"}more than 5 abodes & storefronts for
            income
            <br />
            VI. producers refund previously paid debts to cash:debt original
            principal ratio! Where we would be if we had intervened in the
            market intervention of promises raising market price and skipping
            the marginal cost to earn that money based on a combination of
            producer greed & consumer prisoner's dilemma duress or promise
            <br />
            VII. only can disburse business-acc-money upon withdrawal or sale
            and protect per industry not just name
            <br />
            VIII. We can retain interests of people but remove those of
            government/money-renters by exclusively funding it by the sales tax
            of the location of the purchaser. Fintech should label customer
            location for merchants, and allow location spoofing at checkout to
            protest
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              maxWidth: "600px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            {/*<TwitterTweetEmbed
              key={" t1311661410565398528"}
              tweetId={"1311661410565398528"}
            />*/}
            <br />
            <h2>Mantra</h2>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            price elasticity is our ally
            <br />
            invoices our enemy
            <br />
            credit is youth-abuse
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2>Candidates</h2>
            <br />
            <div
              style={{
                position: "relative",
                border: "3px solid"
              }}
            >
              <img
                onClick={() => (window.location.href = "https://carducci.sh")}
                style={{ width: "60px", height: "auto" }}
                src={
                  settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/eauftjactpq8rnz/me.png?dl=0"
                }
                alt="https://carducci.sh"
              />
            </div>
            Nick Carducci
            <br />
            <div>
              nickcarducci2022.com
              <a
                style={{ textDecoration: "none" }}
                href="https://nickcarducci2022.com"
              >
                &#9998;
              </a>
            </div>
            US Senate 2022
            <br />
            <i>invoices are theft!</i>
            <i>writing "Banking is not a Business"</i>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              alignItems: "flex-start"
            }}
          >
            You gotta earn that money back from the person you buy from, or you
            forced your customers to invest in those. You couldn’t promise
            Amazon shares you don’t own to buy a house. It is cornering assets,
            duress of the borrower and involuntary servitude of the people with
            money, which isn’t even enough. Royalty w/max-profit on business
            lines without market-colonialism, renting out more than you can use
            or bills.
          </div>
          <br />
          <a href="https://micro-theory.com">Micro-Theory.com</a>
        </div>
        <div
          style={{
            transition: ".3s ease-out",
            backgroundColor:
              this.props.section === "Early Comms" && this.props.openMenu
                ? "rgb(220,245,245)"
                : "",
            width: "100%"
          }}
          ref={this.EARLYCOMMS}
        >
          Why do the majority of people join the military? money/assassins for
          hire
          <br /> <br />
          You can really only certify but not bar unless there is prove-able
          harm or it is prohibitive to not do it. In this case, neither is harm
          proven with evidence that spittle from talking floats, nor is it
          prohibitive for people who don’t want to be around people wearing
          masks. Their preference for others is more onerous than people who
          prefer sneezing into their elbow. Masks are as reckless as NIH & Fauci
          getting paid dollar split to experiment with virus in anti-human
          rights China
          <br /> <br />
          We need tort reform in the process of barring or citing cease &
          desist. A warning from a complaint that a court can lay instead of
          bonds and fines, before an incident occurs
          <br /> <br />
          The law of banishing involuntary slavery by people that own the
          dollars that use to promise, duress of those that borrow to match
          fixed-prices, or unequal protection of corporate shares vs dollars as
          waged in contracts
          <br />
          <br />
          Old people are crowding us out of assets
          <br />
          <br />
          It would be better to ban invoices and renting out more than one can
          live in at one time
          <br />
          <br />
          If you teach your teachers something they&nbsp;
          <a href="https://open.spotify.com/track/1hOSO8FbW0l1heJm1BiTWi?si=KV6Jx-CMRlKAPDZJRG7DFg">
            fail you
          </a>
          <br />
          <br />
          You can only exclude based on health if there are visible symtoms or
          the tests are non-invasive. Otherwise they cause duress to not be only
          giving into the economy but not able to take (slavery)
          <br />
          Forcing you to wear a mask is dangerous to your health, you should be
          sneezing into your palms and then wash your hands
          <br />
          Also comprehensive science, not sampled data, says masks do not help.
          spittle or breathe has not been proven to float. only aerosols in a
          nebulizer, which may have been dust. the only study like this did not
          specify, but even water sprayed is not how people talk. the study of
          spittle specifically only showed a 1ft release, which fell
          immediately. it likely is transferred by eating poisoned meat&nbsp;
          <a href="https://bgr.com/2020/09/13/seeds-from-china-mystery-explained-suspected-brushing-campaign/">
            in reaction to the trade war
          </a>
          <br />
          <a href="https://wavv.art/forumAnwTeKQ7MJZlbGtknlur">
            wavv.art/forumAnwTeKQ7MJZlbGtknlur
          </a>
          <br />
          <br />
          Twelve percent of China’s population is age 65 or above. That share is
          16 percent in the United States, 6 percent in India, and 3 percent in
          Nigeria.
          <a href="https://www.prb.org/countries-with-the-oldest-populations/">
            https://www.prb.org/countries-with-the-oldest-populations/
          </a>
          <br />
          <br />
          Stop blaming others for advice, youtube put up videos of kids kissing
          random girls and&nbsp;
          <a href="https://wavv.art/forumYnOpYXF6NJAJsLH63tUd">
            all of them liking it
          </a>
          <br />
          <br />
          I think this is why instagram recently voided all class action
          lawsuits in their inclusion terms
          <br />
          <br />
          <a href="https://wavv.art/forumur7AXXUYTzAVWHyPvjVS">
            wavv.art/forumur7AXXUYTzAVWHyPvjVS
          </a>
          <br />
          <br />
          Amendment 13 protects free speech privately and arousal-orientation
          per non-monopsomous inclusion in supply, not just demand (and
          vise-versa)
          <br />
          <br />
          Privacy is required for expression, govID for all and parole intranet
          can defend domestic violence just fine
          <br />
          <br />
          I hope people other parties, scientists, pollsters and tech leaders
          will follow
          <br />
          <br />
          Tim cook has delayed in adding input control at control panel, and now
          he is going to pass off my day-clock as his own. he will follow{" "}
          <a href="https://thumbprint.us">thumbprint.us</a>
          <br />
          Incitement to violence on platforms, not paid writers, is destroying
          evidence, prohibiting trading ideas and finding solutions
          <br />
          <br />
          If you are allowed to fight without weapons to defend someone stealing
          your car, you can fight back or threat without weapons if someone is
          stealing anything.
          <br />
          <br />
          Please stop selling us out
          <br />
          <br />
          UBI without debt is bad competitively and causes hostile international
          relations,&nbsp;
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "bold"
            }}
          >
            with debt appreciates by malfeasant and corrupt jurisprudence that
            the money can be paid back
          </span>
          , which is impossible but they allow them to prosecute and cash out at
          price-fixed counterfeit levels of success anyway.
          <br />
          <br />
          Everytime a borrower spends a lender's dollar they force you & your
          customers to invest in their purchases, cornering assets
          <br />
          <br />
          Why would you pay tax or debt when it is impossible? better sue
          <br />
          <br />
          Not banning prohibitory bills for settled trade is either nefarious or
          short-sighted
          <br />
          More aid for the recently unemployed. There are 40% unemployed that
          aren’t getting an equal application of law.&nbsp;
          <span
            style={{
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
            onClick={() => this.scrolllto.current.scrollIntoView("smooth")}
          >
            None of us consented
          </span>
          &nbsp;
          <a href="https://vaults.biz">vaults.biz</a>
          <br />
          <br />
          "Financial support" promoted by China Biden is fraud to only help
          those who created bills that are otherwise impossible to pay, support
          the victims by disallowing prosecution and cutting price if paid
          partially to cash:debt of the economy to find what would otherwise be
          the market price. Ensure that the trades going forward are settled, no
          human is traded again in a securitized instrument, their items to buy
          aren't collateralized and colonized, and prices fall to non-cheating,
          assumptive and involuntary levels of the promises ensured by the
          courts, no more.
          <br />
          Free-market economics without monopolization is grounded in teamwork,
          human labor is not capital
          <br />
          <br />
          Government spending or stipends are not free, even if they do not
          promise bonds that which they cannot, it is counterfeit voting rights
          of dollar shareholders and cornering those assets if made under debt
          <br />
          <br />
          If you can't be sued for someone else's comment on the platform that
          you do not pay them for, you cannot exclude them from the economy
          <br />
          <br />
          Phil Murphy is from goldman and supports offshore drilling, finance
          owns 11x everyone else being 2% of population, all those assets are 11
          times-counted and counterfeit. he is gluttonous
          <br />
          <br />
          weed is illegal because it is a currency competitor
          <br />
          <div
            onClick={() =>
              this.setState({ openElement: !this.state.openElement })
            }
            style={{
              fontWeight: "bolder",
              textDecoration: "underline",
              left: "0px",
              borderRadius: "30px",
              width: "30px",
              height: "30px",
              backgroundColor: "rgb(20,20,25)"
            }}
          />
          <div
            style={{
              height: this.state.openElement ? "min-content" : "0px",
              opacity: this.state.openElement ? "1" : "0"
            }}
          >
            heat as electron compound non-stability
            <br />
            Probability cannot be explained during mutually-exclusive,
            non-random (not shuffled) events
            <br />
            Ballot-harvesting (bearer of more than 3 people) is sample bias
          </div>
          <br />
          <br />
          donald trump rushes this, fda corners were cut, facebook bans protest
          from legitimate worries like mine of b-cell dysregulation tending to
          cause oncogenesis... this is hell
          <br />
          <br />
          Trump did not incite violence or unreasonable insurrection (unfair
          elections is slavery, let alone any debt or non-debtless-UBI) he said
          to protest, the company had a history of working with corrupt
          elections when Nick Carducci's thumbprint.us is here as an alternative
          <br />
          <br />
          congress cannot impeach indefinitely because voting populus and
          congress change... alan dershowitz is misleading for some reason
          <br />
          <br />
          for this impeachment, saying the election is stolen is not only an
          opinion, you are allowed to protest, but there is legitimate concerns
          cited above
          <br />
          <br />
          splitting shares of dollars further in any stimulus by debt or
          involuntary charity of labor to match lender price-fixing to what they
          imagine instead of what they can get is fraudulent in motive and
          counterfeit
          <br />
          <br />
          Amendment 13 prohibits the exclusion of people based on orientation or
          monopsony
          <br />
          <div
            style={{
              position: "relative"
            }}
          >
            <img
              alt="finance was public opinion not hair color"
              style={{
                width: "100%",
                height: "auto",
                position: "relative"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/g6pmh23ot7le12o/Screen%20Shot%202021-01-16%20at%204.08.54%20PM.png?dl=0"
              }
            />
          </div>
          <br />
          Says legal warnings are applicable if there is defamation by you
          deepfriedorka (dfa) asked me to respond to him or her, so I am forced
          to use this page again, sorry if there is another method I didn't
          notice.  dfa asked how I can write my facts for the Third Reich and
          Holocaust pages constructively. I would likely say the same point, you
          can edit how you like and I am not one for lengthy explanations of
          things.  There is a grave incorrect notion about WWII history, which
          can be disproven by logic, or a system that excludes possibilities and
          proves truths by way of deduction.  Since there were not pollsters of
          the axis powers at that time, but numerous accounts of Hitler's
          manipulation and hiding of intentions, the supposition of deduction in
          finding motive I believe to be appropriate and help maintain dignity
          of my culture.  It seems according to the Halakha supports the notion
          of discriminatory costs, which is grounds for the true motive of the
          populace where polling history cannot define. Best wishes, which I do
          not feel is the same wish by Halakha.  I have more information that is
          critical to understanding, I have spent years researching that would
          be a shame to not be on wikipedia, but that would just mean you aren't
          allowed to make some of the claims about building an encyclopedia that
          you do, and there would be an opportunity for competition. Nick
          Carducci.sh
          <br />
          <span
            style={{
              padding: "20px",

              width: "100%",
              maxWidth: "600px"
            }}
          >
            <br />
            The term for "fully-capable yet self-harming" is non-existent and
            linguistically-deconstructing the word "retard" by its affixes
            describes one that is not necessarily already a tard but is often
            destructive of themselves or others per societal symbiosis.
            <a href="https://www.lexico.com/grammar/prefixes-and-suffixes">
              https://www.lexico.com/grammar/prefixes-and-suffixes
            </a>
            &nbsp; To suggest otherwise mischaracterizes tards as not being
            self-preserving, describing them to always be retarding themselves
            or their society.
            <br />
          </span>
          <span
            style={{
              padding: "20px",

              width: "100%",
              maxWidth: "600px"
            }}
          >
            Stop saying printing delays pain of foreclosure; the pain is in the
            prohibition of price-elasticity and impossibility of debt to allow
            usurpers to use assets on false pretenses of ownership of assets
            they promise
            <br />
            growth of an economy by shares only increase wealth disparity;
            growth by population lessens wealth disparity. Wealth beyond utility
            is how deparate we are to eachother
            <br />
            unemployment rate is a phone survey of 2k people that aren't out
            looking for work who have time, the employment rate is 60%. bailing
            out their bills prohibit trade and fix-prices at tangible and
            opportunity costs based not on what the promiser actually owns
            <br />
            claims that you are protected by insurance is wrong, they abett
            invoices, promises made with money that the promiser does not have
          </span>
          <br />
          <span
            ref={this.marx}
            style={{
              color: this.state.highlightMarx ? "white" : "",
              backgroundColor: this.state.highlightMarx
                ? "rgb(170,100,205)"
                : "",
              transition: ".3s ease-out"
            }}
          >
            Marx was not communist, colonist or slave-driver/interferer/rentier,
            he was an end-the-fed guy
            <br />
            He doesn't want&nbsp;
            <span
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.congressVsCongress.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                this.setState({ highlightCVC: true });

                clearTimeout(this.highlighting);
                this.highlighting = setTimeout(
                  () => this.setState({ highlightCVC: false }),
                  10000
                );
              }}
            >
              big government
            </span>
            , he wanted people to earn equity from work, not lending
          </span>
          <br />
          not allowing entrance to tourists based not on symptoms or
          non-invasive testing is slavery of give but no take
          <br />
          <span
            onClick={() => {
              this.booker.current.scrollIntoView("smooth");
              this.props.pauseScroll();
              this.setState({ highlightBooker: true });

              clearTimeout(this.highlighting);
              this.highlighting = setTimeout(
                () => this.setState({ highlightBooker: false }),
                10000
              );
            }}
            ref={this.brookings}
            style={{
              position: "relative",

              transition: ".3s ease-in",

              color: this.state.highlightBrookings ? "white" : "",
              backgroundColor: this.state.highlightBrookings
                ? "rgb(170,100,205)"
                : "",
              fontWeight: "bolder",
              textDecoration: "underline"
            }}
          >
            Wealth beyond utility is how deparate we are, to eachother
            <br />
            <br />
            The Brookings Institution / NPR advocates for baby bonds , not ubi
            to close a 10x white wealth gap, while there is 11x gap between
            finance versus other sectors of employment while only being 5% of
            60% employed, or about 2% total. black people are 13% of population.
            talk about missing the Forest for the Trees #macroeconomics #money
            #markets #economy #socialjustice ____ #pricefixing
            <br />
            supreme court saying nazi could walk chicago is wrong because there
            is probable-evidence-of-evidence of motive to do them harm
            physically or financially (not valuation but tangible losses)
            neighborhood law is like the sea law but between homes, that's why
            open-carry is also an exhibited&nbsp;
            <a href="https://wavv.art/forumV0cKS0LBcAVCNYwCASKq">threat</a>.
            Being there as an aggressor (not a 'I wish you were dead' but 'we
            should kill you') is grounds for restraining order if possible given
            territorial trespassing, and criminal if 'I want to kill you' or
            'please kill' not 'go die or kill yourself [with understanding that
            the user understands the nomenclature therein and its FULL
            implications + it is their right to do so],' or a date in the intent
            letter in most other context. This was about a nazi parade I
            think... unless the nazi are not intent on killing Jews, is that
            what you are saying CNN Monday 9 est Mar2021?
          </span>
          <br />
          <b style={{ textDecoration: "underline" }}>
            Any further Stimulus is bail out for usurpers
          </b>
          , whom forced us under duress or without consent at all to promise
          someone else's money. Not allowing assets to settle and scalping or
          renting more than you can use yourself is abuse and market-level
          colonialism, which is illegal according to Amendment 13 and reason for
          revolutionary war according to our founding. Lending is also
          <b style={{ textDecoration: "underline" }}>
            illegal according to Amendment 14 since you cannot promise share or
            stock of Amazon if you don't own it
          </b>
          , the court will laugh at your lender asking for this. But not for
          dollars. Why?
          <br />
          <br />I am in debt but have paid more than 1:11 principal of those
          prices for market-share last-trade valuation of global assets, not
          three parties of lender/borrower/seller motivated by involuntary
          servitude and duress of SAVERS BUILDERS AND LABOR (ultimately,
          colonialism-per-market sector by cornering assets and scalping more
          that what you can use yourself, there is no utility exchanged in the
          trade just counterfeit of the demand that has the actual market-share
          certificate)),
          <b style={{ textDecoration: "underline" }}>
            and the borrower gets to use the asset while they made a promise
            they have no right to make price-fixed beyond reality.
          </b>
          <br />
          <br />
          gov debt is still being valued as the same payout as personal debt.
          I’m talking about shareholder rights if dollars are shares, which they
          essentially are certificates on market-share. They should be
          vault-share vaults.biz...
          <br />
          You may only sell your share, that means your lender cannot request
          the money back unless (1) the borrower has it, (2) paid less than
          cash:debt at the time of promise or (3) it was tied to a specific
          business line of unique IP/location/customers and it is no more than
          what the borrower originally planned to spend, where no increase in
          the market-price is made without the consent of the customer of the
          borrower
          <br />
          The FDIC insures their valuation with their valuation... congrats
          <br />
          Where was trumps incitement of violence you cunt, no proof trump
          ordered them to stand down
          <br />
          the individuals can claim being led, but the president is not guilty
          of anything. {/*sure, */}go kill yourself, the deal is in the name. no
          I am not a CFA as i suggest you do that (caveat: as if I wouldn't
          care, so do not assume I have this intent for anyone per 3;4;1 as I
          want parole intranet. Restraints & contracts can go only as far as
          what is possible for all to be)
          <div
            ref={this.electionTech}
            style={{
              padding: "20px",

              width: "100%",
              maxWidth: "600px",
              transition: ".3s ease-in",

              color: this.state.highlightElectionTech ? "white" : "",
              backgroundColor: this.state.highlightElectionTech
                ? "rgb(170,100,205)"
                : ""
            }}
          >
            <br />
            it is not an insurrection if it is his opinion, regardless if there
            is merit to Nick Carducci's&nbsp;
            <a href="https://vaults.biz">vaults.biz</a> election tech
            competitors who have worked with corrupt government elections,
            arrests of voter harvesting (sample bias) were made, and elections
            called on election day is a fault in the rules of elections by
            statistics
            <br />
            Public and private market intervention is a violation of civil
            rights of not having any involuntary servitude by duress or cost
            placed on savers, and the unequal application of the law for dollar
            owners versus shareholders of equity.&nbsp;
            <b>
              Lender, invoice-makers and renting more places one can live is
              usurping assets by imagining the borrower has the right to what
              they promise, which there is not even enough given interest by
              time.
            </b>
            &nbsp; Payday loans on customers is also illegal since they promise
            other people's money and they cannot wait so they charge customers.
            All insurance companies cannot claim they save people money if they
            on net lose money and only save relatively to eachother. In fact,
            they operate on duress and even if they do not pay invoices only
            gift-certificates, those do not necessarily rollover to the client.
            Expiring or non-rollover gift certificates must be made illegal in
            order to ensure the market players are doing no harm to those in the
            pool under duress (there is no utility to insurance except to recoup
            personal buying power to match the pooled capacity) or those who
            those in the pool must take their money from.&nbsp;
            <b>
              This is not like a subscription-membership because that is subject
              to competitive producers (if they are legally non-prohibitive
              based on existing market penetration and without subsidiary or
              subcontracted contracts with non-compete agreements ...), not a
              third party's money, or in other words one person's subscription
              (taxable) does not go towards someone else's or a large
              contracted&nbsp;
              <span
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  this.royalty.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightRoyalty: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightRoyalty: false }),
                    10000
                  );
                }}
              >
                monopsony
              </span>
              &nbsp;(Spotify, income, royalty not taxes), it goes to pay for
              their non-monopsony, individual servicing
            </b>
            &nbsp; Grow up
            <br />
            if it is not possible in whole, it is not possible to complete in
            part, since that part must be ran at the same time
          </div>
          <br />
          you don't own time. congress changes and you cannot wager future
          states
          <i>
            "The first Political Party to interpret civil rights as meaning to
            defend people against public and private market intervention,"
          </i>
          <i>
            "shareholder rights as dollar rights," and "market-colonialism as
            involuntary servitude"
          </i>
          <br />
          the rights of inclusion by way of amendment 13 (no take only give)
          <br />
          subvert my ability to enter not depending on harming myself - usually
          goes as far as one's ideas that it is harm like oncogenesis of b-cell
          dysregulation or that breathe actually travels within 1 ft & the proof
          it floats is from a nebulizer in a 3ft drum (who breathes like that?),
          it would have to be impossible to do business with all if it is
          impossible to do business with one - see methane fires and tobacco
          doctors
          <br />
          otherwise it is harm in whole, or wear a shirt into your business
          <br />
          with an arrow pointing up claiming the wearer has no good brain
          <br />
          {/*<div id="t1318204966461444096" />*/}
          You know what is better than a 444(c)3? One that’s owned by every
          living person
          <br />
          <br />
          Allowing your business partner to lend out their share for more share
          of your company should be illegal or at least moot
          <br />
          {/*<TwitterTweetEmbed
            key={" t1334836094945341440"}
            tweetId={"1334836094945341440"}
          />*/}
          {/*<TwitterTweetEmbed
            key={" t1334649662725304322"}
            tweetId={"1334649662725304322"}
          />*/}
          {/*<TwitterTweetEmbed
            key={" t1334826386314440707"}
            tweetId={"1334826386314440707"}
          />*/}
          <br />
          <div
            style={{
              border: "1px solid black",
              width: "min-content",
              padding: "20px",
              marginBottom: "30px",
              color: "white",
              backgroundColor: "blue" //#0000FA
            }}
          >
            <div
              onClick={() => {
                this.setState({
                  openForm: true,
                  alsoed: false,
                  scrolled: true
                });
                this.navbar.current.scrollIntoView("smooth");
                this.props.pauseScroll();
                //const answer = this.isInViewport();
                //if (!answer) {
                console.log(
                  "go"
                ); /*
              
              clearTimeout(this.highlighting)
             this.highlighting =setTimeout(
                () =>
                  this.navbar.current.scrollIntoView({
                    block: "end",
                    behavior: "smooth"
                  }),
                250
              );*/
                //}
              }}
              style={
                !this.state.openForm
                  ? {
                      fontWeight: "bolder",
                      textDecoration: "underline",
                      cursor: "pointer"
                    }
                  : { display: "none" }
              }
            >
              <br />
              join us / contact
            </div>
          </div>
          <div
            ref={this.navbar}
            style={
              this.state.openForm
                ? {
                    display: "flex",
                    position: "relative",
                    width: "100%",
                    height: "470px"
                  }
                : {
                    display: "flex",
                    position: "relative",
                    width: "100%",
                    height: "min-content"
                  }
            }
          >
            <div className={this.state.openForm ? "formbkgd" : "formbkgdclsd"}>
              <div
                onClick={() => {
                  this.setState({ openForm: false, scrolled: false });
                  this.invite.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                }}
                style={{
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  color: "white",
                  position: "absolute",
                  right: "33px",
                  top: "18px",
                  fontSize: "25px",
                  cursor: "pointer"
                }}
              >
                &times;
              </div>
              <ReactContactForm
                to="nmcarducci@gmail.com"
                titlePlaceholder="Topic"
                contentsPlaceholder="Body"
                className="emailform"
              />
              <div
                style={{
                  position: "relative",
                  top: "70px",
                  color: "rgb(200,200,250)"
                }}
              >
                nmcarducci@gmail.com
              </div>
            </div>
          </div>
          <div style={this.state.openForm ? { display: "none" } : {}}>
            <SocialIcon
              style={{
                height: "40px",
                width: "40px"
              }}
              url="https://twitter.com/saverparty"
            />
            tweet me <a href="https://twitter.com/saverparty">@saverparty</a>
          </div>
          <span
            /*
          onMouseOver={(e) => {
            var rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left; //x position within the element.
            var percentage = x / size;
            var go = percentage * 10;
            var uh = go ? go - 5 : -5;
            fo = String(Math.round(uh));
            console.log(`${fo + "px"} 5px 5px 1px`);
          }}*/
            className={"showss"}
            style={{
              display: "inline",
              width: "max-content",
              height: "min-content",
              maxWidth: "98%",
              boxDecorationBreak: "clone",
              transition: ".25s linear 0s"
            }}
          >
            <SocialIcon
              style={{
                height: "40px",
                width: "40px"
              }}
              url="https://www.researchgate.net/project/Class-action-suit"
            />
            &nbsp;
            <a href="https://www.researchgate.net/project/Class-action-suit">
              researchgate.net/project/Class-action-suit
            </a>
            <br />
            <div
              style={{
                border: "1px dotted rgba(20,20,20,.3)",
                padding: "2px"
              }}
            >
              Debt to earn back from seller?
              <br />
              Contracts made under duress and under impossible pretenses are
              void
              <br />
              Impossible because it requires the unrequited consent of someone
              with money
              <br />
              to be possible
            </div>
          </span>
          <div
            className={"showss"}
            style={{ width: "90%", padding: "10px 0px" }}
          >
            - Debt & Invoices isn't based in reality. Without numbers, you
            couldn't do it.
            <br />
            <br />
            - Any impossible contract is slavery, although voluntary.
            <br />
            <br />
            - Rothbard calls voluntary slavery an oxymoron, but it is still
            slavery since you need to call an impossible contract something.
            forced majeure will end it.
            <br />
            <br />
            - Indentured servitude has the ability to settle without help from
            anyone else. Indentured means it can be worked out of. Debt is just
            servitude of the borrower & their consumers
            <br />
            <br />- Microeconomics teaches this chart in terms of the government
            taxing, but x is just the same.
            <br />
            <br />x = the burden of interest, price-fixes (not quantity of
            interventionalist fixes) or unsettled trade beyond escrow or general
            accrual
          </div>
          {/*<TwitterTweetEmbed
            key={" t1334069232846442496"}
            tweetId={"1334069232846442496"}
          />*/}
          {/*<TwitterTweetEmbed
            key={" t1334096499123294209"}
            tweetId={"1334096499123294209"}
          />*/}
          <div style={styleToApply}>
            Lending is a conspiracy to prohibit trade
          </div>
          <br />
          <div style={styleToApply}> </div>
          <br />
          <div
            style={{
              textDecoration: "underline",
              fontSize: "15px",
              color: "rgb(70,70,200)"
            }}
          >
            stop prohibiting trade. borrowers must not only earn interest but
            that principle back from the seller for the same product at a higher
            price for both curves...
          </div>
          <div
            style={{
              position: "relative"
            }}
          >
            <img
              style={{ width: "90%", maxWidth: "800px" }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/ohyyc9wensqjmar/interest%20dead%20weight%20%282%29.png?dl=0"
              }
              alt="err"
            />
          </div>
          <br />
          <div style={{ textDecoration: "underline" }}>
            Duress earn back from seller, timed. Agreement to give money that
            isn't theirs to price-fix or compel share-dilution nonconsensually,
            so the malfeasant, collusive and conspiring regulators wait
          </div>
          <br />
          <div style={styleToApply}>
            They have no right to encroach in the market marking prices based on
            impossible promises, or impede in the market like a monopoly, but
            neither do the other two options: fed liquidity or the irs.
          </div>
          <div style={styleToApply}>
            "Opponents of anti-scalping laws say that ticket sales should be
            like any other venture in a capitalist economy and the free market.
            That is, the market should dictate at which price tickets are sold."
            That's not capital or a product
            <br />
            Just abuse, harm and quantifiable damages
          </div>
          <div style={styleToApply}>
            Fraud is certainly paying prices at $82t debt when there is only $7t
            cash. Price fixing
          </div>
          <div style={styleToApply}>
            Amazing eligible ppp isn’t fraud printing/dilution without consent
            from other savers to businesses that are already historically
            getting revenue Claiming to be for everyone but doing that Just to
            save their bills
          </div>
          <div style={styleToApply}>
            How does $7t cash turn into $82t debt? All sellers buy bonds 11x
            over?
          </div>
          {/*<TwitterTweetEmbed
            key={" t1333475443064844289"}
            tweetId={"1333475443064844289"}
          />*/}
          <a
            ref={this.savingsRate}
            href="https://froth.app"
            style={{
              textDecoration: "none",
              position: "relative",
              height: "min-content",
              border: "3px solid black",
              width: "max-content"
            }}
          >
            <img
              style={{ width: "60px", height: "auto" }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/u9kahqiqiiqse5t/froth%20logo300150.png?dl=0"
              }
              alt=""
            />
          </a>
          <a
            style={{
              textDecoration: "none",
              fontSize: "14px",
              marginTop: "4px",
              width: "max-content"
            }}
            href="https://froth.app"
          >
            froth.app
          </a>
          <br />
          {
            //width && <DebtToSales width={Math.min(600, width - 100)} /> //vApj
          }
          <div
            //style={{ display: "flex", flexWrap: "wrap" }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              top: "0px",
              left: "0px",
              width: "100%",
              position: "relative",
              display: "flex",
              flexWrap: "wrap",
              height: "max-content"
              //columnCount:1,
              //columnGap: "0"
            }}
          >
            <div style={styleToApply}>
              Wanna talk about things people r dying over? Debt is IMPOSSIBLE.
              <br />
              😤macroeconomics is a psyop;
              <br />
              😍microeconomics explains what we need to know.
              <br />
              😜Microeconomics describes intervention as a negative,
              <br />
              🤣while macroeconomics teaches intervention by I + G - C
              (interest/dollar-split, bargaining opportunity cost, & principal
              re-servitude) as additive
            </div>
            <div style={styleToApply}>
              How about calling bond account valuation “savings,” & treasury
              shares not considered in outstanding valuation metrics.
            </div>
            <div style={styleToApply}>
              Debt requires:
              <br />
              <br />
              1) dollar split
              <br />
              2) opportunity cost to bargain
              <br />
              3) earning principal back from the producer... plus interest from
              no where- profit outlays, interbank stoploss; share miscount Joe
              Biden is a medical professional lobbyist, trump wants to margin
              target. I want to base prices in reality
            </div>

            <div style={styleToApply}>
              No cash bail or cash bail. There is an alternative: JAIL
            </div>
            <div style={styleToApply}>
              &nbsp; Let me negotiate directly with my doctor. Ban invoices and
              insurance - unless it is a gift certificate broker (not-price
              variable)
            </div>
            <div style={styleToApply}>
              &nbsp; Why didn’t you sell each song a la carte- All equity with
              bondage allows for hostility
            </div>

            <div style={styleToApply}>
              Should always be a royalty contract disbursed to profit upon sale
              or withdrawal of the entrepreneur/board/partner/shareholder
              Time-based royalty has nothing to do with the success of the
              business- Assets still have to be greater than debts on their
              account, unless you mean collateralized will retain value for the
              repossessor, but that’s not how price elasticity works granting
              the repossessor wants to resell it
            </div>

            <div style={styleToApply}>
              <span
                style={{ fontWeight: "bolder", textDecoration: "underline" }}
                onClick={() => {
                  this.trueGDP.current.scrollIntoView("smooth");
                  this.props.pauseScroll();
                  this.setState({ highlightTrueGDP: true });

                  clearTimeout(this.highlighting);
                  this.highlighting = setTimeout(
                    () => this.setState({ highlightTrueGDP: false }),
                    10000
                  );
                }}
              >
                Growth GDP - Debt - money is changes fixed for only natural
                redistribution
              </span>
              . Growth is merely growing population, debt, money or at best
              natural redistribution - none of that is necessarily “good” in
              fact most of a growing economy is BAD
            </div>
            <div style={styleToApply}>
              m1 = $7t
              <br />
              gdp = $20t
              <br />
              <br />
              is velocity gdp/m1?
              <br />
              <br />
              of economist/Fed record, evidently
              velocityOfM1*m1===velocityOfM2*m2===GDP
              <br />
              but what has $7t ($2t) of cash spending $22t of cash really mean?
              Well, invoices are built up
              <br />
              I'm sure pensions and asset valuations are included as capital
              gains and distributions.
              <br />
              but most of all takeaways, most of the dollars end up in the same
              place
              <br />
              <br />
              see froth.app for more
              {
                //width && <TsyOperating width={Math.min(600, width - 100)} /> //xRcV
              }
            </div>
            <div style={styleToApply}>
              technical innovation only results in higher asset prices because
              of debt. scarcity exists raising costs, but equal to competition
              lowering costs (in an economy without debt)
            </div>
            <div style={styleToApply}>
              Velocity of money- Communism is centralization by its citation of
              events and scenarios, actually Your money is not a service it is
              intervention of however trade will naturally fall Unless we wait,
              right They have no right to encroach in the market like that, but
              neither do the other two options: fed liquidity or the irs. Sales
              tax per voluntary location geohash id on transaction for sales tax
              to pick up
            </div>

            <div style={styleToApply}>
              Royalty contracts no deadline- Is capitalism securitizing human
              capital?
            </div>
          </div>
          {/*<TwitterTweetEmbed
            key={" t1328381052960772096"}
            tweetId={"1328381052960772096"}
          />*/}
          {/*<TwitterTweetEmbed
            key={" t1332874788004622341"}
            tweetId={"1332874788004622341"}
          />*/}
          {/*<TwitterTweetEmbed
            key={" t1332444460958048266"}
            tweetId={"1332444460958048266"}
          />*/}
          <div ref={this.starve}>
            {/*<TwitterTweetEmbed
              key={" t1334325432687226881"}
              tweetId={"1334325432687226881"}
            />*/}
          </div>
          <br />
          Civil Rights Act doesn't have to include drug-addicts since Amendment
          13/14 protects contributors to society of any predolictions have been
          vowed to be equally supported by regulators in adjunicating for the
          aggreived party, or taxing fairly for free-rider-immutable
          services/goods
          <br />
          {/*<TwitterTweetEmbed
            key={" t1331343453687574531"}
            tweetId={"1331343453687574531"}
          />
          <TwitterTweetEmbed
            key={" t1333518304867217412"}
            tweetId={"1333518304867217412"}
          />*/}
          {/*<TwitterTweetEmbed
            key={" t1333904053886128128"}
            tweetId={"1333904053886128128"}
          />*/}
          {/*<TwitterTweetEmbed
            key={" t1332375252538707972"}
            tweetId={"1332375252538707972"}
          />*/}
          <div ref={this.employmentHouse} />
          {!this.state.showM1 ? (
            <div
              style={{
                height: "min-content",
                marginTop: "10px",
                color: "rgb(70,140,250)",
                textDecoration: "underline"
              }}
              onClick={() => this.setState({ showM1: true })}
            >
              <div>
                chart of 365day/year employment hours/employed persons &
              </div>
              <div>wages to home prices</div>
            </div>
          ) : (
            <div
              style={{
                marginTop: "10px",
                color: "rgb(70,140,250)",
                textDecoration: "underline"
              }}
              onClick={() => this.setState({ showM1: false })}
            >
              &times;close
            </div>
          )}
          <div ref={this.employmentOfOne}>
            {/*width && (
              <Employ2Pop
                width={Math.min(600, width - 100)}
                settleDropboxFree={settleDropboxFree}
              />
            )*/}
          </div>
        </div>
        <br />
        "No fault of their own," - Biden straight from Medical Industry Complex
        lobby. Ban invoices you fucking retard
        <br />
        <br />
        You can’t still believe they don’t want to spend. &nbsp;
        <a href="https://johnshopkins.academia.edu/NickCarducci">Same party</a>
        &nbsp; on outstanding bills
        <br />
        Nick Carducci spending isn’t the problem, it’s what they are spending on
        an lying about it.
        <br />
        Clarence Coggins spending my money without my consent between borrower
        and lender is a problem I’m pissed
        <br />
        Nick Carducci if the money went back to the borrower there would be less
        to be pissed at.
        <br />
        Clarence Coggins the borrower’s customers deserve that money, those
        borrowers became monopsony && colonized
        <br />
        <br />
        We don't need an expansion of currencyComponentOfM1 to open
        <br />
        we need profit-share economy that WAITS for customers before paying
        income
        <br />
        <br />
        <div ref={this.trueGDP}>
          {
            //width && <RealRealGDP width={Math.min(600, width - 100)} />//Br2V
          }
          <br />
          <br />
          m1v1===m2v2===GDP===C+I+G+NE+P
          <br />
          <br />
          Is a farce.. Investment IS Consumption, if GDP - new money - new debt
          is to discover funds traded over a quarter or year. Population is most
          of the factors but is not correct algebra unless people are
          denominated in dollars. The denomination of Investment is what is
          consumed, not what is promised, which is counted when the investee
          consumes. G is government investment and the same case stands for this
          as it does for private investment (I), it is consumption, but
          consumption that is completely based on debt or taking away from
          consumption so in either case it is moot in ACTUALLY COUNTING trueGDP
          (not real GDP which uses a basket of assets to fix for over time, but
          excludes the largest asset for living expenses of all, homes... these
          assets aren't real GDP as described because most are booned by debt,
          which is negative product, admittedly by net exports [NE] by
          nomenclature discussing exports are good for money profit but assets
          are gone... so hardly a win but still an exchange of assets excluding
          new money and new debt)
        </div>
        <br />
        <br />
        you don't buy a house when you borrow, you take from consumers more than
        can be produced at by competing with consumers and cornering supply like
        a monopsony conspiring with the squatting-borrower and the owner taking
        and keeping down-payments. Without this operation, investment would
        be&nbsp;
        <a href="https://vaults.biz">profit-share</a>
        <br />
        <br />
        reduce fees always has a catch not on the front page, should be
        mandatory to have minimal viable product in terms of data-share or
        auxilliary effects, expecially&nbsp;
        <span
          style={{
            fontFamily: '"Pacifico", sans-serif', //sans-serif no diff
            textEmphasis: "italics",
            fontWeight: "bolder",
            textDecoration: "underline"
          }}
          onClick={() => {
            this.jhuecon.current.scrollIntoView("smooth");
            this.props.pauseScroll();
            this.setState({ highlightJHUECON: true });

            clearTimeout(this.highlighting);
            this.highlighting = setTimeout(
              () => this.setState({ highlightJHUECON: false }),
              10000
            );
          }}
        >
          intentionally-suppressed
        </span>
        <br />
        <br />
        {/*width && (
          <EmploymentHours
            showM1={this.state.showM1}
            width={Math.min(600, width - 100)} //xRYU
          />
        )}
        {width && (
          <EmploymentVelocity
            showM1={this.state.showM1}
            width={Math.min(600, width - 100)} //BRZs
          />
        )*/}
        Like cheetos and oreos, $30Debt vs. $1 (m1 is worse, this must be
        because currencyComponentOfM1 has been different than M1 for a while,
        not just&nbsp;
        <a href="https://fred.stlouisfed.org/series/M1SL">
          the March 2020 change
        </a>
        )
        {/*width && (
          <EmploymentVersusDebtHours
            showM1={this.state.showM1}
            width={Math.min(600, width - 100)} //BS7O
          />
        )*/}
        <br />
        Home value + interest expected === Bondvalue === 13*cash
        <br />
        debt/cash === 13/1 or 13:1 or 1300%
        <br />
        {/*width && (
          <CurrencyPerCitizen
            showM1={this.state.showM1}
            width={Math.min(600, width - 100)} //BStH
          />
        )*/}
        <div style={{ display: "flex" }}>
          <a
            href="https://constitutioncenter.org/interactive-constitution/amendment/amendment-xvi"
            style={{
              position: "relative"
            }}
          >
            <img
              style={{ height: "300px" }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/di3vvdp7out75fx/GoldBondWarning.jpg?dl=0"
              }
              alt="imprisonment or insurmountable fine if you do not buy military-contract bonds"
            />
          </a>
          <div
            style={{
              position: "relative"
            }}
          >
            <img
              ref={this.IRS}
              style={{
                height: "300px",
                border: this.state.highlightIRS ? "3px solid blue" : "",
                borderRadius: "10px",
                padding: "10px"
              }}
              src={
                settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/7kna7kxss5vxx96/SocialSecurityWarning.jpeg?dl=0"
              }
              alt="imprisonment or insurmountable fine if you do not invest in public companies and keep down payments of your borrowers' customers' after reposession"
            />
          </div>
        </div>
        <div ref={this.scrolllto} />
        <br />
        <br />
        {/*<a
          style={{ fontSize: "10px" }}
          href="https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy"
        >
          https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy
        </a>*/}
        {/*<TwitterTweetEmbed key={" tweet"} tweetId={"1304091972496510976"} />*/}
        Where is mconnel going to go? he is taking the pubs down with him -
        slave owner dems need a new insurrectionist against treasonous finance
        3;3;1 <a href="https://micro-theory.com">Micro-Theory.com</a>
        <br />
        <a href="https://wavv.art/forumptd8BTCtfc4aHAc36QSR">
          wavv.art/forumptd8BTCtfc4aHAc36QSR
        </a>
        <br />
        fighting income-inequality with finance/involuntary dollar/market-share
        split is not the way to&nbsp;
        <span
          style={{ fontWeight: "bolder", textDecoration: "underline" }}
          onClick={() => {
            this.livingWage.current.scrollIntoView("smooth");
            this.props.pauseScroll();
            this.setState({ highlightLivingWage: true });

            clearTimeout(this.highlighting);
            this.highlighting = setTimeout(
              () => this.setState({ highlightLivingWage: false }),
              10000
            );
          }}
        >
          keep equity level with labor's worth in living costs
        </span>
        {/**I don't have any update for you, the review is ongoing */}
        "I really appreciate you picking up the bill," "should have haggled and
        brought ask to bid"
      </div>
    );
  }
}
