import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, View as ReactView, ViewPropTypes } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';/* Component for view
style : Style for view other than default style
children : children componets added in the view
enable : boolean for enable pointer events
requiredSafeArea : boolean to enable safe area layout
rest : if any text properties other than above  are applied they will apply automatically for this view
 */
import View from '../View';
// import { SafeAreaView } from 'react-native-safe-area-context';

const GradientView = ({
    style,
    children,
    enable,
    requiredSafeArea,
    safeAreaColor,
    colors,
    start,
    end,
    gradientViewStyle,
    tabletView,
    isTabletStyle,
    ...rest
}) => {

    return (

        requiredSafeArea ?
            <SafeAreaView
                style={[
                    styles.viewDefaultStyle,
                    { backgroundColor: safeAreaColor },
                ]}>
                <LinearGradient
                    colors={colors ? colors : [Config.GRADIENT_GLASS_WHITE, Config.BLUE]}
                    start={start ? start : { x: 0, y: 1 }}
                    end={end ? end : { x: 1, y: 0 }}
                    // locations={[0.6, 0.4]}
                    // style={styles.linearGradient}
                    style={[styles.linearGradient, gradientViewStyle]}

                    {...rest}>

                    {children}
                </LinearGradient>

            </SafeAreaView> :
            tabletView ?
                <View style={styles.tabletStyleView}>
                    <LinearGradient
                        colors={[Config.GRADIENT_LIGHT_BLUE, Config.BLUE]}
                        start={start ? start : { x: 0, y: 1 }}
                        end={end ? end : { x: 1, y: 0 }}
                        style={[styles.isTabletStyle, gradientViewStyle]}
                    >
                        {children}
                    </LinearGradient>
                </View>
                :
                <LinearGradient
                    colors={colors ? colors : [Config.GRADIENT_LIGHT_BLUE, Config.BLUE]}
                    start={start ? start : { x: 0, y: 1 }}
                    end={end ? end : { x: 1, y: 0 }}
                    style={[styles.linearGradient, gradientViewStyle]}
                    {...rest}>
                    {children}
                </LinearGradient>

    );
};

/* Property types that need to passed for view*/
GradientView.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.element,
    enable: PropTypes.bool,
    requiredSafeArea: PropTypes.bool,
    safeAreaColor: PropTypes.string,
};

/*Default props for view*/
GradientView.defaultProps = {
    enable: true,
    requiredSafeArea: false,
};

export default GradientView;