import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ViewStyle,
} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import HeadingApp from './HeadingApp';
import {COLORS, DEVICE, IMAGE} from '../Common';

interface IProps {
  title: string;
  children: React.ReactNode;
  onOpen: Function;
  onClose: Function;
  wrapperStyle?: ViewStyle;
}

const AccordionApp = forwardRef(
  ({title, children, onOpen, onClose, wrapperStyle}: IProps, ref) => {
    const listRef = useAnimatedRef<View>();
    let [isOpen, setIsOpen] = useState<boolean>(false);
    let heightValue = useSharedValue(0);
    let open = useSharedValue(false);
    const progress = useDerivedValue(() =>
      open.value ? withTiming(1) : withTiming(0),
    );
    const heightAnimationStyle = useAnimatedStyle(() => ({
      height: heightValue.value,
    }));
    let onPressOpen = () => {
      setIsOpen(true);
      if (onOpen) onOpen();
      runOnUI(() => {
        'worklet';
        heightValue.value = withTiming(measure(listRef)!.height, {
          duration: 300,
        });
      })();

      open.value = true;
    };

    const onPressClose = () => {
      setIsOpen(false);
      if (onClose) onClose();
      heightValue.value = withTiming(0, {
        duration: 300,
      });
      open.value = false;
    };

    useImperativeHandle(ref, () => {
      return {
        open: onPressOpen,
        close: onPressClose,
      };
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.wrapperView, wrapperStyle]}
          onPress={() => {
            if (heightValue.value === 0) onPressOpen();
            else onPressClose();
          }}>
          <HeadingApp
            numberOfLines={10}
            style={{
              color: isOpen ? COLORS.blue[500] : COLORS.gray[900],
              width: '80%',
            }}
            mid_16>
            {title}
          </HeadingApp>

          <Image
            source={isOpen ? IMAGE.icons.top : IMAGE.icons.down}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Animated.View style={heightAnimationStyle}>
          <Animated.View style={styles.contentContainer} ref={listRef}>
            {children}
          </Animated.View>
        </Animated.View>
      </View>
    );
  },
);

export default AccordionApp;

const styles = StyleSheet.create({
  contentContainer: {
    position: 'absolute',
    width: '100%',
    paddingBottom: 10,
  },
  container: {
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[100],
  },
  wrapperView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
