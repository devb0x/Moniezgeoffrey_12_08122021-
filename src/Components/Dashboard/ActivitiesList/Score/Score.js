import React from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import styles from './Score.module.css'

const Score = (props) => {
  // console.log(props)
  // console.log(props.score)

  const formatter = (value) => {
    return `${value}` * 100 + '%'
  }

  const score = props.score

  const data = [
    { name: 'dataName', value: (props.score * 100)}
  ]

  let angle = (data[0].value * 100)
  // console.log(data[0].value * 100)
  return (
    <div className={styles.container}>
      <p>score de ouf</p>
      {/*<p>{formatter(`${props.score.todayScore}`)}</p>*/}
      <p>{formatter(`${props.score}`)}</p>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400} fill={"#32e300"}>

          <Pie data={data} dataKey="value" cx="50%" cy="50%"
               paddingAngle={0}

               outerRadius={90}
               innerRadius={80}
               fill="#8884d8"
               startAngle={90}
               // endAngle={360 - angle}
               endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={"red"} />
            ))}
          </Pie>

          <Pie data={data} dataKey="value" cx="50%" cy="50%"
               paddingAngle={0}

               outerRadius={80}
               innerRadius={50}
               fill="#8884d8"
               startAngle={90}
               cornerRadius="50%"
            // endAngle={360}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={"blue"} cornerRadius="50%"
              />
            ))}
          </Pie>

        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Score