import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { SessionActions } from '../actions';


function loginAuth(action$,state$) {
    return action$.pipe(
        ofType(SessionActions.LOGIN),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        state.apps.apiUrl + '/auth/login', action.payload.user
                    )
                    .then((res) => {
                        // console.log('EPIC',res);
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
function signUpAuth(action$,state$) {

    return action$.pipe(
        ofType(SessionActions.REGISTER),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => from(
                axios
                    .post(
                        `${state.apps.apiUrl}/auth/signup`, action.payload.user
                    )
                    .then((res) => {
                        // console.log('EPIC',res);
                        if (res.status === 200) {
                            return SessionActions.registerSuccessful(res.data);
                        } else {
                            return SessionActions.registerFail(res);
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return SessionActions.registerFail(err);
                    } )))
    );
}
/**
 * 
 * @param {*} action$ 
 */
function logoutEpic(action$, state$) {
    return action$.pipe(
        ofType(SessionActions.LOGOUT),
        withLatestFrom(state$),
        mergeMap(
            ([action, state]) => from(
                axios
                    .post(
                        `${state.apps.apiUrl}/auth/logout`,
                        {},
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.access.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 204) {
                            return SessionActions.logoutSuccess();
                        } else {
                            return SessionActions.logoutFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return SessionActions.logoutFail(err);
                    } )))
    );
}


export const loginEpics = combineEpics(
    loginAuth,
    signUpAuth,
    logoutEpic
);