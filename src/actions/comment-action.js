export class CommentActions {
    /**
     * return the action type prefix for comment related actions
     * @returns {string}
     * @constructor
     */
    static get PREFIX() {
        return 'COMMENT_';
    };
    /**
     * return the action type prefix for comment related actions
     * @returns {string}
     * @constructor
     */
    static get GET_COMMENT() {
        return `${CommentActions.PREFIX}GET_COMMENT`;
    }
    /**
     * return the action type prefix for comment related actions
     * @returns {string}
     * @constructor
     */
    static get GET_COMMENT_SUCCESS() {
        return `${CommentActions.PREFIX}GET_COMMENT_SUCCESS`;
    }
    /**
     * return the action type prefix for comment related actions
     * @returns {string}
     * @constructor
     */
    static get GET_COMMENT_FAIL() {
        return `${CommentActions.PREFIX}GET_COMMENT_FAIL`;
    }

    static getComment() {
        return {
            type: CommentActions.GET_COMMENT
        }
    }

    static getCommentSuccess(allComments) {
        return {
            type: CommentActions.GET_COMMENT_SUCCESS,
            payload: {
                allComments: allComments
            }
        }
    }

    static getCommentFail() {
        return {
            type: CommentActions.GET_COMMENT_FAIL
        }
    }

}