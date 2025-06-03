import React from "react";
import { UAParser } from "ua-parser-js";
//import Older from "./Older";
import "./style.css";
import AApp from "./AApp";
import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

var curses = ["fuck"];
//var curses = ["bitch", "cunt", "pussy", "pussies", "fuck", "shit"];

//var bypass = false;
/*this.props.auth !== undefined &&
this.props.user !== undefined &&
!this.props.user.under13 &&
this.props.user.showCurses;*/

//RegisterCurseWords(parent.message, bypass);
export const RegisterCurseWords = (mT, bypass) => {
  if (bypass) {
    return mT;
  } else {
    const newerText = (curse, index) => {
      var hyphen = "-";
      for (let x = 0; x < curse.length - 1; x++) {
        hyphen = hyphen + "-";
      }
      return mT.replace(mT.substring(index, index + curse.length), hyphen);
    };
    var set = curses.map((c) => {
      var index = 0;
      if (mT.toLowerCase().includes(c)) {
        var curses = [];
        mT.split(/\W+/).map(
          (cc) => cc.toLowerCase().includes(c) && curses.push(cc)
        );
        var set = curses.map((curse) => {
          index = mT.lastIndexOf(curse);
          return (mT = newerText(curse, index));
        });
        return set[set.length - 1];
      } else return mT;
    });
    return set[set.length - 1];
  }
}; //q regs, poison, libertarian expiry

