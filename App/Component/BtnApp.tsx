import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {HeadingApp} from '.';
import {COLORS, DEVICE, THEME} from '../Common';

type Iprops = {
  txt: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  txtStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  transparent?: boolean;
  RightIcon?: any;
};

const BtnApp = ({
  txt,
  onPress,
  style,
  txtStyle,
  disabled,
  loading,
  transparent,
  RightIcon,
}: Iprops) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[transparent ? styles.transparentStyle : styles.btn, style]}>
      {loading ? (
        // TODO: add your custom loading
        <ActivityIndicator />
      ) : (
        <View style={styles.txtBox}>
          <HeadingApp strong_16 style={{...styles.txt, ...txtStyle}}>
            {txt}
          </HeadingApp>
          {!!RightIcon && <RightIcon />}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default BtnApp;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    height: 57,
    width: DEVICE.width - THEME.SIZES.subHorizontal,
    borderRadius: THEME.SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 11.95,

    elevation: 10,
  },
  txtBox: {flexDirection: 'row', gap: 12, alignItems: 'center'},
  txt: {
    color: COLORS.primary,
  },
  transparentStyle: {
    padding: 5,
  },
});
