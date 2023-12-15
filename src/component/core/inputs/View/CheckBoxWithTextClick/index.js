import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import Config from 'react-native-config';
import { Shadow } from 'react-native-neomorph-shadows';
//have to check this path as efore it tis ".."
import styles from './styles';
import Switch from '@core/inputs/Switch';
import HTMLText from '@core/inputs/Text/HTMLText';
import TopUp from '@page/User/TopUp';
import { customFontStyle } from '@utils/constant';
import FontRegularText from '@core/inputs/Text/FontRegularText';
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
const CheckBoxWithTextClick = (props) => {
  const {
    viewStyle,
    onImagePress,
    violetLabelText,
    selectedValue,
    checkForError,
    errorMessage,
    errorMsgStyle,
    checkText,
    switchButton,
    switchStyle,
    htmlText,
    onNaviagtionPress,
    rechargeOption
  } = props;

  return (
    <>
      <View style={[styles.touchViewStyle, viewStyle]}>
        {switchButton ?
          <Pressable onPress={onImagePress}>
            <Switch
              value={selectedValue}
              onValueChange={onImagePress}
              style={switchStyle}
            />
          </Pressable>
          :
          <Pressable onPress={onImagePress} style={rechargeOption ? styles.rechargeOptionStyle : null}>

            <Shadow
              inner // <- enable inner shadow
              useArt // <- set this prop to use non-native shadow on ios
              style={[selectedValue ? styles.innerSwitchOn : styles.innerSwitchOff]}
            >

              {selectedValue ? <View style={styles.inneWhiteView} /> : null}
            </Shadow>
            {rechargeOption ? <FontRegularText style={[styles.checkboxVioletText, checkText]}>{rechargeOption}</FontRegularText> : null}
          </Pressable>
        }
        {htmlText && violetLabelText ?
          <Pressable>
            <HTMLText
              onPress={onNaviagtionPress}
              html={violetLabelText}
              baseStyle={styles.checkboxVioletText}
              pTagStyle={styles.pTagStyle}

            />
          </Pressable>
          :
          violetLabelText ?
            <FontRegularText
              style={[styles.checkboxVioletText, checkText, customFontStyle(checkText, styles.checkboxVioletText)]}
              onPress={onNaviagtionPress ? onNaviagtionPress : null}
              noScaling={true}
            >
              {violetLabelText}

            </FontRegularText>
            :
            null
        }

      </View>
      {
        checkForError ?
          errorMessage ?
            <FontRegularText style={[
              styles.errorMsg,
              errorMsgStyle,
              customFontStyle(errorMsgStyle, styles.errorMsg)
            ]}
            noScaling={true}>{errorMessage}</FontRegularText>
            : null
          : null
      }
    </>
  );
};


export default CheckBoxWithTextClick;