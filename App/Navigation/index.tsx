import React from 'react';
import {DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

import {rootStore, useAppSelector} from '../Redux';
import {SplashScreen} from '../Screens';

const App = createNativeStackNavigator<RootStackParamList>();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

let RootNavigation = () => {
  const {user} = useAppSelector(state => state.user);
  return (
    <App.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      {!user ? (
        <App.Group>
          <App.Screen name="SplashScreen" component={SplashScreen} />
        </App.Group>
      ) : (
        <></>
      )}
    </App.Navigator>
  );
};

export default RootNavigation;
