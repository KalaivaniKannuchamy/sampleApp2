import PropTypes from 'prop-types';
import React from 'react';
import { View as ReactView, ViewPropTypes } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
import Config from 'react-native-config';
import View from '../View';
import { Shadow } from 'react-native-neomorph-shadows';

/* Component for view
style : Style for view other than default style
children : children componets added in the view
rest : if any text properties other than above  are applied they will apply automatically for this view
 */
const GlassCard = ({
  children,
  colors,
  start,
  end,
  locations,
  gradientViewStyle,
  ...rest
}) => {
  return (
    <LinearGradient
      colors={colors ? colors : [Config.GRADIENT_GLASS_WHITE, Config.GRADIENT_GLASS_GRAY]}
      start={start ? start : { x: 0, y: 0 }}
      end={end ? end : { x: 0, y: 1 }}
      // locations={locations ? locations :[0,0.4]}
      style={[styles.linearGradient, gradientViewStyle]}
      // style={styles.linearGradient}
      {...rest}>
      {children}
    </LinearGradient>
  );
};

/* Property types that need to passed for view*/
GlassCard.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.element,
};

/*Default props for view*/
GlassCard.defaultProps = {

};

export default GlassCard;