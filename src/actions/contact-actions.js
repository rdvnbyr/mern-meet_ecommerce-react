export class ContactActions {
    /**
     * return the action type prefix for contact related actions
     * @returns {string}
     * @constructor
     */
    static get PREFIX() {
        return 'CONTACT_';
    };

    /* --------------------------------------- */
    /**
     * return the action type prefix for contact related actions
     * @returns {string}
     * @constructor
     */
    static get POST_SUBSCRIBE() {
        return `${ContactActions.PREFIX}POST_SUBSCRIBE`;
    }
    /**
     * return the action type prefix for contact related actions
     * @returns {string}
     * @constructor
     */
    static get POST_SUBSCRIBE_SUCCESS() {
        return `${ContactActions.PREFIX}POST_SUBSCRIBE_SUCCESS`;
    }
    /**
     * return the action type prefix for contact related actions
     * @returns {string}
     * @constructor
     */
    static get POST_SUBSCRIBE_FAIL() {
        return `${ContactActions.PREFIX}POST_SUBSCRIBE_FAIL`;
    }

    static postSubscribe = (subscribe) => {
        return {
            type: ContactActions.POST_SUBSCRIBE,
            payload: {
                subscribe: subscribe
            }
        }
    };
    static postSubscribeSuccess = (respond) => {
        return {
            type: ContactActions.POST_SUBSCRIBE_SUCCESS,
            payload: {
                respond: respond
            }
        }
    };
    static postSubscribeFail = () => {
        return {
            type: ContactActions.POST_SUBSCRIBE_FAIL
        }
    };

        /* --------------------------------------- */
    /**
     * return the action type prefix for contact related actions
     * @returns {string}
     * @constructor
     */
    static get IS_SUCCESS_TOGGLE() {
        return `${ContactActions.PREFIX}IS_SUCCESS_TOGGLE`;
    };

    static isSuccessToggle = () => {
        return {
            type: ContactActions.IS_SUCCESS_TOGGLE
        }
    };
};