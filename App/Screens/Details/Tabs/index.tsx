import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {BtnApp, BtnIconApp, HeadingApp} from '../../../Component';
import {COLORS, IMAGE, THEME} from '../../../Common';
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  Keyframe,
  interpolate,
  runOnJS,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Lable from './Lable';
import {openLink} from '../../../util';

const tabs = ['User', 'Descriptions'];
const GAP = 20;
const Tabs = ({data}: {data: imgObjType}) => {
  const position = useSharedValue(GAP);
  const width = useSharedValue(30);
  const [activeTab, setActiveTab] = useState(0);
  const onPressLable = (w: any, index: number) => {
    setActiveTab(index);
    if (w) {
      position.value = withTiming(w.pageX);
      width.value = withTiming(
        interpolate(w.width, [0, w.width + GAP], [0, w.width + GAP]),
      );
    }
  };

  const rLineStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: position.value}],
      width: width.value,
    };
  }, [position]);

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.line, rLineStyle]} />
        {tabs.map((item, index) => (
          <Lable
            key={index}
            item={item}
            onPressLable={(v: any) => onPressLable(v, index)}
          />
        ))}
      </View>

      {activeTab === 0 && (
        <Animated.View style={styles.nameBox} entering={FadeInLeft}>
          <HeadingApp>{`Nmame : ${data.user.display_name}`}</HeadingApp>
        </Animated.View>
      )}
      {activeTab === 1 && (
        <Animated.View style={styles.nameBox} entering={FadeInRight}>
          <HeadingApp strong_15 numberOfLines={4}>
            regarding the Description section the api dose not return to me the
            description
          </HeadingApp>
          <BtnApp
            transparent
            txt="Ref"
            onPress={() =>
              openLink('https://developers.giphy.com/docs/api/schema')
            }
          />
        </Animated.View>
      )}
    </>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: GAP,
    // marginStart: GAP,
    paddingHorizontal: GAP,
    marginTop: GAP,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[100],
  },
  itemBox: {
    height: 30,
  },
  line: {
    position: 'absolute',
    width: 30,
    height: 1,
    backgroundColor: COLORS.primary,
    bottom: 0,
    transform: [{translateX: -GAP / 2}],
  },
  nameBox: {
    paddingHorizontal: THEME.SIZES.horizontal,
    paddingTop: THEME.SIZES.subVertical,
  },
});
