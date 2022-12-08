import axios from 'axios';
import { API_PATH } from '../config/constants';
const instance = axios.create({
  baseURL: API_PATH,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
