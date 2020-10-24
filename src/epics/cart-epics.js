import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { CartActions } from '../actions';

const api = 'http://localhost:8080';

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
                            return CartActions.addProductToCartActionSuccess(res);
                        } else {
                            return CartActions.addProductToCartActionFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CartActions.addProductToCartActionFail();
                    } )))
    );
}

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


export const cartEpics = combineEpics(
    getCart,
    changeQty,
    removeProductFromCartEpic,
    addProductCart
);