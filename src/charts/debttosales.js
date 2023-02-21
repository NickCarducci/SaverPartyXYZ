import React from "react";

class DebtToSales extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div className="fullchart">
        <div
          style={{
            overflowX: "auto",
            overflowY: "hidden"
          }}
        >
          <a
            className="charttitle1"
            href="https://fred.stlouisfed.org/graph/?g=vApj"
          >
            multiplied by 1000 was in billions. this is in millions
          </a>

         {width&& <iframe
            style={{
              width,
              height: "1000px"
            }}
            loading="lazy"
            title="total dollars held"
            src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=vApj&width=${width}&height=900`}
            className="embed-container1"
          />}
          {/*}
        <div className="chartlabels">
          Federal debt book value
          <br />
          Federal debt
          <br />
          Commercial bank assets
          <br />
          Financial sector debt
          <br />
          Broad money
          <br />
          Federal debt held by public
          <br />
          Federal debt held by foreign
          <br />
          Non-financial sector debt
          <br />
          Gross domestic product
          <br />
          Narrow money
          <br />
          Federal debt held by fed banks
          <br />
          Federal tax receipts
    </div>*/}
        </div>
      </div>
    );
  }
}
export default DebtToSales;
