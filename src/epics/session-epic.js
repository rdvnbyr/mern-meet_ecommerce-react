import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { SessionActions } from '../actions';

function loginAuth(action$) {
    return action$.pipe(
        ofType(SessionActions.LOGIN),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        '', {
                        email: action.payload.email,
                        password: action.payload.password
                    })
                    .then((res) => {
                        if (res.status === 200) {
                            return SessionActions.loginSuccessful(res.data);
                        } else {
                            return SessionActions.loginFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return SessionActions.loginFail();
                    } )))
    );
}

export const loginEpics = combineEpics(
    loginAuth
);