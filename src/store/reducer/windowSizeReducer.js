import * as actionType from '../action/type';

const initialState = {
    windowWidth: 0,
    windowHeight: 0,
    isNotMobile: true
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionType.SET_WINDOW_SIZE:
        return { ...state, ...payload }
    
    case actionType.IS_MOBILE_WINDOW:
        if (state.windowWidth >= 600) {
            return { ...state, isNotMobile: true }
        } else {
            return { ...state, isNotMobile: false }
        }

    default:
        return state
    }
}
