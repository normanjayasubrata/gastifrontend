import * as actionType from './type';

export const setWindowSize = (payload) => ({
    type: actionType.SET_WINDOW_SIZE,
    payload
})

export const isMobileWindow = () => ({
    type: actionType.IS_MOBILE_WINDOW
})

