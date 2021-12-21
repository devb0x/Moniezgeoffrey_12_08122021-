import React from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import styles from './RadarActivity.module.css'

const RadarActivity = (props) => {

  props.performance.data.forEach(el => {
    for (let i = 0; i < props.performance.data.length; i++) {
      props.performance.data[i].kind = props.performance.kind[i + 1]
    }
  })
  props.performance.data = [...props.performance.data].reverse()

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%" >
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="65%"
          data={props.performance.data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            axisLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
            stroke="white"
            dataKey="kind"
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#ff0101"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>

    </div>

  )
}

export default RadarActivity