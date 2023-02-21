import React from "react";

class Fraud6 extends React.Component {
  state = {};
  render() {
    const { width } = this.props;
    return (
      <iframe
        loading="lazy"
        style={{
          display: "flex",
          position: "relative",
          width,
          height: "760px"
        }}
        title="(( (v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 - NM - ND) / P) / currencyComponentOfM1"
        src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=IHdV&width=${width}&height=660`}
        className="embed-container1"
      />
    );
  }
}
export default Fraud6;
