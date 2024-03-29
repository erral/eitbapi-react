import {
  getRadios as getRadiosAPI,
  getRadioPrograms as getRadioProgramsAPI,
  getRadioProgramSeasons as getRadioProgramSeasonsAPI,
  getRadioProgramData as getRadioProgramDataAPI,
  getRadioProgramSeason as getRadioProgramSeasonAPI,
  getRadioProgramSeasonChapter as getRadioProgramSeasonChapterAPI,
} from '../../api';

export const GET_RADIOS = 'GET_RADIOS';
export const getRadios = (radio) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_RADIOS}_PENDING`,
    });
    const result = await getRadiosAPI();
    try {
      dispatch({
        type: `${GET_RADIOS}_SUCCESS`,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_RADIOS}_FAIL`,
        payload: error,
      });
    }
  };
};

export const GET_RADIO_PROGRAMS = 'GET_RADIO_PROGRAMS';
export const getRadioPrograms = (radio) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_RADIO_PROGRAMS}_PENDING`,
    });
    const result = await getRadioProgramsAPI(radio);
    try {
      dispatch({
        type: `${GET_RADIO_PROGRAMS}_SUCCESS`,
        radio_id: radio,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_RADIO_PROGRAMS}_FAIL`,
        payload: error,
      });
    }
  };
};

export const GET_RADIO_PROGRAM_DATA = 'GET_RADIO_PROGRAM_DATA';
export const getRadioProgramData = (program) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_RADIO_PROGRAM_DATA}_PENDING`,
    });
    const result = await getRadioProgramDataAPI(program);
    try {
      dispatch({
        type: `${GET_RADIO_PROGRAM_DATA}_SUCCESS`,
        program_id: program,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_RADIO_PROGRAM_DATA}_FAIL`,
        payload: error,
      });
    }
  };
};

export const GET_RADIO_PROGRAM_SEASONS = 'GET_RADIO_PROGRAM_SEASONS';
export const getRadioProgramSeasons = (program) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_RADIO_PROGRAM_SEASONS}_PENDING`,
    });
    const result = await getRadioProgramSeasonsAPI(program);
    try {
      dispatch({
        type: `${GET_RADIO_PROGRAM_SEASONS}_SUCCESS`,
        program_id: program,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_RADIO_PROGRAM_SEASONS}_FAIL`,
        payload: error,
      });
    }
  };
};

export const GET_RADIO_PROGRAM_SEASON = 'GET_RADIO_PROGRAM_SEASON';
export const getRadioProgramSeason = (season) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_RADIO_PROGRAM_SEASON}_PENDING`,
    });
    const result = await getRadioProgramSeasonAPI(season);
    try {
      dispatch({
        type: `${GET_RADIO_PROGRAM_SEASON}_SUCCESS`,
        season_id: season,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_RADIO_PROGRAM_SEASON}_FAIL`,
        payload: error,
      });
    }
  };
};

export const GET_RADIO_PROGRAM_SEASON_CHAPTER =
  'GET_RADIO_PROGRAM_SEASON_CHAPTER';
export const getRadioProgramSeasonChapter = (chapter) => {
  return async (dispatch) => {
    dispatch({
      type: `${GET_RADIO_PROGRAM_SEASON_CHAPTER}_PENDING`,
    });
    const result = await getRadioProgramSeasonChapterAPI(chapter);
    try {
      dispatch({
        type: `${GET_RADIO_PROGRAM_SEASON_CHAPTER}_SUCCESS`,
        chapter_id: chapter,
        payload: {
          items: result,
        },
      });
    } catch (error) {
      dispatch({
        type: `${GET_RADIO_PROGRAM_SEASON_CHAPTER}_FAIL`,
        payload: error,
      });
    }
  };
};
