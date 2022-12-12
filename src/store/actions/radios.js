import { getRadios as getRadiosAPI } from '../../api';
import { getRadioPrograms as getRadioProgramsAPI } from '../../api';
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
