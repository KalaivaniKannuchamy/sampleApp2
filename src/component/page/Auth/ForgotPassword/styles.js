import { appDimentions, fontExtraBoldStyle, fontMediumStyle, fontRegularStyle } from "@utils/constant";
import { StyleSheet } from "react-native";
import Config from "react-native-config";

export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        width: '100%',
        paddingTop: 30,
        paddingHorizontal: appDimentions.screenHorizontalPadding,
        // backgroundColor: Config.BLUE
    },
    innerContainer: {
        marginTop: 40,
        padding: 10,
        borderRadius: 10,
        // borderColor: Config.UNDERLINE_BLUE,
        // borderWidth: 2,
    },
    reguralTextStyle: {
        marginTop: 20
    },
    textInputTextstyle: {
        color: Config.WHITE,
        fontSize: 14,
        letterSpacing:0.42,
        lineHeight: 20,
        ...fontRegularStyle
    },
    labelStyle:{
        fontSize: 12,
        letterSpacing:0.24,
        lineHeight: 19,
        ...fontMediumStyle
    },
    titleText: {
        fontSize: 13,
        letterSpacing: 1.3,
        lineHeight: 15,
        color: Config.UNDERLINE_BLUE,
        textAlign: 'left',
        ...fontExtraBoldStyle
    },
    buttonStyle: {
        width: appDimentions.screenWidth * 0.36,
        marginVertical: 30
    },
    topMainContainer: {
        flex: 1,
        paddingTop:appDimentions.statusBarHeight
    },
    bottomText: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 12,
        letterSpacing: 0.24,
        lineHeight: 19,
        ...fontRegularStyle,
        color:Config.UNDERLINE_BLUE
    },
    underlineText:{
        textAlign: 'center',
        // marginTop: 5,
        fontSize: 12,
        letterSpacing: 0.24,
        lineHeight: 19,
        ...fontMediumStyle,
        color: Config.UNDERLINE_BLUE,
    },
    subDescriptionStyle:{
        marginTop: 40,
        fontSize: 12,
        textAlign: 'center',
        width: appDimentions.screenWidth * 0.56,
        ...fontRegularStyle,
        lineHeight:19,
        letterSpacing:0.24
    },
    popButtonStyle:{
        bottom:40
    },
    toolContainerStyle:{
        height:appDimentions.screenWidth * 0.22
    }

});