import {Linking} from 'react-native';

export function openLink(url: string) {
  //Linking.canOpenURL(url).then(canOpen => canOpen && Linking.openURL(url));
  Linking.openURL(url);
}
