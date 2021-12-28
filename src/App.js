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
import Dummy from "./Components/Dummy/Dummy"

function App() {
  // const [userMainData, setUserMainData] = useState(USER_MAIN_DATA)
  // const [userActivity, setUserActivity] = useState(USER_ACTIVITY)
  // const [userPerformance, setUserPerformance] = useState(USER_PERFORMANCE)
  // const [userAverageSessions, setUserAverageSessions] = useState(USER_AVERAGE_SESSIONS)



  // const { userId } = useParams()

  // let userId = useParams()




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
                <Dashboard />
              }
            />

            {/* DUMMY ROUTE */}

            {/*<Route*/}
            {/*  path={"/user/:id"}*/}
            {/*  element={*/}
            {/*    <Dummy*/}
            {/*      // data={userMainData}*/}
            {/*      // activity={userActivity}*/}
            {/*      // sessions={userAverageSessions}*/}
            {/*      // performance={userPerformance}*/}
            {/*    />*/}
            {/*  }*/}
            {/*/>*/}

          </Routes>
        </Router>


      </main>
    </Fragment>
  )
}

export default App
