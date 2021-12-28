import React from "react"
import {PieChart, Pie, Cell, ResponsiveContainer, Label} from 'recharts';

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
          <foreignObject
            x={45}
            y={45}
            width={150}
            height={150}
            style={{
              backgroundColor: '#fff',
              borderRadius: '50%',
            }}>
          </foreignObject>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => {
              if (index === 0) {
                return <Cell key={`cell-${index}`} fill={"#FF0000"} cornerRadius={"50"} />
              }
              return <Cell key={`cell-${index}`} fill={"#FBFBFB"} />
            })}
            <Label content={ <CustomLabel score={props.score}  /> } />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Score