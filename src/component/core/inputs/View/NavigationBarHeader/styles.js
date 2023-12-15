import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  // navigation header bar
  navigationHeaderStyle: {
    backgroundColor: Config.PRIMARY,
    height: 42,
  },
  navigationTitleContent: {
    flex: 1,
  },
  navigationTitle: {
    fontSize: 20,
    color: Config.WHITE,
    alignSelf: 'center',
    fontFamily: Config.FONT_SEMIBOLD,
  },
  navigationTitleWithback :{
    fontSize: 20,
    color: Config.WHITE,
    alignSelf: 'center',
    marginRight: Platform.OS === 'ios' ? 0 : 30,
    fontFamily: Config.FONT_SEMIBOLD,
  },
  navigationDefaultFirstBorderStyle: {},
  navigationDefaultSecondBorderStyle: {},
})