import * as actionType from './type';

export const setWindowSize = (payload) => ({
    type: actionType.SET_WINDOW_SIZE,
    payload
})

export const isMobileWindow = () => ({
    type: actionType.IS_MOBILE_WINDOW
})

export const enter_auth_page = () => ({
    type: actionType.ENTER_AUTHENTICATION_PAGE
})

export const exit_auth_page = () => ({
    type: actionType.EXIT_AUTHENTICATION_PAGE
})

export const account_type = (payload) => ({
    type: actionType.ACCOUNT_TYPE,
    payload
})
