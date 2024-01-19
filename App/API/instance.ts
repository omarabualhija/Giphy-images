import AppConstant from '../Common/AppConstant';
import {loadString} from '../util/AsyncStoregApp';
import {instance} from './client';

let _token = loadString(AppConstant.AsyncStorageKey.token);
export const AXIOS = (token = false, isForm = false) => {
  if (token) {
    instance.defaults.headers['token'] = _token;
  }
  if (isForm) {
    instance.defaults.headers['Content-Type'] = 'multipart/form-data';
  } else {
    instance.defaults.headers['Content-Type'] = 'application/json';
  }

  return instance;
};
