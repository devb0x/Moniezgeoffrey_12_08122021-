import React, {useState} from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import styles from './RadarActivity.module.css'

// USER_PERFORMANCE

const RadarActivity = (props) => {
  // props.performance.data.kind = Object.keys(props.performance.kind)



  // console.log(props.performance.kind.valueOf())
  // console.log(Object.values(props.performance.kind)

  props.performance.data.forEach(el => {
    // console.log(el)
    // el.kind = Object.values(props.performance.kind).reverse()
    el.kind = Object.values(props.performance.kind).reverse()
    // console.log(el)
  })

  props.performance.data.forEach(el => {
    // console.log(el)
    for (let i = 0; i < props.performance.data.length; i++) {
      props.performance.data[i].kind = props.performance.kind[i + 1]
    }
    console.warn(el)
  })
  props.performance.data.reverse()

  // console.log(props.performance.data)
  // console.log(props.performance.kind)
  //
  // let keyTest = Object.keys(props.performance.kind)
  // console.log(keyTest)

  return (
    <div className={styles.container}>
        <ResponsiveContainer width="100%" height="100%" >
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="65%"
          // data={test.reverse()}
          // data={props.performance.data}
          data={props.performance.data}
        >
          <PolarGrid radialLines={false} />
          {/* kind (1 2 3 ,, 6 */}
          <PolarAngleAxis
            axisLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500
            }}
            stroke="white"
            // dataKey='subject'
            // data={props.performance.kind}
            dataKey='kind'
            // data="category"
            // type={props.performance.kind}
            // dataKey={props.performance.kind}
            tickLine={false}
          />
          <Radar
            // dataKey="a"
            dataKey="value"
            // type='kind'
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