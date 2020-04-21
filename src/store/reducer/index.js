import { combineReducers } from "redux";

import windowSizeReducer from "./windowSizeReducer";

const rootReducer = combineReducers({
  windowSizeReducer,
});

export default rootReducer;
