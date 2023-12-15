import View from '@core/inputs/View/View';
import {appDimentions, shadowStyle} from '@utils/constant';
import PropTypes from 'prop-types';
import React from 'react';
import {Animated, StyleSheet, ViewPropTypes} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Config from 'react-native-config';

/* Component for Semi circle progress view */
export default class CircularProgress extends React.PureComponent {
  /* property types for semi circle progress */
  static propTypes = {
    progressShadowColor: PropTypes.string, //Color to apply for progress view back gorund (shows on remaining part in progress view)
    progressColor: PropTypes.string, // color to show the completed progress
    interiorCircleColor: PropTypes.string, // color to apply on the inner space of the semi circle progress
    circleRadius: PropTypes.number, // radius of the circle
    progressWidth: PropTypes.number, // width of the progress bar
    percentage: PropTypes.number, // percentage to show on the progress view
    exteriorCircleStyle: ViewPropTypes.style, //
    interiorCircleStyle: ViewPropTypes.style, //
    animationSpeed: PropTypes.number, // animation speed of the progress view
    initialPercentage: PropTypes.number, // initial percentage to display on the progress
    minValue: PropTypes.number, // minimum value of the progress view
    maxValue: PropTypes.number, // maximum value of the progress view
    currentValue: PropTypes.number, //current completed value of the progress view
    showAnimation: PropTypes.bool, //current completed value of the progress view
    dataProgressKaufland: PropTypes.bool, //current completed value of the progress view
    color: PropTypes.string,
    unlimited: PropTypes.boolean,
    mainCircularStyle: ViewPropTypes.style,
    childCircularView: ViewPropTypes.style,
  };

  /*default properties for semi circle progress */
  static defaultProps = {
    progressShadowColor: 'transparent',
    progressColor: 'white',
    interiorCircleColor: 'transparent',
    color: 'transparent',
    circleRadius: 130,
    progressWidth: 20,
    animationSpeed: 2,
    initialPercentage: 0,
    dataProgressKaufland: false,
    unlimited: false,
    mainCircularStyle: {},
    childCircularView: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      rotationAnimation: new Animated.Value(props.initialPercentage),
      showBlink: true,
    };
  }

  //Method to get percentage to show on the progress view
  getPercentage = () => {
    const {percentage, minValue, maxValue, currentValue} = this.props;
    if (percentage != undefined)
      // if percentage is present then we can directly show the percentage byt returning the percentage value
      return Math.max(Math.min(percentage, 100), 0);

    if (
      currentValue?.toString() &&
      minValue?.toString() &&
      maxValue?.toString()
    ) {
      // else based on current and min and max value we can get the percentage and return that value
      const newPercent =
        ((currentValue - minValue) / (maxValue - minValue)) * 100;
      return Math.max(Math.min(newPercent, 100), 0) || 100;
    }
    return 0; //else returns 0
  };

  //Method to set styles of the progress view base on the properties
  getStyles = () => {
    const {
      circleRadius,
      progressShadowColor,
      progressColor,
      progressWidth,
      interiorCircleColor,
    } = this.props;
    let viewSize = appDimentions.counterViewSize * 0.6 - 10;

    return StyleSheet.create({
      mainStyle: {
        margin: 10,
        borderRadius: viewSize,
        ...shadowStyle,
        transform: [{scaleX: -1}],
      },
      childView: {
        padding: 10,
        height: viewSize,
        backgroundColor: Config.WHITE,
        width: viewSize,
        borderRadius: viewSize / 2,
        ...shadowStyle,
      },
      childrenViewStyle: {
        transform: [{scaleX: -1}],
      },
      unlimitedChildView: {
        padding: 10,
        height: viewSize,
        backgroundColor: '#b7daf3',
        width: viewSize,
        borderRadius: viewSize / 2,
        ...shadowStyle,
        shadowOpacity: 0.4,
      },
      childCircularView: {
        padding: 10,
        height: viewSize,
        backgroundColor: Config.WHITE,
        width: viewSize,
        borderRadius: viewSize / 2,
        // ...shadowStyle
      },
      mainCircularStyle: {
        margin: 10,
        borderRadius: viewSize,
        // ...shadowStyle,
        transform: [{scaleX: -1}],
      },
    });
  };

  render() {
    const styles = this.getStyles();
    return (
      <AnimatedCircularProgress
        size={appDimentions.counterViewSize * 0.6}
        width={appDimentions.counterBorderSize}
        fill={this.props.unlimited ? null : this.getPercentage()}
        style={
          this.props.mainCircularStyle
            ? styles.mainCircularStyle
            : styles.mainStyle
        }
        childrenContainerStyle={
          this.props.childCircularView
            ? styles.childCircularView
            : this.props.unlimited
            ? styles.unlimitedChildView
            : styles.childView
        }
        tintColor={this.props.color}
        rotation={0}
        backgroundColor="transparent">
        {fill => (
          <View style={styles.childrenViewStyle}>{this.props.children}</View>
        )}
      </AnimatedCircularProgress>
    );
  }
}
