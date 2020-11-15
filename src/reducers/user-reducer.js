import { UserActions } from '../actions';

const initialState = {
    loading: false,
    error: '',
    userWishlist: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActions.ADD_PRODUCT_TO_WISHLIST:
            return {
                ...state,
                loading: true
            }
        case UserActions.ADD_PRODUCT_TO_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case UserActions.ADD_PRODUCT_TO_WISHLIST_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        case UserActions.GET_USER_WISHLIST:
            return {
                ...state,
                loading: true
            }
        case UserActions.GET_USER_WISHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                userWishlist: action.payload.userWishlist
            }
        case UserActions.GET_USER_WISHLIST_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        default:
            return state
    }
}