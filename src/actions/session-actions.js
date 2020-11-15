export class SessionActions {
    /**
     * @return {string}
     * @constructor
     */
    static get PREFIX() {
        return 'SESION_'
    };
    /**
     * login auth
     * @return {string}
     * @constructor
     */
    static get LOGIN() {
        return `${SessionActions.PREFIX}LOGIN`;
    }
    /**
     * login auth success
     * @return {string}
     * @constructor
     */
    static get LOGIN_SUCCESSFUL() {
        return `${SessionActions.PREFIX}LOGIN_SUCCESSFUL`;
    }
        /**
         * login auth fail
     * @return {string}
     * @constructor
     */
    static get LOGIN_FAIL() {
        return `${SessionActions.PREFIX}LOGIN_FAIL`;
    }
    /**
     * login auth success
     * @return {string}
     * @constructor
     */
    static login(user) {
        return {
            type: SessionActions.LOGIN,
            payload: {
                user: user
            }
        }
    };
        /**
     * login auth success
     * @return {string}
     * @constructor
     */
    static loginSuccessful(user) {
        return {
            type: SessionActions.LOGIN_SUCCESSFUL,
            payload: {
                user: user
            }
        }
    };
        /**
     * login auth success
     * @return {string}
     * @constructor
     */
    static loginFail(error) {
        return {
            type: SessionActions.LOGIN_FAIL,
            payload: {
                error: error
            }
        }
    };

        /**
     * LOGOUT auth
     * @return {string}
     * @constructor
     */
    static get LOGOUT() {
        return `${SessionActions.PREFIX}LOGOUT`;
    }
    /**
     * LOGOUT auth success
     * @return {string}
     * @constructor
     */
    static get LOGOUT_SUCCESSFUL() {
        return `${SessionActions.PREFIX}LOGOUT_SUCCESSFUL`;
    }
        /**
         * LOGOUT auth fail
     * @return {string}
     * @constructor
     */
    static get LOGOUT_FAIL() {
        return `${SessionActions.PREFIX}LOGOUT_FAIL`;
    }

        /**
     * logout auth success
     * @return {string}
     * @constructor
     */
    static logout() {
        return {
            type: SessionActions.LOGOUT
        };
    };
        /**
     * logout auth success
     * @return {string}
     * @constructor
     */
    static logoutSuccess() {
        return {
            type: SessionActions.LOGOUT_SUCCESSFUL
        };
    };
        /**
     * logout auth success
     * @return {string}
     * @constructor
     */
    static logoutFail() {
        return {
            type: SessionActions.LOGIN_FAIL
        };
    };
/**
    * register auth 
    * @return {string}
    * @constructor
    */
    static get REGISTER() {
        return `${SessionActions.PREFIX}REGISTER`;
    }
    /**
     * register auth success
     * @return {string}
     * @constructor
     */
    static get REGISTER_SUCCESSFUL() {
        return `${SessionActions.PREFIX}REGISTER_SUCCESSFUL`;
    }
        /**
         * register auth fail
     * @return {string}
     * @constructor
     */
    static get REGISTER_FAIL() {
        return `${SessionActions.PREFIX}REGISTER_FAIL`;
    }
    /**
     * register auth success
     * @return {string}
     * @constructor
     */
    static register(user) {
        return {
            type: SessionActions.REGISTER,
            payload: {
                user: user
            }
        }
    };
        /**
     * register auth success
     * @return {string}
     * @constructor
     */
    static registerSuccessful(user) {
        return {
            type: SessionActions.REGISTER_SUCCESSFUL,
            payload: {
                user: user
            }
        }
    };
        /**
     * register auth fail
     * @return {string}
     * @constructor
     */
    static registerFail(error) {
        return {
            type: SessionActions.REGISTER_FAIL,
            payload: {
                error: error
            }
        }
    };
}