import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { CartActions } from '../actions';

// const apiUrl = 'https://shopapi.apps.salevali.de';
/**
 * 
 * @param {*} action$ 
 */
function getCartEpic(action$, state$) {
    return action$.pipe(
        ofType(CartActions.GET_CART),
        withLatestFrom(state$),
        mergeMap(
            ([action, state]) => from(
                axios
                    .post( state.apps.apiUrl + '/cart/get-cart' , {userId: action.payload.userId},
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.access.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.getCartSuccess(res.data);
                        } else {
                            return CartActions.getCartFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.getCartFail();
                    } )))
    );
}
/**
 * 
 * @param {*} action$ 
 */
function getPurchasedCartEpic(action$, state$) {
    return action$.pipe(
        ofType(CartActions.GET_PURCHASED_CART),
        withLatestFrom(state$),
        mergeMap(
            ([action, state]) => from(
                axios
                    .get( state.apps.apiUrl + '/cart/get-purchased-cart' ,
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.access.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.getPurchasedCartSuccess(res.data);
                        } else {
                            return CartActions.getPurchasedCartFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.getPurchasedCartFail();
                    } )))
    );
}
/**
 * 
 * @param {*} action$ 
 * @return 
 */
function addProductCart(action$, state$) {
    return action$.pipe(
        ofType(CartActions.ADD_PRODUCT_TO_CART_CART),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post( state.apps.apiUrl + '/cart/add-cart' , { productId: action.payload.productId, userId: state.session.access.userId },
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.access.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.getCart(state.session.access.token, state.session.access.userId);
                        } else {
                            return CartActions.addProductToCartActionFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.addProductToCartActionFail(err);
                    } )))
    );
}
/**
 * 
 * @param {*} action$ 
 */
function changeQty(action$,state$) {
    return action$.pipe(
        ofType(CartActions.CHANGE_QUANTITY),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post( state.apps.apiUrl + '/cart/update-cart' , {
                        userId: action.payload.userId,
                        productId: action.payload.productId,
                        cartId: action.payload.cartId,
                        qty: action.payload.qty,
                    },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.getCart(action.payload.token,action.payload.userId);
                        } else {
                            return CartActions.changeQuantityFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.changeQuantityFail();
                    } )))
    );
}
/**
 * 
 * @param {*} action$ 
 */
function removeProductFromCartEpic(action$,state$) {
    return action$.pipe(
        ofType(CartActions.REMOVE_PRODUCT_FROM_CART),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post( state.apps.apiUrl + '/cart/update-cart' , {
                        removeProduct: action.payload.removeProduct,
                        userId: action.payload.userId,
                        productId: action.payload.productId,
                        cartId: action.payload.cartId
                    },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.getCart(action.payload.token,action.payload.userId);
                        } else {
                            return CartActions.removeProductFromCartFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.removeProductFromCartFail();
                    } )))
    );
}

/**
 * 
 * @param {*} action$ 
 */
function deleteCartEpic(action$,state$) {
    return action$.pipe(
        ofType(CartActions.DELETE_CART_FROM_DB),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post( state.apps.apiUrl + '/cart/delete-cart' , {
                        cartId: action.payload.cartId
                    },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.deleteCartSuccess();
                        } else {
                            return CartActions.deleteCartFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.deleteCartFail();
                    } )))
    );
}

/**
 * 
 * @param {*} action$ 
 */
function addShippingEpic(action$,state$) {
    return action$.pipe(
        ofType(CartActions.ADD_SHIPPING_TO_CART),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        state.apps.apiUrl + '/cart/update-shipping' , 
                        {
                            cartId: action.payload.cartId,
                            updateShipping: action.payload.updateShipping
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.addShippingSuccess();
                        } else {
                            return CartActions.addShippingFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.addShippingFail();
                    } )))
    );
}

/**
 * 
 * @param {*} action$ 
 */
function paymentEpic(action$,state$) {
    return action$.pipe(
        ofType(CartActions.PAYMENT_WITH_STRIPE),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        state.apps.apiUrl + '/cart/payment' , 
                        {
                            price: action.payload.price
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.paymentWithStripeSuccess(res.data);
                        } else {
                            return CartActions.paymentWithStripeFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.paymentWithStripeFail();
                    } )))
    );
}

/**
 * 
 * @param {*} action$ 
 */
function paymentEndEpic(action$,state$) {
    return action$.pipe(
        ofType(CartActions.PAYMENT_END),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        state.apps.apiUrl + '/cart/payment-end' , 
                        {
                            cartId: action.payload.cartId
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return CartActions.paymentEndSuccess(res.data);
                        } else {
                            return CartActions.paymentEndFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.paymentEndFail();
                    } )))
    );
}
/**
 * 
 * @param {*} action$ 
 */
function archivedOrderEpic(action$, state$) {
    return action$.pipe(
        ofType(CartActions.ARCHIVED_ORDER),
        withLatestFrom(state$),
        mergeMap(
            ([action, state]) => from(
                axios
                    .put(
                        state.apps.apiUrl + '/cart/archived-order' , 
                        {
                            cartId: action.payload.cartId
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
                            return CartActions.archivedOrderSuccess();
                        } else {
                            return CartActions.archivedOrderFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.archivedOrderFail();
                    } )))
    );
}

export const cartEpics = combineEpics(
    getCartEpic,
    changeQty,
    removeProductFromCartEpic,
    addProductCart,
    deleteCartEpic,
    addShippingEpic,
    paymentEpic,
    paymentEndEpic,
    getPurchasedCartEpic,
    archivedOrderEpic
);