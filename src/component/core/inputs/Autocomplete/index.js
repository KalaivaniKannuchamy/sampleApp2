import React, {useState} from 'react';
import {TouchableOpacity, View, Keyboard} from 'react-native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import ErrorMessageView from '../View/ErrorMessageView';
import DropDownMenu from '../DropDownMenu';
import FontRegularText from '../Text/FontRegularText';

/* Component for picker view
selectedValue : object that has been selected from the picker dialog
titleText : Title to display on the picker dialog
searchplaceholder : Place holder to display on the search bar in picker dialog
displayText : key value to display on the picker dialog from the data
keyId : unique id of the data
alertText : alert text to diasply on the picker dialog
dialogData : data to display in the picker dialog
onCancelClick : method calls when click on Cancel on picker dialog
onOkClick :  method calls when click on OK on picker dialog
show :  boolean to show picker dialog
text : text to display on picker view
textStyle : style of the text to display on picker view other than default style
viewStyle : style of the main view other than default style
opacityStyle : style of the clickable view
onPress : method calls when click on picker view
dontShowRightIcon : boolean to not to show the right icon on the picker view
errorTextStyle : error message text style other than default style
placeHolder : place holder to show on picker view
errorMsg : error message to display below the picker view
 */

const Autocomplete = ({
  hideLabel,
  labelStyle,
  selectedValue,
  titleText,
  searchplaceholder,
  displayText,
  keyId,
  alertText,
  dialogData,
  onCancelClick,
  onOkClick,
  show,
  text,
  textStyle,
  viewStyle,
  opacityStyle,
  onPress,
  dontShowRightIcon,
  errorTextStyle,
  placeHolder,
  errorMsg,
  infoIcon,
  helpPress,
  label,
}) => {
  const placeHoldertext = placeHolder == null ? '' : placeHolder;
  const [pickerHeight, setPickerHeight] = useState(0);

  return (
    <View>
      <View
        onLayout={event => {
          const {height} = event.nativeEvent.layout;
          setPickerHeight(height);
        }}
        style={[
          styles.pickerMainView,
          viewStyle,
          {borderBottomColor: errorMsg ? Config.RED : Config.LINK_BLUE},
        ]}>
        <View style={styles.nameView}>
          <FontRegularText style={styles.title} noScaling={true}>
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
        <DropDownMenu
          selectedValue={selectedValue}
          visible={show}
          titleText={titleText}
          PickerHeight={pickerHeight}
          searchplaceholder={searchplaceholder}
          displayText={displayText}
          keyId={keyId}
          alertText={alertText}
          dialogData={dialogData}
          onOkClick={selectedData => {
            //console.log("onOkClick",selectedData);
            onOkClick(selectedData);
          }}
          onCancelClick={() => {
            onCancelClick();
          }}
          anchor={
            <TouchableOpacity
              style={[styles.pickerOpacity, opacityStyle]}
              onPress={() => {
                Keyboard.dismiss();
                onPress();
              }}
              // activeOpacity={1}
            >
              <FontRegularText
                numberOfLines={1}
                noScaling={true}
                ellipsizeMode="tail"
                style={
                  placeHoldertext === text
                    ? [styles.pickerText, textStyle]
                    : [styles.pickerSelectedText, textStyle]
                }>
                {text}
              </FontRegularText>
              {!show ? (
                <Icon size={28} color={Config.DARK_BLUE} name="chevron-down" />
              ) : (
                <Icon size={28} color={Config.DARK_BLUE} name="chevron-up" />
              )}
            </TouchableOpacity>
          }
        />
      </View>
      {errorMsg ? (
        <ErrorMessageView
          text={errorMsg}
          isGreyText={false}
          isError={true}
          noScaling={true}
          viewStyle={[styles.pickerErrorStyle, errorTextStyle]}
        />
      ) : (
        <FontRegularText
          style={[styles.pickerErrorStyle, errorTextStyle]}
          noScaling={true}>
          {''}
        </FontRegularText>
      )}
    </View>
  );
};

export default Autocomplete;
