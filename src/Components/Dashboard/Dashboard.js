import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";


import styles from './Dashboard.module.css'
import UserMainData from "./UserMainData/UserMainData"
import ActivitiesList from "./ActivitiesList/ActivitiesList"

import  {getUserActivity, getUserMainData, getUserPerformance, getUserSessions} from "../../api/axios"

import axios from "axios"


const Dashboard = (props) => {
  // const [userMainData, setUserMainData] = useState([])

  console.log(props)

  // useEffect(() => { // OKAY
  //   axios.get('http://localhost:3000/user/18')
  //     .then(res => {
  //     // console.log(res)
  //     // console.log(res.data)
  //     // console.log(res.data.data)
  //       setUserMainData(res.data.data)
  //     //   setUserMainData(...userMainData, res.data.data)
  //     })
  // }, [])

  //   let data = []
  // useEffect(() => {
  //   const fetchMainData = async () => {
  //     const result = await axios.get('http://localhost:3000/user/18')
  //     // console.log(result.data.data)
  //     data.push(result.data.data)
  //     console.log(data)
  //     // setUserMainData(data)
  //   }
  //   fetchMainData()
  // }, [])
  //
  //
  // useEffect(() => {
  //   setUserMainData(data)
  // }, [])



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

  // return (
  //   <div className={styles.dashboard}>
  //     <UserMainData data={userMainData} />
  //   </div>
  // )


  // return (
  //   <div className={styles.dashboard}>
  //     <div>
  //       {userMainData.score}
  //     </div>
  //     {userMainData.userInfos && // WHY !?
  //       <div>
  //         <p>{userMainData.userInfos.firstName}</p>
  //       </div>
  //     }
  //   </div>
  // )
}

export default Dashboard