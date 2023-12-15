import {StyleSheet} from 'react-native';
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
  },
  checkboxText: {
    color: Config.BLACK,
    fontSize: 18,
    marginHorizontal: 10,
  },

  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: 25,
    width: 25,
  },
  checkboxErrorStyle: {
    color: Config.RED,
    fontSize: 12,
    marginStart: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  checkboxVioletText: {
    color: 'grey',
    fontSize: 18,
    marginHorizontal: 10,
    textDecorationLine: 'underline',
    includeFontPadding: false,
  },
  errorMsg: {
    color: Config.RED,
    fontSize: 12,
    marginVertical: 5,
  },
  inneWhiteView: {
    borderRadius: 10,
    width: 10,
    height: 10,
  },
  innerSwitchOff: {
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowColor: Config.GRAY3,
    shadowRadius: 4,
    borderRadius: 22,
    backgroundColor: Config.WHITE,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  innerSwitchOn: {
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 1,
    shadowColor: Config.GRAY3,
    shadowRadius: 4,
    borderRadius: 22,
    backgroundColor: Config.DARK_BLUE,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
});
