export class CartActions {
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get PREFIX() {
        return 'CART_';
    };
    /* --------------------------------------- */
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ADD_PRODUCT_TO_CART_CART() {
        return `${CartActions.PREFIX}ADD_PRODUCT_TO_CART_CART`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ADD_PRODUCT_TO_CART_CART_SUCCESS() {
        return `${CartActions.PREFIX}ADD_PRODUCT_TO_CART_CART_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ADD_PRODUCT_TO_CART_CART_FAIL() {
        return `${CartActions.PREFIX}ADD_PRODUCT_TO_CART_CART_FAIL`;
    }
            /**
     * 
     * @param {*} token 
     * @param {*} productId 
     * @param {*} userId 
     */
    static addProductToCartAction(token, productId, userId) {
        return {
            type: CartActions.ADD_PRODUCT_TO_CART_CART,
            payload: {
                token: token,
                productId: productId,
                userId: userId
            }
        }
    }

    static addProductToCartActionSuccess() {
        return {
            type: CartActions.ADD_PRODUCT_TO_CART_CART_SUCCESS
        }
    }

    static addProductToCartActionFail(error) {
        return {
            type: CartActions.ADD_PRODUCT_TO_CART_CART_FAIL,
            payload: {
                error: error
            }
        }
    }

    /* --------------------------------------- */
    /* --------------------------------------- */
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get GET_CART() {
        return `${CartActions.PREFIX}GET_CART`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get GET_CART_SUCCESS() {
        return `${CartActions.PREFIX}GET_CART_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get GET_CART_FAIL() {
        return `${CartActions.PREFIX}GET_CART_FAIL`;
    }
        /**
     * 
     * @param {*} token 
     * @param {*} userId 
     */
    static getCart(token, userId) {
        return {
            type: CartActions.GET_CART,
            payload: {
                token: token,
                userId: userId
            }
        }
    }

    static getCartSuccess(cart) {
        return {
            type: CartActions.GET_CART_SUCCESS,
            payload: {
                cart: cart
            }
        }
    }

    static getCartFail() {
        return {
            type: CartActions.GET_CART_FAIL
        }
    }
/* --------------------------------------- */
/* --------------------------------------- */
        /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get CHANGE_QUANTITY() {
        return `${CartActions.PREFIX}CHANGE_QUANTITY`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get CHANGE_QUANTITY_SUCCESS() {
        return `${CartActions.PREFIX}CHANGE_QUANTITY_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get CHANGE_QUANTITY_FAIL() {
        return `${CartActions.PREFIX}CHANGE_QUANTITY_FAIL`;
    }
    /**
     * 
     * @param {*} token 
     * @param {*} userId 
     */
    static changeQuantity( token, cartId, userId, _id, qty ) {
        return {
            type: CartActions.CHANGE_QUANTITY,
            payload: {
                userId: userId,
                productId: _id,
                qty: qty,
                cartId: cartId,
                token: token
            }
        }
    }

    static changeQuantitySuccess(cart) {
        return {
            type: CartActions.CHANGE_QUANTITY_SUCCESS
        }
    }

    static changeQuantityFail() {
        return {
            type: CartActions.CHANGE_QUANTITY_FAIL
        }
    }
    /* --------------------------------------- */
    /* --------------------------------------- */
        /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get REMOVE_PRODUCT_FROM_CART() {
        return `${CartActions.PREFIX}REMOVE_PRODUCT_FROM_CART`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get REMOVE_PRODUCT_FROM_CART_SUCCESS() {
        return `${CartActions.PREFIX}REMOVE_PRODUCT_FROM_CART_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get REMOVE_PRODUCT_FROM_CART_FAIL() {
        return `${CartActions.PREFIX}REMOVE_PRODUCT_FROM_CART_FAIL`;
    }


    /**
     * 
     * @param {*} token 
     * @param {*} userId 
     */
    static removeProductFromCart( token, cartId, userId, _id,removeProduct ) {
        return {
            type: CartActions.REMOVE_PRODUCT_FROM_CART,
            payload: {
                removeProduct: removeProduct,
                userId: userId,
                productId: _id,
                cartId: cartId,
                token: token
            }
        }
    }

    static removeProductFromCartSuccess(cart) {
        return {
            type: CartActions.REMOVE_PRODUCT_FROM_CART_SUCCESS
        }
    }

    static removeProductFromCartFail() {
        return {
            type: CartActions.REMOVE_PRODUCT_FROM_CART_FAIL
        }
    }

    /* --------------------------------------- */
    /* --------------------------------------- */
        /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get DELETE_CART_FROM_DB() {
        return `${CartActions.PREFIX}DELETE_CART_FROM_DB`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get DELETE_CART_FROM_DB_SUCCESS() {
        return `${CartActions.PREFIX}DELETE_CART_FROM_DB_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get DELETE_CART_FROM_DB_FAIL() {
        return `${CartActions.PREFIX}DELETE_CART_FROM_DB_FAIL`;
    }


    /**
     * 
     * @param {*} token 
     * @param {*} cartId 
     */
    static deleteCart( token, cartId) {
        return {
            type: CartActions.DELETE_CART_FROM_DB,
            payload: {
                token: token,
                cartId: cartId
            }
        }
    }

    static deleteCartSuccess() {
        return {
            type: CartActions.DELETE_CART_FROM_DB_SUCCESS
        }
    }

    static deleteCartFail() {
        return {
            type: CartActions.DELETE_CART_FROM_DB_FAIL
        }
    }

    /* --------------------------------------- */
    /* --------------------------------------- */
        /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ADD_SHIPPING_TO_CART() {
        return `${CartActions.PREFIX}ADD_SHIPPING_TO_CART`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ADD_SHIPPING_TO_CART_SUCCESS() {
        return `${CartActions.PREFIX}ADD_SHIPPING_TO_CART_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ADD_SHIPPING_TO_CART_FAIL() {
        return `${CartActions.PREFIX}ADD_SHIPPING_TO_CART_FAIL`;
    }


    /**
     * 
     * @param {*} token 
     * @param {*} cartId 
     */
    static addShipping( token, cartId, updateShipping) {
        return {
            type: CartActions.ADD_SHIPPING_TO_CART,
            payload: {
                token: token,
                cartId: cartId,
                updateShipping: updateShipping
            }
        }
    }

    static addShippingSuccess() {
        return {
            type: CartActions.ADD_SHIPPING_TO_CART_SUCCESS
        }
    }

    static addShippingFail() {
        return {
            type: CartActions.ADD_SHIPPING_TO_CART_FAIL
        }
    }
    /* --------------------------------------- */
    /* --------------------------------------- */
        /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get PAYMENT_WITH_STRIPE() {
        return `${CartActions.PREFIX}PAYMENT_WITH_STRIPE`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get PAYMENT_WITH_STRIPE_SUCCESS() {
        return `${CartActions.PREFIX}PAYMENT_WITH_STRIPE_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get PAYMENT_WITH_STRIPE_FAIL() {
        return `${CartActions.PREFIX}PAYMENT_WITH_STRIPE_FAIL`;
    }


    /**
     * 
     * @param {*} token 
     * @param {*} cartId 
     */
    static paymentWithStripe(price) {
        return {
            type: CartActions.PAYMENT_WITH_STRIPE,
            payload: {
                price: price
            }
        }
    }

    static paymentWithStripeSuccess() {
        return {
            type: CartActions.PAYMENT_WITH_STRIPE_SUCCESS
        }
    }

    static paymentWithStripeFail() {
        return {
            type: CartActions.PAYMENT_WITH_STRIPE_FAIL
        }
    }

    /* --------------------------------------- */
    /* --------------------------------------- */
        /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get PAYMENT_END() {
        return `${CartActions.PREFIX}PAYMENT_END`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get PAYMENT_END_SUCCESS() {
        return `${CartActions.PREFIX}PAYMENT_END_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get PAYMENT_END_FAIL() {
        return `${CartActions.PREFIX}PAYMENT_END_FAIL`;
    }


    /**
     * 
     * @param {*} token 
     * @param {*} cartId 
     */
    static paymentEnd(cartId) {
        return {
            type: CartActions.PAYMENT_END,
            payload: {
                cartId: cartId
            }
        }
    }

    static paymentEndSuccess() {
        return {
            type: CartActions.PAYMENT_END_SUCCESS
        }
    }

    static paymentEndFail() {
        return {
            type: CartActions.PAYMENT_END_FAIL
        }
    }
        /* --------------------------------------- */
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get GET_PURCHASED_CART() {
        return `${CartActions.PREFIX}GET_PURCHASED_CART`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get GET_PURCHASED_CART_SUCCESS() {
        return `${CartActions.PREFIX}GET_PURCHASED_CART_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get GET_PURCHASED_CART_FAIL() {
        return `${CartActions.PREFIX}GET_PURCHASED_CART_FAIL`;
    }
    /**
     * 
     */
    static getPurchasedCart() {
        return {
            type: CartActions.GET_PURCHASED_CART
        }
    }

    static getPurchasedCartSuccess(cart) {
        return {
            type: CartActions.GET_PURCHASED_CART_SUCCESS,
            payload: {
                cart: cart
            }
        }
    }

    static getPurchasedCartFail() {
        return {
            type: CartActions.GET_PURCHASED_CART_FAIL
        }
    }
/* --------------------------------------- */
        /* --------------------------------------- */
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ARCHIVED_ORDER() {
        return `${CartActions.PREFIX}ARCHIVED_ORDER`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ARCHIVED_ORDER_SUCCESS() {
        return `${CartActions.PREFIX}ARCHIVED_ORDER_SUCCESS`;
    }
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get ARCHIVED_ORDER_FAIL() {
        return `${CartActions.PREFIX}ARCHIVED_ORDER_FAIL`;
    }
    /**
     * 
     */
    static archivedOrder(cartId) {
        return {
            type: CartActions.ARCHIVED_ORDER,
            payload: {
                cartId: cartId
            }
            
        }
    }

    static archivedOrderSuccess(cart) {
        return {
            type: CartActions.ARCHIVED_ORDER_SUCCESS
        }
    }

    static archivedOrderFail() {
        return {
            type: CartActions.ARCHIVED_ORDER_FAIL
        }
    }
/* --------------------------------------- */



}