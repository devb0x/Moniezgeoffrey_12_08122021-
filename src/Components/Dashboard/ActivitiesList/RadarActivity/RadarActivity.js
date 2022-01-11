import React, {Fragment} from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import styles from './RadarActivity.module.css'
import PropTypes from "prop-types"

const RadarActivity = (props) => {
  if (props.performance) {
    props.performance.forEach(() => {
      for (let i = 0; i < props.performance.length; i++) {
        props.performance[i].kind = props.kind[i + 1]
      }
    })
    props.performance.reverse()
  }

  return (
    <Fragment>

      <div className={styles.container}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="65%"
            data={props.performance}
          >
            <PolarGrid radialLines={false}/>
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

    </Fragment>
  )
}

export default RadarActivity

RadarActivity.propTypes = {
  kind: PropTypes.object,
  performance: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    kind: PropTypes.number
  }))
}