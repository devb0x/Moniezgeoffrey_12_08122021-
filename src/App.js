import React, {Fragment} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import NavTop from "./Components/Nav/NavTop"
import NavLeft from "./Components/Nav/NavLeft"
import Dashboard from "./Components/Dashboard/Dashboard"


function App() {

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
