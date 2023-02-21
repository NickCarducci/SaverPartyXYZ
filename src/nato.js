import React from "react";
import { gdpP, gdpPD } from "./gdpPdebt";

const natos = {
  2012: {
    Hungary: 297650,
    "United States": 712947,
    Turkey: 24956,
    "Czech Republic": 42780,
    Norway: 41560,
    Germany: 36168,
    "United Kingdom": 36563,
    Poland: 28365,
    France: 39105,
    Denmark: 25618,
    Canada: 19978,
    Albania: 19820,
    Italy: 20600,
    Romania: 7282,
    Spain: 10828,
    Netherlands: 8067,
    Croatia: 5059,
    "North Macedonia": 0,
    Greece: 4384,
    Belgium: 4023,
    Portugal: 2366,
    Bulgaria: 1099,
    "Slovak Republic": 794,
    Lithuania: 252,
    Latvia: 193,
    Estonia: 340,
    Slovenia: 423,
    Luxembourg: 167,
    Montenegro: 53
  },
  2013: {
    Hungary: 286341,
    "United States": 680856,
    Turkey: 27466,
    "Czech Republic": 42035,
    Norway: 43518,
    Germany: 34593,
    "United Kingdom": 39824,
    Poland: 28467,
    France: 39402,
    Denmark: 23682,
    Canada: 18764,
    Albania: 19022,
    Italy: 20078,
    Romania: 8160,
    Spain: 9495,
    Netherlands: 7702,
    Croatia: 4848,
    "North Macedonia": 0,
    Greece: 3999,
    Belgium: 3964,
    Portugal: 2457,
    Bulgaria: 1196,
    "Slovak Republic": 729,
    Lithuania: 267,
    Latvia: 212,
    Estonia: 361,
    Slovenia: 382,
    Luxembourg: 176,
    Montenegro: 49
  },
  2014: {
    Hungary: 281402,
    "United States": 653942,
    Turkey: 29727,
    "Czech Republic": 41003,
    Norway: 46234,
    Germany: 34749,
    "United Kingdom": 39902,
    Poland: 31874,
    France: 39149,
    Denmark: 22769,
    Canada: 20076,
    Albania: 18788,
    Italy: 18427,
    Romania: 9014,
    Spain: 9508,
    Netherlands: 7788,
    Croatia: 6113,
    "North Macedonia": 5743,
    Greece: 3939,
    Belgium: 3913,
    Portugal: 2263,
    Bulgaria: 1102,
    "Slovak Republic": 752,
    Lithuania: 322,
    Latvia: 221,
    Estonia: 386,
    Slovenia: 366,
    Luxembourg: 190,
    Montenegro: 52
  },
  2015: {
    Hungary: 316338,
    "United States": 641253,
    Turkey: 32522,
    "Czech Republic": 47264,
    Norway: 46900,
    Germany: 35898,
    "United Kingdom": 38940,
    Poland: 39940,
    France: 39199,
    Denmark: 22633,
    Canada: 23900,
    Albania: 16671,
    Italy: 17642,
    Romania: 10337,
    Spain: 10000,
    Netherlands: 7816,
    Croatia: 6057,
    "North Macedonia": 5853,
    Greece: 4073,
    Belgium: 3789,
    Portugal: 2384,
    Bulgaria: 1116,
    "Slovak Republic": 889,
    Lithuania: 425,
    Latvia: 254,
    Estonia: 418,
    Slovenia: 361,
    Luxembourg: 225,
    Montenegro: 51
  },
  2016: {
    Hungary: 362798,
    "United States": 656059,
    Turkey: 38203,
    "Czech Republic": 45598,
    Norway: 50937,
    Germany: 37598,
    "United Kingdom": 41590,
    Poland: 37082,
    France: 39950,
    Denmark: 24190,
    Canada: 23474,
    Albania: 16250,
    Italy: 20226,
    Romania: 10738,
    Spain: 9014,
    Netherlands: 8234,
    Croatia: 5696,
    "North Macedonia": 5770,
    Greece: 4190,
    Belgium: 3848,
    Portugal: 2364,
    Bulgaria: 1186,
    "Slovak Republic": 907,
    Lithuania: 575,
    Latvia: 364,
    Estonia: 450,
    Slovenia: 406,
    Luxembourg: 213,
    Montenegro: 56
  },
  2017: {
    Hungary: 402793,
    "United States": 642936,
    Turkey: 47323,
    "Czech Republic": 52714,
    Norway: 53460,
    Germany: 40447,
    "United Kingdom": 43257,
    Poland: 37558,
    France: 40852,
    Denmark: 24961,
    Canada: 30761,
    Albania: 17199,
    Italy: 21166,
    Romania: 14765,
    Spain: 10528,
    Netherlands: 8539,
    Croatia: 6120,
    "North Macedonia": 5532,
    Greece: 4213,
    Belgium: 3932,
    Portugal: 2398,
    Bulgaria: 1255,
    "Slovak Republic": 935,
    Lithuania: 724,
    Latvia: 470,
    Estonia: 479,
    Slovenia: 422,
    Luxembourg: 288,
    Montenegro: 59
  },
  2018: {
    Hungary: 436500,
    "United States": 672255,
    Turkey: 68300,
    "Czech Republic": 59752,
    Norway: 61349,
    Germany: 42127,
    "United Kingdom": 45202,
    Poland: 42824,
    France: 42748,
    Denmark: 28787,
    Canada: 29025,
    Albania: 18995,
    Italy: 21702,
    Romania: 17183,
    Spain: 11172,
    Netherlands: 9456,
    Croatia: 6068,
    "North Macedonia": 6232,
    Greece: 4560,
    Belgium: 4101,
    Portugal: 2750,
    Bulgaria: 1593,
    "Slovak Republic": 1098,
    Lithuania: 895,
    Latvia: 601,
    Estonia: 521,
    Slovenia: 463,
    Luxembourg: 301,
    Montenegro: 64
  },
  2019: {
    Hungary: 596008,
    "United States": 730149,
    Turkey: 79987,
    "Czech Republic": 66737,
    Norway: 66318,
    Germany: 46936,
    "United Kingdom": 46509,
    Poland: 45404,
    France: 44400,
    Denmark: 30389,
    Canada: 29949,
    Albania: 21987,
    Italy: 21042,
    Romania: 19527,
    Spain: 11281,
    Netherlands: 10800,
    Croatia: 6634,
    "North Macedonia": 8029,
    Greece: 4326,
    Belgium: 4253,
    Portugal: 2947,
    Bulgaria: 3772,
    "Slovak Republic": 1610,
    Lithuania: 977,
    Latvia: 618,
    Estonia: 569,
    Slovenia: 511,
    Luxembourg: 345,
    Montenegro: 66
  },
  2020: {
    Hungary: 853196,
    "United States": 784952,
    Turkey: 93910,
    "Czech Republic": 74300,
    Norway: 68475,
    Germany: 51610,
    "United Kingdom": 48267,
    Poland: 52997,
    France: 46200,
    Denmark: 32572,
    Canada: 31644,
    Albania: 20353,
    Italy: 22844,
    Romania: 21437,
    Spain: 11240,
    Netherlands: 11500,
    Croatia: 6700,
    "North Macedonia": 8303,
    Greece: 4398,
    Belgium: 4755,
    Portugal: 2896,
    Bulgaria: 1843,
    "Slovak Republic": 1796,
    Lithuania: 1030,
    Latvia: 651,
    Estonia: 630,
    Slovenia: 498,
    Luxembourg: 356,
    Montenegro: 72
  },
  2021: {
    Hungary: 842146,
    "United States": 811140,
    Turkey: 99024,
    "Czech Republic": 85274,
    Norway: 70907,
    Germany: 53170,
    "United Kingdom": 52348,
    Poland: 51834,
    France: 48200,
    Denmark: 33900,
    Canada: 33674,
    Albania: 24481,
    Italy: 24427,
    Romania: 23121,
    Spain: 12208,
    Netherlands: 11800,
    Croatia: 11077,
    "North Macedonia": 11070,
    Greece: 6578,
    Belgium: 5337,
    Portugal: 3262,
    Bulgaria: 2012,
    "Slovak Republic": 1677,
    Lithuania: 1049,
    Latvia: 699,
    Estonia: 646,
    Slovenia: 624,
    Luxembourg: 389,
    Montenegro: 79
  }
};

