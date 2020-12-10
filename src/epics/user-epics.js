import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';
import { UserActions } from '../actions';


function addProductToWishlistEpic(action$, state$) {
    return action$.pipe(
        ofType(UserActions.ADD_PRODUCT_TO_WISHLIST),
        withLatestFrom(state$),
        mergeMap(
            ([action, state]) => from(
                axios
                    .put( 
                        `${state.apps.apiUrl}/shop/add-product-wishlist/${action.payload.id}`,
                        {},
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.access.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return UserActions.getUserWishlist(state.session.access.userId);
                        } else {
                            return UserActions.addProductToWishlistFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return UserActions.addProductToWishlistFail();
                    } )))
    );
}

function getUserWishlistEpic(action$, state$) {
    return action$.pipe(
        ofType(UserActions.GET_USER_WISHLIST),
        withLatestFrom(state$),
        mergeMap(
            ([action, state]) => from(
                axios
                    .get( 
                        `${state.apps.apiUrl}/auth/get-user`,
                        {
                            headers: {
                                'Authorization': `Bearer ${state.session.access.token}`
                            }
                        }
                    )
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 200) {
                            return UserActions.getUserWishlistSuccess(res.data);
                        } else {
                            return UserActions.getUserWishlistFail();
                        }
                    })
                    .catch((err) =>{
                        console.log(err);
                        return UserActions.getUserWishlistFail();
                    } )))
    );
}

export const userEpics = combineEpics(
    addProductToWishlistEpic,
    getUserWishlistEpic
);