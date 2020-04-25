import React, { Component } from "react";
import { connect } from "react-redux";
import ReactSnapScroll from "react-snap-scroll";

import { account_type } from "../../store/action";

import "./index.css";
import Search from "./Search";
import About from "./About";
import MediaPage from "./MediaPage";
import Services from "./Services";
import Contact from "./Contact";
import TenantPage from './TenantPage';

export class Home extends Component {
  render() {
    const { isNotMobile } = this.props.pageSize;
    const { accountType } = this.props;
    const desktopRender = (
      <ReactSnapScroll transition="move-top-bottom">
        {accountType.id === 1 ? <Search windowSize={this.props.pageSize} accountType={accountType} /> : <TenantPage windowSize={this.props.pageSize} accountType={accountType} />}
        <About windowSize={this.props.pageSize} accountType={accountType} />
        <MediaPage windowSize={this.props.pageSize} accountType={accountType} />
        <Services windowSize={this.props.pageSize} accountType={accountType} setAccountType={this.props.setAccountType} />
        <Contact windowSize={this.props.pageSize} accountType={accountType} />
      </ReactSnapScroll>
    );
    const mobileRender = (
      <div>
        {accountType.id === 1 ? <Search windowSize={this.props.pageSize} accountType={accountType} /> : <TenantPage windowSize={this.props.pageSize} accountType={accountType} />}
        <About windowSize={this.props.pageSize} accountType={accountType} />
        <MediaPage windowSize={this.props.pageSize} accountType={accountType} />
        <Services windowSize={this.props.pageSize} accountType={accountType} setAccountType={this.props.setAccountType} />
        <Contact windowSize={this.props.pageSize} accountType={accountType} />
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
  accountType: state.accountReducer.accountType
});

const mapDispatchToProps = (dispatch) => ({
  setAccountType: (data) => dispatch(account_type(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
