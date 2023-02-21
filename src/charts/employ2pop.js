import React from "react";

class Employ2Pop extends React.Component {
  state = {};
  render() {
    const { width } = this.props;
    return (
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "1000px",
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden"
        }}
      >
        <div
          style={{
            right: "0px",
            zIndex: "1",
            position: "absolute",
            width: this.state.showFinanceWork ? "600px" : "200px",
            height: "500px"
          }}
        >
          <a
            className="charttitle"
            style={{
              right: "0px",
              width: "max-content",
              position: "absolute",
              fontWeight: "bolder"
            }}
            href="https://froth.app"
          >
            froth.app
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              position: "absolute",
              top: "0px",
              right: "0px",
              zIndex: "1",
              height: "600px"
            }}
          >
            <button
              onClick={() =>
                this.setState({ showFinanceWork: !this.state.showFinanceWork })
              }
            >
              jobs
            </button>
            <div style={{ position: "relative", height: "500px" }}>
              <img
                onClick={() => this.setState({ showFinanceWork: false })}
                style={{
                  opacity: this.state.showFinanceWork ? 1 : 0,
                  width: "auto",
                  height: "100%"
                }}
                alt="jobs bea"
                src={
                  this.props.settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/3x1tzkgciseaa05/duress%20average%20weekly%20earnings.jpeg?dl=0"
                }
              />
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "1000px"
          }}
        >
          <a
            className="charttitle"
            style={{
              width: "600px",
              fontWeight: "bolder",
              textIndent: "10px"
            }}
            href="https://fred.stlouisfed.org/graph/?g=BFC3"
          >
            U.S. Employment-Population since 1948
          </a>
          <div
            style={{
              width: "600px",
              backgroundColor: "rgb(255,255,255)"
            }}
          >
            60% employment since 1948,&nbsp;
            <a href="https://froth.app">see more</a>
          </div>
          <iframe
            loading="lazy"
            title={"60% employment since 1948"}
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=BFC3&width=${width}&height=400`}
            style={{ border: "none", height: "450px", width: "600px" }}
          />
          <a
            className="charttitle"
            style={{
              width,
              fontWeight: "bolder",
              textIndent: "10px"
            }}
            href="https://fred.stlouisfed.org/graph/?g=BFC3"
          >
            U.S. Employment-Working-Age since 1980
          </a>
          <div
            style={{
              justifyContent: "flex-start",
              display: "flex",
              width: "600px",
              backgroundColor: "rgb(255,255,255)"
            }}
          >
            <div
              style={{
                width: "200px"
              }}
            >
              Btwn 1.44-1.62 more 15-25 + 55+ than inbetween since 1980, those
              employed are not paid like 2% in tellers/finance since 1948,&nbsp;
              <a href="https://froth.app">see more</a>
            </div>
            <div
              style={{
                width: "400px"
              }}
            >
              {width && (
                <iframe
                  loading="lazy"
                  title={
                    "Btwn 1.44-1.62 more 15-25 + 55+ than inbetween since 1980"
                  }
                  src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=DMfl&width=${
                    width - 200
                  }&height=360`}
                  style={{
                    border: "none",
                    height: "450px",
                    width: width - 200,
                    position: "absolute",
                    right: "0px"
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Employ2Pop;
