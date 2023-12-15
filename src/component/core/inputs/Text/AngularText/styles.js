import { StyleSheet } from 'react-native';
import Config from 'react-native-config';
export default StyleSheet.create({
  //angular text
  angularDefaultOneStyle: {
    fontSize: 24,
    color: Config.GRAY1,
    fontFamily: Config.FONT_SEMIBOLD,
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
  angularDefaultTwoStyle: {
    fontSize: 24,
    color: Config.PRIMARY,
    fontFamily: Config.FONT_SEMIBOLD,
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
  angularDefaultThreeStyle: {
    fontSize: 24,
    color: Config.GRAY1,
    fontFamily: Config.FONT_SEMIBOLD,
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
  angularDefaultFourStyle: {
    fontSize: 24,
    color: Config.PRIMARY,
    fontFamily: Config.FONT_SEMIBOLD,
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
  angularDefaultFiveStyle: {
    fontSize: 24,
    color: Config.GRAY1,
    fontFamily: Config.FONT_SEMIBOLD,
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
})