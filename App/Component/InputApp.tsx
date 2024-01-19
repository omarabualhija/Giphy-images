import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  Pressable,
  TextStyle,
  Keyboard,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';
import React, {forwardRef, useState} from 'react';
import HeadingApp from './HeadingApp';
import {COLORS, DEVICE, IMAGE} from '../Common';
import Animated from 'react-native-reanimated';

interface Iprops {
  style?: any;
  containerStyle?: ViewStyle;
  onChangeText: Function;
  numberOfLines?: number;
  title?: string;
  password?: boolean;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  value?: string;
  subTitle?: string;
  onPressSub?: Function;
  onPress?: Function;
  error?: boolean;
  editable?: boolean;
  titleStyle?: TextStyle;
  label?: string;
  RightComponent?: React.ComponentType;
  boxStyle?: ViewStyle;
  errorMessage?: string;
  rStyle?: ViewStyle;

  rightIcon?: boolean;
  iconStyle?: ImageStyle;
  source?: any;
}

const InputApp = forwardRef(function InputApp(
  props: Iprops & TextInputProps,
  ref: any,
) {
  let {onPress = () => '', editable: editableTxt = true, boxStyle} = props;
  let [isSecure, setisSecure] = useState<boolean>(
    props.password ? true : false,
  );
  return (
    <Animated.View
      style={[styles.container, props.containerStyle, props.rStyle]}>
      {props.title && (
        <HeadingApp strong_14 style={props.titleStyle}>
          {props.title}
        </HeadingApp>
      )}
      <Pressable
        style={[
          styles.btnInput,
          {
            borderColor: props.error ? COLORS.red[500] : COLORS.gray[300],
          },
          boxStyle,
        ]}>
        {props.leftIcon && props.leftIcon}
        <TextInput
          placeholderTextColor={COLORS.gray[500]}
          {...props}
          ref={ref}
          secureTextEntry={isSecure}
          value={props.value}
          onChangeText={(txt: string) => props.onChangeText(txt)}
          numberOfLines={props.numberOfLines ?? 1}
          style={[styles.input, props.style]}
          editable={editableTxt}
        />
        {props.rightIcon && (
          <Pressable style={styles.showPassBtn}>
            <Image style={props.iconStyle} source={props.source} />
          </Pressable>
        )}
        {props.password && (
          <Pressable
            style={styles.showPassBtn}
            onPress={() => setisSecure(prev => !prev)}>
            <Image
              style={styles.showPassIcon}
              source={isSecure ? IMAGE.icons.hideEye : IMAGE.icons.viewEye}
            />
          </Pressable>
        )}

        {/* to solve IOS bug */}
        {!editableTxt && (
          <Pressable
            onPress={() => {
              Keyboard.dismiss();
              onPress();
            }}
            style={styles.floatingBtn}
          />
        )}
      </Pressable>

      {props.error && (
        <View style={styles.errorBox}>
          <HeadingApp normal_13 style={styles.errorTxt} numberOfLines={2}>
            {props.errorMessage}
          </HeadingApp>
        </View>
      )}
    </Animated.View>
  );
});

export default InputApp;

const styles = StyleSheet.create({
  container: {
    width: DEVICE.width - 40,
    alignSelf: 'center',
    gap: 5,
  },
  titleBox: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  titlesBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingStart: 8,
  },
  labelTxt: {fontSize: 10, color: COLORS.gray['500']},
  dummySpace: {flex: 0.5, alignItems: 'flex-end'},
  btnInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    gap: 8,
    backgroundColor: '#FFF',
    borderRadius: 100,
    padding: 16,

    borderWidth: 1,
  },
  input: {
    flex: 1,
    textAlign: DEVICE.isRTL ? 'right' : 'left',
    color: '#000',
    height: 45,
  },
  showPassBtn: {
    justifyContent: 'center',
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  showPassIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.gray[500],
    resizeMode: 'contain',
  },
  floatingBtn: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 9999,
  },
  errorBox: {
    paddingStart: 14,
    justifyContent: 'flex-start',
  },
  errorTxt: {
    color: COLORS.red[500],
    textAlign: 'right',
  },
});
