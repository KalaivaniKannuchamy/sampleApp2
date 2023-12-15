import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  // sub header small bold text
  headerBoldTextSmallDefaultStyle: {
    fontSize: 18,
    color: Config.BLACK,
    marginHorizontal: 10,
    fontFamily: Config.FONT_SEMIBOLD,
  },
})