import {default as Moment} from 'moment';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Config from 'react-native-config';
import DatePicker from 'react-native-date-picker';
import {Dialog} from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Button from '@core/inputs/Button';
import {appDimentions} from '@utils/constant';
import FontRegularText from '@core/inputs/Text/FontRegularText';
/* Component for date picker view
apiFormat : date format to set to api
minimumDate : miminum date to display on date picker
maximumDate : maximum date to display on date picker
format : date format to display on view
onCancelClick : Method calls when click on cancel button
onOkClick : Method calls when click on Set button
show : boolean to show date picker dialog
textStyle : style of the text to display on date picker view other than default style
viewStyle : style of the main view other than default style
opacityStyle : style of the clickable view
onPress : method calls when click on date picker view
dontShowRightIcon : boolean to not to show the right icon on the date picker view
errorTextStyle : error message text style other than default style
placeHolder : place holder to show on date picker view
errorMsg : error message to display below the date picker view
 */
const CustomDatePicker = ({
  hideLabel,
  apiFormat,
  minimumDate,
  maximumDate,
  format,
  date,
  onCancelClick,
  onOkClick,
  show,
  text,
  label,
  textStyle,
  viewStyle,
  opacityStyle,
  onPress,
  dontShowRightIcon,
  errorTextStyle,
  placeHolder,
  errorMsg,
  dateValidationErrorMsg,
  infoIcon,
  helpPress,
}) => {
  const placeHoldertext = placeHolder == null ? '' : placeHolder;
  var dateObj =
    date != '' ? new Date(date) : maximumDate ? maximumDate : new Date();

  var dateText =
    date != ''
      ? apiFormat
        ? Moment(date).format(format ? format : 'DD.MM.YYYY')
        : date
      : '';
  const [selecteddate, setSelectedDate] = useState(dateObj);
  const [minDateError, setMinDateError] = useState(false);
  const [maxDateError, setMaxDateError] = useState(false);
  const [minMaxError, setMinMaxError] = useState(false);
  const [validate, setValidate] = useState(false);
  const {t} = useStaticContent(); // For static content Data
  // const start = new Date(2011, 2, 5);
  // const end = new Date(2011, 5, 5);
  // const range = moment.range(start, end);

  const checkMinAndMaxDateDiff = () => {
    const isBetween =
      selecteddate.getTime() >= minimumDate.getTime() &&
      selecteddate.getTime() <= maximumDate.getTime();
    return isBetween;
  };

  const checkMaxDateError = () => {
    const isBetween = selecteddate.getTime() <= maximumDate.getTime();
    return isBetween;
  };
  const checkMinDateError = () => {
    const isBetween = selecteddate.getTime() >= minimumDate.getTime();
    return isBetween;
  };

  return (
    <>
      <View style={[styles.datePickerMainView, viewStyle]}>
        <TouchableOpacity
          style={
            errorMsg
              ? [
                  [styles.datePickerOpacity, {borderColor: Config.RED}],
                  opacityStyle,
                ]
              : [styles.datePickerOpacity, opacityStyle]
          }
          onPress={onPress}
          activeOpacity={1}>
          <FontRegularText
            style={
              dateText == ''
                ? [styles.datePickerText, textStyle]
                : [[styles.datePickerText, {color: Config.BLACK}], textStyle]
            }>
            {dateText != '' ? dateText : placeHoldertext}
          </FontRegularText>
          {dontShowRightIcon ? null : (
            <Icon size={25} color={'black'} name="calendar-month" />
          )}
        </TouchableOpacity>
        {/* {console.log('selecteddate-----',selecteddate)} */}
        <Dialog
          visible={show}
          dialogStyle={appDimentions.isTablet ? styles.dialogStyle : null}>
          <DatePicker
            style={styles.datePickerStyle}
            date={selecteddate}
            mode="date"
            theme={'light'} // I have added theme to resolved for the #43147
            locale={'de'}
            onDateChange={date => setSelectedDate(date)}
          />
          <View style={styles.datePickerOkCancelViewStyle}>
            <Button
              buttonStyle={styles.datePickerOkCancelButtonStyle}
              gradientViewStyle={styles.gradientViewStyle}
              style={styles.textStyle}
              onPress={() => {
                onCancelClick();
              }}>
              {t('ek_termination_date_button1')}
            </Button>
            <Button
              buttonStyle={styles.datePickerOkCancelButtonStyle}
              titleStyle={styles.datePickerOkcancelTextStyle}
              gradientViewStyle={styles.gradientViewStyle}
              style={styles.textStyle}
              onPress={() => {
                setValidate(true);
                if (maximumDate && minimumDate) {
                  if (checkMinAndMaxDateDiff()) {
                    setMinMaxError(false);
                    onOkClick(
                      Moment(selecteddate).format(
                        apiFormat ? apiFormat : 'DD.MM.YYYY',
                      ),
                    );
                  } else {
                    setMinMaxError(true);
                  }
                } else if (minimumDate) {
                  if (checkMinDateError()) {
                    setMinDateError(false);
                    onOkClick(
                      Moment(selecteddate).format(
                        apiFormat ? apiFormat : 'DD.MM.YYYY',
                      ),
                    );
                  } else {
                    setMinDateError(true);
                  }
                } else if (maximumDate) {
                  if (checkMaxDateError()) {
                    setMaxDateError(false);
                    onOkClick(
                      Moment(selecteddate).format(
                        apiFormat ? apiFormat : 'DD.MM.YYYY',
                      ),
                    );
                  } else {
                    setMaxDateError(true);
                  }
                } else {
                  onOkClick(
                    Moment(selecteddate).format(
                      apiFormat ? apiFormat : 'DD.MM.YYYY',
                    ),
                  );
                }
              }}>
              {t('ek_termination_date_button2')}
            </Button>
          </View>
          {(validate && minMaxError) || minDateError || maxDateError ? (
            <FontRegularText
              style={[styles.datePickerErrorStyle, errorTextStyle]}>
              {dateValidationErrorMsg}
            </FontRegularText>
          ) : null}
        </Dialog>
      </View>
      {errorMsg ? (
        <FontRegularText style={[styles.datePickerErrorStyle, errorTextStyle]}>
          {errorMsg}
        </FontRegularText>
      ) : (
        <FontRegularText
          style={[styles.datePickerErrorStyle, errorTextStyle]}
        />
      )}
    </>
  );
};

export default CustomDatePicker;
