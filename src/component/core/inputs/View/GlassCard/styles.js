import { appDimentions, lightShadowStyle, shadowStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({

  linearGradient: {
    // flex: 1,
    borderRadius: appDimentions.ViewBorderRadius,
    ...lightShadowStyle,
    borderColor: '#C9E8F7',
    borderWidth: 0.8,
    backgroundColor: '#cce8f9',
  },

})