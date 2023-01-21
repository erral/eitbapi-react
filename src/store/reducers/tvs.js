import {
  GET_TV_CATEGORIES,
  GET_TV_CATEGORY,
  GET_TV_CATEGORY_PROGRAMS,
  GET_TV_CATEGORY_PROGRAM_PLAYLIST,
  GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER,
} from '../actions/tvs';

const getTVCategoriesState = {
  loading: false,
  loaded: false,
  error: null,
};

export const getTVCategoriesReducer = (
  state = getTVCategoriesState,
  action,
) => {
  switch (action.type) {
    case `${GET_TV_CATEGORIES}_PENDING`:
      return {
        ...state,
        loading: true,
        loaded: false,
        data: [],
      };
    case `${GET_TV_CATEGORIES}_SUCCESS`:
      return {
        ...state,
        data: action.payload?.items.categories,
        loading: false,
        loaded: true,
      };
    case `${GET_TV_CATEGORIES}_FAIL`:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
        data: [],
      };
    // Default case
    default:
      return state;
  }
};

const getTVCategoryState = {
  loading: false,
  loaded: false,
  error: null,
};
export const getTVCategoryReducer = (state = getTVCategoryState, action) => {
  switch (action.type) {
    case `${GET_TV_CATEGORY}_PENDING`:
      const category =
        action.category !== undefined ? { [action.category]: [] } : {};
      return {
        ...state,
        ...category,
        loading: true,
        loaded: false,
      };
    case `${GET_TV_CATEGORY}_SUCCESS`:
      return {
        ...state,
        [action.category]: action.payload.items.program,
        loading: false,
        loaded: true,
      };
    case `${GET_TV_CATEGORY}_FAIL`:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      };
    // Default case
    default:
      return state;
  }
};

const getTVCategoryProgramsState = {
  loading: false,
  loaded: false,
  error: null,
};
export const getTVCategoryProgramsReducer = (
  state = getTVCategoryProgramsState,
  action,
) => {
  switch (action.type) {
    case `${GET_TV_CATEGORY_PROGRAMS}_PENDING`:
      const program_id =
        action.program_id !== undefined ? { [action.program_id]: [] } : {};
      return {
        ...state,
        ...program_id,
        loading: true,
        loaded: false,
      };
    case `${GET_TV_CATEGORY_PROGRAMS}_SUCCESS`:
      return {
        ...state,
        [action.program_id]: action.payload.items,
        loading: false,
        loaded: true,
      };
    case `${GET_TV_CATEGORY_PROGRAMS}_FAIL`:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      };
    // Default case
    default:
      return state;
  }
};

const getTVCategoryProgramPlaylistState = {
  loading: false,
  loaded: false,
  error: null,
};
export const getTVCategoryProgramPlaylistReducer = (
  state = getTVCategoryProgramPlaylistState,
  action,
) => {
  switch (action.type) {
    case `${GET_TV_CATEGORY_PROGRAM_PLAYLIST}_PENDING`:
      const playlist_id =
        action.playlist_id !== undefined ? { [action.playlist_id]: [] } : {};
      return {
        ...state,
        ...playlist_id,
        loading: true,
        loaded: false,
      };
    case `${GET_TV_CATEGORY_PROGRAM_PLAYLIST}_SUCCESS`:
      return {
        ...state,
        [action.playlist_id]: action.payload.items,
        loading: false,
        loaded: true,
      };
    case `${GET_TV_CATEGORY_PROGRAM_PLAYLIST}_FAIL`:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      };
    // Default case
    default:
      return state;
  }
};

const getTVCategoryProgramPlaylistChapterState = {
  loading: false,
  loaded: false,
  error: null,
};
export const getTVCategoryProgramPlaylistChapterReducer = (
  state = getTVCategoryProgramPlaylistChapterState,
  action,
) => {
  switch (action.type) {
    case `${GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER}_PENDING`:
      const chapter_id =
        action.chapter_id !== undefined ? { [action.chapter_id]: [] } : {};
      return {
        ...state,
        ...chapter_id,
        loading: true,
        loaded: false,
      };
    case `${GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER}_SUCCESS`:
      return {
        ...state,
        [action.chapter_id]: action.payload.items,
        loading: false,
        loaded: true,
      };
    case `${GET_TV_CATEGORY_PROGRAM_PLAYLIST_CHAPTER}_FAIL`:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
      };
    // Default case
    default:
      return state;
  }
};
