import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

const styles = StyleSheet.create({
    defaultStyle:{
        backgroundColor:Config.WHITE
    },
    container: {
        overflow: 'hidden',
        justifyContent: 'center'
    },
    defaultStyle: {
        overflow: 'hidden',
        // width: Dimensions.get('window').width,
        // height: 200
    },
    fastImage: {
        flex: 1
    },
    touchableArea: {
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
    }
})