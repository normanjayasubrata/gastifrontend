import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { hasToken, decodeToken } from "./utils/token";

import NavBar from "./components/NavBar";
import SideBar from './components/SideBar'
import SideBarMenu from './components/SideBarMenu'
import NotFound from "./components/NotFound";

import Home from './pages/home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ListPropertyPage from './pages/ListPropertyPage'
import AddPropertyPage from './pages/AddPropertyPage'
import AddProductPage from './pages/AddProductPage'
import ResultPage from './pages/ResultPage'
import ResultPageDetail from './pages/ResultPageDetail'
import AddBrandPage from './pages/AddBrandPage'

import lconfig from "./config"


class Routes extends Component {
  state = {
    isMenuOpened: false,
  };

  handleClick = () => {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  render() {
    console.log(this.props.isAuthPage)
    console.log("norman", decodeToken())
    return (
      <div style={{ height: "100%" }}>
        <Router basename={lconfig.BASE_URL}>
          <NavBar /> 
          <div style={{ height: "100%" }}>
          {(!this.state.isMenuOpened && hasToken()) ? <SideBar handleClick={this.handleClick} /> : null}

            <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"} >
            <OffCanvasBody>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />

                  <Route exact path="/gudang" component={ListPropertyPage} />
                  <Route path="/gudang/tambah" component={AddPropertyPage} />

                  <Route exact path="/searchresult" component={ResultPage} />
                  <Route path="/searchresult/detail" component={ResultPageDetail} />

                  <Route path="/brand/tambah" component={AddBrandPage} />

                  <Route path="/product/tambah" component={AddProductPage} />

                  <Route path="*" component={NotFound} />
                </Switch>
              </OffCanvasBody>
 
              <OffCanvasMenu position="right" width={1000} >
                <SideBarMenu handleClick={this.handleClick} />
              </OffCanvasMenu>

            </OffCanvas>

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
