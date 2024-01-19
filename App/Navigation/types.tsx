import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  SigninScreen: undefined;
  AppStack: NavigatorScreenParams<AppStackProps>;
};

export type AppStackProps = {
  HomeStack: NavigatorScreenParams<HomeStackProps>;
};

export type HomeStackProps = {
  HomeScreen: undefined;
  FavoriteScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AppStackScreenProps<T extends keyof AppStackProps> =
  CompositeScreenProps<
    BottomTabScreenProps<AppStackProps, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeStackScreenProps<T extends keyof HomeStackProps> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeStackProps, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
