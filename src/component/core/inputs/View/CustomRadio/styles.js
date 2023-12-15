import { fontRegularStyle } from '@utils/constant';
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
    alignItems:'center',
    marginVertical: 5
  },
  checkboxText: {
    color:Config.BLACK,
    fontSize: 18,
    marginHorizontal: 10,
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
  radioBlueText: {
    fontSize: 12,
    lineHeight:19,
    letterSpacing:0.24,
    marginHorizontal: 10,
    includeFontPadding: false,
    ...fontRegularStyle
  },
  errorMsg: {
    color: Config.RED,
    fontSize: 12,
    marginVertical: 5,
  }
})