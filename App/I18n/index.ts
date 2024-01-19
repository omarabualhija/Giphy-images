import i18n from 'i18next';
import i18Rect, {initReactI18next, useTranslation} from 'react-i18next';
import {DEVICE} from '../Common';
import {Translations} from './en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: DEVICE.isRTL ? 'ar' : 'en',
    supportedLngs: ['en', 'ar'],
    resources: {
      ar: require('./ar'),
      en: require('./en'),
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

export type TxKeyPath = RecursiveKeyOf<Translations>;

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text;

export function translate(key: string, options: Record<string, any> = {}) {
  return i18n.t(key, options);
}
