import React, {useState} from "react"

import styles from './Daily.module.css'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];


// const renderBarChart = (
//   <BarChart width={600} height={300} data={data}>
//     <XAxis dataKey="name" stroke="#8884d8" />
//     <YAxis />
//     <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
//     <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
//     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//     <Bar dataKey="uv" fill="#8884d8" barSize={30} />
//   </BarChart>
// );


const Daily = (props) => {
  console.log(props.activity[0].sessions)

  const [testData, setTestData] = useState()

  const myMockedData = [
    {
      name: props.activity.indexOf(`${props.activity[0].sessions[0]}`),
      kg: `${props.activity[0].sessions[0].kilogram}`,
      cal: `${props.activity[0].sessions[0].calories}`
    },
    {
      name: props.activity.indexOf(`${props.activity[0].sessions[0]}`),
      kg: `${props.activity[0].sessions[1].kilogram}`,
      cal: `${props.activity[0].sessions[1].calories}`
    },
    {
      name: props.activity.indexOf(`${props.activity[0].sessions[0]}`),
      kg: `${props.activity[0].sessions[2].kilogram}`,
      cal: `${props.activity[0].sessions[2].calories}`
    },
    {
      name: props.activity.indexOf(`${props.activity[0].sessions[0]}`),
      kg: `${props.activity[0].sessions[3].kilogram}`,
      cal: `${props.activity[0].sessions[3].calories}`
    },
    {
      name: props.activity.indexOf(`${props.activity[0].sessions[0]}`),
      kg: `${props.activity[0].sessions[4].kilogram}`,
      cal: `${props.activity[0].sessions[4].calories}`
    },
    {
      name: props.activity.indexOf(`${props.activity[0].sessions[0]}`),
      kg: `${props.activity[0].sessions[5].kilogram}`,
      cal: `${props.activity[0].sessions[5].calories}`
    },
    {
      name: props.activity.indexOf(`${props.activity[0].sessions[0]}`),
      kg: `${props.activity[0].sessions[6].kilogram}`,
      cal: `${props.activity[0].sessions[6].calories}`
    }
  ]
  console.log(myMockedData)

  // const formatter = (value) => `${value}%`;
  const calFormatter = (value) => {
    return `${myMockedData.kg}`

    // math min mockedData kg
    // math max
    // - 1 et + 1
  }


  return (
    <div className={styles.container}>

      <BarChart
        data={myMockedData}
        width={835}
        height={320}
      >
        <XAxis
          dataKey="kg"
          stroke="#8884d8"
          dy={15}
        />
        <YAxis
          dataKey="cal"
          orientation={'right'} dx={15}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend
          width={277}
          wrapperStyle={{ top: -52, right: 26, backgroundColor: 'transparent', lineHeight: '40px' }}
          align={"right"}
          iconType={'circle'}
          iconSize={8}
          payload={
            [{ value: 'Poids (kg)', type: 'circle'}, { value: 'Calories brûlées (kCal)', color: 'red'}]
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
          // dataKey="kg"
          dataKey={"kg"}
          // tickFormatter={calFormatter}
          // dataKey={`${calFormatter.kg}`}
          fill="#282D30"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="cal"
          fill="#E60000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>


      {/*<h2 className={styles.title}>Activité quotidienne</h2>*/}
    </div>
  )
}

export default Daily