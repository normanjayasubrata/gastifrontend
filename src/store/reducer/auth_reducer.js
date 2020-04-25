import * as actionType from "../action/type";

const initialState = {
  isAuthPage: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ENTER_AUTHENTICATION_PAGE:
      return { ...state, isAuthPage: true };

    case actionType.EXIT_AUTHENTICATION_PAGE:
      return { ...state, isAuthPage: false };

    default:
      return state;
  }
};
