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
    static login(email, password) {
        return {
            type: SessionActions.LOGIN,
            payload: {
                email: email,
                password: password
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


}