import { appDimentions, fontSemiBoldStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: appDimentions.ViewBorderRadius,
  },
  iconwithTextStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center'
  },
  titleStyle: {
    color: Config.UNDERLINE_BLUE,
    fontWeight: 'bold',
    width: '80%',
    fontSize: 12,
    letterSpacing: 0.12,
    lineHeight: 19,
    ...fontSemiBoldStyle
  },
  iconStyle: {
    alignSelf: 'flex-end',
    // position: 'absolute',


  }
});