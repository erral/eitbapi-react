import { combineReducers } from 'redux';

import languageReducer from './language';
import {
  getRadioProgramsReducer,
  getRadiosReducer,
  getRadioProgramDataReducer,
  getRadioProgramSeasonsReducer,
  getRadioProgramSeasonReducer,
  getRadioProgramSeasonChapterReducer,
} from './radios';
import {
  getTVCategoriesReducer,
  getTVCategoryReducer,
  getTVCategoryProgramsReducer,
} from './tvs';

const rootReducer = combineReducers({
  language: languageReducer,
  radios: getRadiosReducer,
  radio: getRadioProgramsReducer,
  radio_program_data: getRadioProgramDataReducer,
  radio_program_seasons: getRadioProgramSeasonsReducer,
  radio_program_season: getRadioProgramSeasonReducer,
  radio_program_season_chapter: getRadioProgramSeasonChapterReducer,
  tv_categories: getTVCategoriesReducer,
  tv_category: getTVCategoryReducer,
  tv_category_programs: getTVCategoryProgramsReducer,
});

export default rootReducer;
