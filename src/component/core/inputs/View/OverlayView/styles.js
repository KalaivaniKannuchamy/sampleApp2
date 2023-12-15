import { appDimentions, fontExtraBoldStyle, fontMediumStyle, fontRegularStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  mainContainer: {
    borderRadius: appDimentions.ViewBorderRadius,
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(50px)'
  },
  headerTitleStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: Config.UNDERLINE_BLUE,
    fontSize: 17,
    letterSpacing: 1.36,
    lineHeight: 22,
    width: '80%',
    marginVertical: appDimentions.accountHeaderTitleTopPadding,
    ...fontExtraBoldStyle
  },
  htmlTextStyle: {
    color: Config.UNDERLINE_BLUE,
    width: '80%',
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 12,
    letterSpacing:0.24,
    ...fontRegularStyle
   
  },
  htmldescriptionTextStyle:{
    color: Config.UNDERLINE_BLUE,
    width: appDimentions.screenWidth * 0.57,
    textAlign: 'left',
    lineHeight: 20,
    fontSize: 12,
    letterSpacing:0.24,
    // ...fontRegularStyle
  },
  underlineFooterText: {
    fontSize: 13,
    padding: 10,
    color: Config.DARK_BLUE,
    marginBottom: 20,
    ...fontMediumStyle,
    letterSpacing:0.52,
    lineHeight:18
  },
  buttonStyle: {
    marginVertical: 20
  },
  subDiscriptionStyle: {
    color: Config.UNDERLINE_BLUE,
    width: appDimentions.screenWidth * 0.57,
    textAlign: 'left',
    lineHeight: 20,
    fontSize: 12,
    letterSpacing:0.24,
    marginTop:10
  }
});