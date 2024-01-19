import {Dimensions, Platform, I18nManager} from 'react-native';

const {width, height, scale} = Dimensions.get('window');
const isIphoneX = height * scale > 2000 && Platform.OS === 'ios';
const isRTL = I18nManager.isRTL;
const isIOS = Platform.OS === 'ios';

export default {
  width,
  height,
  scale,
  isRTL,
  isIOS,
  isIphoneX,
  ToolbarHeight: isIphoneX ? 35 : 0,
};
