import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoriteScreen, HomeScreen} from '../Screens';
import {AppStackProps, HomeStackProps} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator<AppStackProps>();
const HomeS = createNativeStackNavigator<HomeStackProps>();

export function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  );
}

export function HomeStack() {
  return (
    <HomeS.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeS.Screen name="HomeScreen" component={HomeScreen} />
      <HomeS.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </HomeS.Navigator>
  );
}
