import React from "react";

const nato = [
  [2012, 741064],
  [2013, 696291],
  [2014, 660062],
  [2015, 641253],
  [2016, 651201],
  [2017, 626380],
  [2018, 642012],
  [2019, 685099]
];
class NATO extends React.Component {
  constructor(props) {
    super(props);

    let noData = [];
    let date = [];
    let curren = [];
    let currenData = [];
    const all = [...curren];
    var lowDollar = Math.min(...all);
    var lowDate = Math.min(...date);
    var highDollar = Math.max(...all);
    var highDate = Math.max(...date);
    var state = {
      //"engl churchill; Is H; mlk pearl harbor, 911"
      date,
      highDollar,
      noData,
      yAxis: highDollar - lowDollar,
      xAxis: highDate - lowDate,
      lowDollar,
      highDate,
      lowDate,
      currenData
    };
    this.state = state;
  }
  componentDidUpdate = () => {
    if (this.state.chartType !== this.state.laststate) {
      this.setState({ laststate: this.state.chartType }, () => {
        let noData = [];
        let date = [];
        let curren = [];
        let currenData = [];

        const all = [...curren];
        var lowDollar = Math.min(...all);
        var lowDate = Math.min(...date);
        var highDollar = Math.max(...all);
        var highDate = Math.max(...date);
        //console.log(dataData);
        var state = {
          date,
          noData,
          highDollar,
          yAxis: highDollar - lowDollar,
          xAxis: highDate - lowDate,
          lowDollar,
          highDate,
          lowDate,
          currenData
        };
        this.setState(state);
      });
    }
  };
  render() {
    const { types } = this.state;
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };

    const linecss = {
      left: "0px",
      bottom: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "translate(0%,0%) scale(1,-1)"
    };
    const shortNumber = (scler, notRound) => {
      var newnum = String(Math.round(scler));
      if (notRound) newnum = String(scler);
      var app = null;
      var decimal = null;
      const suff = ["", "k", "m", "b", "t"];
      for (let i = 0; i < suff.length; i++) {
        if (newnum.length > 3) {
          decimal = newnum[newnum.length - 3];
          newnum = newnum.substring(0, newnum.length - 3);
        } else {
          app = i;
          break;
        }
      }
      return newnum + (decimal ? "." + decimal : "") + suff[app];
    };
    //console.log(this.state.oilprice);
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) *
        0.9 *
        this.props.lastWidth,
      0
    ]);
    //console.log(this.state.oilprice);

    const currenData = nato
      .filter((x) => x[1] !== 0)
      .map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          0.9 *
          this.props.lastWidth,
        ((y - this.state.lowDollar) / this.state.yAxis) * 150
      ]);
    const labelitem = {
      fontSize: "10px",
      color: "white",
      width: "max-content",
      margin: "0px 4px"
    };

    const StringDecimal = (y, suffindex = 3) => {
      var string;
      if (y) {
        const x = String(y);
        if (x.includes(".")) {
          const here = x.indexOf(".");
          string = x.substring(0, here) + x.substring(here, here + suffindex);
        } else string = x;
      }
      return string;
    };
    return (
      <div
        style={{
          width: "100%",
          minHeight: "240px",
          position: "relative",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            bottom: "0px",
            zIndex: "1",
            backgroundColor: "rgba(255,255,255,.3)",
            padding: "4px 8px",
            position: "absolute",
            right: "0px"
          }}
        >
          <a
            style={{ color: "grey" }}
            href={
              "https://www.nato.int/nato_static_fl2014/assets/pdf/pdf_2019_06/20190625_PR2019-069-EN.pdf"
            }
          >
            {this.state.lowDate}
            &nbsp;-&nbsp;
            {this.state.highDate}
          </a>
        </div>
        <div
          style={{
            zIndex: "1",
            textAlign: "left",
            position: "absolute"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              backgroundColor: "rgba(250,250,250,.6)",
              color: "white",
              padding: "4px",
              maxWidth: "max-content",
              width: "calc(100% - 80px)"
            }}
          ></div>
        </div>
        <div style={{ transform: "translate(0px,230px)" }}>
          <svg style={linecss} xmlns="http://www.w3.org/2000/svg">
            {noData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={4}
                    height={4}
                    stroke="rgb(230,230,230)"
                    fill="transparent"
                    strokeWidth={0}
                    key={i}
                  />
                )
            )}
            {currenData.map(
              ([x, y], i) =>
                !isNaN(x) &&
                !isNaN(y) && (
                  <rect
                    x={x}
                    y={y}
                    width={2}
                    height={1}
                    stroke="deepskyblue"
                    fill="blue"
                    strokeWidth={1}
                    key={i}
                  />
                )
            )}
          </svg>
        </div>
        {/*<div
          style={{
            backgroundColor: "rgba(250,250,250,0.6)",
            top: "10px",
            height: "40px",
            display: "flex",
            position: "relative",
            width: "100%",
            left: "2px",
            zIndex: "0",
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <div
            style={{
              fontSize: "15px",
              display: "flex",
              position: "absolute",
              width: "max-content"
            }}
          ></div>
          </div>*/}
      </div>
    );
  }
}

export default NATO; /**

        const basics =
          expense -
          poverty[yr].clothing +
          poverty[yr].food +
          poverty[yr].rentandutilities +
          poverty[yr].standardizedguaranteeschemesmedicine;
        var last2 = null;
        var lastexp = null;
        Object.keys(flows).forEach((x, i) => {
          if (yr === x) {
            const yar = Object.keys(flows)[i - 1];
            //var flo = flows[Object.keys(flows)[i - 1]];
            //if (flo) last3 = flo.income;
            var povert = flows[yar];
            if (povert) lastexp = povert.expenses;
          }
        });
        //var last3 = null;
        Object.keys(poverty).forEach((x, i) => {
          if (yr === x) {
            const yar = Object.keys(poverty)[i - 1];
            //var flo = flows[Object.keys(flows)[i - 1]];
            //if (flo) last3 = flo.income;
            var povert = poverty[yar];
            if (povert)
              last2 =
                lastexp -
                povert.clothing +
                povert.food +
                povert.rentandutilities +
                povert.standardizedguaranteeschemesmedicine;
          }
        });
        if (last2) {
          growthdebt.push((basics - last2) / last2);
          growthdebtData.push([year, (basics - last2) / last2]);
          //growthcurren.push((income - last3) / last3);
          //growthcurrenData.push([year, (income - last3) / last3]);
        }
* */
