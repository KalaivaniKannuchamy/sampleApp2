import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText} from 'react-native';
import {Text as PaperText, withTheme} from 'react-native-paper';
import styles from './styles';

/* Component for SimActivateNormal Text
style : Style for text other than default style
theme : Theme is used when we set any theme for text otherwise default theme will be there
fontWeight : Font weight is used based on font type
rest : if any text properties other than above three are applied they will apply automatically for this text 
 */
const SimActivateNormalText = ({style, theme, fontWeight, ...rest}) => {
  return (
    <PaperText
      style={[styles.simActivationNormaldefaultStyle, style]}
      {...rest}
    />
  );
};

/* Property types that need to passed for SimActivateNormal text*/
SimActivateNormalText.propTypes = {
  style: RNText.propTypes.style,
  theme: PropTypes.object,
  fontWeight: PropTypes.string,
};

/*Default props for SimActivateNormal text*/
SimActivateNormalText.defaultProps = {};

export default withTheme(SimActivateNormalText);
