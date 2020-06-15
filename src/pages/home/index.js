import React, { Component } from "react";
import { connect } from "react-redux";

import { account_type } from "../../store/action";
import { hasToken } from "../../store/localstorage/token";

import "./index.css";
import Search from "./Search";
import About from "./About";
import MediaPage from "./MediaPage";
import Services from "./Services";
import Contact from "./Contact";
import TenantPage from './TenantPage';

export class Home extends Component {
  isLogin(pageSize, accountType) {
    return hasToken() ? <Search windowSize={pageSize} accountType={accountType} /> : <TenantPage windowSize={this.props.pageSize} accountType={accountType} />;
  }

  render() {
    const { accountType } = this.props;

    return (
      <div style={{ height: "100%" }}>
        {this.isLogin(this.props.pageSize, accountType)}
        <About windowSize={this.props.pageSize} accountType={accountType} />
        <MediaPage windowSize={this.props.pageSize} accountType={accountType} />
        <Services windowSize={this.props.pageSize} accountType={accountType} setAccountType={this.props.setAccountType} />
        <Contact windowSize={this.props.pageSize} accountType={accountType} />
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
