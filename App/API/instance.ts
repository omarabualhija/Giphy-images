import {instance} from './client';

export const AXIOS = (isForm = false) => {
  if (isForm) {
    instance.defaults.headers['Content-Type'] = 'multipart/form-data';
  }
  //TODO:you can handle any thing here like token or any thing
  //you can add interceptors here but make sure to delete the interceptors after you finish
  //add by omar abu alhija

  return instance;
};
