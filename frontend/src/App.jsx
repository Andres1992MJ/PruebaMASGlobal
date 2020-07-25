import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StaticTemplate from "./Templates/StaticComp";
import Table from "./Components/Table";

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
            <Route path="/table/:id">
              <Table />
            </Route>
            <Route path="/table">
              <Table />
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
