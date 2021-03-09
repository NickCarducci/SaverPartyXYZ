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
          width: "600px",
          overflowX: "auto",
          overflowY: "hidden"
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "min-content",
            height: "400px"
          }}
        >
          <div
            style={{
              display: "flex",
              top: "60px",
              left: "100px",
              width: "100px",
              zIndex: "1",
              backgroundColor: "rgb(255,255,255)",
              height: "min-content",
              position: "absolute"
            }}
          >
            60% employment since 1948,&nbsp;
            <a href="https://froth.app">see more</a>
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "min-content",
              height: "min-content"
            }}
          >
            <div style={{ display: "flex", position: "absolute" }}>
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
            <br />
            <iframe
              title={"60% employment since 1948"}
              src="https://fred.stlouisfed.org/graph/graph-landing.php?g=BFC3&width=600&height=400"
              scrolling="no"
              style={{ height: "450px", width: "600px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Employ2Pop;
