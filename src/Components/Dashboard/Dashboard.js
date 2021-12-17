import React, {useState} from "react"
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";


import styles from './Dashboard.module.css'
import UserMainData from "./UserMainData/UserMainData"
import ActivitiesList from "./ActivitiesList/ActivitiesList"
import {USER_MAIN_DATA} from "../../public/data"
import {matches} from "@testing-library/jest-dom/dist/utils"

const Dashboard = (props) => {
  const [userMainData, setUserMainData] = useState(USER_MAIN_DATA)

  // console.log(props.data)

  // console.warn(props)

  // # get the id                   ok
  // # filter props with the id     ok
  // #
  // #
  // #
  const { id } = useParams()

  const userData = props.data.filter(
    el => parseInt(el.id) === parseInt(id)
  )
  // console.log(userData)

  const userActivity = props.activity.filter(
    el => parseInt(el.userId) === parseInt(id)
  )
  // console.log(userActivity)
  const userPerformance = props.performance.filter(
    el => parseInt(el.userId) === parseInt(id)
  )
  // console.warn(userPerformance)

  return (
    <div className={styles.dashboard}>
      {/*<UserMainData data={props.data}/>*/}
      <UserMainData data={userData[0]}/>
      <ActivitiesList
        data={props.data}
        // activity={props.activity}
        activity={userActivity[0]}
        performance={userPerformance[0]}
        sessions={props.sessions}
      />
    </div>
  )
}

export default Dashboard