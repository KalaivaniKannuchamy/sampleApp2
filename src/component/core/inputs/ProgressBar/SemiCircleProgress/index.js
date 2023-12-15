import FontRegularText from '@core/inputs/Text/FontRegularText';
import View from '@core/inputs/View/View';
import PropTypes from 'prop-types';
import React from 'react';
import {Animated, StyleSheet, ViewPropTypes} from 'react-native';

/* Component for Semi circle progress view */
export default class SemiCircleProgress extends React.PureComponent {
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
  };

  /*default properties for semi circle progress */
  static defaultProps = {
    progressShadowColor: '#CF9FFF',
    progressColor: 'white',
    interiorCircleColor: ' #8F00FF',
    circleRadius: 130,
    progressWidth: 20,
    animationSpeed: 2,
    initialPercentage: 0,
    dataProgressKaufland: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      rotationAnimation: new Animated.Value(props.initialPercentage),
      showBlink: true,
    };
  }

  /* Animte progress view when coming to the screen */
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.getBlinkUpdate()) {
        this.setState(previousState => {
          return {showBlink: !previousState.showBlink};
        });
      }
    }, 1000);

    this.animate();
  }

  /* Animate progress view when value are updated */
  componentDidUpdate() {
    this.animate();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  /* Method to animate progress view */
  animate = () => {
    const toValue = this.getPercentage();
    const speed = this.props.animationSpeed;
    Animated.spring(this.state.rotationAnimation, {
      toValue,
      speed,
      useNativeDriver: false,
    }).start();
  };

  //Method to get percentage to show on the progress view
  getPercentage = () => {
    const {percentage, minValue, maxValue, currentValue} = this.props;
    if (percentage != undefined)
      // if percentage is present then we can directly show the percentage byt returning the percentage value
      return Math.max(Math.min(percentage, 100), 0);

    if (currentValue.toString() && minValue.toString() && maxValue.toString()) {
      // else based on current and min and max value we can get the percentage and return that value
      const newPercent =
        ((currentValue - minValue) / (maxValue - minValue)) * 100;
      return Math.max(Math.min(newPercent, 100), 0);
    }
    return 0; //else returns 0
  };

  //Method to get percentage to show on the progress view
  getBlinkUpdate = () => {
    const {showAnimation} = this.props;
    return showAnimation;
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
    const interiorCircleRadius = circleRadius - progressWidth;

    return StyleSheet.create({
      exteriorCircle: {
        width: circleRadius * 2,
        height: circleRadius,
        borderRadius: circleRadius,
        backgroundColor: 'grey',
      },
      rotatingCircleWrap: {
        width: circleRadius * 2,
        height: circleRadius,
        top: circleRadius,
      },
      semiCircleExteriorCircle: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        alignItems: 'center',
        overflow: 'hidden',
        alignSelf: 'center',
      },
      semiCircleRotatingCircleWrap: {
        position: 'absolute',
        left: 0,
      },
      semiCircleRotatingCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
      semiCircleInteriorCircle: {
        overflow: 'hidden',
        // justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
      semiCircleMainViewStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
      },
      semiCircleLeftTextStyle: {
        alignSelf: 'flex-end',
        color: '#000000',
        marginHorizontal: 10,
        fontSize: 18,
      },
      semiCircleRightTextStyle: {
        alignSelf: 'flex-end',
        color: '#000000',
        marginHorizontal: 10,
        fontSize: 18,
      },
      semiCircleMiddleTextStyle: {
        alignSelf: 'center',
        color: '#000000',
        marginBottom: 10,
        fontSize: 18,
      },
      rotatingCircle: {
        width: circleRadius * 2,
        height: circleRadius,
        borderRadius: circleRadius,
        backgroundColor: '#61AFFE',
        transform: [
          {translateY: -circleRadius / 2},
          {
            rotate: this.state.rotationAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ['0deg', '180deg'],
            }),
          },
          {translateY: circleRadius / 2},
        ],
      },
      interiorCircle: {
        width: interiorCircleRadius * 2,
        height: interiorCircleRadius,
        borderRadius: interiorCircleRadius,
        backgroundColor: 'white',
        top: progressWidth,
      },
    });
  };

  render() {
    const styles = this.getStyles();
    return (
      <View style={styles.semiCircleMainViewStyle}>
        {this.props.minValue.toString() ? (
          <FontRegularText style={styles.semiCircleLeftTextStyle}>
            {this.props.minValue / 1}
          </FontRegularText>
        ) : null}
        <View>
          {this.props.maxValue.toString() ? (
            <FontRegularText style={styles.semiCircleMiddleTextStyle}>
              {this.props.dataProgressKaufland
                ? (this.props.maxValue / 2).toFixed(2)
                : this.props.maxValue / 2}
            </FontRegularText>
          ) : null}
          <View
            style={[
              styles.semiCircleExteriorCircle,
              styles.exteriorCircle,
              this.props.exteriorCircleStyle,
            ]}>
            <View
              style={[
                styles.semiCircleRotatingCircleWrap,
                styles.rotatingCircleWrap,
              ]}>
              {this.state.showBlink ? (
                <Animated.View
                  style={[
                    styles.semiCircleRotatingCircle,
                    styles.rotatingCircle,
                  ]}
                />
              ) : null}
            </View>
            <View
              style={[
                styles.semiCircleInteriorCircle,
                styles.interiorCircle,
                this.props.interiorCircleStyle,
              ]}>
              {this.props.children}
            </View>
          </View>
        </View>

        {this.props.maxValue.toString() ? (
          <FontRegularText style={styles.semiCircleRightTextStyle}>
            {this.props.dataProgressKaufland
              ? (this.props.maxValue / 1).toFixed(2)
              : this.props.maxValue / 1}
          </FontRegularText>
        ) : null}
      </View>
    );
  }
}
