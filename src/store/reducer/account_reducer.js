import * as actionType from "../action/type";

const initialState = {
    accountType: { id: 1, name: "USAHA" }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actionType.ACCOUNT_TYPE:
            return { ...state, ...payload }

        default:
            return state
    }
}
