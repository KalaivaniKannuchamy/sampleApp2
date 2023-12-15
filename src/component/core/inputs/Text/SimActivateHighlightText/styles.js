import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  simActivationHighlightDefaultStyle: {
    fontSize: 18,
    color: Config.PRIMARY,
    fontFamily: Config.FONT_SEMIBOLD,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
})