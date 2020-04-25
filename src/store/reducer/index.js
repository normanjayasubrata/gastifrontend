import { combineReducers } from "redux";

import windowSizeReducer from "./windowSizeReducer";
import authReducer from './auth_reducer';
import accountReducer from './account_reducer';

const rootReducer = combineReducers({
  windowSizeReducer,
  authReducer,
  accountReducer
});

export default rootReducer;
