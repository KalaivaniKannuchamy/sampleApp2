import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  container: {
    borderRadius: 26,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Config.WHITE,
    paddingLeft: 10,
    height: 28,
  },
  chipView: {
    backgroundColor: Config.WHITE,
  },
  textStyle: {
    color: Config.UNDERLINE_BLUE,
    fontWeight: 'bold',
    fontSize: 10,
    // lineHeight: 14,
    letterSpacing: 0.2,
    paddingHorizontal: 10
  }
})