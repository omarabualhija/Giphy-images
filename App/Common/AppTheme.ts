import {Dimensions, I18nManager, Platform} from 'react-native';
let {width, height} = Dimensions.get('window');

export const SIZES = {
  horizontal: 18,
  radius: 18,
  subRadius: 10,
  subHorizontal: 12,
  vertical: 24,
  subVertical: 16,
} as const;

export const DIMENSIONS = {
  width,
  height,
  isRTL: I18nManager.isRTL,
} as const;

export let SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
};
