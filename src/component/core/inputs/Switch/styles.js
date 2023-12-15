import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
    innerSwitchOff: {
        shadowOffset: { width: 6, height: 2 },
        shadowOpacity: 1,
        shadowColor: Config.GRAY2,
        shadowRadius: 12,
        borderRadius: 24,
        backgroundColor: Config.WHITE,
        width: 40,
        height: 24,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 1
    },
    innerSwitchOn: {
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 1,
        shadowColor: Config.GRAY2,
        shadowRadius: 4,
        borderRadius: 24,
        backgroundColor: Config.GREEN,
        width: 40,
        height: 24,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 1
    },
    SwitchViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inneWhiteView: {
        backgroundColor: Config.WHITE,
        height: 22,
        width: 22,
        borderRadius: 22,
    }
})