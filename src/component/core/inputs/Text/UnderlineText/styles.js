import { StyleSheet } from 'react-native';
import Config from 'react-native-config';
import { fontSemiBoldStyle } from '@utils/constant';

export default StyleSheet.create({
  //underlineDefaultStyle text
  underlineDefaultStyle: {
    fontSize: 16,
    color: Config.UNDERLINE_BLUE,
    textDecorationLine: 'underline',
    ...fontSemiBoldStyle,
    includeFontPadding: false,
    alignSelf: 'center',

  },
  underlineWhiteStyle: {
    fontSize: 16,
    color: Config.WHITE,
    textDecorationLine: 'underline',
    includeFontPadding: false,
    ...fontSemiBoldStyle,
    alignSelf: 'center',
  }
})