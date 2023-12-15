import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  semiCircleExteriorCircle: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  semiCircleRotatingCircleWrap: {
    position: 'absolute',
    left: 0,
  },
  semiCircleRotatingCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  semiCircleInteriorCircle: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  semiCircleMainViewStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  semiCircleLeftTextStyle: {
    alignSelf: 'flex-end',
    color: '#000000',
    marginHorizontal: 10,
    fontSize: 18,
  },
  semiCircleRightTextStyle: {
    alignSelf: 'flex-end',
    color: '#000000',
    marginHorizontal: 10,
    fontSize: 18,
  },
  semiCircleMiddleTextStyle: {
    alignSelf: 'center',
    color: '#000000',
    marginBottom: 10,
    fontSize: 18,
  },
});
