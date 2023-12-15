import { appDimentions, fontExtraRegularStyle, fontRegularStyle, fontMediumStyle, fontExtraBoldStyle } from "@utils/constant";
import { StyleSheet } from "react-native";
import Config from "react-native-config";

export const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    // paddingHorizontal:20
  },
  innerContainer: {
    marginVertical: 40
  },
  reguralTextStyle: {
    fontSize: 12,
    lineHeight: 19,
    letterSpacing: 0.24,
    marginTop: 45,
    textAlign: 'center',
    color: Config.UNDERLINE_BLUE,
    ...fontRegularStyle
  },
  underlineTextStyle: {
    fontSize: 12,
    lineHeight: 19,
    letterSpacing: 0.24,
    textAlign: 'center',
    color: Config.UNDERLINE_BLUE,
    ...fontMediumStyle
  },
  gradientViewStyle: {
    width: appDimentions.isTablet ? appDimentions.screenWidth * 0.52 :   appDimentions.screenWidth * 0.47,
    ...fontExtraRegularStyle
  },
  titleText: {
    marginVertical: 20,
    color: Config.UNDERLINE_BLUE,
    width: appDimentions.screenWidth * 0.9,
    ...fontExtraBoldStyle,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 1.36,
    marginTop: 65,
    alignSelf:'center',
    marginBottom:50
  },
  iconStyle: {
    bottom: appDimentions.screenHeight * 0.045,
    right: appDimentions.screenHeight * 0.1
  },
  bottomImage: {
    height: appDimentions.screenWidth * 0.47,
    width: appDimentions.screenWidth * 0.7,
    position:'absolute',
    bottom:0,
    alignSelf:'flex-end',
    // right:appDimentions.screenWidth *0.00
  },
  buttonTextStyle:{
    fontSize:12,
    lineHeight:15,
    letterSpacing:1.2,
    // ...fontExtraBoldStyle,
    color:Config.WHITE
  }

});
