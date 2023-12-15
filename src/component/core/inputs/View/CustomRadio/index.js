import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//have to check this path as efore it tis ".."
import styles from './styles';
import FontRegularText from '@core/inputs/Text/FontRegularText';
import SvgIcon from '@core/inputs/SvgIcon';
import selection_field_active from '../../../../../../assets/SVG/Interactive/selection_field_active.svg'
import selection_field_inactive from '../../../../../../assets/SVG/Interactive/selection_field_active.svg'
import { Shadow } from 'react-native-neomorph-shadows';
import { customFontStyle } from '@utils/constant';
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
const CustomRadio = (props) => {
  const {
    viewStyle,
    onImagePress,
    blueLabelText,
    blueLabelTextStyle,
    selectedValue,
    checkForError,
    errorMessage,
    errorMsgStyle
  } = props;

  return (
    <View>
      <Pressable style={[styles.touchViewStyle, viewStyle]} onPress={onImagePress}>
        {
          <Shadow
            inner // <- enable inner shadow
            useArt // <- set this prop to use non-native shadow on ios
            style={[selectedValue ? styles.innerSwitchOn : styles.innerSwitchOff]}
          >
            {selectedValue ? <View style={styles.inneWhiteView} /> : null}
          </Shadow>


          // selectedValue ?
          //   <SvgIcon
          //     onPress={onImagePress}
          //     width={22}
          //     height={22}
          //     color={Config.DARK_BLUE}
          //     xml={selection_field_active}
          //   />
          //   :
          //   <SvgIcon
          //     onPress={onImagePress}
          //     width={22}
          //     height={22}
          //     // color={
          //     //  Config.BLACK
          //     // }
          //     xml={selection_field_inactive}

          //   />
        }
        {
          blueLabelText ?
            <FontRegularText
              style={[styles.radioBlueText, blueLabelTextStyle]}
            >
              {blueLabelText}
            </FontRegularText>
            :
            null
        }

      </Pressable>
      {
        checkForError ?
          errorMessage ?
            <FontRegularText style={[
              styles.errorMsg,
              errorMsgStyle,
              customFontStyle(errorMsgStyle, styles.errorMsg)
            ]}>{errorMessage}</FontRegularText>
            : null
          : null
      }
    </View>
  );
};


export default CustomRadio;