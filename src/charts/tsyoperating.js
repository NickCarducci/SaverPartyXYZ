import React from "react";

class TsyOperating extends React.Component {
  state = {};
  render() {
    const { width } = this.props;
    return (
      <div
        style={{
          overflowX: !this.state.showM1 ? "hidden" : "auto",
          overflowY: "hidden",
          display: "flex",
          position: "relative",
          left: "0px",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          transition: ".3s ease-out",
          height: this.state.showM1 ? "760px" : "50px"
        }}
      >
        {!this.state.showM1 ? (
          <div
            style={{
              marginTop: "10px",
              color: "rgb(70,140,250)",
              textDecoration: "underline"
            }}
            onClick={() => this.setState({ showM1: true })}
          >
            chart of m1(money)/m2(money+bonds) and velocity
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
        {width && (
          <iframe
            loading="lazy"
            opacity={this.state.showM1 ? "1" : "0"}
            width={width}
            title="total dollars held"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=xRcV&width=${width}&height=600`}
            className="embed-container1"
          />
        )}
      </div>
    );
  }
}
export default TsyOperating;
