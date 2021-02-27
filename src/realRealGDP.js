import React from "react";
import "./styles.css";

class RealRealGDP extends React.Component {
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
          //ref={this.chartSize}
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
              width: "1000px",
              height: "min-content",
              transition: "0.3s ease-in"
            }}
          >
            <a
              className="charttitle"
              href="https://fred.stlouisfed.org/graph/?g=Br2V"
            >
              <b>trueGDPbyNonDebt</b>
            </a>

            {/*<iframe
            src="https://fred.stlouisfed.org/graph/graph-landing.php?g=o0KQ&width=670&height=300"
            scrolling="no"
            className="embed-container"
          />*/}
            <iframe
              title={
                "v2 - GDP/m2-currencym1 (trueVelocity) * currencym1 = trueGDP"
              }
              src="https://fred.stlouisfed.org/graph/graph-landing.php?g=Br2V&width=700&height=400"
              scrolling="no"
              style={{ height: "500px" }}
            />
          </div>
          <div className="chartlabels">
            v2 - GDP/m2-currencym1 (trueVelocity) * currencym1 = trueGDP, not
            "real gdp" which doesn't account for unspent monetary-inflation
            (potential price-inelasticity inflation)
          </div>
        </div>
      </div>
    );
  }
}
export default RealRealGDP;
