import { appDimentions } from '@utils/constant';
import { StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({

  mainTouchViewStyle: {
    backgroundColor: '#1F466D',
    padding: 10,
    borderRadius: 10
  },
  mainTouchViewExpandStyle: {
    backgroundColor: Config.WHITE,
    padding: 10,
    borderRadius: 10
  },
  innerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuView:{
    backgroundColor: Config.BLACK,
    width:appDimentions.screenWidth * 0.4,
    left:appDimentions.screenWidth * 0.12,
    // top: 
  },
  menuText:{
    color:Config.WHITE,
    fontSize: 12
  },
  InnerMainContainer:{
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: 'transparent',
    width: appDimentions.screenWidth*0.3,

  },
  triangle: {
    marginTop: 5,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    // borderStyle: 'dashed',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Config.BLACK,
    transform: [{ rotate: "-90deg" }],
  },
  innerSecondryView:{
    backgroundColor: Config.BLACK,
    borderRadius: 5,
    padding: 10,
  },
  contentViewStyle:{
    backgroundColor: Config.BLACK,
    padding: 10,
  },
  contentTextStyle:{
    color: Config.WHITE,
    fontSize: 10,
  },
  tooltipStyle: { 
    borderRadius: 5,marginLeft:2
  },

})