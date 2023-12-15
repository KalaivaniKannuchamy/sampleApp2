import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
  },
  defaultStyle: {
    overflow: 'hidden',
    // width: Dimensions.get('window').width,
    // height: 200
  },
  fastImage: {
    flex: 1,
  },
  touchableArea: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultStaticStyle: {
    position: 'absolute',
    // zIndex:1
  },
});
