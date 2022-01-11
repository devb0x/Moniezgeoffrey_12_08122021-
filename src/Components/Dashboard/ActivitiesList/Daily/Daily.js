import React, {useEffect, useState} from "react"

import styles from './Daily.module.css'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import CustomizedTooltipDaily from "./CustomizedTooltipDaily"
import PropTypes from "prop-types"

const Daily = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (props.activity) {
      const dayAlreadyListed = []
      for (let i = 0; i < props.activity.length; i++) {
        const dayNumber = props.activity[i].day.split('-')[2]
        if (!dayAlreadyListed.includes(dayNumber)) {
          dayAlreadyListed.push(dayNumber)
          props.activity[i].day = dayNumber
        }
      }
      setData(props.activity)
    }
  }, [])

  return (
    <div className={styles.container} >

      <BarChart
        data={data}
        width={835}
        height={320}
        margin={{
          top: 80,
          right: 26,
          left: 26,
          bottom: 23
        }}
      >
        <XAxis
          dataKey="day"
          stroke={'#9B9EAC'}
          dy={15}
          tickLine={false}
        />
        <YAxis
          stroke={'#9B9EAC'}
          orientation={'right'}
          dx={15}
          axisLine={false}
          tickLine={false}
          tickCount={3}
        />
        <Tooltip content={CustomizedTooltipDaily} />
        <Legend
          width={277}
          wrapperStyle={{ top: 24 , right: 26, backgroundColor: 'transparent', lineHeight: '40px' }}
          align={"right"}
          iconType={'circle'}
          iconSize={8}
          payload={
            [
              {
                value: 'Poids (kg)',
                type: 'circle',
                color: '#282D30'
              },
              {
                value: 'Calories brûlées (kCal)',
                type: 'circle',
                color: '#E60000'
              }
            ]
          }
        />
        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="3"
          vertical={false}
          dy={50}
          dx={50}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill={"#E60000"}
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>

      <h2 className={styles.title}>Activité quotidienne</h2>
    </div>
  )
}

export default Daily

Daily.propTypes = {
  activity: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    kilogram: PropTypes.number,
    calories: PropTypes.number
  }))
}
