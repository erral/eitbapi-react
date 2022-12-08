import { tvapi } from './api';

import { TV_API_CATEGORIES } from '../config';

export const getTVs = () => {
  return tvapi.get(TV_API_CATEGORIES);
};
