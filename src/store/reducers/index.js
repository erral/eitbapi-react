import { combineReducers } from 'redux';

import languageReducer from './language';
import {
  getRadioProgramDataReducer,
  getRadioProgramSeasonChapterReducer,
  getRadioProgramSeasonReducer,
  getRadioProgramSeasonsReducer,
  getRadioProgramsReducer,
  getRadiosReducer,
} from './radios';
import {
  getTVCategoriesReducer,
  getTVCategoryProgramPlaylistChapterReducer,
  getTVCategoryProgramPlaylistReducer,
  getTVCategoryProgramsReducer,
  getTVCategoryReducer,
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
  tv_category_program_playlist: getTVCategoryProgramPlaylistReducer,
  tv_category_program_playlist_chapter:
    getTVCategoryProgramPlaylistChapterReducer,
});

export default rootReducer;
