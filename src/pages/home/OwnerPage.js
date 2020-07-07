import React, { Component } from "react";
import { connect } from "react-redux";

import { account_type } from "../../store/action";
import { hasToken } from "../../store/localstorage/token";


import Search from "./Search";
import About from "./About";
import MediaPage from "./MediaPage";
import Services from "./Services";
import Contact from "./Contact";

export class OwnerPage extends Component {
  render() {
    const { accountType } = this.props;

    return (
      <div style={{ height: "100%" }}>
        <Search windowSize={this.props.pageSize} accountType={accountType} />
        <About windowSize={this.props.pageSize} accountType={accountType} />
        <MediaPage windowSize={this.props.pageSize} accountType={accountType} />
        {hasToken() ? null : (
          <Services
            windowSize={this.props.pageSize}
            accountType={accountType}
            setAccountType={this.props.setAccountType}
          />
        )}
        <Contact windowSize={this.props.pageSize} accountType={accountType} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pageSize: state.windowSizeReducer,
  accountType: state.accountReducer.accountType,
});

const mapDispatchToProps = (dispatch) => ({
    setAccountType: (data) => dispatch(account_type(data)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(OwnerPage);
