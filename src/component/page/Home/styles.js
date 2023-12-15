import { appDimentions, fontExtraBoldStyle, fontMediumStyle, shadowStyle } from "@utils/constant";
import { StyleSheet, Dimensions, Platform } from "react-native";
import Config from "react-native-config";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scrollViewStyle: {
        flex: 1,
        paddingTop:Platform.OS == 'android' ? appDimentions.statusBarHeight/3: appDimentions.statusBarHeight,
    },
    bannerYellowStyle: {
        fontSize: 12,
        color: Config.UNDERLINE_BLUE,
        backgroundColor: Config.YELLOW,
        textAlign: 'center',
        width: appDimentions.screenWidth,
        letterSpacing: 0.24,
        lineHeight: 19,
        padding: 10,
        // marginTop: 30
    },
    bannerGreenStyle: {
        fontSize: 12,
        color: Config.UNDERLINE_BLUE,
        backgroundColor: Config.GREEN,
        textAlign: 'center',
        width: appDimentions.screenWidth,
        letterSpacing: 0.24,
        lineHeight: 19,
        padding: 10,
        // marginTop: 20
    },
    lockBannerViewStyle:{
        fontSize: 12,
        color: Config.WHITE,
        backgroundColor: Config.ERROR,
        textAlign: 'center',
        width: appDimentions.screenWidth,
        letterSpacing: 0.24,
        lineHeight: 19,
        padding: 10,
        marginTop: 20
    },
    activtingBannerViewStyle:{
        fontSize: 12,
        color: Config.WHITE,
        backgroundColor: Config.YELLOW,
        textAlign: 'center',
        width: appDimentions.screenWidth,
        letterSpacing: 0.24,
        lineHeight: 19,
        padding: 10,
        marginTop: 20
    },
    listView: {
        alignSelf: 'center',
        width: appDimentions.screenWidth,
        paddingVertical: appDimentions.screenHorizontalPadding,
        marginBottom: appDimentions.screenHorizontalPadding,
    },
    subTitleStyle: {
        fontSize: 13,
        letterSpacing: 1.3,
        lineHeight: 15,
        ...fontExtraBoldStyle,
        color: Config.UNDERLINE_BLUE,
        marginLeft: 20,
        paddingHorizontal: appDimentions.accountHeaderTitleTopPadding
    },
    title: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10
    },
    headerTextStyle: {
        fontSize: 17,
        width: appDimentions.screenWidth * 0.5,
        letterSpacing: 0.3,
        lineHeight: 22,
        ...fontMediumStyle
    },
    buttonStyle: {
        width: appDimentions.screenWidth * 0.36
    },
    descriptionTextStyle: {
        width: appDimentions.screenWidth * 0.7,

    },
    carouselImage: {
        width: appDimentions.screenWidth * 0.46,
        height: appDimentions.screenWidth * 0.46,
        marginHorizontal: 10,
    },
    flatListViewStyle: {
        marginVertical: 10,
        alignItems: 'center',
    },
    secondFlatListViewStyle: {
        marginVertical: 10,
        marginBottom: appDimentions.screenHeight * 0.08,
        alignItems: 'center'
    },
    paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 5,
        backgroundColor: Config.UNDERLINE_BLUE,
    },
    pageControllerStyle: {
        // marginVertical: 10,
        marginTop: 20,
        paddingVertical: 0,
    },
    paginationInactiveDot: {
        backgroundColor: Config.LIGHT_BLUE,
    },
    middleViewImage: {
        width: appDimentions.screenWidth * 0.85,
        height: appDimentions.screenHeight * 0.23,
        alignSelf: 'center',
        marginRight: 30
    },
    shadowView: {
        backgroundColor: 'transparent',
        borderRadius: 10,
        ...shadowStyle
    },
    titleStyle: {
        textAlign: 'left',
        marginLeft: 37,
        marginTop: 10,
        fontSize: 13,
        letterSpacing: 1.3,
        lineHeight: 15,
        color: Config.UNDERLINE_BLUE,
        ...fontExtraBoldStyle
    },
    lockCartTitleText:{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 13,
            letterSpacing: 1.3,
            lineHeight: 15,
            color: Config.UNDERLINE_BLUE,
            ...fontExtraBoldStyle
    },
    lockCardView: {
        borderRadius: appDimentions.ViewBorderRadius,
        width: appDimentions.counterViewSize,
        height: appDimentions.counterViewSize,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 22,
        
    },
    pressbannerStyle:{
        // marginTop: 40,
    }
    // gradientViewStyle:{
    //     marginTop:50,
    // }
});