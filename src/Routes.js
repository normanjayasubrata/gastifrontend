import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

import Home from './pages/home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AddPropertyPage from './pages/AddPropertyPage'

export class Routes extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Router basename={process.env.PUBLIC_URL}>
          <div style={{ height: "100%" }}>
            {!this.props.isAuthPage ? <NavBar /> : null}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/gudang/tambah" component={AddPropertyPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.authReducer,
})


export default connect(mapStateToProps)(Routes);
