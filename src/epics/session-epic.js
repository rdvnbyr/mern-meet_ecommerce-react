import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { SessionActions } from '../actions';


const api = 'http://localhost:8080';// https://meethub-node-restapi.herokuapp.com

function loginAuth(action$) {
    return action$.pipe(
        ofType(SessionActions.LOGIN),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        api + '/auth/login', action.payload.user
                    )
                    .then((res) => {
                        console.log('EPIC',res);
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
function signUpAuth(action$) {

    return action$.pipe(
        ofType(SessionActions.REGISTER),
        mergeMap(
            (action) => from(
                axios
                    .post(
                        `${api}/auth/signup`, action.payload.user
                    )
                    .then((res) => {
                        console.log('EPIC',res);
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
                        `${api}/auth/logout`,
                        {},
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.access.token}`
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res);
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