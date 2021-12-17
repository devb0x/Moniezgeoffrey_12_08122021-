import React from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import styles from './Score.module.css'

const Score = (props) => {
  // console.log(props.score)

  const formatter = (value) => {
    return `${value}` * 100 + '%'
  }

  const data = props.score

  // const data = [
  //   // {
  //   //   score: props.score[0]
  //   // }
  //   {
  //     name: 'osef du nom?', value: 30
  //   }
  // ]
  //
  // const dataMax = [
  //   // {
  //   //   score: props.score[0]
  //   // }
  //   {
  //     name: 'osef du nom?', value: 50
  //   }
  // ]
  //
  // const data01 = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 },
  // ];
  // const data02 = [
  //   { name: 'A1', value: 100 },
  //   { name: 'A2', value: 300 },
  //   { name: 'B1', value: 100 },
  //   { name: 'B2', value: 80 },
  //   { name: 'B3', value: 40 },
  //   { name: 'B4', value: 30 },
  //   { name: 'B5', value: 50 },
  //   { name: 'C1', value: 100 },
  //   { name: 'C2', value: 200 },
  //   { name: 'D1', value: 150 },
  //   { name: 'D2', value: 50 },
  // ];
  //
  // const COLORS = [
  //   '#FF0000', '#86e36c'
  // ]

  return (
    <div className={styles.container}>
      <p>score de ouf</p>
      <p>{formatter(`${props.score[1].todayScore}`)}</p>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400} fill={"#32e300"}>

          <Pie
            // dataKey={data.index}
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={360}
            innerRadius="60%"
            outerRadius="80%"
            stroke="none"
            fill="#86e36c"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${0}`}
                fill={"#002aff"}
                cornerRadius="50%"

              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Score