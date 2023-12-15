import { fontBoldStyle, fontExtraBoldStyle, fontRegularStyle } from '@utils/constant';
import {Dimensions, StyleSheet, Platform} from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  // navigation header bar
  navigationHeaderStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
    height: 40,
  },
  navigationTitleContent: {
    flex: 1,
  },
  navigationTitle: {
    fontSize: 18,
    color: Config.DARK_BLUE,
    alignSelf: 'center',
    marginRight: Platform.OS === 'ios' ? 0 : 10,
    ...fontExtraBoldStyle,
  },
  navigationDefaultFirstBorderStyle: {
    // height: 4,
    // backgroundColor: Config.HEADER_BACKGROUND_FIRST_BG_COLOR,
  },
  navigationDefaultSecondBorderStyle: {
    // height: 4,
    // backgroundColor: Config.HEADER_BACKGROUND_SECOND_BG_COLOR,
  },
});
