import React from "react";

class Immigration extends React.Component {
  render() {
    return (
      <span>
        325,100,000 people in U.S., 2017
        <br />
        23% Unauthorized Immigrants
        <br />
        5% Temp resident
        <br />
        27% Perm resident
        <br />
        45% Immigrant
        <br />
        "Unauthorized immigrants were 23% of the 45.6 million foreign-born
        residents in the U.S. in 2017." -&nbsp;
        <a href="https://www.pewresearch.org/fact-tank/2019/06/12/us-unauthorized-immigrant-population-2017/">
          Pew est.
        </a>
        <a
          style={{
            width: "100%",
            position: "relative"
          }}
          href="https://www.pnas.org/content/pnas/suppl/2020/12/01/2014704117.DCSupplemental/pnas.2014704117.sapp.pdf"
        >
          <img
            alt=""
            style={{
              width: "100%",
              height: "auto"
            }}
            src={
              this.props.settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/rqyczliikulwn9p/Screen%20Shot%202021-03-07%20at%204.05.52%20PM.png?dl=0"
            }
          />
        </a>
        <a href="https://www.pnas.org/content/117/51/32340/tab-figures-data">
          src
        </a>
        <br />
        281,000/10,488,000 violent vs illegal immigrants (2.6792%)
        <br />
        709,487/(325,100,000-10,488,000) violent vs Citizen or resident (.2255%)
        <br />
        <br />
        “No massive welfare state and open borders = “M. Friedman. Kamala in
        charge of&nbsp;
        <a href="https://www.researchgate.net/publication/344197041_FEC_government_spending_as_advertised_in_political_campaigns_as_free_to_even_the_beneficiary_when_actually_it_is_misleading_towards_indentured_servitude_heightened_cost_capacity_requires_dollar-split">
          root causes
        </a>
        . “moving out of border security facilities, not the root cause of that,
        to be clear.” -Psaki. “To study the root cause of child abuse being the
        bring a child get in free policy of the Joe Biden” - T Cruz
        <br />
        <br />
        If you want less illegal immigrants, stop redistributing money and cut
        off the rent-seekers. I have tables to bus, Wall st & built-to-rents
        <br />
        <br />
        <span style={{ border: "1px dotted grey", width: "100%" }}>
          <div
            style={{ columnCount: "3", position: "relative", width: "100%" }}
          >
            <div
              style={{
                breakInside: "avoid",
                width: "100%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  this.props.settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/upi14yvb1qv2dwa/1605651197673.png?dl=0"
                }
              />
            </div>
            <span
              style={{
                breakInside: "avoid",
                width: "100%",
                position: "relative"
              }}
            >
              <a href="https://www.statista.com/statistics/270272/percentage-of-us-population-by-ethnicities/">
                14% AfrA, 50% EU, 25% HS, 8% AsaA
                <br />
              </a>
              population
            </span>
            <div
              style={{
                breakInside: "avoid",
                width: "100%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  this.props.settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/yblzaxulr63u0iq/Screen%20Shot%202021-03-09%20at%2010.25.39%20AM.png?dl=0"
                }
              />
            </div>
            <div
              style={{
                breakInside: "avoid",
                width: "100%",
                position: "relative"
              }}
            >
              <img
                alt=""
                style={{
                  width: "100%",
                  height: "auto"
                }}
                src={
                  this.props.settleDropboxFree
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/a5xgft5rz7tpgc2/1605647597206.jpeg?dl=0"
                }
              />{" "}
            </div>{" "}
          </div>
          Crime-response by race/ethnicity
          <br />
          <a href="https://ucr.fbi.gov/crime-in-the-u.s/2018/crime-in-the-u.s.-2018/tables/expanded-homicide-data-table-6.xls">
            srcCrime
          </a>{" "}
          <a href="https://www.usnews.com/news/articles/2020-06-03/data-show-deaths-from-police-violence-disproportionately-affect-people-of-color">
            srcArmedVictim
          </a>{" "}
          <a href="https://www.nature.com/articles/d41586-020-01846-z">
            srcArmedCop
          </a>
        </span>
      </span>
    );
  }
}
export default Immigration;
