import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

import {rootStore, useAppSelector} from '../Redux';
import {SplashScreen, SigninScreen, DetailsScreen} from '../Screens';
import {AppStack} from './AppStack';

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
    <NavigationContainer theme={MyTheme}>
      <App.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        {!user ? (
          <App.Group>
            <App.Screen name="SplashScreen" component={SplashScreen} />
            <App.Screen name="SigninScreen" component={SigninScreen} />
          </App.Group>
        ) : (
          <App.Group>
            <App.Screen name="AppStack" component={AppStack} />
            <App.Screen name="DetailsScreen" component={DetailsScreen} />
          </App.Group>
        )}
      </App.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
