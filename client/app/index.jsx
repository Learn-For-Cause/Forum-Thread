import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import NotFound from "./components/App/NotFound";
import Home from "./components/Home/Home";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import BelowHeader from "../app/components/BelowHeader/BelowHeader"
import "./styles/styles.scss";
import Cards from './components/joiningcards/cards';
import Header from "./components/Header/Header";
render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={BelowHeader} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/header" exact component={Header} />
        <Route component={NotFound} />
        
      </Switch>
    </App>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById("app")
);
