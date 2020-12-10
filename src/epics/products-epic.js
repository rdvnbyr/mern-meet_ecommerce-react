import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { ProductsActions } from '../actions';

/**
 * all products fetching, method => GET
 * @param {*} action$
 * @return all products from db
 */
function getProducts(action$,state$) {
    return action$.pipe(
        ofType(ProductsActions.GET_PRODUCTS),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .get(`${state.apps.apiUrl}/shop/get-products`)
                    .then((res) => {
                        // console.log(res);
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
function getProductsWeeksDeal(action$,state$) {
    return action$.pipe(
        ofType(ProductsActions.GET_PRODUCTS_WEEKS_DEAL),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        `${state.apps.apiUrl}/shop/get-products`,
                        {
                            state: action.payload.state
                        }
                    )
                    .then((res) => {
                        // console.log(res);
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
function getProductsBestSellerEpic(action$,state$) {
    return action$.pipe(
        ofType(ProductsActions.GET_PRODUCTS_BEST_SELLERS),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        `${state.apps.apiUrl}/shop/get-products`,
                        {
                            state: action.payload.state
                        }
                    )
                    .then((res) => {
                        // console.log(res);
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
function getProductDetails(action$,state$) {
    return action$.pipe(
        ofType(ProductsActions.GET_PRODUCT_DETAILS),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .get(`${state.apps.apiUrl}/shop/get-products/${action.payload._id}`)
                    .then((res) => {
                        // console.log(res);
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

/**
 * 
 * @param {*} action$ 
 */
function reviewProductEpic(action$, state$) {
    return action$.pipe(
        ofType(ProductsActions.REVIEW_PRODUCT),
        withLatestFrom(state$),
        mergeMap(
            ([action, state]) => from(
                axios
                    .put(
                        `${state.apps.apiUrl}/shop/create-review/${action.payload.id}`,
                        {
                            rating: action.payload.review.rating,
                            title: action.payload.review.title,
                            comment: action.payload.review.comment
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.access.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return ProductsActions.reviewProductActionSuccess();
                        } else {
                            return ProductsActions.reviewProductActionFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return ProductsActions.reviewProductActionFail();
                    } )))
    );
}

export const productsEpics = combineEpics(
    getProducts,
    getProductDetails,
    getProductsWeeksDeal,
    getProductsBestSellerEpic,
    reviewProductEpic
);