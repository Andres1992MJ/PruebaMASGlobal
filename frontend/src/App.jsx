import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StaticTemplate from "./Templates/StaticComp";
import Employees from "./Components/Employees";
import Employee from "./Components/Employee";


function Home() {
  return (
    <div>
      <h1>HOLA HOME</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <div>
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
        </div>
      </Router>
    </div>
  );
}

export default App;
