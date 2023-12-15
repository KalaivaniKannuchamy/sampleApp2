import { Dimensions, Platform, StyleSheet } from 'react-native';

const scrrenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  InnerWebView: {
    height: Platform.OS == 'android' ? scrrenHeight * 0.7 : '80%',
    maxHeight: Platform.OS == 'android' ? scrrenHeight * 0.7 : '80%',
    marginVertical: scrrenHeight * 0.1,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden'
  },
  titleTextstyle: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center'
  },
  headeView: {
    justifyContent: 'center',
    backgroundColor : 'white',
    padding: 10,
  },
  crossView: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent : 'center'
  }

})