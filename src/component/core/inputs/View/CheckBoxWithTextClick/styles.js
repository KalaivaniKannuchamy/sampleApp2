import { appDimentions, fontRegularStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  //check box with text click
  checkboxWebViewStyle: {
    backgroundColor: 'transparent',
    marginHorizontal: 10,
  },
  touchViewStyle: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems:'center'
  },
  checkboxText: {
    color: Config.BLACK,
    fontSize: 18,
    marginHorizontal: 10,
  },
  rechargeOptionStyle:{
    flexDirection:'row',
    alignItems:'center'
  },

  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: 25,
    width: 25
  },
  checkboxErrorStyle: {
    color: Config.RED,
    fontSize: 12,
    marginStart: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  checkboxVioletText: {
    color: Config.UNDERLINE_BLUE,
    fontSize: 10,
    marginHorizontal: 10,
    marginTop: 5,
    // textDecorationLine: 'underline',
    includeFontPadding: false,
    ...fontRegularStyle,
  },
  errorMsg: {
    color: Config.RED,
    fontSize: appDimentions.errorMessageFontSize,
    marginVertical: 5,
  },
  inneWhiteView:{
    borderRadius: 10,
    backgroundColor: Config.WHITE,
    width: 10,
    height: 10,
  },
  innerSwitchOff:{
    shadowOffset: { width: 2, height: 5},
    shadowOpacity: 2,
    shadowColor: Config.GRAY3,
    shadowRadius: 4,
    borderRadius: 22,
    backgroundColor: Config.WHITE,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1
  },
  innerSwitchOn:{
    shadowOffset: { width: 1, height: 1.5 },
    shadowOpacity: 2,
    shadowColor: Config.WHITE,
    shadowRadius: 3,
    borderRadius: 22,
    backgroundColor: Config.DARK_BLUE,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1
  },
  pTagStyle:{
    marginTop:-5,
    marginBottom:-5
  }
})