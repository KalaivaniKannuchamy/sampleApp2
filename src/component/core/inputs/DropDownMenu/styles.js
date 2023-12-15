import {appDimentions} from '@utils/constant';
import {StyleSheet} from 'react-native';
import Config from 'react-native-config';

export const styles = StyleSheet.create({
  customPickermodalView: {
    borderRadius: 6,
    width: '50%',
  },
  customPickerlistStyle: {
    width: appDimentions.screenWidth * 0.5,
    backgroundColor: Config.GRADIENT_GLASS_WHITE,
  },
  customPickerokcancelTextStyle: {
    fontSize: 12,
    lineHeight: 19,
    letterSpacing: 0.24,
    color: Config.DARK_BLUE,
    alignSelf: 'flex-end',
  },
  customPickerinputContainerStyle: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  customPickercancelTextStyle: {
    alignSelf: 'center',
  },
  customPickerokCancelViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  customPickertouchableStyle: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  customPickertextStyle: {
    color: Config.DARK_BLUE,
    fontSize: 12,
    lineHeight: 19,
    letterSpacing: 0.24,
  },
  customPickerlineStyle: {
    height: 1,
    backgroundColor: Config.DARK_BLUE,
  },
  customPickerinputFildStyle: {
    fontSize: 12,
    lineHeight: 19,
    letterSpacing: 0.24,
    flex: 1,
    color: Config.DARK_BLUE,
  },
  customPickernoDataViewStyle: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: Config.GRADIENT_GLASS_WHITE,
  },
  customPickernoDataTextStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: Config.RED,
  },
  customPickerradioAndTextViewStyle: {
    flexDirection: 'row',
    padding: 10,
  },
  menuView: {
    padding: 0,
    margin: 0,
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    elevation: 0,
  },
});

export default styles;
