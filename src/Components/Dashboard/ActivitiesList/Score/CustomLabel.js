import React from 'react';

// function CustomLabel(props) {
//   return (
//     <div>
//       <span>12%</span>
//       <h1>aze</h1>de votre objectif
//     </div>
//   );
// }

// const CustomLabel = ({ viewBox, noOfBubbleTeaSold = 0 }, props) => {
const CustomLabel = (props) => {
  console.log(props)

  // const { cx, cy } = viewBox;

  const formatter = (value) => {
    return `${value}` * 100 + '%'
  }



  return (
    <React.Fragment>
      {/*<text x={cx - 15} y={cy - 5}>*/}
      <text x={110} y={125}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "26px",
            fill: "#000",
            // fontFamily: "Roboto"
          }}
        >
          {/*{noOfBubbleTeaSold}*/}
          {formatter(props.score)}
        </tspan>
      </text>
      {/*<text x={cx - 50} y={cy + 15}>*/}
      <text x={105} y={145}>
        <tspan
          style={{
            fontSize: "1rem",
            fill: "#A9A9A9",
          }}
        >
          de votre
        </tspan>
      </text>

      <text x={105} y={165}>
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