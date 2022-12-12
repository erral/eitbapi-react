import { combineReducers } from 'redux';

import languageReducer from './language';
import { getRadioProgramsReducer, getRadiosReducer } from './radios';
import {
  getTVCategoriesReducer,
  getTVCategoryReducer,
  getTVCategoryProgramsReducer,
} from './tvs';

const rootReducer = combineReducers({
  language: languageReducer,
  radios: getRadiosReducer,
  radio: getRadioProgramsReducer,
  tv_categories: getTVCategoriesReducer,
  tv_category: getTVCategoryReducer,
  tv_category_programs: getTVCategoryProgramsReducer,
});

export default rootReducer;
