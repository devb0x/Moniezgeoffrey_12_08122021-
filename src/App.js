import React, {Fragment} from "react"

import './App.css';
import HeaderTop from "./Components/Nav/HeaderTop"
import NavLeft from "./Components/Nav/NavLeft"
import Dashboard from "./Components/Dashboard/Dashboard"

function App() {
  return (
    <Fragment >
      <HeaderTop />
      <NavLeft />
      <Dashboard />
    </Fragment>
  );
}

export default App;
