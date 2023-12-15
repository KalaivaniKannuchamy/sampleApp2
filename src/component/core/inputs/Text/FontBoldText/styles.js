import { Platform, StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  //font bold text
  boldTextDefaultStyle: {
    fontSize: 16,
    color: Config.UNDERLINE_BLUE,
    fontFamily: Config.FONT_SEMIBOLD,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
})