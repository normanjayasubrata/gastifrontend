import React, { Component } from "react";
import { connect } from "react-redux";
import Routes from "./Routes";

import { setWindowSize, isMobileWindow } from "./store/action";

export class App extends Component {
  state = {
    windowWidth: 0,
    windowHeight: 0,
  };

  updateDimensions = () => {
    this.props.setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });

    this.props.setMobileWindow();
  };

  componentDidMount() {
    this.props.setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
    this.props.setMobileWindow();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <Routes />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  setWindowSize: (data) => dispatch(setWindowSize(data)),
  setMobileWindow: () => dispatch(isMobileWindow())
});

export default connect(null, mapDispatchToProps)(App);
