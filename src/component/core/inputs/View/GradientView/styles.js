import { appDimentions } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({

  linearGradient: {
    // flex: 1,
    backgroundColor: '#cce8f9'
  },
  viewDefaultStyle: {
    flex: 1,
  },
  isTabletStyle: {
    flex: 1,
    width: appDimentions.isTablet ? "66.7%" : "100%",
    backgroundColor: Config.BLUE,
  },
  tabletStyleView: {
    flex: 1,
    paddingLeft: '25%',
    backgroundColor: Config.DARK_BLUE
  }

})