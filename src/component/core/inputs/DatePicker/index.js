import {default as Moment} from 'moment';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Config from 'react-native-config';
import DatePicker from 'react-native-date-picker';
import {Dialog} from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Button';

import styles from './styles';
import ErrorMessageView from '../View/ErrorMessageView';
import FontRegularText from '../Text/FontRegularText';
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
const DatePickerContainer = ({
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
  titleStyle,
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
    // console.log("isBetween======",isBetween);
    return isBetween;
  };

  const checkMaxDateError = () => {
    const isBetween = selecteddate.getTime() <= maximumDate.getTime();
    // console.log("isBetween======",isBetween);
    return isBetween;
  };
  const checkMinDateError = () => {
    const isBetween = selecteddate.getTime() >= minimumDate.getTime();
    // console.log("isBetween34======",isBetween);
    return isBetween;
  };

  return (
    <>
      <View style={[styles.datePickerMainView, viewStyle]}>
        <View style={styles.nameView}>
          <FontRegularText
            style={[
              styles.title,
              titleStyle,
              {color: errorMsg ? Config.RED : Config.UNDERLINE_BLUE},
            ]}
            noScaling={true}>
            {label}
          </FontRegularText>
          {infoIcon ? (
            <Icon
              name="help-circle"
              style={{marginLeft: 5}}
              size={20}
              onPress={() => {
                if (helpPress) {
                  helpPress();
                }
              }}
            />
          ) : null}
        </View>
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
            }
            noScaling={true}>
            {dateText != '' ? dateText : placeHoldertext}
          </FontRegularText>
          {dontShowRightIcon ? null : (
            <Icon size={25} color={'black'} name="calendar-month" />
          )}
        </TouchableOpacity>
        <Dialog visible={show}>
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
              titleStyle={styles.datePickerOkcancelTextStyle}
              onPress={() => {
                // console.log("maximumDate=========",maximumDate,minimumDate);
                setValidate(true);
                if (maximumDate && minimumDate) {
                  // console.log("1=========");
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
                  // console.log("2=========",);
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
                  // console.log("3=========",);
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
                  // console.log("4=========",);
                  onOkClick(
                    Moment(selecteddate).format(
                      apiFormat ? apiFormat : 'DD.MM.YYYY',
                    ),
                  );
                }
              }}>
              {t('ek_ap_date-picker-set')}
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
        <ErrorMessageView
          text={errorMsg}
          isGreyText={false}
          isError={true}
          noScaling={true}
          viewStyle={[styles.datePickerErrorStyle, errorTextStyle]}
        />
      ) : (
        <FontRegularText style={[styles.datePickerErrorStyle, errorTextStyle]}>
          {''}
        </FontRegularText>
      )}
    </>
  );
};

export default DatePickerContainer;
