import { CommentActions } from '../actions';

const initialState = {
    loading: false,
    error: '',
    comments: []
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CommentActions.GET_COMMENT:
            return {
                ...state,
                loading: true
            }
        case CommentActions.GET_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload.allComments
            }
        case CommentActions.GET_COMMENT_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        default:
            return state
    }
}