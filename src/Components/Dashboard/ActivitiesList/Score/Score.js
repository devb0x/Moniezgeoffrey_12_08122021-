import React from "react"
import {PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend} from 'recharts';

import styles from './Score.module.css'
import CustomLabel from "./CustomLabel"

const Score = (props) => {

  const data = [
    { name: 'filler', value: props.score},
    { name: 'forGrayBackground', value: (1 - props.score)}
  ]

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Score
      </div>
      <ResponsiveContainer width="100%" height="100%" >
        <PieChart >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            fill="#FBFBFB"
            startAngle={90}
            endAngle={450}
            label={ <CustomLabel score={props.score} /> }
          >
            {data.map((entry, index) => {
              if (index === 0) {
                return <Cell key={`cell-${index}`} fill={"#FF0000"} cornerRadius={"50"} />
              }
              return <Cell key={`cell-${index}`} fill={"#ffffff"} />
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}


export default Score