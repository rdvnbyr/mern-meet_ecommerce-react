import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { CartActions } from '../actions';

const api = 'http://localhost:8080';
/**
 * 
 * @param {*} action$ 
 */
function getCart(action$) {
    return action$.pipe(
        ofType(CartActions.GET_CART),
        mergeMap(
            (action) => from(
                axios
                    .post( api + '/cart/get-cart' , {userId: action.payload.userId},
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
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
 * @return 
 */
function addProductCart(action$) {
    return action$.pipe(
        ofType(CartActions.ADD_PRODUCT_TO_CART_CART),
        mergeMap(
            (action) => from(
                axios
                    .post( api + '/cart/add-cart' , { productId: action.payload.productId, userId: action.payload.userId },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return CartActions.addProductToCartActionSuccess();
                        } else if(res.status === 409) {
                            return CartActions.addProductToCartActionFail(res.data);
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.addProductToCartActionFail();
                    } )))
    );
}
/**
 * 
 * @param {*} action$ 
 */
function changeQty(action$) {
    return action$.pipe(
        ofType(CartActions.CHANGE_QUANTITY),
        mergeMap(
            (action) => from(
                axios
                    .post( api + '/cart/update-cart' , {
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
                        console.log(res);
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
function removeProductFromCartEpic(action$) {
    return action$.pipe(
        ofType(CartActions.REMOVE_PRODUCT_FROM_CART),
        mergeMap(
            (action) => from(
                axios
                    .post( api + '/cart/update-cart' , {
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
                        console.log(res);
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
function deleteCartEpic(action$) {
    return action$.pipe(
        ofType(CartActions.DELETE_CART_FROM_DB),
        mergeMap(
            (action) => from(
                axios
                    .post( api + '/cart/delete-cart' , {
                        cartId: action.payload.cartId
                    },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
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
function addShippingEpic(action$) {
    return action$.pipe(
        ofType(CartActions.ADD_SHIPPING_TO_CART),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        api + '/cart/update-shipping' , 
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
                        console.log(res);
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
function paymentEpic(action$) {
    return action$.pipe(
        ofType(CartActions.PAYMENT_WITH_STRIPE),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        api + '/cart/payment' , 
                        {
                            data: action.payload.data,
                            price: action.payload.price
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${action.payload.token}`
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        if (res.status === 200) {
                            return CartActions.paymentWithStripeSuccess();
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

export const cartEpics = combineEpics(
    getCart,
    changeQty,
    removeProductFromCartEpic,
    addProductCart,
    deleteCartEpic,
    addShippingEpic,
    paymentEpic
);