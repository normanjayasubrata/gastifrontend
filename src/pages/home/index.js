import React, { Component } from "react";
import { connect } from "react-redux";

import { account_type } from "../../store/action";
import { hasToken } from "../../store/localstorage/token";

import "./index.css";
import OwnerPage from "./OwnerPage";
import TenantPage from "./TenantPage";

export class Home extends Component {
  // isLogin(pageSize, accountType) {
  //   return hasToken() ? <TenantPage windowSize={pageSize} accountType={accountType} /> : ;
  // }

  render() {
    const { accountType } = this.props;
    console.log(this.props.accountType.id);

    switch (this.props.accountType.id) {
      case 1:
        return <OwnerPage />
        break;

      case 2:
        return <TenantPage />
        break;
      default:
        return null
        break;
    }
    return <div style={{ height: "100%" }}>{}</div>;
  }
}

const mapStateToProps = (state) => ({
  pageSize: state.windowSizeReducer,
  accountType: state.accountReducer.accountType,
});

const mapDispatchToProps = (dispatch) => ({
  setAccountType: (data) => dispatch(account_type(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
