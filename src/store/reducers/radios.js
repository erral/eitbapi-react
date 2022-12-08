import { GET_RADIO_PROGRAMS } from '../actions/radios';

const initialState = {
  radio: '',
  loading: false,
  loaded: false,
  error: null,
};

const radioRaducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RADIO_PROGRAMS:
      return {
        ...state,
        radio: action.payload,
      };
    case `${GET_RADIO_PROGRAMS}_SUCCESS`:
      return {
        ...state,
        radio: action.payload,
        loading: false,
        loaded: true,
      };
    case `${GET_RADIO_PROGRAMS}_PENDING`:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case `${GET_RADIO_PROGRAMS}_ERROR`:
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

export default radioRaducer;
