import {StyleSheet, Text, View} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import BtnIconApp from '../BtnIconApp';
import {COLORS, IMAGE} from '../../Common';
import HeadingApp from '../HeadingApp';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useKeyboard} from '../../util';

const toastConfig = {
  Success: ({text1, props}: any) => {
    return (
      <View style={[styles.containerToast, styles.success]}>
        <HeadingApp style={styles.txt} numberOfLines={3}>
          {text1}
        </HeadingApp>
        <BtnIconApp
          width={25}
          height={25}
          onPress={() => Toast.hide()}
          source={IMAGE.icons.close}
        />
      </View>
    );
  },
  Error: ({text1, props}: any) => {
    console.log({text1});
    return (
      <View style={[styles.containerToast, styles.error]}>
        <HeadingApp style={styles.txt} numberOfLines={3}>
          {text1}
        </HeadingApp>
        <BtnIconApp
          width={25}
          height={25}
          onPress={() => Toast.hide()}
          source={IMAGE.icons.close}
        />
      </View>
    );
  },
};

function ToastApp(props: any) {
  const {top, bottom} = useSafeAreaInsets();
  //const {keyboardHeight} = useKeyboard();
  return (
    <Toast
      //  keyboardOffset={keyboardHeight + 10}
      topOffset={top + 10}
      bottomOffset={bottom + 10}
      config={toastConfig}
    />
  );
}

export default ToastApp;

const styles = StyleSheet.create({
  containerToast: {
    minHeight: 60,
    width: '90%',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    borderStartWidth: 3,
  },
  success: {
    borderColor: COLORS.green[500],
    backgroundColor: COLORS.green[100],
  },
  error: {
    borderColor: COLORS.red[500],
    backgroundColor: COLORS.red[100],
  },
  txt: {
    flex: 1,
  },
});
