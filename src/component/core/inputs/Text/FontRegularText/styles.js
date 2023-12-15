import { fontRegularStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
   //font regular text
  regularTextDefaultStyle: {
    fontSize: 16,
    color: Config.DARK_BLUE,
    ...fontRegularStyle
  },
})