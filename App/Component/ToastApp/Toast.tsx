import {StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

function ToastApp(props: any) {
  const {top, bottom} = useSafeAreaInsets();
  return <Toast topOffset={top + 10} bottomOffset={bottom + 10} />;
}

export default ToastApp;

const styles = StyleSheet.create({});
