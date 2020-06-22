import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";


import NavBar from "./components/NavBar";
import SideBar from './components/SideBar'
import NotFound from "./components/NotFound";

import Home from './pages/home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ResultPage from './pages/ResultPage'
import ResultPageDetail from './pages/ResultPageDetail'

class Routes extends Component {
  state = {
    isMenuOpened: false,
  };

  handleClick = () => {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
     

        <Router basename={process.env.PUBLIC_URL}>
          <div style={{ height: "100%" }}>
            {!this.props.isAuthPage ? <NavBar /> : null}
            
             <SideBar handleClick={this.handleClick}  />
            <OffCanvas width={300} transitionDuration={300} effect={"parallax"} isMenuOpened={this.state.isMenuOpened} position={"left"} >
            <OffCanvasBody>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route exact path="/searchresult" component={ResultPage} />
              <Route path="/searchresult/detail" component={ResultPageDetail} />
              <Route path="*" component={NotFound} />
            </Switch>
            </OffCanvasBody>
            <OffCanvasMenu>
            <p>Placeholder content.</p>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
              <li>
                <a href="#" onClick={this.handleClick}>
                  Toggle Menu
                </a>
              </li>
            </ul>
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
