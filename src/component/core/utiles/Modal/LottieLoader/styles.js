import { StyleSheet, Dimensions, Platform } from 'react-native';
import Config from 'react-native-config';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


export default StyleSheet.create({
    dialogStyle: {
        alignSelf: 'center',
        height: screenHeight,
        width: screenWidth,
        backgroundColor: Config.WHITE,
        justifyContent: 'center',
        elevation: 0
    },
    mainContainer: {
        backgroundColor: Config.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelIconStyle: {
        alignSelf: 'flex-end', marginRight: 10
    },
    iconStyle: {
        marginVertical: 10
    },
    iconViewStyle: { flexDirection: 'row', marginVertical: 20 },
    lottieContainer :{
        height: screenHeight*0.5,
        width: screenWidth*0.5
    }

});