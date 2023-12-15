import React from 'react';
import {View, Pressable} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
//have to check this path as before it tis ".."
import styles from './styles';
import FontRegularText from '../Text/FontRegularText';
/* Component for checkbox with normal text and underline clickable text
text : normal text besides the check box
textStyle : normal text style other than the default style of this text besides the check box
viewStyle : style for the entire view
onImagePress : method calls when clicks on check box
selectedValue : boolean value to set check box enabled or not
errorMsg : Message text to display if it is required param in the screen
violetTextStyle : clickable text style other than the default violetText style
onTextPress : method calls when clicks on underline text
violetLabelText : text to diaplay as clickable text
isHTML : if any html text is present
 */
const CheckBoxWithTextClick = props => {
  const {
    viewStyle,
    onImagePress,
    violetLabelText,
    selectedValue,
    checkForError,
    errorMessage,
    errorMsgStyle,
  } = props;

  return (
    <View>
      <Pressable
        style={[styles.touchViewStyle, viewStyle]}
        onPress={onImagePress}>
        <Shadow
          inner // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          style={[
            selectedValue ? styles.innerSwitchOn : styles.innerSwitchOff,
          ]}>
          {selectedValue ? <View style={styles.inneWhiteView} /> : null}
        </Shadow>

        <FontRegularText style={styles.checkboxVioletText}>
          {violetLabelText}
        </FontRegularText>
      </Pressable>
      {checkForError ? (
        errorMessage ? (
          <FontRegularText style={[styles.errorMsg, errorMsgStyle]}>
            {errorMessage}
          </FontRegularText>
        ) : null
      ) : null}
    </View>
  );
};

export default CheckBoxWithTextClick;
