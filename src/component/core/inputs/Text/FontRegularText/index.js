import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText} from 'react-native';
import {Text as PaperText, withTheme} from 'react-native-paper';
import styles from './styles';
import { RFValue, customFontStyle } from '@utils/constant';
/* Component for SmallBlackRegular Text
style : Style for text other than default style
theme : Theme is used when we set any theme for text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this text 
 */
const FontRegularText = ({style, theme, fontWeight, noScaling, ...rest}) => {
  return (
    <PaperText style={[
      styles.regularTextDefaultStyle, 
      style, 
      !noScaling ? customFontStyle(style, styles.regularTextDefaultStyle) : {}
    ]} {...rest} />
  );
};
/* Property types that need to passed for SmallBlackRegular text*/
FontRegularText.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
};

/*Default props for SmallBlackRegular text*/
FontRegularText.defaultProps = {};

export default withTheme(FontRegularText);
