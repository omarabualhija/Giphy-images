import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {translate} from '../I18n';
import {COLORS, DEVICE} from '../Common';

interface Iprops {
  children: React.ReactNode;
  onLayout?: any;
  strong_16?: boolean;
  strong_15?: boolean;
  strong_14?: boolean;
  strong_12?: boolean;
  mid_16?: boolean;
  normal_18?: boolean;
  normal_15?: boolean;
  normal_14?: boolean;
  normal_13?: boolean;
  style?: TextStyle;
  numberOfLines?: number;
  variables?: Record<string, string | number>;
}

const HeadingApp = ({
  children,
  onLayout,
  strong_16,
  strong_15,
  strong_14,
  strong_12,
  mid_16,
  normal_18,
  normal_15,
  normal_14,
  normal_13,
  style,
  numberOfLines = 1,
  variables,
}: Iprops) => {
  let {t} = useTranslation();
  let $myStyle = strong_16
    ? styles.strong_16
    : strong_15
    ? styles.strong_15
    : strong_14
    ? styles.strong_14
    : strong_12
    ? styles.strong_12
    : mid_16
    ? styles.mid_16
    : normal_18
    ? styles.normal_18
    : normal_15
    ? styles.normal_15
    : normal_14
    ? styles.normal_14
    : styles.normal_13;

  const $RTLStyle = DEVICE.isRTL
    ? ({writingDirection: 'rtl'} satisfies TextStyle)
    : ({textAlign: 'left'} satisfies TextStyle);

  const replaceVariables = (
    text: string,
    vars: Record<string, string | number> = {},
  ) => {
    let newText = text;
    Object.keys(vars).forEach(key => {
      newText = newText.replace(`{{${key}}}`, String(vars[key]));
    });
    return newText;
  };

  return (
    <>
      <Text
        onLayout={onLayout}
        numberOfLines={numberOfLines}
        style={[styles.mainStyle, $myStyle, $RTLStyle, style]}>
        {replaceVariables(translate(String(children)), variables)}
      </Text>
    </>
  );
};

export default HeadingApp;
let fontName = DEVICE.isRTL ? 'Tajawal' : 'Poppins';

const styles = StyleSheet.create({
  mainStyle: {
    flexWrap: 'wrap',
  },
  strong_16: {
    fontFamily: `Poppins-SemiBold`,
    color: COLORS.gray['900'],
    fontSize: 16,
  },
  strong_15: {
    fontFamily: `${fontName}-SemiBold`,
    color: COLORS.gray['900'],
    fontSize: 15,
    fontWeight: '500',
  },
  strong_14: {
    fontFamily: `${fontName}-SemiBold`,
    color: COLORS.gray['900'],
    fontSize: 14,
  },
  strong_12: {
    fontFamily: `${fontName}-SemiBold`,
    color: COLORS.gray['900'],
    fontSize: 12,
  },
  mid_16: {
    fontFamily: `${fontName}-Medium`,
    color: COLORS.gray['900'],
    fontSize: 16,
  },
  normal_18: {
    fontFamily: `${fontName}-Regular`,
    color: COLORS.gray['900'],
    fontSize: 18,
  },
  normal_15: {
    fontFamily: `${fontName}-Regular`,
    color: COLORS.gray['900'],
    fontSize: 15,
  },
  normal_14: {
    fontFamily: `${fontName}-Regular`,
    color: COLORS.gray['900'],
    fontSize: 14,
  },
  normal_13: {
    fontFamily: `${fontName}-Regular`,
    color: COLORS.gray['900'],
    fontSize: 13,
  },
});
