import {Dimensions, StyleSheet, Platform} from 'react-native';
import Config from 'react-native-config';


export default StyleSheet.create({

  //flatList
  flatListContainer: {
    // flex: 1,
    flexDirection: 'row',
  },
  flatListVwLoaderTxt: {
    marginBottom: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  flatListLoaderTxt: {
    marginLeft: 10,
  },
  flatListDeleteBtnVw: {
    flex: 1,
    backgroundColor: Config.RED,
    justifyContent: 'center',
  },
  flatListTxtDelete: {
    // textAlign: 'center'
    marginLeft: 15,
  },
  flatListNoDataTxt: {
    textAlign: 'center',
  },

});
