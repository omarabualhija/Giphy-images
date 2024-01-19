import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, DEVICE} from '../Common';
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
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      // style={[transparent ? styles.transparentStyle : styles.btn, style]}
    >
      <LinearGradient
        style={[styles.btn, style]}
        colors={[COLORS.blue[400], COLORS.blue[500]]}>
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
    width: DEVICE.width - 140,
    borderRadius: 100,
    overFlow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#001459',
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
    color: COLORS.white,
  },
  transparentStyle: {
    padding: 5,
  },
});
