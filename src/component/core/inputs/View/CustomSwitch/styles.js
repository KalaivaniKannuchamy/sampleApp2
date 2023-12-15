import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
   // switch
   switchViewStyle: {
    borderWidth: 3,
    borderColor: Config.GREEN,
    borderRadius: 0,
  },
  switchOnStyle: {
    paddingHorizontal : 5,
    fontFamily: Config.FONT_REGULAR,
    fontSize: 14,
    backgroundColor: Config.GREEN,
    color: Config.WHITE,
  },
  switchOffStyle: {
    paddingHorizontal : 5,
    fontFamily: Config.FONT_REGULAR,
    fontSize: 14,
    backgroundColor:  'transparent',
    color:  "transparent",
  },
  switchOnOffViewStyle: {
    flexDirection: 'row',
  },
})