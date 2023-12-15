import {appDimentions, fontBoldStyle} from '@utils/constant';
import {StyleSheet} from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  datePickerText: {
    fontSize: 13,
    color: Config.GRAY2,
    backgroundColor: 'white',
  },
  datePickerOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: appDimentions.fieldFontSize,
  },
  datePickerErrorStyle: {
    color: Config.RED,
    fontSize: 12,
    marginTop: 10,
  },
  datePickerMainView: {
    flex: 1,
  },
  nameView: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: appDimentions.fieldFontSize,
  },
  title: {
    color: Config.DARK_BLUE,
    fontSize: appDimentions.fieldFontSize,
  },
  datePickerStyle: {
    alignSelf: 'center',
    borderRadius: 10,
  },
  datePickerOkCancelViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  datePickerOkcancelTextStyle: {
    marginHorizontal: 15,
    flex: 1,
    padding: 5,
    fontSize: 14,
  },
  datePickerCancelTextStyle: {
    fontSize: 18,
  },
  datePickerOkCancelButtonStyle: {
    width: '50%',
    marginHorizontal: 15,
  },
  datePickerLabelStyle: {
    left: 0,
    fontSize: 14,
    color: 'blue',
  },
  textStyle: {
    ...fontBoldStyle,
  },
  gradientViewStyle: {
    width: '100%',
  },
  dialogStyle: {
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
