import React from "react"

import styles from './ActivitiesList.module.css'

import Daily from "./Daily/Daily"
import RadarActivity from "./RadarActivity/RadarActivity"
import Score from "./Score/Score"
import Sessions from "./Sessions/Sessions"

const ActivitiesList = (props) => {

  return (
    <div className={styles.container}>
      <Daily activity={props.activity.sessions} />
      <Sessions sessions={props.sessions.sessions} />
      <RadarActivity
        performance={props.performance.data}
        kind={props.performance.kind}
      />
      <Score score={props.score} />
    </div>
  )
}

export default ActivitiesList