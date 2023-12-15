import { StyleSheet } from 'react-native';
import Config from 'react-native-config';
​
export default StyleSheet.create({
​
  mainTouchViewStyle:{
    backgroundColor:'#1F466D',
    padding:10,
    borderRadius:10
  },
  mainTouchViewExpandStyle:{
    backgroundColor:Config.WHITE,
    padding:10,
    borderRadius:10
  },
  innerViewStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  }
  
})