import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { customFontStyle } from '@utils/constant';
import FontRegularText from '@core/inputs/Text/FontRegularText';

/* Component for switch
switchValue : boolean value to show on or off
onValueChange : called when the value changes in switch
 */
const CustomSwitch = ({
  switchValue,
  OnValueChange,
  offText,
  onText,
  viewStyle,
  onStyle,
  offStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={1}
      onPress={OnValueChange}
      style={[styles.switchViewStyle, viewStyle]}>
      {switchValue ? (
        <View style={styles.switchOnOffViewStyle}>
          <FontRegularText style={[
            styles.switchOffStyle,
            offStyle,
            customFontStyle(offStyle, styles.switchOffStyle)
          ]}>{onText}</FontRegularText>
          <FontRegularText style={[
            styles.switchOnStyle,
            onStyle,
            customFontStyle(onStyle, styles.switchOnStyle)
          ]}>{offText}</FontRegularText>
        </View>
      ) : (
        <View style={styles.switchOnOffViewStyle}>
          <FontRegularText style={[
            styles.switchOnStyle,
            onStyle,
            customFontStyle(onStyle, styles.switchOnStyle)
          ]}>{onText}</FontRegularText>
          <FontRegularText style={[
            styles.switchOffStyle,
            offStyle,
            customFontStyle(offStyle, styles.switchOffStyle)
          ]}>{offText}</FontRegularText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomSwitch;