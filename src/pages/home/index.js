import React, { Component } from "react";
import { connect } from "react-redux";
import ReactSnapScroll from "react-snap-scroll";

import "./index.css";
import Search from "./Search";
import About from "./About";
import MediaPage from "./MediaPage";
import Services from "./Services";
import Contact from "./Contact";

export class Home extends Component {
  render() {
    const { isNotMobile } = this.props.pageSize;
    const desktopRender = (
      <ReactSnapScroll transition="move-top-bottom">
        <Search windowSize={this.props.pageSize} />
        <About windowSize={this.props.pageSize} />
        <MediaPage windowSize={this.props.pageSize} />
        <Services windowSize={this.props.pageSize} />
        <Contact windowSize={this.props.pageSize} />
      </ReactSnapScroll>
    );
    const mobileRender = (
      <div>
        <Search windowSize={this.props.pageSize} />
        <About windowSize={this.props.pageSize} />
        <MediaPage windowSize={this.props.pageSize} />
        <Services windowSize={this.props.pageSize} />
        <Contact windowSize={this.props.pageSize} />
      </div>
    );
    return (
      <div style={{ height: "100%" }}>
        {isNotMobile ? desktopRender : mobileRender}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pageSize: state.windowSizeReducer,
});

export default connect(mapStateToProps)(Home);
