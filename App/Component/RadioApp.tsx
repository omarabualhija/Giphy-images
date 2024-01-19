import {Pressable, StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {COLORS, IMAGE} from '../Common';
import HeadingApp from './HeadingApp';
import {SIZES} from '../Common/AppTheme';
import {Svg, Circle} from 'react-native-svg';

interface Iprops {
  title: string;
  subTitle?: string;
  value: any;
  lang?: string;
  onPress: Function;
}

const RadioApp = ({title, subTitle, value, lang = 'en', onPress}: Iprops) => {
  return (
    <Pressable style={styles.redioBTN} onPress={() => onPress()}>
      <View style={styles.containerRedio}>
        <Svg height="20" width="20">
          <Circle
            cx="10"
            cy="10"
            r="9"
            fill={
              value == lang || value?.item == lang || value?.phone == lang
                ? COLORS.white
                : 'transparent'
            }
            stroke={COLORS.gray['300']}
            strokeWidth="1"
          />
          {(value == lang || value?.item == lang || value?.phone == lang) && (
            <Image source={IMAGE.icons.check} style={styles.radio} />
          )}
        </Svg>
      </View>
      <View>
        <HeadingApp normal_15>{title}</HeadingApp>

        {!!subTitle && (
          <HeadingApp strong_12 style={styles.subLangTxt}>
            {subTitle}
          </HeadingApp>
        )}
      </View>
    </Pressable>
  );
};

export default RadioApp;

const styles = StyleSheet.create({
  redioBTN: {
    flexDirection: 'row',
    gap: SIZES.subHorizontal,
    alignItems: 'center',
  },
  containerRedio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray['300'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  subLangTxt: {
    color: COLORS.gray['600'],
  },
});
