import { appDimentions, fontMediumStyle, fontRegularStyle } from '@utils/constant';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import Config from 'react-native-config';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    dialogStyle: {
        alignSelf: 'center',
        width: appDimentions.screenWidth,
        height: appDimentions.screenHeight,
        backgroundColor: 'transparent',
        elevation: 0,
        marginHorizontal:0,
        marginTop:-5,
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
        backgroundColor: '#1F466D',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 22,
        paddingVertical: 20,
        maxHeight: appDimentions.screenHeight * 0.58,
        width: appDimentions.screenWidth * 0.85,
        flex:1
    },
    cancelIconStyle: {
        alignSelf: 'flex-end', marginRight: 15,
    },
    iconStyle: {
        marginVertical: 10,
        fontSize: 12,
        letterSpacing: 0.24,
        lineHeight: 19,
        paddingHorizontal: 20,
        ...fontRegularStyle
    },
    iconViewStyle: { flexDirection: 'row', marginVertical: 20 },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    underlineText:{
        fontSize:12,
        letterSpacing:0.24,
        lineHeight:19,
        color:Config.LINK_BLUE,
        ...fontMediumStyle
    }
});