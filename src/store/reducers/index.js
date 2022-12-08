import { combineReducers } from 'redux';

import languageReducer from './language';
import radioRaducer from './radios';

const rootReducer = combineReducers({
  language: languageReducer,
  radio: radioRaducer,
});

export default rootReducer;
