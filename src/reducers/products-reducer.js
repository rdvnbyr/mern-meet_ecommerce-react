import { ProductsActions } from '../actions';

const initialState = {
    loading: false,
    error: '',
    products: [],
    product: {},
    weeksDealproducts: [],
    bestSellers: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductsActions.GET_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case ProductsActions.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products
            }
        case ProductsActions.GET_PRODUCTS_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong, products not fetched'
            }
        case ProductsActions.GET_PRODUCTS_WEEKS_DEAL:
            return {
                ...state,
                loading: true
            }
        case ProductsActions.GET_PRODUCTS_WEEKS_DEAL_SUCCESS:
            return {
                ...state,
                loading: false,
                weeksDealproducts: action.payload.products
            }
        case ProductsActions.GET_PRODUCTS_WEEKS_DEAL_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong, products not fetched'
            }
        case ProductsActions.GET_PRODUCT_DETAILS:
            return {
                ...state,
                loading: true
            }
        case ProductsActions.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload.product
            }
        case ProductsActions.GET_PRODUCT_DETAILS_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong, products not fetched'
            }
        case ProductsActions.GET_PRODUCTS_BEST_SELLERS:
            return {
                ...state,
                loading: true
            }
        case ProductsActions.GET_PRODUCTS_BEST_SELLERS_SUCCESS:
            return {
                ...state,
                loading: false,
                bestSellers: action.payload.products
            }
        case ProductsActions.GET_PRODUCTS_BEST_SELLERS_FAIL: 
            return {
                ...state,
                loading: false,
                error: 'Something went wrong, products not fetched'
            }
        default:
            return state
    }
}