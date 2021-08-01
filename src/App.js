import React from "react";
import LogIn from "./Pages/LogIn/LogIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from "./Pages/movies/movies";


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
