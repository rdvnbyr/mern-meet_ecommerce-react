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

}