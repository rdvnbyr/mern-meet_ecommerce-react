/**  global process */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createHashHistory } from 'history';

// here we load all epics, that should get used in this application
import { epics } from './epics';

// then we load all reducer, that we need
import { 
    commentReducer,
    sessionReducer,
    productsReducer,
    cartReducer, 
    contactReducer,
    userReducer 
    } from './reducers';
import { applicationReducer } from './reducers/application-reducer';

// now we generate an application history object. This will be used by the app-container as well, so we need to export it
export const routerHistory = createHashHistory();

// and other needed middleware stuff, so we can actually compose it all
const epicMiddleware = createEpicMiddleware();

const middleware = compose(
    applyMiddleware(
        epicMiddleware,
        routerMiddleware(routerHistory)
    )
);

const mainReducer = combineReducers({
    router: connectRouter(routerHistory),
    comment: commentReducer,
    session: sessionReducer,
    products: productsReducer,
    carts: cartReducer,
    contact: contactReducer,
    user: userReducer,
    apps: applicationReducer
});

const persistConfig = {
    key: 'meethub-frontend',
    storage,
    blacklist: ['comment']
}

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export {
    store,
    persistor
};

epicMiddleware.run(epics);