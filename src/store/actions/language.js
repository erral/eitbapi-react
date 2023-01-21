export const SET_LANGUAGE = 'SET_LANGUAGE';
export const setLanguage = (langCode) => {
  return {
    type: SET_LANGUAGE,
    payload: {
      langCode,
    },
  };
};
