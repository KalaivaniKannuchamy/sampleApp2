import { StyleSheet } from "react-native";
import Config from "react-native-config";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginHorizontal: 30,
    },
    subTitleText: {
        fontSize: 18,
        fontWeight: 'normal',
        marginHorizontal: 30,
    },
    subDesText: {
        fontSize: 12,
        fontWeight: 'normal',
        marginHorizontal: 30,
        marginBottom: 40,
    },
    input: {
        marginBottom: 20,
        borderBottomColor:Config.BLACK,
        borderBottomWidth: 1,
        marginHorizontal: 20
    },
    textstyle: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
        width: 300
    },
});