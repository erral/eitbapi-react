export const GET_RADIO_PROGRAMS = 'GET_RADIO_PROGRAMS';

export const getRadioPrograms = (radio) => {
  return {
    type: GET_RADIO_PROGRAMS,
    payload: {
      radio: radio,
    },
  };
};
