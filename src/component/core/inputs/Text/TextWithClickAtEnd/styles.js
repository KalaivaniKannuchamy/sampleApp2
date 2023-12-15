import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  //text with click end
  clickEndDefaultOneStyle: {
    fontSize: 16,
    color: Config.GRAY1,
    fontFamily: Config.FONT_REGULAR,
    marginHorizontal: 10,
  },
  clickEndDefaultTwoStyle: {
    fontSize: 16,
    color: Config.PRIMARY,
    fontFamily: Config.FONT_REGULAR,
    marginHorizontal: 10,
    textDecorationLine: 'underline',
    includeFontPadding: false,
  },
  clickEndDefaultThreeStyle: {
    fontSize: 16,
    color: Config.GRAY1,
    fontFamily: Config.FONT_REGULAR,
    marginHorizontal: 10,
  },
})