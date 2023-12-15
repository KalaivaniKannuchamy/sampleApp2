import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
    InputStyle: {
        textAlignVertical: 'top',
        // alignItems: 'flex-start',
        minHeight: 120,
        maxHeight: 200,
        paddingHorizontal: 5,
        backgroundColor: Config.WHITE,
        borderRadius: 10
    },
    containerStyle: {
        borderBottomColor: 'transparent',
        borderRadius: 16
    }

})

