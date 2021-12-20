import React from "react"

import styles from './ActivitiesList.module.css'

import Daily from "./Daily/Daily"
import RadarActivity from "./RadarActivity/RadarActivity"
import Score from "./Score/Score"
// import Sessions from "./Sessions/Sessions"

const ActivitiesList = (props) => {
  console.log(props)
  // console.log(props.activity)

  return (
    <div className={styles.container}>
      <Daily activity={props.activity} />
      <RadarActivity performance={props.performance}/>
      <Score score={props.data.score} />
    </div>
  )
}

export default ActivitiesList