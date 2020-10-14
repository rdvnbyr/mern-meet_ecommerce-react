export class CartActions {
    /**
     * return the action type prefix for cart related actions
     * @returns {string}
     * @constructor
     */
    static get PREFIX() {
        return 'CART_';
    };
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

}