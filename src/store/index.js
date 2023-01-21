import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});