class NATO extends React.Component {
  constructor(props) {
    super(props);

    let noData = [];
    let date = [];
    let nato = [];
    let natoData = [];
    let countries = [];
    var countri = {};
    Object.keys(natos).forEach((year, i) => {
      const yr = Number(year);
      date.push(yr);
      const data = Object.values(natos)[i];
      Object.keys(data).forEach((name, i) => {
        if (!countri[name]) countri[name] = [];
        const data2 = gdpP[yr];
        const USD = data2[name];
        const data3 = gdpPD[yr];
        const FN = data3[name];
        var PPPcoeffiecience = 0;
        if (!isNaN(USD) && !isNaN(FN)) PPPcoeffiecience = USD / FN;
        const num = PPPcoeffiecience * Object.values(data)[i];
        nato.push(num);
        countri[name].push([yr, num]);
      });
      if (i === 0) {
        Object.keys(data).forEach((name) => {
          countries.push(name);
        });
      }
    });
    const all = [...nato];
    var lowCurrency = Math.min(...all);
    var lowDate = Math.min(...date);
    var highCurrency = Math.max(...all);
    var highDate = Math.max(...date);
    var state = {
      ...countri,
      includeUS: "US",
      //"engl churchill; Is H; mlk pearl harbor, 911"
      date,
      countries,
      highCurrency,
      noData,
      yAxis: highCurrency - lowCurrency,
      xAxis: highDate - lowDate,
      lowCurrency,
      highDate,
      lowDate,
      natoData
    };
    this.state = state;
  }
  componentDidUpdate = () => {
    if (this.state.includeUS !== this.state.laststate) {
      this.setState({ laststate: this.state.includeUS }, () => {
        let noData = [];
        let date = [];
        let nato = [];
        let natoData = [];

        var countri = {};
        Object.keys(natos).forEach((year, i) => {
          const yr = Number(year);
          date.push(yr);
          const data = Object.values(natos)[i];
          Object.keys(data).forEach((name, i) => {
            if (
              (this.state.includeUS !== "US" && name === "United States") ||
              (!this.state.includeUS &&
                [
                  "France",
                  "Germany",
                  "United Kingdom",
                  "United States"
                ].includes(name))
            )
              return null;
            if (!countri[name]) countri[name] = [];
            const data2 = gdpP[yr];
            const USD = data2[name];
            const data3 = gdpPD[yr];
            const FN = data3[name];
            var PPPcoeffiecience = 0;
            if (!isNaN(USD) && !isNaN(FN)) PPPcoeffiecience = USD / FN;
            const num = PPPcoeffiecience * Object.values(data)[i];
            nato.push(num);
            countri[name].push([yr, num]);
          });
        });
        const all = [...nato];
        var lowCurrency = Math.min(...all);
        var lowDate = Math.min(...date);
        var highCurrency = Math.max(...all);
        var highDate = Math.max(...date);
        //console.log(dataData);
        var state = {
          date,
          noData,
          highCurrency,
          yAxis: highCurrency - lowCurrency,
          xAxis: highDate - lowDate,
          lowCurrency,
          highDate,
          lowDate,
          natoData
        };
        this.setState(state);
      });
    }
  };
  render() {
    const countries = this.state.countries.filter(
      (name) =>
        this.state.includeUS === "US" ||
        (!this.state.includeUS &&
          !["France", "Germany", "United Kingdom", "United States"].includes(
            name
          )) ||
        (this.state.includeUS && !["United States"].includes(name))
    );
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
      (this.state.lowDate / this.state.xAxis) * 0.9 * this.props.lastWidth,
      0
    ]);
    //console.log(this.state.oilprice);

    var countri = {};
    countries.forEach((name) => {
      countri[name] = this.state[name].map(([x, y]) => [
        ((x - this.state.lowDate) / this.state.xAxis) *
          0.9 *
          this.props.lastWidth,
        ((y - this.state.lowCurrency) / this.state.yAxis) * 150
      ]);
    });
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
              "https://www.nato.int/cps/en/natohq/news_184844.htm"
              //"https://www.nato.int/nato_static_fl2014/assets/pdf/pdf_2019_06/20190625_PR2019-069-EN.pdf"
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
          >
            <select
              defaultValue={this.state.country}
              value={this.state.country}
              onChange={(name) => {
                this.setState({ country: name.target.value });
              }}
            >
              {countries.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={this.state.includeUS === "US"}
                onChange={(x) =>
                  this.setState({
                    includeUS: this.state.includeUS !== "US" ? "US" : true
                  })
                }
              />{" "}
              U.S.{" "}
              <input
                type="checkbox"
                checked={this.state.includeUS}
                onChange={(x) =>
                  this.setState({
                    includeUS: this.state.includeUS ? false : true
                  })
                }
              />{" "}
              U.K. GE FR <br />
              <div
                style={{
                  border: "1px solid",
                  padding: "4px 10px",
                  userSelect: "none"
                }}
                onClick={() => {
                  this.setState({
                    country: countries.find(
                      (x, i) => i === countries.indexOf(this.state.country) - 1
                    )
                  });
                }}
              >
                {"<"}
              </div>
              {this.state.chosenDecade}
              <div
                style={{
                  border: "1px solid",
                  padding: "4px 10px",
                  userSelect: "none"
                }}
                onClick={() => {
                  this.setState({
                    country: countries.find(
                      (x, i) => i === countries.indexOf(this.state.country) + 1
                    )
                  });
                }}
              >
                {">"}
              </div>
            </div>
            <br />${shortNumber(this.state.lowCurrency * 1000000)}-
            {shortNumber(this.state.highCurrency * 1000000)}
            <br />
            =NatoCert*($GDP/GDP)
            <br />
            expense per domestic variable-part labor
          </div>
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
            {countries
              .sort((a, b) => b - a)
              .map((name, i) => {
                return countri[name].map(([x, y], i) => {
                  return (
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        x={x}
                        y={y}
                        width={2}
                        height={1}
                        stroke={
                          this.state.country === name ? "red" : "deepskyblue"
                        }
                        fill="blue"
                        strokeWidth={1}
                        key={i}
                      />
                    )
                  );
                });
              })}
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
