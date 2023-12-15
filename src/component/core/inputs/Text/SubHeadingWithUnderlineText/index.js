import View from '@core/inputs/View/View';
import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText } from 'react-native';
import { Text as PaperText, withTheme } from 'react-native-paper';
import styles from './styles';

/* Component for text with underline
style : Style for underline text other than default style
theme : Theme is used when we set any theme for underline text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this undeline text
 */

const SubHeadingWithUnderlineText = ({ style, underlineText, title, titleStyle, underlineStyle, onPress }) => {



  return (
    <View style={[styles.mainContainer, style]}>
      <PaperText style={[styles.subTitleStyle, titleStyle]}>{title}</PaperText>
      <PaperText style={[styles.underlineDefaultStyle, underlineStyle]} onPress={onPress}>{underlineText}</PaperText>
    </View>
  )
};

/* Property types that need to passed for underline text*/
SubHeadingWithUnderlineText.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  title: PropTypes.string,
  underlineText: PropTypes.string,
  fontWeight: PropTypes.string,
};

/*Default props for underline text*/
SubHeadingWithUnderlineText.defaultProps = {};

export default withTheme(SubHeadingWithUnderlineText);