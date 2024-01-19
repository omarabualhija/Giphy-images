import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, IMAGE} from '../Common';
import HeadingApp from './HeadingApp';

type propsType = {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  txt1?: string;
  txt2?: string;
  isError: boolean;
};

const CheckboxApp: FC<propsType> = ({
  isChecked,
  onChange,
  txt1,
  txt2,
  isError,
}) => {
  return (
    <View style={styles.wrapperCheckTerms}>
      {isChecked ? (
        <Pressable onPress={() => onChange(false)}>
          <Image
            tintColor={COLORS.blue[500]}
            style={styles.checkIcon}
            source={IMAGE.icons.CheckboxFill}
          />
        </Pressable>
      ) : (
        <Pressable onPress={() => onChange(true)}>
          <Image
            tintColor={isError ? COLORS.red[500] : COLORS.gray[500]}
            style={styles.checkIcon}
            source={IMAGE.icons.Checkbox}
          />
        </Pressable>
      )}
      {txt1 && (
        <HeadingApp
          style={{color: isError ? COLORS.red[500] : COLORS.gray[900]}}
          normal_14>
          {txt1}
        </HeadingApp>
      )}
      {txt2 && (
        <HeadingApp strong_14 style={styles.txtTerms}>
          {txt2}
        </HeadingApp>
      )}
    </View>
  );
};

export default CheckboxApp;

const styles = StyleSheet.create({
  wrapperCheckTerms: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  checkIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  txtTerms: {
    color: COLORS.blue[500],
  },
});
