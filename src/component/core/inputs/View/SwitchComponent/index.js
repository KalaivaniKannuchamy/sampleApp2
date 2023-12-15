import React from 'react';
import {StyleSheet, View} from 'react-native';
import Config from 'react-native-config';
import {Switch as PaperSwitch, withTheme} from 'react-native-paper';

/* Component for switch
switchValue : boolean value to show on or off
onValueChange : called when the value changes in switch
 */
const SwitchComponent = ({switchValue, onValueChange, color}) => {
  return (
    <View>
      <PaperSwitch
        color={color ? color : Config.LIGHT_GREEN}
        value={switchValue}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default withTheme(SwitchComponent);