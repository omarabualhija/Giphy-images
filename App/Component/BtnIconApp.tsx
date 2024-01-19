import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';
type Iprops = {
  style?: ViewStyle | ViewStyle[];
  img?: boolean;
  width?: number;
  height?: number;
  source?: any;
  onPress: () => void;
  imgStyle?: ImageStyle;
};
const BtnIconApp = ({
  style,
  width,
  height,
  source,
  imgStyle,
  onPress,
}: Iprops) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Image
        source={source}
        style={[{width, height, resizeMode: 'contain'}, imgStyle]}
      />
    </Pressable>
  );
};

export default BtnIconApp;

const styles = StyleSheet.create({});
