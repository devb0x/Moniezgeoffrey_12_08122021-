import React from "react"
import { useParams } from "react-router-dom";


import styles from './Dashboard.module.css'
import UserMainData from "./UserMainData/UserMainData"
import ActivitiesList from "./ActivitiesList/ActivitiesList"

const Dashboard = (props) => {

  const { id } = useParams()

  const userData = props.data.filter(
    el => parseInt(el.id) === parseInt(id)
  )

  const userActivity = props.activity.filter(
    el => parseInt(el.userId) === parseInt(id)
  )

  const userPerformance = props.performance.filter(
    el => parseInt(el.userId) === parseInt(id)
  )

  const userSessions = props.sessions.filter(
    el => parseInt(el.userId) === parseInt(id)
  )

  return (
    <div className={styles.dashboard}>
      <UserMainData data={userData[0]}/>
      <ActivitiesList
        data={userData[0]}
        sessions={userSessions[0]}
        activity={userActivity[0]}
        performance={userPerformance[0]}
      />
    </div>
  )
}

export default Dashboard