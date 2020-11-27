import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { ContactActions } from '../actions';

const api = "http://localhost:8080/subscribe/contact";
/**
 * 
 * @param {*} action$ 
 * @return 
 */
function postSubscribe(action$) {
    return action$.pipe(
        ofType(ContactActions.POST_SUBSCRIBE),
        mergeMap(
            (action) => from(
                axios
                    .post( api, action.payload.subscribe )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return ContactActions.postSubscribeSuccess(res.data);
                        } else {
                            return ContactActions.postSubscribeFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return ContactActions.postSubscribeFail();
                    } )))
    );
}

export const contactEpics = combineEpics(
    postSubscribe
);