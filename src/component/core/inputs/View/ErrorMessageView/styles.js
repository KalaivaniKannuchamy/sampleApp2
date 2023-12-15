import { appDimentions } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  // switch
  mainContainerViewStyle: {
  },
  switchOnStyle: {
    paddingHorizontal: 5,
    fontFamily: Config.FONT_REGULAR,
    fontSize: appDimentions.errorMessageFontSize,
    backgroundColor: Config.GREEN,
    color: Config.WHITE,
  },
  textStyle: {
    paddingHorizontal: 5,
    fontFamily: Config.FONT_REGULAR,
    fontSize: appDimentions.errorMessageFontSize,
    backgroundColor: 'transparent',

  },
  switchOnOffViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle:{
    // marginTop: 
  }
})