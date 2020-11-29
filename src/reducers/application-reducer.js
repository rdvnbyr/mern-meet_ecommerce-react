import { ApplicationActions } from '../actions';

const initialState = {
    apiUrl: 'http://localhost:8080/'
}

export const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ApplicationActions.PREFIX:
            return {
                ...state,
            }
        default:
            return state;
    }
}