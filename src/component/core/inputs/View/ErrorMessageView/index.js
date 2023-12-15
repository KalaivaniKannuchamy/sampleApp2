import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Config from 'react-native-config';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { RFValue, customFontStyle } from '@utils/constant';
import FontRegularText from '@core/inputs/Text/FontRegularText';

/* Component for switch
switchValue : boolean value to show on or off
onValueChange : called when the value changes in switch
 */
const ErrorMessageView = ({
  text,
  isError,
  isGreyText,
  viewStyle,
  textStyle,
  noScaling
}) => {
  return (
    <View
      style={[styles.mainContainerViewStyle, viewStyle]}>

      {
        isGreyText ?
          <View style={styles.switchOnOffViewStyle}>

            {
                isError !== null ?
                <Icon size={16} style={styles.iconStyle} color={isError !== null ? !isError ? Config.RED : Config.GREEN : Config.JAHRESPAKET_START} name={!isError ? "cancel" : "check-circle"} />
                // isError !== null ? !isError ? Config.RED : Config.GREEN : Config.GRAY1
                :
                null
            }

            <FontRegularText style={[
              styles.textStyle,
              textStyle,
              {
                color: isError !== null ? !isError ? Config.RED : Config.GREEN : Config.JAHRESPAKET_START,
                // color: isError ? Config.RED : Config.GREEN
              },
              customFontStyle(textStyle, styles.textStyle)
            ]}
            noScaling={noScaling}
            >{text}</FontRegularText>
          </View>
          :
          (
            text ?
              <View style={styles.switchOnOffViewStyle}>

                {
                  isError ?
                    // isError !== null ?
                    <Icon size={16} color={isError ? Config.RED : Config.GREEN} name={isError ? "cancel" : "check-circle"} />
                    // isError !== null ? !isError ? Config.RED : Config.GREEN : Config.GRAY1
                    :
                    null
                }

                <FontRegularText style={[
                  styles.textStyle,
                  textStyle,
                  {
                    // color: isError !== null ? !isError ? Config.RED : Config.GREEN : Config.GRAY1
                    color: isError ? Config.RED : Config.GREEN,
                  },
                  customFontStyle(textStyle, styles.textStyle)
                ]}
                noScaling={noScaling}
                >{text}</FontRegularText>
              </View>
              :
              null
          )

      }


    </View>
  );
};

export default ErrorMessageView;