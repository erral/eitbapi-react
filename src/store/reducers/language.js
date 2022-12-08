import { DEFAULT_LANGUAGE } from '../../config';
import {
  SET_LANGUAGE,
  // GET_LANGUAGE,
  // INITIALIZE_LANGUAGE_STATE,
  // SET_LANGUAGE_ERROR,
  // SET_LANGUAGE_PENDING,
  // SET_LANGUAGE_SUCCESS,
} from '../actions/language';

const initialState = {
  langCode: DEFAULT_LANGUAGE,
  loading: false,
  loaded: false,
  error: null,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        langCode: action.payload.langCode,
      };
    // case SET_LANGUAGE_SUCCESS:
    //   return {
    //     ...state,
    //     langCode: action.payload.langCode,
    //     loading: false,
    //     loaded: true,
    //   };
    // case SET_LANGUAGE_PENDING:
    //   return {
    //     ...state,
    //     loading: true,
    //     loaded: false,
    //   };
    // case SET_LANGUAGE_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false,
    //     loaded: false,
    //   };
    // case INITIALIZE_LANGUAGE_STATE:
    // return {
    //   ...state,
    //   loading: false,
    //   loaded: false,
    //   error: null,
    // };
    // Default case
    default:
      return state;
  }
};

export default languageReducer;
