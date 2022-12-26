import {
  getRadios as getRadiosAPI,
  getRadioPrograms as getRadioProgramsAPI,
  getRadioProgramSeasons as getRadioProgramSeasonsAPI,
  getRadioProgramData as getRadioProgramDataAPI,
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
