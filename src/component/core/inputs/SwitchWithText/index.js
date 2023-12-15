import React from 'react';
import {StyleSheet, View} from 'react-native';
import Config from 'react-native-config';
import {Switch as PaperSwitch, withTheme} from 'react-native-paper';

import styles from './styles';
import HeaderBoldBlueText from '../Text/HeaderBoldBlueText';
import Switch from '../Switch';

/* Component for switch
switchValue : boolean value to show on or off
onValueChange : called when the value changes in switch
 */
const SwitchWithText = ({
  text,
  onValueChange,
  noUpperCase,
  value,
  containerStyle,
  textStyle,
  innerSwitchOnColor,
}) => {
  const {t} = useStaticContent();

  return (
    <View style={[styles.SwitchViewContainer, containerStyle]}>
      <HeaderBoldBlueText
        noUpperCase={noUpperCase}
        style={[styles.mainHeaderText, textStyle]}
        text={text}
      />

      {/* <FontRegularText style={styles.mainHeaderText} >{t('ek_ap_nr-portability_h1')} </FontRegularText> */}
      <Switch
        value={value}
        onValueChange={onValueChange}
        innerSwitchOnColor={innerSwitchOnColor}
      />
    </View>
  );
};

export default withTheme(SwitchWithText);
