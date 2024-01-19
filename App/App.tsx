import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useState, useLayoutEffect, useEffect} from 'react';
import 'react-native-gesture-handler';
import NetInfo from '@react-native-community/netinfo';
//////////////////////////////////////////////
import {Provider} from 'react-redux';
import {persistor, rootStore} from './Redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useLanguage} from './util/useLanguage';
import NavigationApp from './Navigation';
import {COLORS, DEVICE} from './Common';
import './I18n';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {ToastApp} from './Component';
const App = () => {
  let [isConnected, setIsConnected] = useState<boolean>(true);

  let {changeLanguage} = useLanguage();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state?.isConnected ?? true);
    });

    return () => unsubscribe();
  }, []);

  useLayoutEffect(() => {
    changeLanguage(false);
  }, []);

  if (!isConnected) <></>;

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Provider store={rootStore}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider style={styles.container}>
            <BottomSheetModalProvider>
              <View style={styles.container}>
                <NavigationApp />
                <ToastApp />
              </View>
            </BottomSheetModalProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  lottieBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: DEVICE.width,
    height: DEVICE.width,
  },
});
