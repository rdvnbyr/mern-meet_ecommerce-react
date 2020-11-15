import { SessionActions } from '../actions/session-actions';

const initialState = {
    loading: false,
    isLogin: false,
    isRegister: false,
    access: {
        user: {
            email: "",
            username: "",
            wishlist: []
        },
        token: "",
        userId: ""
    },
};

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
                return {
                    ...state,
                    loading: true
                };
            case SessionActions.LOGOUT_SUCCESSFUL:
                return initialState;
            case SessionActions.LOGOUT_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: 'Something went wrong'
                };
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

