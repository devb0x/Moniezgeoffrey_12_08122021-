import React, {Fragment, useState} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import NavTop from "./Components/Nav/NavTop"
import NavLeft from "./Components/Nav/NavLeft"
import Dashboard from "./Components/Dashboard/Dashboard"

import {USER_MAIN_DATA} from "./public/data"
import {USER_ACTIVITY} from "./public/data"
import {USER_PERFORMANCE} from "./public/data"
import {USER_AVERAGE_SESSIONS} from "./public/data"

function App() {
  const [userMainData, setUserMainData] = useState(USER_MAIN_DATA)
  const [userActivity, setUserActivity] = useState(USER_ACTIVITY)
  const [userPerformance, setUserPerformance] = useState(USER_PERFORMANCE)
  const [userAverageSessions, setUserAverageSessions] = useState(USER_AVERAGE_SESSIONS)

  return (
    <Fragment >
      <NavTop />
      <NavLeft />
      <main>

        <Router>
          <Routes>

            <Route
              exact path={'/'}
              element={ <Navigate to="/user/12" /> }
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
