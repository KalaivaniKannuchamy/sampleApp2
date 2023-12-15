import { fontMediumStyle, fontRegularStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
   //underlineDefaultStyle text
   underlineDefaultStyle: {
    fontSize: 12,
    color: Config.UNDERLINE_BLUE,
    textDecorationLine: 'underline',
    includeFontPadding: false,
    paddingVertical:5,
    letterSpacing:0.3,
    ...fontRegularStyle
  },
  subTitleStyle:{
    fontSize: 16,
    color: Config.UNDERLINE_BLUE,
   ...fontMediumStyle,
   letterSpacing:0.3,
  },
  mainContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  }
})