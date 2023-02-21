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
  useParams
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

/*class PathRouter extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name
    };
    //this.bf = React.createRef();
    this.matchMedia = null;
    this.deferredPrompt = null;
  }
  componentDidMount = () => {
    this.setState(
      {
        ios: this.state.browser.includes("Safari"),
        iosNoPhoto: this.state.browser.includes("Safari")
      },
      () => {
        this.resize();
        window.addEventListener("resize", this.resize);
        //window.addEventListener("scroll", this.scroll);
        this.checkInstall(true);
        window.FontAwesomeConfig = { autoReplaceSvg: "nest" };
        window.addEventListener("scroll", this.scroll);
      }
    );
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("scroll", this.scroll);
    window.removeEventListener("beforeinstallprompt", this.beforeinstallprompt);
    window.removeEventListener("appinstalled", this.afterinstallation);
    this.matchMedia &&
      this.matchMedia.removeEventListener("change", this.installChange);
  };
  resize = () =>
    this.setState(
      {
        width: this.state.ios ? window.screen.availWidth : window.innerWidth,
        availableHeight: this.state.ios
          ? window.screen.availHeight - 20
          : window.innerHeight
      },
      () => this.scroll()
    );

  scroll = () => {
    const w = !this.matchMedia ? window.screen.availWidth : window.innerWidth;
    this.setState(
      {
        width:
          window.innerHeight - window.document.body.offsetHeight < 0
            ? w - 16
            : w
      },
      () => {
        clearTimeout(this.timey);
        this.timey = setTimeout(
          () =>
            this.setState({
              onscroll:
                window.document.body.scrollHeight -
                  window.document.body.clientHeight >
                50
            }),
          200
        );
      }
    );
  };
  // Initialize deferredPrompt for use later to show browser install prompt.
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
      window.alert(
        `wow, thanks for adding us to your homescreen, please re-add ` +
          `if any bugs pop up and email nick@thumbprint.us with any complaints! ` +
          `STAGE: Work-In-Progress Beta (a.k.a. Alpha)`
      );
    } else {
      const ios = () => {
        return (
          [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod"
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
          this.resize();
        }
      } else
        this.setState({ showPWAprompt: true }, () =>
          console.log("PWA query on iOS")
        );
    }
  };
  render() {
    const { availableHeight, showPWAprompt, width } = this.state;
    return
  }
}*/

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
      scrollY: 0
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
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidMount = () => {
    this.setState({
      ios: this.state.browser.includes("Safari"),
      iosNoPhoto: this.state.browser.includes("Safari")
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
            "iPod"
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
    const {
      availableHeight,
      showPWAprompt,
      width,
      scrollY,
      planner
    } = this.state;
    const space = " ";
    console.log(width);
    return !width ? null : this.state.pathname === "/" &&
      !this.state.openAll ? (
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
