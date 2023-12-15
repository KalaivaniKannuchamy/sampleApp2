import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText} from 'react-native';
import {Text as PaperText, withTheme} from 'react-native-paper';
import styles from './styles';

/* Component for sub header text
style : Style for text other than default style
theme : Theme is used when we set any theme for text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this text 
 */
const SubHeaderText = ({style, theme, fontWeight, ...rest}) => {
  return <PaperText style={[styles.headerText, style]} {...rest} />;
};

/* Property types that need to passed for SubHeader text*/
SubHeaderText.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
};

/*Default props for SubHeader text*/
SubHeaderText.defaultProps = {};

export default withTheme(SubHeaderText);
