import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from 'react-native-config';
import SmallWhiteRegularText from '@core/inputs/Text/SmallWhiteRegularText';
import FontRegularText from '@core/inputs/Text/FontRegularText';
​
/* Component for switch
switchValue : boolean value to show on or off
onValueChange : called when the value changes in switch
 */
const Accordion = ({
  children,
  title,
  expandTitle
}) => {
​
  const [expand, setExpand] = useState(false)
​
  return (
    <Pressable
      onPress={() => {
        setExpand(!expand)
      }}
      style={expand ? styles.mainTouchViewStyle : styles.mainTouchViewExpandStyle}
    >
      {expand ?
​
        <View style={styles.innerViewStyle}>
          <SmallWhiteRegularText>{title}</SmallWhiteRegularText>
          <Icon
            size={15}
            color={
              Config.WHITE
            }
            name="arrow-left"
          />
        </View>
        :
        <>
          <View style={styles.innerViewStyle}>
            <FontRegularText>{expandTitle}</FontRegularText>
            <Icon
              size={15}
              color={
                Config.BLACK
              }
              name="arrow-left"
            />
          </View>
          {children}
        </>
      }
​
    </Pressable>
  );
};
​
export default Accordion;