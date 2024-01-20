import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ViewStyle,
  ImageStyle,
  PressableProps,
} from 'react-native';
import React from 'react';
import {HeadingApp} from '.';
type Iprops = {
  style?: ViewStyle | ViewStyle[];
  img?: boolean;
  width?: number;
  height?: number;
  source?: any;
  onPress: () => void;
  imgStyle?: ImageStyle;
  title?: string;
};
const BtnIconApp = ({
  style,
  width,
  height,
  source,
  imgStyle,
  onPress,
  title,
}: Iprops & PressableProps) => {
  return (
    <Pressable style={[styles.box, style]} onPress={onPress}>
      <Image
        source={source}
        style={[{width, height, resizeMode: 'contain'}, imgStyle]}
      />
      {!!title && <HeadingApp>{title}</HeadingApp>}
    </Pressable>
  );
};

export default BtnIconApp;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    //  justifyContent: 'center',
  },
});
