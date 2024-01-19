import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart'; // Import package from node modules
import AppConstant from '../Common/AppConstant';
import {AsyncStoregApp} from '.';
import {CONSTANT} from '../Common';

export const useLanguage = () => {
  let changeLanguage = (restart = false) => {
    let lang = AsyncStoregApp.loadString(CONSTANT.AsyncStorageKey.Lang) ?? 'en';
    let _lang = lang === 'ar' ? (restart ? 'en' : 'ar') : restart ? 'ar' : 'en';
    AsyncStoregApp.saveString(CONSTANT.AsyncStorageKey.Lang, _lang);

    I18nManager.allowRTL(_lang == 'ar');
    I18nManager.forceRTL(_lang == 'ar');
    if (restart) setTimeout(() => RNRestart.restart(), 500);
  };

  return {
    changeLanguage,
  };
};
