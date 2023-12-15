import {
  appDimentions,
  fontExtraBoldStyle,
  lightShadowStyle,
} from '@utils/constant';
import {StyleSheet} from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  defaultTitleStyle: {
    fontSize: 14,
    color: Config.WHITE,
    paddingHorizontal: 10,
    letterSpacing: 0,
    fontFamily: Config.FONT_REGULAR,
  },
  defaultBlackTitleStyle: {
    fontSize: 12,
    color: Config.UNDERLINE_BLUE,
    ...fontExtraBoldStyle,
    marginHorizontal: 0,
  },
  defaultButtonStyle: {
    height: 47,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: Config.DARK_BLUE,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Config.DARK_BLUE,
    elevation: 0,
  },
  defaultWhiteButtonStyle: {
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: Config.WHITE,
    alignSelf: 'center',
    width: appDimentions.screenWidth * 0.5,
    ...lightShadowStyle,
  },
  defaultGreyButtonStyle: {
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: Config.DARK_GREY,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Config.DARK_GREY,
    elevation: 0,
  },
  gradientButtonStyle: {
    marginVertical: 10,
    height: 40,
    width: appDimentions.screenWidth * 0.43,
    alignSelf: 'center',
    ...lightShadowStyle,
  },
  gradientViewStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    // overflow: 'hidden',
    borderRadius: 10,
    height: 40,
    width: appDimentions.screenWidth * 0.43,
  },
  regularTextDefaultStyle: {
    fontSize: 12,
    textAlign: 'center',
    color: Config.WHITE,
    letterSpacing: 1.2,
    ...fontExtraBoldStyle,
  },
  iconStyle: {
    marginLeft: 10,
  },
});
