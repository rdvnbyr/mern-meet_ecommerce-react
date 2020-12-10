import { ApplicationActions } from '../actions';

const initialState = {
    apiUrl: 'https://shopapi.apps.salevali.de'
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