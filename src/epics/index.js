import { combineEpics } from 'redux-observable';

import { commentEpics } from './comment-epic';
import { loginEpics } from './session-epic';
 
export const epics = combineEpics(
    commentEpics,
    loginEpics
)