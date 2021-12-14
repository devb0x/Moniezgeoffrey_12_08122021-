import React from "react"

import styles from './ActivitiesList.module.css'

import Daily from "./Daily/Daily"
// import Sessions from "./Sessions/Sessions"

const ActivitiesList = () => {
  return (
    <div className={styles.container}>
      <Daily />
      {/*<Sessions />*/}
    </div>
  )
}

export default ActivitiesList