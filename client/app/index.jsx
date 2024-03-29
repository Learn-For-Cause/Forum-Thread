import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import NotFound from "./components/App/NotFound";
// import Home from "./components/Home/Home";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import NewHeader from "./components/NewHeader/NewHeader";
import "./styles/styles.scss";

import BelowHeader from "../app/components/BelowHeader/BelowHeader"
import "./styles/styles.scss";

// import { Banner } from "./components/Kathan/Banner";
import { Login } from "./components/Kathan/Login"
import { Signup } from "./components/Kathan/Signup"


import Cards from './components/joiningcards/cards';
import Header from "./components/Header/Header";

render(
  <Router>
    <App>
      <Switch>

        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Signup" component={Signup}/>

        <Route exact path="/" component={BelowHeader} />

        <Route path="/helloworld" component={HelloWorld} />
        <Route path="/header" exact component={NewHeader} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/orgheader" exact component={Header} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById("app")
);
