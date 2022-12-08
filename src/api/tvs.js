import { tvapi } from './api';

import {
  TV_API_CATEGORIES,
  TV_API_CATEGORY,
  TV_API_CATEGORY_PROGRAM,
} from '../config';

export const getTVs = () => {
  return tvapi.get(TV_API_CATEGORIES);
};

export const getTVCategory = (category_id) => {
  return tvapi.get(`${TV_API_CATEGORY}/${category_id}/`);
};

export const getTVCategoryProgram = (category_id, program_id) => {
  return tvapi.get(`${TV_API_CATEGORY_PROGRAM}/${program_id}/`);
};
