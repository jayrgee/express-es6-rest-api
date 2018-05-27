import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./About";
import Login from "./Login";
import ProductSearch from "./ProductSearch";

const Main = props => (
  <div className="main">
    <Switch {...props}>
      <Route exact path="/" component={ProductSearch} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
);

export default Main;
