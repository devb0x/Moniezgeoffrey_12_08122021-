import React from "react"

import styles from './Dashboard.module.css'
import UserMainData from "./UserMainData/UserMainData"
import ActivitiesList from "./ActivitiesList/ActivitiesList"

const Dashboard = (props) => {

  return (
    <div className={styles.dashboard}>
      Dashboard component <br />
      <UserMainData data={props.data}/>
      <ActivitiesList activity={props.activity}/>
    </div>
  )
}

export default Dashboard