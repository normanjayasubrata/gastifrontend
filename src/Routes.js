import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

import Home from './pages/home'

export class Routes extends Component {
  render() {
    return (
      <div style={{height:"100%"}}>
        <Router>
          <div style={{height:"100%"}}>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
