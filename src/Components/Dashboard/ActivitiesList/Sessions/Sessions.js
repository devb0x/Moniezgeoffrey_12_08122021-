import React from 'react';
import PropTypes from "prop-types"

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import CustomizedTooltipSessions from "./CustomizedTooltipSessions"

import styles from './Sessions.module.css'

const formaterTick = (val) => {
  switch (val) {
    case  1: 
      return "L";
    case  2:
      return "M"
    case  3: 
      return "M"
    case  4: 
      return "J"
    case  5: 
      return "V"
    case 6: 
      return "S"
    case 7: 
      return "D"
    default:
      return null
 }
}

const Sessions = (props) => {
  /**
   * cursor
   */
  const CustomCursor = (props) => {
    const { points, width } = props;
    const { x } = points[0];
    console.log(props);
    console.log(points)
    return (
      <Rectangle
        fill="rgba(0, 0, 0, 0.1)"
        x={x - 18}
        y={0}
        width={width + 50}
        height={263}
      />
    )
  }

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={50}
          height={30}
          data={props.sessions}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10
          }}
        >
          <CartesianGrid stroke='false' />
          <XAxis
            dataKey="day"
            tickLine={"false"}
            tick={{stroke: 'white'}}
            stroke={'false'}
            fontSize={12}
            tickFormatter={formaterTick}
          />
          <Tooltip
            content={CustomizedTooltipSessions}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke={"#fff"}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Sessions;

Sessions.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number,
    sessionLength: PropTypes.number
  }))
}