import {
  appDimentions,
  fontRegularStyle,
  fontMediumStyle,
} from '@utils/constant';
import {StyleSheet} from 'react-native';
import Config from 'react-native-config';

export default StyleSheet.create({
  datePickerText: {
    fontSize: appDimentions.fieldFontSize,
    color: Config.JAHRESPAKET_START,
    padding: 10,
    textAlign: 'right',
    ...fontRegularStyle,
    letterSpacing: 0.42,
    lineHeight: 20,
  },
  datePickerOpacity: {
    width: '50%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
    fontSize: appDimentions.fieldFontSize,
  },
  datePickerErrorStyle: {
    color: Config.RED,
    fontSize: appDimentions.errorMessageFontSize,
    marginTop: 10,
  },
  datePickerMainView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Config.BLUE,
  },
  nameView: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: appDimentions.fieldFontSize,
  },
  title: {
    maxWidth: '90%',
    color: Config.UNDERLINE_BLUE,
    fontSize: appDimentions.fieldFontSize,
    ...fontMediumStyle,
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
});
