import { appDimentions, fontRegularStyle, fontExtraBoldStyle, fontMediumStyle } from '@utils/constant';
import { Platform, StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  dialogStyle: {
    alignSelf: 'center',
    width: appDimentions.wholeScreenWidth,
    height: appDimentions.wholeScreenHeight,
    backgroundColor: 'transparent',
    elevation: 0,
    marginHorizontal:0,
    marginTop: -10
  },
  dialogIosStyle:{
    alignSelf: 'center',
    width: appDimentions.screenWidth,
    height: appDimentions.screenHeight,
    backgroundColor: 'transparent',
    elevation: 0,
    marginHorizontal:0,
    marginTop: -10
  },
  mainContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flex:1,

  },
  cancelIconStyle: {
    alignSelf: 'flex-end',
    right: 20
  },
  iconStyle: {
    marginVertical: 10,
    marginRight: 5
  },
  iconViewStyle: { flexDirection: 'row', marginVertical: 20 },
  description: {
    fontSize: 12,
    textAlign: 'center',
    width: appDimentions.screenWidth * 0.6,
    ...fontRegularStyle,
    marginTop:30,
    color: Config.UNDERLINE_BLUE,
    alignSelf:'center'
  },
  subDescription: {
    marginTop: 40,
    fontSize: 16,
    textAlign: 'center',
    width: appDimentions.screenWidth * 0.6,
    ...fontRegularStyle,
    marginVertical:30,
    color:Config.UNDERLINE_BLUE
  },
  headerTitleStyle: {
    alignSelf: 'center',
    fontSize: 18,
    width: appDimentions.screenWidth * 0.8,
    marginVertical: 40,
    ...fontExtraBoldStyle
  },
  headerView: {
    width: '100%'
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  secondryView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  underlineFooterText: {
    fontSize: 14,
    padding: 5,
    paddingVertical: 20,
    textAlign:'center',
    color:Config.UNDERLINE_BLUE
  },
  buttonStyle: {
    width: appDimentions.screenWidth * 0.62,
    marginTop:50
  },
  buttonTextStyle: {
    fontSize: 12,
    ...fontExtraBoldStyle
  },
  topView: {
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  subTitleStyle:{
    fontSize:15,
    textAlign:'center',
    letterSpacing:0.3,
    lineHeight:22,
    width: appDimentions.screenWidth * 0.68,
    ...fontMediumStyle,
    marginTop:30,
    color:Config.UNDERLINE_BLUE
  },
  gradientViewStyle:{
    width: appDimentions.screenWidth * 0.62
  }
});