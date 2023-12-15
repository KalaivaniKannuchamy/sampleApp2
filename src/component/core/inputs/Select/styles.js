import { StyleSheet, Dimensions , Platform} from 'react-native';
import Config from 'react-native-config';
import { isIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
customPickermodalView: {
    backgroundColor: Config.WHITE,
    height: '100%',
    // paddingTop: Platform.OS === 'ios' ? (isIphoneX() ? 40 : 20) : 20,
  },
  customPickerokcancelTextStyle: {
    fontSize: 18,
    color:Config.MIDNIGHT_400,
    alignSelf: 'flex-end',
    marginEnd: 20,
    paddingVertical: 5,
  },
  customPickerinputContainerStyle: {
    backgroundColor: Config.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  customPickercancelTextStyle: {
    alignSelf: 'center',
  },
  customPickerokCancelViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  customPickertitleStyle: {
    fontSize: 22,
    alignSelf: 'center',
    color:Config.GOLD,
    marginLeft: 40,
    textAlign: 'center',
    flex: 1,
  },
  customPickerlistStyle: {
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 15,
  },
  customPickertouchableStyle: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  customPickertextStyle: {
    flex: 1,
    marginEnd: 5,
    color:Config.MIDNIGHT_400,
    fontSize: 14,
    alignSelf: 'center',
    marginVertical: 15,
  },
  customPickerlineStyle: {
    height: 1,
    backgroundColor:Config.MIDNIGHT_300,
  },
  customPickerinputFildStyle: {
    fontSize: 14,
    flex: 1,
    color: Config.MIDNIGHT_400,
  },
  customPickernoDataViewStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  customPickernoDataTextStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: Config.RED,
  },
  customPickerradioAndTextViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  }
})