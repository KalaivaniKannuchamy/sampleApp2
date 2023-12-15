import * as React from 'react';
import { Shadow } from 'react-native-neomorph-shadows';
import styles from './styles';
import { Pressable } from 'react-native';
import View from '../View/View';
import Config from 'react-native-config';

const Switch = ({ onValueChange, innerSwitchOnColor, value, style }) => {


  return (
    <Pressable onPress={() => onValueChange()} style={style}>
      <Shadow
        inner // <- enable inner shadow
        useArt // <- set this prop to use non-native shadow on ios
        style={value ? [styles.innerSwitchOn,{ backgroundColor: innerSwitchOnColor || Config.GREEN }] : styles.innerSwitchOff}
      >
        <View style={styles.inneWhiteView} />
      </Shadow>
    </Pressable>

  )
};

export default Switch;
