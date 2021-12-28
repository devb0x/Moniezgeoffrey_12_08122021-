import React, {Fragment, useEffect, useState} from "react"

import styles from './Dummy.module.css'
import {useParams} from "react-router-dom"
import axios from "axios"

const Dummy = () => {
  const [userMainData, setUserMainData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  console.log("Dummy start")

  const { id } = useParams()

  console.log(id)

  let userId

  useEffect(() => {
    userId = id
  })

  useEffect(() => { // OKAY
    axios.get(`http://localhost:3000/user/${userId}`)
    // axios.get(`http://localhost:3000/user/18`)
      .then(res => {
        // console.log(res.data.data)
        setUserMainData(res.data.data)
      })
  }, [userId])

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}/activity`)
      .then(res => {
        // console.log(res.data.data)
        setUserActivity(res.data.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then(res => {
        console.log(res.data.data)
        setUserAverageSessions(res.data.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}/performance`)
      .then(res => {
        console.log(res.data.data)
        setUserPerformance(res.data.data)
      })
  }, [])


  return (
    <Fragment>
      <div className={styles.dashboard}>
        <h3>test placeholder dummy component</h3>

        {/* id ok */}
        {/*<p>{props.data.id}</p>*/}
        <p>{userMainData.id}</p>
        {/* score ok */}
        {/*<p>{props.data.score}</p>*/}
        <p>{userMainData.score}</p>

        {/*/!*  userInfos ok avec conditional content *!/*/}
        {/*{props.data.userInfos &&*/}
        {/*<p>{props.data.userInfos.firstName}</p>*/}
        {/*}*/}
        {userMainData.userInfos &&
          <p>{userMainData.userInfos.firstName}</p>
        }

        {/*{props.activity.sessions &&*/}
        {/*<p>{props.activity.sessions[0].day}</p>*/}
        {/*}*/}

        {/*{props.sessions.sessions &&*/}
        {/*<div>*/}
        {/*  <p>day : {props.sessions.sessions[1].day}</p>*/}
        {/*  <p>durée : {props.sessions.sessions[1].sessionLength}</p>*/}
        {/*</div>*/}
        {/*}*/}

        {/*{props.performance.data &&*/}
        {/*<div>*/}
        {/*  <p>performance userId : {props.performance.userId}</p>*/}
        {/*  <p>performance userId : {props.performance.data[0].value}</p>*/}
        {/*</div>*/}
        {/*}*/}


      </div>
    </Fragment>
  )
}

export default Dummy