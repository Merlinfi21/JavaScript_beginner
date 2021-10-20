import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoRoute from "./components/Todoroute";
import Project from "./components_project/project";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/project">
            <Project /> 
          </Route>
          <Route path="/todo">
            <TodoRoute />
        <Link to="/project" />
          </Route>
          <Route path="/">
            <TodoRoute />
          </Route>
        </Switch>
      
    </Router>
  );
}