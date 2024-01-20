import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BtnApp, GradientBtnApp, InputApp, Toast} from '../../Component';
import {RootStackScreenProps} from '../../Navigation/types';
import Logo from './Logo';
import {THEME} from '../../Common';
import {useLogin} from '../../hooks/useAuth';

export const SigninScreen: React.FC<
  RootStackScreenProps<'SigninScreen'>
> = () => {
  const [email, setEmail] = useState<string>('omar.hija12@gmail.com');
  const [password, setPassword] = useState<string>('P@$$w0rd');
  const {Login, error, loading} = useLogin({
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'welcome',
      });
    },
    onError: err => {
      Toast.show({
        type: 'error',
        text1: err,
      });
    },
  });
  return (
    <View style={styles.container}>
      <Logo />
      <InputApp
        placeholder="Email"
        error={error && !email}
        onChangeText={setEmail}
        value={email}
      />
      <InputApp
        placeholder="Password"
        error={error && !password}
        password
        onChangeText={setPassword}
        value={password}
      />
      <GradientBtnApp onPress={() => Login({email, password})} txt="Sign in" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: THEME.SIZES.vertical,
  },
});
