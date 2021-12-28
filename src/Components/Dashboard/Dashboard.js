import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";


import styles from './Dashboard.module.css'
import UserMainData from "./UserMainData/UserMainData"
import ActivitiesList from "./ActivitiesList/ActivitiesList"

import  {getUserActivity, getUserMainData, getUserPerformance, getUserSessions} from "../../api/axios"

import axios from "axios"


const Dashboard = () => {
  const [userMainData, setUserMainData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

  const { id } = useParams()

  // console.log(id)
  //
  let userId

  useEffect(() => {
    userId = id
  }, [id])

  useEffect(() => { // OKAY
    axios.get(`http://localhost:3000/user/${userId}`)
      .then(res => {
        setUserMainData(res.data.data)
      })
  }, [userId])

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}/activity`)
      .then(res => {
        setUserActivity(res.data.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then(res => {
        setUserAverageSessions(res.data.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}/performance`)
      .then(res => {
        setUserPerformance(res.data.data)
      })
  }, [])



  // const { id } = useParams()
  //
  // const userData = props.data.filter(
  //   el => parseInt(el.id) === parseInt(id)
  // )
  //
  // const userActivity = props.activity.filter(
  //   el => parseInt(el.userId) === parseInt(id)
  // )
  //
  // const userPerformance = props.performance.filter(
  //   el => parseInt(el.userId) === parseInt(id)
  // )
  //
  // const userSessions = props.sessions.filter(
  //   el => parseInt(el.userId) === parseInt(id)
  // )

  return (
    <div className={styles.dashboard}>
      <UserMainData data={userMainData}/>
      {/*<ActivitiesList*/}
      {/*  data={userMainData}*/}
      {/*  sessions={userAverageSessions}*/}
      {/*  activity={userActivity}*/}
      {/*  performance={userPerformance}*/}
      {/*/>*/}
    </div>
  )



}

export default Dashboard