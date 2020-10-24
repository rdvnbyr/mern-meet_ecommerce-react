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

    static addProductToCartActionSuccess(cart) {
        return {
            type: CartActions.ADD_PRODUCT_TO_CART_CART_SUCCESS,
            payload: {
                cart: cart
            }
        }
    }

    static addProductToCartActionFail() {
        return {
            type: CartActions.ADD_PRODUCT_TO_CART_CART_FAIL
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




}