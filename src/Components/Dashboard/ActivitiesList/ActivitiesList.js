import React from "react"

import styles from './ActivitiesList.module.css'

import Daily from "./Daily/Daily"
import RadarActivity from "./RadarActivity/RadarActivity"
import Score from "./Score/Score"
import Sessions from "./Sessions/Sessions"

const ActivitiesList = (props) => {

  return (
    <div className={styles.container}>
      <Daily activity={props.activity} />
      <Sessions sessions={props.sessions.sessions} />
      <RadarActivity performance={props.performance}/>
      <Score score={props.data.score} />
    </div>
  )
}

export default ActivitiesList