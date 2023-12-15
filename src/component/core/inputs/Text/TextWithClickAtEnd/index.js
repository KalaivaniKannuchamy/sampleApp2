import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText} from 'react-native';
import {Text as PaperText, withTheme} from 'react-native-paper';
import styles from './styles';
import { RFValue } from '@utils/constant';

/* Component for  TextWithClickAtEnd Text
style : Style for text other than default style
theme : Theme is used when we set any theme for text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this text 
 */
const TextWithClickAtEnd = ({
  oneStyle,
  twoStyle,
  threeStyle,
  theme,
  fontWeight,
  textOne,
  textTwo,
  textThree,
  onPress,
  ...rest
}) => {
  return (
    <PaperText style={[styles.clickEndDefaultOneStyle, oneStyle,{
      fontSize: RFValue(oneStyle?.fontSize ? oneStyle?.fontSize : styles?.clickEndDefaultOneStyle.fontSize || 16),
    }]} {...rest}>
      {textOne}
      <PaperText
        style={[styles.clickEndDefaultTwoStyle, twoStyle,{
          fontSize: RFValue(twoStyle?.fontSize ? twoStyle?.fontSize : styles?.clickEndDefaultTwoStyle.fontSize || 16),
        }]}
        {...rest}
        onPress={onPress}>
        {textTwo}
      </PaperText>
      <PaperText
        style={[styles.clickEndDefaultThreeStyle, threeStyle,{
          fontSize: RFValue(threeStyle?.fontSize ? threeStyle?.fontSize : styles?.clickEndDefaultThreeStyle.fontSize || 16),
        }]}
        {...rest}>
        {textThree}
      </PaperText>
    </PaperText>
  );
};

/* Property types that need to passed for Angular text*/
TextWithClickAtEnd.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
};

/*Default props for Angular text*/
TextWithClickAtEnd.defaultProps = {};

export default withTheme(TextWithClickAtEnd);
