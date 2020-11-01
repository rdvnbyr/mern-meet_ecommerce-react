import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { ProductsActions } from '../actions';

/**
 * all products fetching, method => GET
 * @param {*} action$
 * @return all products from db
 */
function getProducts(action$) {
    return action$.pipe(
        ofType(ProductsActions.GET_PRODUCTS),
        mergeMap(
            (action) => from(
                axios
                    .get('http://localhost:8080/shop/get-products')
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return ProductsActions.getProductsSuccess(res.data);
                        } else {
                            return ProductsActions.getProductsFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return ProductsActions.getProductsFail();
                    } )))
    );
}
/**
 * all weeks deal products, method => GET
 * @param {*} action$ 
 */
function getProductsWeeksDeal(action$) {
    return action$.pipe(
        ofType(ProductsActions.GET_PRODUCTS_WEEKS_DEAL),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        'http://localhost:8080/shop/get-products',
                        {
                            state: action.payload.state
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return ProductsActions.getProductsWeeksDealSuccess(res.data);
                        } else {
                            return ProductsActions.getProductsWeeksDealFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return ProductsActions.getProductsWeeksDealFail();
                    } )))
    );
}

/**
 * all weeks deal products, method => GET
 * @param {*} action$ 
 */
function getProductsBestSellerEpic(action$) {
    return action$.pipe(
        ofType(ProductsActions.GET_PRODUCTS_BEST_SELLERS),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        'http://localhost:8080/shop/get-products',
                        {
                            state: action.payload.state
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return ProductsActions.getProductsBestSellersSuccess(res.data);
                        } else {
                            return ProductsActions.getProductsBestSellersFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return ProductsActions.getProductsBestSellersFail();
                    } )))
    );
}

/**
 * 
 * @param {*} action$ 
 */
function getProductDetails(action$) {
    return action$.pipe(
        ofType(ProductsActions.GET_PRODUCT_DETAILS),
        mergeMap(
            (action) => from(
                axios
                    .get(`http://localhost:8080/shop/get-products/${action.payload._id}`)
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return ProductsActions.getProductDetailsSuccess(res.data);
                        } else {
                            return ProductsActions.getProductDetailsFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return ProductsActions.getProductDetailsFail();
                    } )))
    );
}

export const productsEpics = combineEpics(
    getProducts,
    getProductDetails,
    getProductsWeeksDeal,
    getProductsBestSellerEpic
);