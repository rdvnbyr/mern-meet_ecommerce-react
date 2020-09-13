import { SessionActions } from '../actions';

const initialState = {
    user: {}
}

export const commentReducer = (state = initialState, action) => {
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
                user: action.payload.user
            }
        case SessionActions.LOGIN_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        default:
            return state
    }
}