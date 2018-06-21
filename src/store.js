import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from "redux-thunk";

const initialState = {},
      middleware = [thunk],
      store = createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(...middleware)
        )
      );

export default store;
