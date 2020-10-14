import { CartActions } from '../actions';

const initialState = {
    loading: false,
    error: '',
    cart: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActions.GET_CART:
            return {
                ...state,
                loading: true
            }
        case CartActions.GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload.cart
            }
        case CartActions.GET_CART_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        default:
            return state
    }
}