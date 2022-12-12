import {
  GET_TV_CATEGORIES,
  GET_TV_CATEGORY,
  GET_TV_CATEGORY_PROGRAMS,
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