class Authentication extends React.Component {
  constructor(props) {
    super(props); //"everyone in order to be for the people that use it. who decides?"
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    const width =
      /* name.includes("Safari")
      ? window.screen.availWidth
      : */ window.innerWidth;
    /*const height = name.includes("Safari")
      ? window.screen.availHeight
      : window.innerHeight;*/
    this.state = {
      lastWidth: width,
      width,
      availableHeight: name
        ? window.screen.availHeight - 20
        : window.innerHeight,
      sudo: true,
      browser: name,
      ios: name.includes("Safari"),
      auth: undefined,
      user: undefined,
      meAuth: {},
      //storedAuth: undefined,
      storableAuth: [],
      scrollY: 0,
    };
    this.anarchy = React.createRef();
    this.taxes = React.createRef();
  }
  refresh = (event, first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    //console.log(width);
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          scrollY: window.scrollY,
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight,
        });
      }, 600);
    }
  };
  componentDidMount = () => {
    this.setState({
      ios: this.state.browser.includes("Safari"),
      iosNoPhoto: this.state.browser.includes("Safari"),
    });
    this.checkInstall(true);
    window.FontAwesomeConfig = { autoReplaceSvg: "nest" };
    window.addEventListener("resize", this.refresh);
    this.refresh(null, true);
  };
  componentWillUnmount = () => {
    window.removeEventListener("beforeinstallprompt", this.beforeinstallprompt);
    window.removeEventListener("appinstalled", this.afterinstallation);
    this.matchMedia &&
      this.matchMedia.removeEventListener("change", this.installChange);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
  };
  beforeinstallprompt = (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    this.setState({ showPWAprompt: true }, () => (this.deferredPrompt = e));
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  };
  afterinstallation = () => {
    this.setState({ showPWAprompt: false }, () => (this.deferredPrompt = null));
    console.log("PWA was installed");
  };
  installChange = (evt) => this.setState({ showPWAprompt: !evt.matches });

  checkInstall = (addListers) => {
    if (
      navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches ||
      document.referrer.startsWith("android-app://")
    ) {
      console.log("PWA");
      /*window.alert(
        `wow, thanks for adding us to your homescreen, please re-add ` +
          `if any bugs pop up and email nick@thumbprint.us with any complaints! ` +
          `STAGE: Work-In-Progress Beta (a.k.a. Alpha)`
      );*/
    } else {
      const ios = () => {
        return (
          [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod",
          ].includes(navigator.platform) ||
          // iPad on iOS 13 detection
          (navigator.userAgent.includes("iOS") && "ontouchend" in document)
        );
      };
      //!/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
      if (ios()) {
        if (addListers) {
          this.matchMedia = window.matchMedia("(display-mode: standalone)");
          this.matchMedia.addEventListener("change", this.installChange);

          console.log("PWA query");
          window.addEventListener(
            "beforeinstallprompt",
            this.beforeinstallprompt
          );
          window.addEventListener("appinstalled", this.afterinstallation);
          this.refresh();
        }
      } else
        this.setState({ showPWAprompt: true }, () =>
          console.log("PWA query on iOS")
        );
    }
  }; //cut progressive truncated wholesale tax deficit
  //cut tax deficit
  render() {
    const { pathname, location, navigate } = this.props,
      sp =
        location.state &&
        location.state.statePathname &&
        location.state.statePathname;
    const { availableHeight, showPWAprompt, width, scrollY, planner } =
      this.state;
    const space = " ";
    return (
      <div>
        <div>
          <hr />
          <h1>🐿️ The Saver Party Manifesto</h1>
          <p>
            <strong>
              A New Deal for the Dollar, for Dignity, and for the Future
            </strong>
          </p>
          <hr />
          <h2>🏛️ Who We Are</h2>
          <p>
            The Saver Party exists to protect what others take for granted: the
            value of your dollar, the dignity of work, and the long-term
            stability of the American economy.
            <br />
            We stand for{" "}
            <strong>
              honest money, ethical ownership, and productive enterprise
            </strong>
            —not speculation, rent extraction, or inflation disguised as
            prosperity.
          </p>
          <hr />
          <h2>💵 What We Believe</h2>
          <p>
            <strong>
              The U.S. dollar is not backed by debt—it is backed by land, labor,
              and law.
            </strong>
            <br />
            To default on public obligations is to risk surrendering our land,
            our independence, and our dignity to bondholders—foreign and
            domestic.
          </p>
          <p>We refuse to let that happen.</p>
          <hr />
          <h2>🔑 Our Core Principles</h2>
          <h3>
            ✅ <strong>Savers First, Not Speculators</strong>
          </h3>
          <p>
            We believe in rewarding those who live within their means,
            contribute value, and build wealth without debt traps or games.
            <br />
            We oppose policies that punish savers with inflation, asset bubbles,
            or legal systems built to favor lenders over working people.
          </p>
          <hr />
          <h3>
            🧾 <strong>Fair Taxation Through Progressive Consumption</strong>
          </h3>
          <p>
            We support a <strong>progressive national sales tax</strong> that
            taxes <strong>spending—not earning.</strong>
            <br />
            Corporations and consumers who drive demand for goods and services
            should fund public infrastructure—not workers, not homeowners.
          </p>
          <p>We will:</p>
          <ul>
            <li>
              <p>
                End income tax loopholes, depreciation games, and biased
                deductions.
              </p>
            </li>
            <li>
              <p>
                Eliminate capital gains taxes on{" "}
                <strong>real assets and stocks</strong>, including those
                appreciating due to inflation or anti-competitive hoarding.
                <br />
                Owning something long enough should not be a crime.
              </p>
            </li>
          </ul>
          <hr />
          <h3>
            🏥 <strong>Healthcare Should Be Bought, Not Billed</strong>
          </h3>
          <p>
            We don’t just want to simplify healthcare billing—we want to end it.
          </p>
          <p>
            Hospitals and providers should be paid directly through{" "}
            <strong>group-based subscriptions</strong> that carry over unused
            benefits.
            <br />
            Premiums should not expire like gift cards. Instead,{" "}
            <strong>care access should roll forward</strong>, encouraging
            healthy people to stay in the system while ensuring affordability.
          </p>
          <p>
            <strong>
              No more insurance gambling or medical escrows filled with blank
              checks.
            </strong>
            <br />
            Courts must not enforce billing contracts against individuals.{" "}
            <strong>
              Budget constraints—not litigation—should determine provider
              paydays.
            </strong>
          </p>
          <hr />
          <h3>
            🏠 <strong>Reclaim Housing from Rent Extraction</strong>
          </h3>
          <ul>
            <li>
              <p>
                <strong>Rent is not labor.</strong> Ownership should reflect
                contribution—not gatekeeping access to shelter.
              </p>
            </li>
            <li>
              <p>
                Lease agreements should be freely dissolvable unless the next{" "}
                <strong>two months are already paid</strong>, regardless of
                contractual tricks.
              </p>
            </li>
            <li>
              <p>
                Landlords must be limited in scale—initially to{" "}
                <strong>10 leases or fewer</strong>, then further reduced over
                time.
                <br />
                Shareholders and property firms should not dominate the housing
                supply.
              </p>
            </li>
            <li>
              <p>
                Instead, properties should be{" "}
                <strong>sold directly to residents</strong>, supported by{" "}
                <strong>microfinance at current down payment levels</strong>—not
                inflated mortgages.
              </p>
            </li>
            <li>
              <p>
                Hotels and daily rentals may be exempt{" "}
                <strong>
                  if priced affordably and not disguised as housing units.
                </strong>
              </p>
            </li>
          </ul>
          <p>
            We support housing as a <strong>productive good</strong>, not an
            investment to hoard and lease like scalped concert tickets.
          </p>
          <hr />
          <h3>
            🚫 <strong>End Debt Serfdom: Restore Economic Justice</strong>
          </h3>
          <p>
            We don’t just want fair interest rates—we want debt tied to real
            outcomes.
          </p>
          <ul>
            <li>
              <p>
                <strong>No compounding interest</strong> after the original loan
                term.
              </p>
            </li>
            <li>
              <p>
                Personal credit repayment should be limited to income generated
                within the{" "}
                <strong>industry for which the loan was approved.</strong>
              </p>
            </li>
            <li>
              <p>
                <strong>
                  Installment loans with collateral must return all prior
                  payments
                </strong>{" "}
                if the lender chooses to reclaim the asset.
              </p>
            </li>
          </ul>
          <p>
            In other words: if the bank wants the car,{" "}
            <strong>they give the money back</strong>.<br />
            Ownership is not a license to double-dip.
          </p>
          <p>
            We support replacing interest-bearing loans with{" "}
            <strong>payout schedules</strong>—fair agreements based on outcomes,
            not time passing.
          </p>
          <hr />
          <h3>
            🛠️ <strong>Growth Must Be Real — and From the Right Sources</strong>
          </h3>
          <p>
            Growth, when it comes, must come from{" "}
            <strong>greater access to new products</strong>, not:
          </p>
          <ul>
            <li>
              <p>More hours worked</p>
            </li>
            <li>
              <p>Central bank intervention</p>
            </li>
            <li>
              <p>Rich investors speculating</p>
            </li>
            <li>
              <p>Shrinkflation disguised as productivity</p>
            </li>
          </ul>
          <p>
            <strong>Dynamic demand</strong>—new goods that meet real needs—is
            the only justifiable source of economic expansion.
            <br />
            Everything else is a redistribution scheme benefiting insiders.
          </p>
          <hr />
          <h2>🗳️ What We’re Building</h2>
          <p>The Saver Party is for:</p>
          <ul>
            <li>
              <p>Workers who want financial security</p>
            </li>
            <li>
              <p>Young people who want homes—not mortgages</p>
            </li>
            <li>
              <p>Entrepreneurs who want alternatives to debt</p>
            </li>
            <li>
              <p>Families who want to own what they pay for</p>
            </li>
            <li>
              <p>Citizens who want a stable dollar and a fair shot</p>
            </li>
          </ul>
          <p>
            We are the party of <strong>earned ownership</strong>,{" "}
            <strong>clear limits</strong>, and <strong>economic honesty</strong>
            .
          </p>
          <hr />
          <h2>🐿️ Why the Squirrel?</h2>
          <p>
            Our mascot, the <strong>leucistic squirrel</strong>, symbolizes rare
            foresight. It prepares, it saves, and it survives without exploiting
            others.
            <br />
            Just like us.
          </p>
          <hr />
          <h2>🌍 Join the Movement</h2>
          <p>
            If you believe the economy should reward builders—not
            speculators—then you already belong in the Saver Party.
          </p>
          <p>
            📍 Visit:{" "}
            <a target="_new" href="https://www.saverparty.com">
              www.saverparty.com
            </a>
            <br />
            🗳️ Sign the petition:{" "}
            <a target="_new" href="https://change.org/nickcarducci">
              change.org/nickcarducci
            </a>
            <br />
            🐿️ Help us qualify for the 2026 ballot and beyond.
            <br />
            🔄 Share our message:{" "}
            <strong>Real value. Real rules. Real future.</strong>
          </p>
          <hr />
        </div>
      </div>
    );
    return !width ? null : pathname === "/" && !this.state.openAll ? (
      <AApp
        lastWidth={width}
        setIndex={() => this.setState({ openAll: !this.state.openAll })}
      />
    ) : (
      <App
        planner={planner}
        rediret={this.props.rediret}
        navigate={navigate}
        pathname={pathname}
        statePathname={sp}
        location={location}
        unmountFirebase={this.state.unmountFirebase}
        showPWAprompt={showPWAprompt}
        apple={!this.matchMedia}
        appHeight={availableHeight}
        width={width}
        scrollY={scrollY}
        setScroll={(e) => this.setState(e)}
        //history={history}
        closeWebAppPrompt={() => this.setState({ showPWAprompt: false })}
        addToHomescreen={async () => {
          this.setState({ showPWAprompt: false });
          if (!this.deferredPrompt) {
            window.alert(
              "for iOS, you must use their browser option, 'add to homescreen' " +
                "instead of providing web-developers beforeinstallprompt appinstalled"
            );
          } else {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            console.log(outcome);
            // the prompt can't be used again so, throw it away
            this.deferredPrompt = null;
          }
        }}
      />
    );
  }
}

const ClassHook = () => {
  const pathname = "/" + useParams()["*"],
    location = useLocation(),
    navigate = useNavigate();
  return pathname === "/moldmask" ? (
    <div />
  ) : (
    <Authentication
      pathname={pathname}
      location={location}
      navigate={navigate}
    />
  );
}; // "cannot be called inside a callback" <Hook/>
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        //exact
        path="/*"
        //children,render
        element={<ClassHook />} //Initelement
      />
    </Routes>
  </BrowserRouter>
);
//don't use the stupidunusedrouter.js
