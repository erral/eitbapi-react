import {
  Home,
  Radios,
  Radio,
  RadioProgram,
  RadioProgramSeason,
  RadioProgramSeasonChapter,
  TVs,
  TVCategory,
  TVCategoryProgram,
} from '../pages';

export const INDEX_COMPONENT = Home;
export const ROUTES = {
  RADIOS: {
    paths: {
      en: 'radios',
      eu: 'radios',
      es: 'radios',
    },
    Component: Radios,
  },
  RADIO: {
    paths: {
      en: 'radios/:id',
      es: 'radios/:id',
      eu: 'radios/:id',
    },
    Component: Radio,
  },
  RADIO_PROGRAM: {
    paths: {
      en: 'radios/:id/:program_id',
      es: 'radios/:id/:program_id',
      eu: 'radios/:id/:program_id',
    },
    Component: RadioProgram,
  },
  RADIO_PROGRAM_SEASON: {
    paths: {
      en: 'radios/:id/:program_id/:season_id',
      es: 'radios/:id/:program_id/:season_id',
      eu: 'radios/:id/:program_id/:season_id',
    },
    Component: RadioProgramSeason,
  },
  RADIO_PROGRAM_SEASON_CHAPTER: {
    paths: {
      en: 'radios/:id/:program_id/:season_id/:chapter_id',
      es: 'radios/:id/:program_id/:season_id/:chapter_id',
      eu: 'radios/:id/:program_id/:season_id/:chapter_id',
    },
    Component: RadioProgramSeasonChapter,
  },
  TVS: {
    paths: {
      en: 'tvs',
      eu: 'tvs',
      es: 'tvs',
    },
    Component: TVs,
  },
  TV_CATEGORY: {
    paths: {
      en: 'tvs/:category_id',
      eu: 'tvs/:category_id',
      es: 'tvs/:category_id',
    },
    Component: TVCategory,
  },
  TV_CATEGORY_PROGRAM: {
    paths: {
      en: 'tvs/:category_id/:program_id',
      eu: 'tvs/:category_id/:program_id',
      es: 'tvs/:category_id/:program_id',
    },
    Component: TVCategoryProgram,
  },
};
