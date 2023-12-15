import { fontExtraBoldStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainHeaderText: {
        marginVertical: 20,
        fontSize: 13,
        letterSpacing: 1.3,
        lineHeight: 15,
        ...fontExtraBoldStyle
    },
    SwitchViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})