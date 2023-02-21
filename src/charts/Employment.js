import React from "react";
class Employement extends React.Component {
  state = {};
  render() {
    const { width, ios } = this.props;
    if (ios) {
      return <div>doesn't work on safari</div>;
    } else
      return (
        <div
          style={{
            display: "flex",
            position: "relative",
            width: width
          }}
        >
          {!isNaN(width) && (
            <iframe
              width={width - 20}
              loading="lazy"
              title="price inflation never by population except when dead weight by public or private"
              src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=${
                width - 20
              }&height=1890`}
              style={{
                overflow: "hidden",
                border: "none",
                position: "relative",
                width: width - 20,
                height: "2100px",
                transition: "0.3s ease-in"
              }}
            />
          )}
        </div>
      );
  }
}
export default Employement;
