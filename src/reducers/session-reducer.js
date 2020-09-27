import { SessionActions } from '../actions/session-actions';

const initialState = {
    isLogin: false,
    user: {}
}

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SessionActions.LOGIN:
            console.log('LOGIN')
            return {
                ...state,
                loading: true
            }
        case SessionActions.LOGIN_SUCCESSFUL:
            console.log('LOGIN SUCCESSFULL', action.payload.user);
            return {
                ...state,
                loading: false,
                isLogin: true,
                user: action.payload.user
            }
        case SessionActions.LOGIN_FAIL:
            console.log('LOGIN FAIL')
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
                    user: {}
                }
            case SessionActions.REGISTER:
                console.log('REGISTER')
                return {
                    ...state,
                    loading: true
                }
            case SessionActions.REGISTER_SUCCESSFUL:
                console.log('REGISTER SUCCESSFULL', action.payload.user);
                return {
                    ...state,
                    loading: false,
                    user: action.payload.user
                }
            case SessionActions.REGISTER_FAIL:
                console.log('REGISTER FAIL')
                return {
                    ...state,
                    loading: false,
                    error: 'Something went wrong'
                }
        default:
            return state
    }
}

