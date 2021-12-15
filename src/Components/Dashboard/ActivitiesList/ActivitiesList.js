import React from "react"

import styles from './ActivitiesList.module.css'

import Daily from "./Daily/Daily"
// import Sessions from "./Sessions/Sessions"

const ActivitiesList = (props) => {
  console.log(props.activity)

  return (
    <div className={styles.container}>
      <Daily activity={props.activity} />
    </div>
  )
}

export default ActivitiesList