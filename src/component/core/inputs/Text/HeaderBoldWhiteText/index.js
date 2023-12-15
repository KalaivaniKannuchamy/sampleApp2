import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText, Text } from 'react-native';
import { Text as PaperText, withTheme } from 'react-native-paper';
import styles from './styles';
import { RFValue, customFontStyle } from '@utils/constant';

/* Component for SubHeaderSmallBoldWhite Text
style : Style for text other than default style
theme : Theme is used when we set any theme for text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this text 
 */
const HeaderBoldWhiteText = ({ style, theme, fontWeight, text, noUpperCase }) => {
  // console.log('style?.fontSize--------',style?.fontSize, styles?.headerBoldWhiteTextSmallDefaultStyle)

  return (
    // <PaperText
    //   style={[styles.headerBoldWhiteTextSmallDefaultStyle, style]}
    //   {...rest}
    // />
    <Text style={[styles.headerBoldWhiteTextSmallDefaultStyle, style, customFontStyle(style, styles.headerBoldWhiteTextSmallDefaultStyle)]}>
      {noUpperCase ? text : text.toUpperCase()}
      </Text>
  );
};
/* Property types that need to passed for SubHeaderSmallBoldWhite text*/
HeaderBoldWhiteText.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
};
/*Default props for SubHeaderSmallBoldWhite text*/
HeaderBoldWhiteText.defaultProps = {};
export default withTheme(HeaderBoldWhiteText);