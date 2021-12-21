import React, {useState} from 'react';

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import CustomizedTooltipSessions from "./CustomizedTooltipSessions"

import styles from './Sessions.module.css'

const Sessions = (props) => {

  // /**
  //  * convert number to string
  //  */
  // props.sessions.forEach(el => {
  //   for (let i = 0; i < props.sessions.length; i++) {
  //     props.sessions[i].day = weekday[i]
  //   }
  //   console.log(el)
  // })

  // const [data, setData] = useState(props.sessions)
  //
  // console.log(data)
  const weekday = ["L", "M", "M", "J", "V", "S", "D"];

  props.sessions.forEach((el, index) => {
    if(el.day === index + 1 ) {
      el.day = `${weekday[index]}`
      console.log(el)
    }
  })

  /**
   * cursor
   */
  const CustomCursor = (props) => {
    const { points, width, height, stroke } = props;
    const { x, y } = points[0];
    const { x1, y1 } = points[1];
    // console.log(props);
    return (
      <Rectangle
        fill="rgba(0, 0, 0, 0.1)"
        // stroke="rgba(0, 0, 0, 0.1)"
        // strokeWidth={0}
        x={x}
        y={0}
        width={width}
        height={500}
      />
    );
  };

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
          />
          <Tooltip
            content={CustomizedTooltipSessions}
            // cursor={{
            //   stroke: "rgba(0, 0, 0, 0.1)",
            //   strokeWidth: 32,
            //   strokeHeight: 100
            // }}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke={"#fff"}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

  );
}

export default Sessions;