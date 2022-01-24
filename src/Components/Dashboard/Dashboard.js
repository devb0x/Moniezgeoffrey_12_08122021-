import React, {Fragment, useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import userAPI from "../../model";

import styles from './Dashboard.module.css'
import UserMainData from "./UserMainData/UserMainData"
import ActivitiesList from "./ActivitiesList/ActivitiesList"

/**
 * Dashboard Component
 * @returns {JSX.Element}
 * @constructor
 */
const Dashboard = () => {
  const [userMainData, setUserMainData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState('')

  const { id } = useParams()
  let userId = id

  useEffect( () => {
    Promise.all([
      userAPI.getUserMainData(userId)
        .then(res => {
          setUserMainData(res)
        }),
      userAPI.getUserActivity(userId)
        .then(res => {
          setUserActivity(res)
        }),
      userAPI.getUserAverageSessions(userId)
        .then(res => {
          setUserAverageSessions(res)
        }),
      userAPI.getUserPerformance(userId)
        .then(res => {
          setUserPerformance(res)
        }),
    ])
    .then(() => {
      setIsLoaded(true)
    })
    .catch(err => {
      setError(err)
    })
  }, [userId])

  if(error) {
    return <div className={styles.dashboard}>
      Impossible de récupérer les données.
    </div>
  }

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
        <div className={styles.dashboard}>Loading...</div>
      }
    </Fragment>
  )

}

export default Dashboard
