import React from "react";
import LogIn from "./Pages/LogIn/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./Pages/Movies/Movies";
import SearchAppBar from "./Components/Navbar/NavBar";
import MovieDetail from "./Pages/movieDetail/movieDetail";

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
          <Route path="/movie/:id" children={<MovieDetail />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
