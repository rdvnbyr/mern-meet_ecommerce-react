import { SessionActions } from '../actions/session-actions';

const initialState = {
    isLogin: false,
    isRegister: false,
    access: {}
}

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SessionActions.LOGIN:
            return {
                ...state,
                loading: true
            }
        case SessionActions.LOGIN_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                isLogin: true,
                access: action.payload.user
            }
        case SessionActions.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
            case SessionActions.LOGOUT:
                console.log('LOGOUT')
                return {
                    ...state,
                    isLogin: false,
                    access: {}
                }
            case SessionActions.REGISTER:
                return {
                    ...state,
                    loading: true
                }
            case SessionActions.REGISTER_SUCCESSFUL:
                return {
                    ...state,
                    loading: false,
                    isRegister: true
                }
            case SessionActions.REGISTER_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: 'Something went wrong'
                }
        default:
            return state
    }
}

