import React from "react";
import "./styles.css";

class Employ2Pop extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "400px",
          overflow: "auto",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "min-content",
            height: "min-content"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
              fontSize: "16px",
              width: "900px",
              height: "min-content",
              transition: "0.3s ease-in"
            }}
          >
            <div style={{ display: "flex" }}>
              <a
                className="charttitle"
                style={{ fontWeight: "bolder", textIndent: "10px" }}
                href="https://fred.stlouisfed.org/graph/?g=BFC3"
              >
                U.S. Employment-Population since 1948
              </a>
              <a
                className="charttitle"
                style={{ fontWeight: "bolder" }}
                href="https://froth.app"
              >
                froth.app
              </a>
            </div>
            {/*<iframe
            src="https://fred.stlouisfed.org/graph/graph-landing.php?g=o0KQ&width=670&height=300"
            scrolling="no"
            className="embed-container"
          />*/}
            <iframe
              title={
                "60% employment since 1948"
              }
              src="https://fred.stlouisfed.org/graph/graph-landing.php?g=BFC3&width=700&height=400"
              scrolling="no"
              style={{ height: "500px" }}
            />
          </div>
          <div
            className="chartlabels"
            style={{
              transform: "translateX(-290px)",
              backgroundColor: "rgb(255,255,255)",
              height: "min-content"
            }}
          >
            60% employment since 1948,&nbsp;<a href="https://froth.app">see more</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Employ2Pop;
