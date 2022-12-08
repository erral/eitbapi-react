import { tvapi } from './api';

import { TV_API_CATEGORIES, TV_API_CATEGORY } from '../config';

export const getTVs = () => {
  return tvapi.get(TV_API_CATEGORIES);
};

export const getTVCategory = (category_id) => {
  return tvapi.get(`${TV_API_CATEGORY}/${category_id}/`);
};
