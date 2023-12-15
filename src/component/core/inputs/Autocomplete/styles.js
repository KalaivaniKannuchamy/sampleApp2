import {
  appDimentions,
  fontMediumStyle,
  fontRegularStyle,
} from '@utils/constant';
import {StyleSheet} from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  pickerMainView: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  nameView: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: appDimentions.fieldFontSize,
    backgroundColor: 'transparent',
  },
  title: {
    maxWidth: '90%',
    color: '#153D63',
    fontSize: appDimentions.fieldFontSize,
    ...fontMediumStyle,
  },
  pickerOpacity: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
    borderWidth: 0,
    alignItems: 'center',
    fontSize: appDimentions.fieldFontSize,
  },
  pickerText: {
    fontSize: 12,
    color: Config.DARK_BLUE,
    padding: 10,
    textAlign: 'right',
    ...fontRegularStyle,
  },
  pickerSelectedText: {
    fontSize: 12,
    color: Config.DARK_BLUE,
    padding: 10,
    textAlign: 'right',
    ...fontRegularStyle,
  },
  pickerErrorStyle: {
    color: Config.RED,
    fontSize: appDimentions.errorMessageFontSize,
    marginTop: 10,
  },
});
