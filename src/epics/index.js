import { combineEpics } from 'redux-observable';

import { commentEpics } from './comment-epic';
import { loginEpics } from './session-epic';
import {productsEpics} from './products-epic';
import { cartEpics } from './cart-epics';
 
export const epics = combineEpics(
    commentEpics,
    loginEpics,
    productsEpics,
    cartEpics
)