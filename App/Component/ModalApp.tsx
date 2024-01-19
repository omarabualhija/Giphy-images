import React, {useRef, useEffect, useMemo, useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context'; //see https://reactnavigation.org/docs/handling-safe-area/#use-the-hook-for-more-control
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {COLORS, DEVICE, IMAGE} from '../Common';
import HeadingApp from './HeadingApp';
import {StyleSheet, View} from 'react-native';
import BtnIconApp from './BtnIconApp';

const ModalApp = ({
  isVisible,
  children,
  onClose,
  maxHeight = DEVICE.height,
  minHeight,
  enableScroll = true,
  enablePanDownToClose = false,
  topInset,
  showBackDrop,
  radius,
  mainTitle,
}: {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: Function;
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number;
  backdropOpacity?: number;
  enablePanDownToClose?: boolean;
  onModalShow?: () => void;
  enableScroll?: boolean;
  topInset?: number;
  showBackDrop?: boolean;
  radius?: number;
  mainTitle?: string;
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  let snapPoints = useMemo(
    () => [minHeight ? minHeight : maxHeight, maxHeight],
    [maxHeight, minHeight],
  );

  useEffect(() => {
    if (isVisible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isVisible]);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );
  const {top} = useSafeAreaInsets();
  return (
    <BottomSheetModal
      android_keyboardInputMode="adjustResize"
      topInset={topInset ?? top}
      keyboardBehavior="interactive"
      backgroundStyle={{borderRadius: radius ?? 25}}
      handleComponent={() => <></>}
      backdropComponent={showBackDrop ? renderBackdrop : null}
      enableContentPanningGesture={!enableScroll}
      enablePanDownToClose={enablePanDownToClose}
      onDismiss={() => onClose()}
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}>
      <>
        {!!mainTitle && (
          <View style={styles.headerBox}>
            <HeadingApp strong_15>{mainTitle}</HeadingApp>
            <BtnIconApp
              onPress={() => onClose()}
              style={styles.closeBox}
              imgStyle={styles.closeIcon}
              source={IMAGE.icons.close}
            />
          </View>
        )}
        {children}
      </>
    </BottomSheetModal>
  );
};

export default ModalApp;

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  closeBox: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.gray[100],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  closeIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
