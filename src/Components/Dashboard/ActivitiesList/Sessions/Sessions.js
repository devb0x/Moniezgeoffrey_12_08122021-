import React, {useState} from 'react';

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomizedTooltipSessions from "./CustomizedTooltipSessions"

import styles from './Sessions.module.css'

const Sessions = (props) => {

  let options = {
    weekday: 'narrow'
  }
  const test = new Date(1901, 3, 1)
  console.log(test)

  let weekday = ["L", "M", "M", "J", "V", "S", "D"];

  /**
   * convert number to string
   */
  props.sessions.forEach(el => {
    for (let i = 0; i < props.sessions.length; i++) {
      props.sessions[i].day = weekday[i]
    }
    console.log(el)
  })




  // let options = {
    // weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
    // minute: '2-digit', second: '2-digit', hour12: false };
  // let options = {
  //   weekday: 'short'
  // }
  // let prnDt = 'Printed on ' + new Date().toLocaleTimeString('fr-FR', options);
  //
  // console.log(prnDt);

  // if day: 1 => day: 'L'
  // if day: 1 plusieurs fois, les aditionner

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
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
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