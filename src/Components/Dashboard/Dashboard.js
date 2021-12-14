import React from "react"

import styles from './Dashboard.module.css'
import UserMainData from "./UserMainData/UserMainData"
import ActivitiesList from "./ActivityList/ActivitiesList"

const Dashboard = (props) => {
  console.log(props)

  return (
    <div className={styles.dashboard}>
      Dashboard component <br />
      <UserMainData data={props.data}/>
      <ActivitiesList />
    </div>
  )
}

export default Dashboard