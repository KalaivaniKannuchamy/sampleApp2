import { appDimentions, fontBoldStyle, fontRegularStyle } from '@utils/constant';
import { StyleSheet, Dimensions } from 'react-native';
import Config from 'react-native-config';
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    dialogStyle: {
        alignSelf: 'center',
        width:appDimentions.isTablet ? "55%": '100%',
        height: '45%',
        justifyContent: 'center',
        elevation: 0
    },
    mainContainer: {
        backgroundColor: Config.BLUE,
        marginHorizontal: 20,
        // alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 20
    },
    cancelIconStyle: {
        alignSelf: 'flex-end', marginRight: 10
    },
    iconStyle: {
        marginVertical: 10,
        paddingRight: 10,
        alignSelf: 'flex-end'
    },
    iconViewStyle: { flexDirection: 'row', marginVertical: 20 },
    modalStyle: {
        width:appDimentions.isTablet ? screenWidth * 0.52 :  screenWidth * 0.9,
        padding: 20,
        // ...fontRegularStyle,
        color: Config.UNDERLINE_BLUE,

    },
    modalContainer: {
        flex: 1,
        // marginBottom: 30,
        backgroundColor: Config.BLUE,
        marginHorizontal: 20,
        borderRadius: appDimentions.ViewBorderRadius,
        overflow: 'hidden',
        // paddingHorizontal:20
    },
    modalHeadingViewStyle: {
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        zIndex:10,
        // flexDirection: 'row',
    },
    helpHeadingOne: {
        fontSize: 18,
    },
});