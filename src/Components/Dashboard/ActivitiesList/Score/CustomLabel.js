import React from 'react';
import PropTypes from "prop-types"

const CustomLabel = (props) => {

  const formatter = (value) => {
    return `${value}` * 100 + '%'
  }

  return (
    <React.Fragment>
      <text x={100} y={110} >
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "26px",
            fill: "#000",
            strokeWidth: 12
          }}
        >
          {formatter(props.score)}
        </tspan>
      </text>
      <text x={95} y={135}>
        <tspan
          style={{
            fontSize: "1rem",
            fill: "#A9A9A9",
          }}
        >
          de votre
        </tspan>
      </text>
      <text x={95} y={160}>
        <tspan
          style={{
            fontSize: "1rem",
            fill: "#A9A9A9",
          }}
        >
          objectif
        </tspan>
      </text>

    </React.Fragment>
  );
};

export default CustomLabel;

CustomLabel.propTypes = {
  score: PropTypes.number
}