import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

import HeadingApp from './HeadingApp';
import {COLORS, DEVICE} from '../Common';

const CutterApp = ({
  txt = '',
  style,
  contantStyle,
  containerStyle,
}: {
  txt?: string;
  style?: ViewStyle;
  contantStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.line, style]} />
      {!!txt && (
        <View style={[styles.txtBox, [contantStyle]]}>
          <HeadingApp normal_13>{txt}</HeadingApp>
        </View>
      )}
    </View>
  );
};

export default CutterApp;

const styles = StyleSheet.create({
  container: {
    width: DEVICE.width - 36,
    height: 25,

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  line: {
    width: DEVICE.width - 36,
    height: 1,
    backgroundColor: COLORS.gray[300],
    position: 'absolute',
  },
  txtBox: {
    paddingHorizontal: 9,
    height: 25,
    position: 'absolute',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
