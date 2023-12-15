import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  // sub header small bold text
  headerBoldTextlDefaultStyle: {
    fontSize: 22,
    color: Config.UNDERLINE_BLUE,
    // fontWeight: 'bold',
    letterSpacing: 0.5,
  },
})