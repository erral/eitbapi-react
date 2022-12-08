import { combineReducers } from 'redux';

import languageReducer from './language';

const rootReducer = combineReducers({
  language: languageReducer,
});

export default rootReducer;
