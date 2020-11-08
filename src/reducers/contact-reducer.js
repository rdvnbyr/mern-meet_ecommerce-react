import { ContactActions } from '../actions';

const initialState = {
    loading: false,
    error: '',
    respondMsg: "",
    isSuccess: false
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ContactActions.POST_SUBSCRIBE:
            return {
                ...state,
                loading: true
            }
        case ContactActions.POST_SUBSCRIBE_SUCCESS:
            return {
                ...state,
                loading: false,
                isSuccess: true,
                respondMsg: action.payload.respond
            }
        case ContactActions.POST_SUBSCRIBE_FAIL: 
            return {
                ...state,
                loading: false,
                isSuccess: false,
                error: 'Something went wrong'
            }
        case ContactActions.IS_SUCCESS_TOGGLE: 
            return {
                ...state,
                isSuccess: false
            }
        default:
            return state
    }
}