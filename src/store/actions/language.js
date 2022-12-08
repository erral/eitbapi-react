// import {
//   changeLanguage,
//   getLanguage as getLanguageHelper,
// } from '../../helpers/language';

export const SET_LANGUAGE = 'SET_LANGUAGE';
export const setLanguage = (langCode) => {
  return {
    type: SET_LANGUAGE,
    payload: {
      langCode,
    },
  };
};
// export const GET_LANGUAGE = 'GET_LANGUAGE';
// export const SET_LANGUAGE_PENDING = 'SET_LANGUAGE_PENDING';
// export const SET_LANGUAGE_SUCCESS = 'SET_LANGUAGE_SUCCESS';
// export const SET_LANGUAGE_ERROR = 'SET_LANGUAGE_ERROR';

// export const INITIALIZE_LANGUAGE_STATE = 'INITIALIZE_LANGUAGE_STATE';

// export const initializeState = () => {
//   return {
//     type: INITIALIZE_LANGUAGE_STATE,
//   };
// };

// export const getLanguage = () => {
//   return async (dispatch) => {
//     const langCode = await getLanguageHelper();
//     try {
//       dispatch({
//         type: GET_LANGUAGE,
//         payload: {
//           langCode,
//         },
//       });
//     } catch (error) {
//       // eslint-disable-next-line no-console
//       console.error(error);
//     }
//   };
// };

// export const setLanguage = (languageProp) => {
//   return async (dispatch) => {
//     dispatch({
//       type: SET_LANGUAGE_PENDING,
//     });
//     await changeLanguage(languageProp);
//     try {
//       dispatch({
//         type: SET_LANGUAGE_SUCCESS,
//         payload: {
//           langCode: languageProp,
//         },
//       });
//     } catch (error) {
//       dispatch({
//         type: SET_LANGUAGE_ERROR,
//         payload: error,
//       });
//       // console.error(error);
//     }
//   };
// };
