export class ProductsActions {
    /**
     * return the action type prefix for all products related actions
     * @returns {string}
     * @constructor
     */
    static get PREFIX() {
        return 'PRODUCTS_';
    };
    /**
     * return the action type prefix for get all products actions
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS`;
    }
    /**
     * return the action type prefix for get all products actions sucesss
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS_SUCCESS() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS_SUCCESS`;
    }
    /**
     * return the action type prefix for get all products actions fail
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS_FAIL() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS_FAIL`;
    }
    // ----------------------------- //
    /**
     * return the action type prefix for get all products actions
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS_WEEKS_DEAL() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS_WEEKS_DEAL`;
    }
    /**
     * return the action type prefix for get all products actions sucesss
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS_WEEKS_DEAL_SUCCESS() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS_WEEKS_DEAL_SUCCESS`;
    }
    /**
     * return the action type prefix for get all products actions fail
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS_WEEKS_DEAL_FAIL() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS_WEEKS_DEAL_FAIL`;
    }
    // ----------------------------- //
    /**
     * return the action type prefix for get one product details actions
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCT_DETAILS() {
        return `${ProductsActions.PREFIX}GET_PRODUCT_DETAILS`;
    }
    /**
     * return the action type prefix for get one product details actions sucesss
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCT_DETAILS_SUCCESS() {
        return `${ProductsActions.PREFIX}GET_PRODUCT_DETAILS_SUCCESS`;
    }
    /**
     * return the action type prefix for get one product details actions fail
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCT_DETAILS_FAIL() {
        return `${ProductsActions.PREFIX}GET_PRODUCT_DETAILS_FAIL`;
    }

    // ------------------------ //
    /**
     * 
     */
    static getProducts() {
        return {
            type: ProductsActions.GET_PRODUCTS
        }
    }
    /**
     * @param type {array} all products from db
     */
    static getProductsSuccess(products) {
        return {
            type: ProductsActions.GET_PRODUCTS_SUCCESS,
            payload: {
                products: products
            }
        }
    }
    /**
     * 
     */
    static getProductsFail() {
        return {
            type: ProductsActions.GET_PRODUCTS_FAIL
        }
    }
    // ------------------------------- //
        // ------------------------ //
    /**
     * 
     */
    static getProductsWeeksDeal(state) {
        return {
            type: ProductsActions.GET_PRODUCTS_WEEKS_DEAL,
            payload: {
                state: state
            }
        }
    }
    /**
     * @param type {array} all products from db
     */
    static getProductsWeeksDealSuccess(products) {
        return {
            type: ProductsActions.GET_PRODUCTS_WEEKS_DEAL_SUCCESS,
            payload: {
                products: products
            }
        }
    }
    /**
     * 
     */
    static getProductsWeeksDealFail() {
        return {
            type: ProductsActions.GET_PRODUCTS_WEEKS_DEAL_FAIL
        }
    }
    // ------------------------------- //
    /**
     * @param type{string} product id
     */
    static getProductDetails(_id) {
        return {
            type: ProductsActions.GET_PRODUCT_DETAILS,
            payload: {
                _id: _id
            }
        }
    }
    /**
     * @param type {array} all products from db
     */
    static getProductDetailsSuccess(product) {
        return {
            type: ProductsActions.GET_PRODUCT_DETAILS_SUCCESS,
            payload: {
                product: product
            }
        }
    }
    /**
     * 
     */
    static getProductDetailsFail() {
        return {
            type: ProductsActions.GET_PRODUCT_DETAILS_FAIL
        }
    }
        // ----------------------------- //
    /**
     * return the action type prefix for get all products actions
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS_BEST_SELLERS() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS_BEST_SELLERS`;
    }
    /**
     * return the action type prefix for get all products actions sucesss
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS_BEST_SELLERS_SUCCESS() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS_BEST_SELLERS_SUCCESS`;
    }
    /**
     * return the action type prefix for get all products actions fail
     * @returns {string}
     * @constructor
     */
    static get GET_PRODUCTS_BEST_SELLERS_FAIL() {
        return `${ProductsActions.PREFIX}GET_PRODUCTS_BEST_SELLERS_FAIL`;
    }
    /**
     * 
     */
    static getProductsBestSellers(state) {
        return {
            type: ProductsActions.GET_PRODUCTS_BEST_SELLERS,
            payload: {
                state: state
            }
        }
    }
    /**
     * @param type {array} all products from db
     */
    static getProductsBestSellersSuccess(products) {
        return {
            type: ProductsActions.GET_PRODUCTS_BEST_SELLERS_SUCCESS,
            payload: {
                products: products
            }
        }
    }
    /**
     * 
     */
    static getProductsBestSellersFail() {
        return {
            type: ProductsActions.GET_PRODUCTS_BEST_SELLERS_FAIL
        }
    }

    // ----------------------------- //
        /**
     * return the action type prefix for get all products actions
     * @returns {string}
     * @constructor
     */
    static get REVIEW_PRODUCT() {
        return `${ProductsActions.PREFIX}REVIEW_PRODUCT`;
    }
    /**
     * return the action type prefix for get all products actions sucesss
     * @returns {string}
     * @constructor
     */
    static get REVIEW_PRODUCT_SUCCESS() {
        return `${ProductsActions.PREFIX}REVIEW_PRODUCT_SUCCESS`;
    }
    /**
     * return the action type prefix for get all products actions fail
     * @returns {string}
     * @constructor
     */
    static get REVIEW_PRODUCT_FAIL() {
        return `${ProductsActions.PREFIX}REVIEW_PRODUCT_FAIL`;
    }

        /**
     * 
     */
    static reviewProductAction(review, productId) {
        return {
            type: ProductsActions.REVIEW_PRODUCT,
            payload: {
                review: review,
                id: productId
            }
        }
    }
    /**
     * @param type {array} all products from db
     */
    static reviewProductActionSuccess() {
        return {
            type: ProductsActions.REVIEW_PRODUCT_SUCCESS
        }
    }
    /**
     * 
     */
    static reviewProductActionFail() {
        return {
            type: ProductsActions.REVIEW_PRODUCT_FAIL
        }
    }
    // ----------------------------- //


}