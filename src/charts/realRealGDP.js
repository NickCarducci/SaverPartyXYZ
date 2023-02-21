import React from "react";
class RealRealGDP extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "800px",
          width: "600px"
        }}
      >
        <div
          style={{
            fontWeight: "normal",
            fontSize: "14px",
            display: "flex",
            top: "33px",
            right: "0px",
            width: "150px",
            zIndex: "1",
            backgroundColor: "rgb(255,255,255)",
            height: "min-content",
            position: "absolute"
          }}
        >
          v2 - GDP/m2-currencym1 (trueVelocity) * currencym1 = trueGDP, not
          "real gdp" which doesn't account for unspent monetary-inflation
          (potential price-inelasticity inflation)
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "100%"
          }}
        >
          <a
            className="charttitle"
            style={{ fontWeight: "bolder", textIndent: "10px" }}
            href="https://fred.stlouisfed.org/graph/?g=Br2V"
          >
            trueGDPbyNonDebt
          </a>
          <a
            className="charttitle"
            style={{ fontWeight: "bolder" }}
            href="https://froth.app"
          >
            froth.app
          </a>
        </div>
        {width && (
          <iframe
            loading="lazy"
            title={
              "v2 - GDP/m2-currencym1 (trueVelocity) * currencym1 = trueGDP"
            }
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=Br2V&width=${width}&height=700`}
            style={{
              marginTop: "33px",
              height: "800px",
              width
            }}
          />
        )}
      </div>
    );
  }
}
export default RealRealGDP;
