import React, {Fragment, useState, useEffect, useRef, useCallback} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate, useParams} from "react-router-dom";

import './App.css';
import NavTop from "./Components/Nav/NavTop"
import NavLeft from "./Components/Nav/NavLeft"
import Dashboard from "./Components/Dashboard/Dashboard"

import {USER_MAIN_DATA} from "./public/data"
import {USER_ACTIVITY} from "./public/data"
import {USER_PERFORMANCE} from "./public/data"
import {USER_AVERAGE_SESSIONS} from "./public/data"
import getUserMainData from "./api/axios"
import axios from "axios"

function App() {
  const [userMainData, setUserMainData] = useState(USER_MAIN_DATA)
  // const [userMainData, setUserMainData] = useState([])
  const [userActivity, setUserActivity] = useState(USER_ACTIVITY)
  const [userPerformance, setUserPerformance] = useState(USER_PERFORMANCE)
  const [userAverageSessions, setUserAverageSessions] = useState(USER_AVERAGE_SESSIONS)

  // useEffect(() => {
  //   fetchData()
  // }, [])
  //
  // const fetchData = async () => {
  //   let data = []
  //   await axios.get(`http://localhost:3000/user/18`).then(res => {
  //     console.log(res.data.data)
  //     return data.push(res.data.data)
  //   })
  //     .then(() => {
  //       console.log('juste comme ca')
  //       console.log(data)
  //       setUserMainData(data)
  //     })
  //     .then(() => {
  //       // console.log('another log data')
  //     })
  // }

  return (
    <Fragment >
      <NavTop />
      <NavLeft />
      <main>

        <Router>
          <Routes>

            <Route
              exact path={'/'}
              element={ <Navigate to="/user/18" /> }
            />

            <Route
              path={"/user/:id"}
              element={
                <Dashboard
                  data={userMainData}
                  activity={userActivity}
                  performance={userPerformance}
                  sessions={userAverageSessions}
                />
              }>
            </Route>

          </Routes>
        </Router>


      </main>
    </Fragment>
  )
}

export default App
