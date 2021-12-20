import React, {useState} from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import styles from './RadarActivity.module.css'

// USER_PERFORMANCE

const RadarActivity = (props) => {
  // const perf = [perf, setPerf] = useState('')

  // props.performance.data.forEach(el => {
  //   console.log(el)
  // })
  // console.log(props.performance.data)

  props.performance.data.forEach(el => {
    for (let i = 0; i < props.performance.data.length; i++) {
      props.performance.data[i].kind = props.performance.kind[i + 1]
    }
    // console.log(el)
  })
  // console.log(props.performance.data)
  props.performance.data = [...props.performance.data].reverse()
  // console.log(props.performance.data)

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