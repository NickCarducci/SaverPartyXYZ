import React from "react";

class EmploymentHours extends React.Component {
  state = { showM1: true };
  render() {
    return (
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          position: "relative",
          left: "0px",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          transition: ".3s ease-out",
          height: this.state.showM1 ? "750px" : "100px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min-content",
            height: "750px",
            left: "0px"
          }}
        >
          {!this.state.showM1 ? (
            <div
              style={{
                height: "min-content",
                marginTop: "10px",
                color: "rgb(70,140,250)",
                textDecoration: "underline"
              }}
              onClick={() => {
                this.props.gonow();
                this.setState({ showM1: true });
              }}
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
          <iframe
            style={{
              width: "550px",
              height: this.state.showM1 ? "700px" : "0px"
            }}
            title="total dollars held"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=xRYU&width=500&height=600`}
            scrolling="no"
            className="embed-container1"
          />
        </div>
      </div>
    );
  }
}
export default EmploymentHours;
