import { appDimentions, fontExtraBoldStyle, fontMediumStyle, fontRegularStyle } from "@utils/constant";
import { StyleSheet } from "react-native";
import Config from "react-native-config";

export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: appDimentions.screenHorizontalPadding,
        // backgroundColor: Config.BLUE,
        paddingTop: 40
    },
    innerContainer: {
        marginVertical: 40,
    },
    innerInputContainer:{
        padding: 10,
        // borderRadius: appDimentions.ViewBorderRadius,
        // borderColor: Config.DARK_BLUE,
        // borderWidth: 2
    },
    reguralTextStyle: {
        marginTop: 20
    },
    iconStyle: {
        marginRight: 5
    },
    iconViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerView:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 20
    },
    titleText:{
        ...fontExtraBoldStyle,
        fontSize:17,
        letterSpacing:1.36,
        lineHeight:22,
        // textAlign: 'left',
        color: Config.DARK_BLUE 
    },
    underlineFooterText:{
        fontSize: 12,
        letterSpacing:0.24,
        lineHeight:19,
        paddingVertical :20
    },
    buttonStyle:{
        width: appDimentions.screenWidth*0.36,
        marginTop: 20
    },
    topMainContainer:{
        // backgroundColor: Config.RED,
        flex: 1,
        // paddingTop:appDimentions.statusBarHeight
    },
    textInputTextstyle:
    {
        // backgroundColor:'red',
        fontSize:14,
        letterSpacing:0.28,
        lineHeight:19,
        ...fontRegularStyle
    },
    labelStyle:{
        // backgroundColor:'red',
        fontSize:12,
        letterSpacing:0.24,
        lineHeight:19,
        ...fontMediumStyle
    },
    switchViewStyle:{
        marginHorizontal:10
    }

});