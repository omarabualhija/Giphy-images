import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoriteScreen, HomeScreen, SearchScreen} from '../Screens';
import {AppStackProps, HomeStackProps} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomApp} from '../Component';

const Tab = createBottomTabNavigator<AppStackProps>();
const HomeS = createNativeStackNavigator<HomeStackProps>();

export function AppStack() {
  return (
    <Tab.Navigator
      tabBar={props => <BottomApp {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="searchScreen" component={SearchScreen} />
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
