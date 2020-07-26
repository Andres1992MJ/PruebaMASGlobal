import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StaticTemplate from "./Templates/StaticComp";
import Employees from "./Components/Employees";
import Employee from "./Components/Employee";
import Home from "./Components/Home";
import StickyFooter from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#e4e3e3", minHeight: "100vh" }}>
        <Router>
          <StaticTemplate />
          <Switch>
            <Route path="/employee/:id">
              <Employee />
            </Route>
            <Route path="/employees">
              <Employees />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <StickyFooter />
    </React.Fragment>
  );
}

export default App;
