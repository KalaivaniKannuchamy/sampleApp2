import { appColors, appDimentions, fontMediumStyle } from '@utils/constant';
import { StyleSheet, Dimensions } from 'react-native';
import Config from 'react-native-config';
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  dialogStyle: {
    alignSelf: 'center',
    width: appDimentions.screenWidth,
    height: appDimentions.screenHeight,
    backgroundColor: 'transparent',
    elevation: 0,
    marginHorizontal: 0,
    marginTop:-10,
    // marginVertical:0
  },
  dialogIosStyle: {
    alignSelf: 'center',
    width: appDimentions.screenWidth,
    height: appDimentions.screenHeight,
    backgroundColor: 'transparent',
    elevation: 0,
    marginHorizontal: 0,
    marginTop: -10
  },
  navigationStyle: {
    position: 'absolute',
    backgroundColor: Config.LINK_BLUE
  },
  viewStyle: {
    paddingHorizontal: appDimentions.screenHorizontalPadding,
    backgroundColor: Config.LINK_BLUE,
    height:appDimentions.isTablet ? "95%" :'100%',
    paddingTop: Platform.OS === 'android' ?  appDimentions.screenHorizontalPadding : appDimentions.statusBarHeight,
 },
  pdfViewStyle: {
    height: "90%",
    width: '100%',
    backgroundColor: Config.LINK_BLUE,
    marginTop: 10
  },
  rightViewStyle: {
    flexDirection: 'row'
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: Config.LINK_BLUE,
    justifyContent: 'space-between'
  },
  titleStyle: {
    color: Config.WHITE,
    fontSize: 10,
    letterSpacing: 0.32,
    lineHeight: 18,
    width: appDimentions.screenWidth * 0.4,
    ...fontMediumStyle,
    textAlign: 'center'
  }
});