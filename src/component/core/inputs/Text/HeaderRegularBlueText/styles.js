import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  // sub header small bold text
  headerBoldTextlDefaultStyle: {
    fontSize: 20,
    color: Config.DARK_BLUE,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
})