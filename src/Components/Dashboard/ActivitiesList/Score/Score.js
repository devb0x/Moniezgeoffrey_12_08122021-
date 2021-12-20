import React from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import styles from './Score.module.css'
import CustomLabel from "./CustomLabel"

const Score = (props) => {

  const formatter = (value) => {
    return `${value}` * 100 + '%'
  }

  const data = [
    { name: 'filler', value: props.score},
    { name: 'forGrayBackground', value: (1 - props.score)}
  ]

  return (
    <div className={styles.container}>
      <p>score de ouf</p>
      <p>{formatter(`${props.score}`)} = props.score formaté * 100</p>
      {/*<p>{props.score}</p>*/}

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
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
                return <Cell key={`cell-${index}`} fill="#FF0000" cornerRadius={"50"}
                />
              }
              return <Cell key={`cell-${index}`} fill="#FBFBFB" />
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>


    </div>
  )
}


export default Score