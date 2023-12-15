import { StyleSheet } from 'react-native';
import Config from 'react-native-config';
import { isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  //scroll view
  scrollDefaultStyle: {
    flexGrow: 1,
    backgroundColor: Config.WHITE,
  },
  scrollContentStyle: {
    paddingBottom: isIphoneX() ? 78 : 20,
  },
  scrollVw: {
    flex: 1,
  },
  viewDefaultStyle: {},
})