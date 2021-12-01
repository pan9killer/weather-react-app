import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import thunk from 'redux-thunk';
// import { applyMiddleware } from 'redux';


const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
        reducer: reducer,
        middleware
      });

export default store;