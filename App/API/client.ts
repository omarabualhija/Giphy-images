import axios from 'axios';
import {BASE_URL} from '@env';
import {DEVICE} from '../Common';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept-Language': DEVICE.isRTL ? 'ar' : 'en',
    Accept: '*/*',
  },
});
