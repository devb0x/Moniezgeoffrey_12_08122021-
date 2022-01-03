import React, {Fragment, useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import userAPI from "../../model";

import styles from './Dashboard.module.css'
import UserMainData from "./UserMainData/UserMainData"
import ActivitiesList from "./ActivitiesList/ActivitiesList"


const Dashboard = () => {
  const [userMainData, setUserMainData] = useState()
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const { id } = useParams()
  let userId = null

  const updateLoading = () => {
    setIsLoaded(!isLoaded)
  }

  useEffect(() => {
    userId = id
  }, [id])

  useEffect(async () => {
    await userAPI.getUserMainData(userId)
      .then(res => {
        setUserMainData(res)
      })
    await userAPI.getUserActivity(userId)
      .then(res => {
        setUserActivity(res)
      })
    await userAPI.getUserAverageSessions(userId)
      .then(res => {
        setUserAverageSessions(res)
      })
    await userAPI.getUserPerformance(userId)
      .then(res => {
        setUserPerformance(res)
      })
    updateLoading()
  }, [userId])

  return (
    <Fragment>
      {isLoaded &&
        <div className={styles.dashboard}>
          <UserMainData
            userName={userMainData.userInfos.firstName}
            calorie={userMainData.keyData.calorieCount}
            protein={userMainData.keyData.proteinCount}
            carbohydrate={userMainData.keyData.carbohydrateCount}
            lipid={userMainData.keyData.lipidCount}
          />
          <ActivitiesList
            activity={userActivity}
            sessions={userAverageSessions}
            performance={userPerformance}
            score={userMainData.score}
          />
        </div>
      }
      {!isLoaded &&
        <div>Loading...</div>
      }
    </Fragment>
  )

}

export default Dashboard
