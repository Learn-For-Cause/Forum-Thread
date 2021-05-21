import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import NotFound from "./components/App/NotFound";
// import Home from "./components/Home/Home";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import "./styles/styles.scss";
import { Banner } from "./components/Kathan/Banner";

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Banner}/>
        <Route path="/helloworld" component={HelloWorld} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById("app")
);
