import {  fontExtraBoldStyle, fontMediumStyle } from '@utils/constant';
import { StyleSheet,  NativeModules } from 'react-native';
import Config from 'react-native-config';

const { StatusBarManager } = NativeModules;
export default StyleSheet.create({
  container: {
    paddingTop: StatusBarManager.HEIGHT,
    paddingHorizontal: 37,
    paddingBottom: 20,
    shadowColor: '#7090B066'
  },
  isTabletContainer: {
    // flex: 1,
    width: "49.5%" ,
    justifyContent:'center',
    marginLeft:"25%",
    paddingHorizontal:10,
  },
  mainStepperContainerStyle: {
    // marginHorizontal: appDimentions.screenHorizontalPadding,
    paddingBottom: 10,
  },
  titleContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  iconContainerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  badgeView: {
    backgroundColor: 'white',
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  mainContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  stepperStyle: {
    // paddingHorizontal:5,
    borderRadius: 2,
    height: 4,
  },
  titleStyle: {
    fontSize: 14,
    color: Config.UNDERLINE_BLUE,
    letterSpacing: 1.4,
    lineHeight: 24,
    ...fontExtraBoldStyle
  },
  iconStyle: {
    marginTop: 10
  },
  choosetariffStyle: {
    fontSize: 11,
    color: Config.UNDERLINE_BLUE,
    lineHeight: 19,
    ...fontMediumStyle
  },
  tariffName: {
    fontSize: 11,
    marginLeft: 10,
    lineHeight: 19,
    color: Config.UNDERLINE_BLUE,
    ...fontMediumStyle
  },
  stepperView:{
    backgroundColor: Config.DARK_BLUE
  },
  noIconStyle:{
    marginTop: 10
  }
})
