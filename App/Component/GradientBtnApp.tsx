import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, DEVICE, THEME} from '../Common';
import LinearGradient from 'react-native-linear-gradient';
import HeadingApp from './HeadingApp';

type Iprops = {
  txt?: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  txtStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  transparent?: boolean;
  RightIcon?: any;
  Icon?: any;
  color?: string;
};

const GradientBtnApp = ({
  txt,
  onPress,
  style,
  txtStyle,
  disabled,
  loading,
  transparent,
  RightIcon,
  Icon,
  color = COLORS.white,
}: Iprops) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={() => onPress()}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.btn, style]}
        colors={COLORS.gradient}>
        {loading ? (
          // TODO: add your custom loading
          <ActivityIndicator color={color} />
        ) : (
          <View style={styles.txtBox}>
            {!!Icon ? (
              <Icon />
            ) : (
              <HeadingApp strong_16 style={{...styles.txt, ...txtStyle}}>
                {txt}
              </HeadingApp>
            )}
            {!!RightIcon && <RightIcon />}
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientBtnApp;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    height: 57,
    width: DEVICE.width - THEME.SIZES.horizontal,
    borderRadius: THEME.SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBox: {flexDirection: 'row', gap: 12, alignItems: 'center'},
  txt: {
    color: COLORS.white,
  },
  transparentStyle: {
    padding: 5,
  },
});
