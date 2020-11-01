import { CartActions } from '../actions';

const initialState = {
    loading: false,
    shipLoading: 0,
    error: '',
    resMsg: "",
    cart: [],
    items: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActions.ADD_PRODUCT_TO_CART_CART:
            return {
                ...state,
                loading: true
            }
        case CartActions.ADD_PRODUCT_TO_CART_CART_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case CartActions.ADD_PRODUCT_TO_CART_CART_FAIL: 
            return {
                ...state,
                loading: false,
                resMsg: action.payload.data
            }
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
        case CartActions.CHANGE_QUANTITY:
            return {
                ...state,
                loading: true
            }
        case CartActions.CHANGE_QUANTITY_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case CartActions.CHANGE_QUANTITY_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        case CartActions.REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                loading: true
            }
        case CartActions.REMOVE_PRODUCT_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case CartActions.REMOVE_PRODUCT_FROM_CART_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        case CartActions.DELETE_CART_FROM_DB:
            return {
                ...state,
                loading: true
            }
        case CartActions.DELETE_CART_FROM_DB_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: []
            }
        case CartActions.DELETE_CART_FROM_DB_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        case CartActions.ADD_SHIPPING_TO_CART:
            return {
                ...state,
                shipLoading: true
            }
        case CartActions.ADD_SHIPPING_TO_CART_SUCCESS:
            return {
                ...state,
                shipLoading: false
            }
        case CartActions.ADD_SHIPPING_TO_CART_FAIL: 
            return {
                ...state,
                shipLoading: false,
                error: 'Something went wrong'
            }
        default:
            return state
    }
}