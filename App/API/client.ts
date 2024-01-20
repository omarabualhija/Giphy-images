import axios from 'axios';
import {BASE_URL} from '@env';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});
