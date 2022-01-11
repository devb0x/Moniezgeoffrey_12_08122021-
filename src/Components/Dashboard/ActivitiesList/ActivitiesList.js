import React from "react"
import PropTypes from "prop-types"

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

ActivitiesList.propTypes = {
  activity: PropTypes.shape({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number
    }))
  }),
  sessions: PropTypes.shape({
    sessions: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number
    }))
  }),
  performance: PropTypes.shape({
    userId: PropTypes.number,
    kind: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number
    }))
  }),
  score: PropTypes.number
}