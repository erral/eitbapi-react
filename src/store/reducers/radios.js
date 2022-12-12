import { GET_RADIO_PROGRAMS } from '../actions/radios';
import { GET_RADIOS } from '../actions/radios';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
};

export const getRadioProgramsReducer = (state = initialState, action) => {
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

export const getRadiosReducer = (state = initialState, action) => {
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
