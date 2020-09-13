import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { CommentActions } from '../actions';


function getComments(action$) {
    return action$.pipe(
        ofType(CommentActions.GET_COMMENT),
        mergeMap(
            (action) => from(
                axios
                    .get('https://jsonplaceholder.typicode.com/comments')
                    .then((res) => {
                        if (res.status === 200) {
                            return CommentActions.getCommentSuccess(res.data);
                        } else {
                            return CommentActions.getCommentFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return CommentActions.getCommentFail();
                    } )))
    );
}

export const commentEpics = combineEpics(
    getComments
);