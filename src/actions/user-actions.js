export class UserActions {
    /**
     * return the action type prefix for user related actions
     * @returns {string}
     * @constructor
     */
    static get PREFIX() {
        return 'USER_';
    };

        /* --------------------------------------- */
    /**
     * return the action type add product to user wishlist
     * @returns {string}
     * @constructor
     */
    static get ADD_PRODUCT_TO_WISHLIST() {
        return `${UserActions.PREFIX}ADD_PRODUCT_TO_WISHLIST`;
    }
    /**
     * return the action type add product to user wishlist action success
     * @returns {string}
     * @constructor
     */
    static get ADD_PRODUCT_TO_WISHLIST_SUCCESS() {
        return `${UserActions.PREFIX}ADD_PRODUCT_TO_WISHLIST_SUCCESS`;
    }
    /**
     * return the action type add product to user wishlist action fail
     * @returns {string}
     * @constructor
     */
    static get ADD_PRODUCT_TO_WISHLIST_FAIL() {
        return `${UserActions.PREFIX}ADD_PRODUCT_TO_WISHLIST_FAIL`;
    }

    static addProductToWishlist = (id) => {
        return {
            type: UserActions.ADD_PRODUCT_TO_WISHLIST,
            payload: {
                id: id
            }
        };
    };
    static addProductToWishlistSuccess = () => {
        return {
            type: UserActions.ADD_PRODUCT_TO_WISHLIST_SUCCESS
        }
    };
    static addProductToWishlistFail = () => {
        return {
            type: UserActions.ADD_PRODUCT_TO_WISHLIST_FAIL
        }
    };

        /* --------------------------------------- */

        /* --------------------------------------- */
    /**
     * return the action type add product to user wishlist
     * @returns {string}
     * @constructor
     */
    static get GET_USER_WISHLIST() {
        return `${UserActions.PREFIX}GET_USER_WISHLIST`;
    }
    /**
     * return the action type add product to user wishlist action success
     * @returns {string}
     * @constructor
     */
    static get GET_USER_WISHLIST_SUCCESS() {
        return `${UserActions.PREFIX}GET_USER_WISHLIST_SUCCESS`;
    }
    /**
     * return the action type add product to user wishlist action fail
     * @returns {string}
     * @constructor
     */
    static get GET_USER_WISHLIST_FAIL() {
        return `${UserActions.PREFIX}GET_USER_WISHLIST_FAIL`;
    }

    static getUserWishlist = (id) => {
        return {
            type: UserActions.GET_USER_WISHLIST,
            payload: {
                id: id
            }
        };
    };
    static getUserWishlistSuccess = (userWishlist) => {
        return {
            type: UserActions.GET_USER_WISHLIST_SUCCESS,
            payload: {
                userWishlist: userWishlist
            }
        }
    };
    static getUserWishlistFail = () => {
        return {
            type: UserActions.GET_USER_WISHLIST_FAIL
        }
    };

        /* --------------------------------------- */
};