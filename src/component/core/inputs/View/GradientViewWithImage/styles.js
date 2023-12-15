import { appDimentions, fontExtraBoldStyle } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  viewDefaultStyle: {
    flex: 1,
    
  },
  imageStyle: {
    height: appDimentions.screenHeight * 0.32,
    width: appDimentions.screenWidth,
  },
  colorView: {
    width: appDimentions.screenWidth,
    flex: 1,
  },
  children: {
  },
  gradientViewStyle: {
    height: 100,
    width: "100%",
    marginTop: -100,
    flex:1
  },
  headerView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  rightView: {
    right:10,
    padding:5,
    width: 25,
    height: 25
  },
  leftView: {
    left: 10,
    padding: 5
  },
  headerStyle: {
    color: Config.WHITE,
    fontSize: 13,
    letterSpacing: 1.3,
    lineHeight: 18,
    ...fontExtraBoldStyle
  }
})