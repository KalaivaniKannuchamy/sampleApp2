import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText} from 'react-native';
import {Text as PaperText, withTheme} from 'react-native-paper';
import styles from './styles';
import { customFontStyle } from '@utils/constant';

/* Component for text with underline
style : Style for underline text other than default style
theme : Theme is used when we set any theme for underline text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this undeline text
 */

const UnderlineText = ({style, theme, fontWeight,white, ...rest}) => {

  const textStyles = white? styles.underlineWhiteStyle : styles.underlineDefaultStyle

  return <PaperText style={[textStyles, style, customFontStyle(style, textStyles),]} {...rest} />;
};

/* Property types that need to passed for underline text*/
UnderlineText.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
};

/*Default props for underline text*/
UnderlineText.defaultProps = {};

export default withTheme(UnderlineText);