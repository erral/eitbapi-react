import { radioapi as api } from './api';
import {
  RADIO_PROGRAMS,
  RADIO_PROGRAM,
  RADIOS,
  RADIO_PROGRAM_SEASONS,
  RADIO_PROGRAM_SEASON,
  RADIO_PROGRAM_SEASON_CHAPTERS,
  RADIO_PROGRAM_SEASON_CHAPTER,
} from '../config';

export const getRadioPrograms = (radio) => {
  return api.get(`${RADIO_PROGRAMS}/${radio}/`);
};

export const getRadios = () => {
  return RADIOS;
};

export const getRadioProgram = (radio, program) => {
  return api.get(`${RADIO_PROGRAM}/${program}/`);
};

export const getRadioProgramSeasons = (radio, program) => {
  return api.get(`${RADIO_PROGRAM_SEASONS}/${program}/`);
};

export const getRadioProgramSeason = (radio, program, season) => {
  return api.get(`${RADIO_PROGRAM_SEASON}/${season}/`);
};

export const getRadioProgramSeasonChapters = (radio, program, season) => {
  return api.get(`${RADIO_PROGRAM_SEASON_CHAPTERS}/${season}/`);
};

export const getRadioProgramSeasonChapter = (
  radiom,
  program,
  season,
  chapter,
) => {
  return api.get(`${RADIO_PROGRAM_SEASON_CHAPTER}/${chapter}/`);
};
