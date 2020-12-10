import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { ContactActions } from '../actions';


/**
 * 
 * @param {*} action$ 
 * @return 
 */
function postSubscribe(action$,state$) {
    return action$.pipe(
        ofType(ContactActions.POST_SUBSCRIBE),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post( `${state.apps.apiUrl}/subscribe/contact`, action.payload.subscribe )
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