import { combineReducers } from 'redux';

import languageReducer from './language';
import { getRadioProgramsReducer, getRadiosReducer } from './radios';

const rootReducer = combineReducers({
  language: languageReducer,
  radios: getRadiosReducer,
  radio: getRadioProgramsReducer,
});

export default rootReducer;
