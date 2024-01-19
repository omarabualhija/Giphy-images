import {instance} from './client';

export const AXIOS = (token = false, isForm = false) => {
  if (token) {
  }
  if (isForm) {
    instance.defaults.headers['Content-Type'] = 'multipart/form-data';
  } else {
    instance.defaults.headers['Content-Type'] = 'application/json';
  }

  return instance;
};
