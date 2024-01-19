import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

let saveString = (key: string, value: unknown) => {
  if (!!key && !!value) {
    const _value = JSON.stringify(value);
    storage.set(key, _value);
  } else {
    throw Error('must pass the key and the value');
  }
};
let loadString = (key: string) => {
  if (hasKey(key)) {
    const Value = storage.getString(key);
    return JSON.parse(Value!);
  } else {
    return null;
  }
};
let save = (key: string, value: unknown) => {
  if (key && value) {
    const _value = value ? JSON.stringify(value) : '';
    storage.set(key, _value);
  } else {
    throw Error('must pass the key and the value');
  }
};
let load = (key: string, value: unknown) => {
  if (hasKey(key)) {
    try {
      let data = storage.getString(key);
      data = data ? JSON.parse(data) : null;
      return data;
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};

let hasKey = (key: string): boolean => {
  return storage.contains(key);
};

export {saveString, loadString, load, save, hasKey};
