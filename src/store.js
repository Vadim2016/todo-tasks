import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from "redux-thunk";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware
            )
        ),
    )
);

const store = configureStore({});

export default store;
