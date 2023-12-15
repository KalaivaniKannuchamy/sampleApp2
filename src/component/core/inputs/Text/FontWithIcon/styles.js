import { fontRegularStyle, fontSemiBoldStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  //font regular text
  regularTextDefaultStyle: {
    fontSize: 13,
    color: Config.UNDERLINE_BLUE,
    ...fontSemiBoldStyle,
    lineHeight: 19,
    letterSpacing: 0.24,
    marginLeft: 10,
  },
  descripTextDefaultStyle: {
    fontSize: 12,
    color: Config.UNDERLINE_BLUE,
    ...fontRegularStyle,
    lineHeight: 20,
    letterSpacing: 0.39,
    marginLeft: 10,
    width: '60%',
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  htmlStyle :{
    ...fontRegularStyle
  }
})