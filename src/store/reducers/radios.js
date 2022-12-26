import {
  GET_RADIO_PROGRAMS,
  GET_RADIOS,
  GET_RADIO_PROGRAM_DATA,
  GET_RADIO_PROGRAM_SEASONS,
  GET_RADIO_PROGRAM_SEASON,
} from '../actions/radios';

const getRadiosState = {
  loading: false,
  loaded: false,
  error: null,
};

export const getRadiosReducer = (state = getRadiosState, action) => {
  switch (action.type) {
    case `${GET_RADIOS}_PENDING`:
      return {
        ...state,
        loading: true,
        loaded: false,
        data: [],
      };
    case `${GET_RADIOS}_SUCCESS`:
      return {
        ...state,
        data: action.payload?.items?.radios,
        loading: false,
        loaded: true,
      };
    case `${GET_RADIOS}_FAIL`:
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

const getRadioProgramsState = {
  loading: false,
  loaded: false,
  error: null,
};
export const getRadioProgramsReducer = (
  state = getRadioProgramsState,
  action,
) => {
  switch (action.type) {
    case `${GET_RADIO_PROGRAMS}_PENDING`:
      return {
        ...state,
        [action.radio_id]: [],
        loading: true,
        loaded: false,
      };
    case `${GET_RADIO_PROGRAMS}_SUCCESS`:
      return {
        ...state,
        [action.radio_id]: action.payload.items,
        loading: false,
        loaded: true,
      };
    case `${GET_RADIO_PROGRAMS}_FAIL`:
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

const getRadioProgramDataState = {
  loading: false,
  loaded: false,
  error: null,
};
export const getRadioProgramDataReducer = (
  state = getRadioProgramDataState,
  action,
) => {
  switch (action.type) {
    case `${GET_RADIO_PROGRAM_DATA}_PENDING`:
      return {
        ...state,
        [action.program_id]: [],
        loading: true,
        loaded: false,
      };
    case `${GET_RADIO_PROGRAM_DATA}_SUCCESS`:
      return {
        ...state,
        [action.program_id]: action.payload.items,
        loading: false,
        loaded: true,
      };
    case `${GET_RADIO_PROGRAM_DATA}_FAIL`:
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

const getRadioProgramSeasonsState = {
  loading: false,
  loaded: false,
  error: null,
};
export const getRadioProgramSeasonsReducer = (
  state = getRadioProgramSeasonsState,
  action,
) => {
  switch (action.type) {
    case `${GET_RADIO_PROGRAM_SEASONS}_PENDING`:
      return {
        ...state,
        [action.program_id]: [],
        loading: true,
        loaded: false,
      };
    case `${GET_RADIO_PROGRAM_SEASONS}_SUCCESS`:
      return {
        ...state,
        [action.program_id]: action.payload.items,
        loading: false,
        loaded: true,
      };
    case `${GET_RADIO_PROGRAM_SEASONS}_FAIL`:
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

const getRadioProgramSeasonState = {
  loading: false,
  loaded: false,
  error: null,
};
export const getRadioProgramSeasonReducer = (
  state = getRadioProgramSeasonState,
  action,
) => {
  switch (action.type) {
    case `${GET_RADIO_PROGRAM_SEASON}_PENDING`:
      return {
        ...state,
        [action.season_id]: [],
        loading: true,
        loaded: false,
      };
    case `${GET_RADIO_PROGRAM_SEASON}_SUCCESS`:
      return {
        ...state,
        [action.season_id]: action.payload.items,
        loading: false,
        loaded: true,
      };
    case `${GET_RADIO_PROGRAM_SEASON}_FAIL`:
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
