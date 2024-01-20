import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoriteScreen, HomeScreen, SearchScreen} from '../Screens';
import {AppStackProps, HomeStackProps} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomApp} from '../Component';
import {StyleSheet} from 'react-native';
import {COLORS, IMAGE} from '../Common';

const Tab = createBottomTabNavigator<AppStackProps>();
const HomeS = createNativeStackNavigator<HomeStackProps>();

export function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBar,
        ...tabConfig,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <BottomApp
              focused={focused}
              name="Home"
              index={0}
              icon={IMAGE.icons.home}
            />
          ),
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <BottomApp
              focused={focused}
              name="Search"
              index={0}
              icon={IMAGE.icons.search}
            />
          ),
        }}
        name="searchScreen"
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}

export function HomeStack() {
  return (
    <HomeS.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeS.Screen name="HomeScreen" component={HomeScreen} />
      <HomeS.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </HomeS.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderTopColor: COLORS.gray[300],
  },
});

const tabConfig = {
  tabBarShowLabel: false,
};
