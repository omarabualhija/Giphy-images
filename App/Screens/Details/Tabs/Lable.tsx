import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  measure,
  runOnJS,
  runOnUI,
  useAnimatedRef,
} from 'react-native-reanimated';
import {HeadingApp} from '../../../Component';

const Lable = ({item, onPressLable}: {item: string; onPressLable: any}) => {
  const animatedRef = useAnimatedRef();
  const Press = Animated.createAnimatedComponent(Pressable);
  const onPress = () => {
    runOnUI(() => {
      'worklet';
      const measured = measure(animatedRef);
      runOnJS(onPressLable)(measured);
    })();
  };

  return (
    <Press onPress={onPress}>
      <Animated.View ref={animatedRef}>
        <HeadingApp>{item}</HeadingApp>
      </Animated.View>
    </Press>
  );
};

export default Lable;

const styles = StyleSheet.create({});
