import axios from 'axios';
import { RADIO_API_PATH, TV_API_PATH } from '../config/constants';
export const radioapi = axios.create({
  baseURL: RADIO_API_PATH,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const tvapi = axios.create({
  baseURL: TV_API_PATH,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
