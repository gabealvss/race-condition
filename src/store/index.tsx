
// Externals
import { createStore, applyMiddleware, compose, StoreEnhancer } from "redux";
import { ThunkMiddleware, thunk } from "redux-thunk";
import logger from 'redux-logger';

// Root reducer
import rootReducer from './rootReducer';

const enhancer: StoreEnhancer = compose(applyMiddleware(thunk as ThunkMiddleware, logger as never));

const store = createStore(rootReducer, {}, enhancer);
export default store;
