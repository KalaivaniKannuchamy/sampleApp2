import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, ViewPropTypes } from 'react-native';
import Config from 'react-native-config';
import { Appbar, withTheme } from 'react-native-paper';
import styles from './styles';
import { customFontStyle } from '@utils/constant';

/* Component for navigation bar header
title : title to display on header
titleStyle : style to apply for title other than default style
headerStyle : style to apply for header other than default style
leftIcons : array of icons to display on left side of the title
leftIconPressed : click of left icon based on left icons array index
rightIcons : array of icons to display on right side of the title
rightIconPressed :  click of right icon based on right icons array index
disableShadow : boolean to disable shadow of the header
alignTitleleft : boolean to set title on left side of the header
 */
const NavigationBarHeader = ({
  firstBorderStyle,
  secondBorderStyle,
  backButtonColor,
  title,
  titleStyle,
  headerStyle,
  scene,
  previous,
  navigation,
  leftIcons,
  leftIconPressed,
  rightIcons,
  rightIconPressed,
  theme,
  disableShadow,
  alignTitleleft,
  onBackPress
}) => {
  const nonShadowHeader = { elevation: 0, shadowOpacity: 0 };
  let iconSize = 24;

  /* Method which returns a value to set margin for the title based on icons present or not */
  const getMarginLeft = () => {
    let marginLeft = 0;
    let marginRight = 0;
    if (!alignTitleleft) {
      if (rightIcons.length > 0) {
        marginLeft = rightIcons.length * iconSize + rightIcons.length * 20;
        if (leftIcons.length > 0) {
          marginLeft =
            marginLeft - (leftIcons.length * iconSize + leftIcons.length * 20);
        } else if (previous != null) {
          marginLeft = marginLeft - iconSize;
        }
      }
      if (leftIcons.length > 0) {
        marginRight = leftIcons.length * iconSize + leftIcons.length * 20;
        if (rightIcons.length > 0) {
          marginRight =
            marginRight -
            (rightIcons.length * iconSize + rightIcons.length * 20);
        } else if (previous != null) {
          marginRight = marginRight - iconSize;
        }
      }
    }
    if (marginLeft > marginRight) {
      return { marginLeft };
    }
    return { marginRight };
  };

  /* Method which returns a string to set as title of the header */
  const getScreenTitle = () => {
    let { options } = scene.descriptor;
    if (options.title) {
      return options.title;
    } else if (options.headerTitle) {
      return options.headerTitle;
    }
    return title;
  };

  /* Method to get right icons of the header */
  const getRightButtons = () => {
    let btns = [];
    for (const [index, value] of rightIcons.entries()) {
      btns.push(
        <Appbar.Action
          color={Config.HEADER_BACK_BUTTON_COLOR}
          size={iconSize}
          key={index}
          icon={value}
          onPress={() => {
            rightIconPressed(index);
          }}
        />,
      );
    }
    return btns;
  };

  /* Method to get left icons of the header */
  const getLeftButtons = () => {
    let btns = [];
    for (const [index, value] of leftIcons.entries()) {
      //console.log('value====>', value);
      btns.push(
        <Appbar.Action
          color={Config.HEADER_BACK_BUTTON_COLOR}
          size={iconSize}
          key={index}
          icon={value}
          onPress={() => {
            leftIconPressed(index);
          }}
        />,
      );
    }
    return btns;
  };

  return (
    <>
      <Appbar.Header
        style={[
          styles.navigationHeaderStyle,
          headerStyle,
          disableShadow && nonShadowHeader,
        ]}>
        {leftIcons.length > 0 ? (
          getLeftButtons()
        ) : previous != null ? (
          <Appbar.BackAction
            onPress={navigation.goBack}
            color={
              backButtonColor
                ? backButtonColor
                : Config.HEADER_BACK_BUTTON_COLOR
            }
          />
        ) : onBackPress ?
          <Appbar.BackAction
            onPress={onBackPress}
            color={
              backButtonColor
                ? backButtonColor
                : Config.HEADER_BACK_BUTTON_COLOR
            }
          />
          : null}
        <Appbar.Content
          style={[
            styles.navigationTitleContent,
            { alignItems: alignTitleleft ? 'flex-start' : 'center' },
            getMarginLeft()
          ]}
          title={getScreenTitle()}
          titleStyle={[
            styles.navigationTitle,
            titleStyle,
            customFontStyle(titleStyle, styles.navigationTitle)
          ]}
        />
        {getRightButtons()}
      </Appbar.Header>
      <View
        style={[styles.navigationDefaultFirstBorderStyle, firstBorderStyle]}
      />
      <View
        style={[styles.navigationDefaultSecondBorderStyle, secondBorderStyle]}
      />
    </>
  );
};

/* property types for text input */
NavigationBarHeader.propTypes = {
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  headerStyle: ViewPropTypes.style,
  scene: PropTypes.object,
  previous: PropTypes.any,
  navigation: PropTypes.any,
  rightIcons: PropTypes.array,
  rightIconPressed: PropTypes.func,
  leftIcons: PropTypes.array,
  leftIconPressed: PropTypes.func,
  theme: PropTypes.object,
  disableShadow: PropTypes.bool,
  alignTitleleft: PropTypes.bool,
  backButtonColor: PropTypes.string,
  firstBorderStyle: ViewPropTypes.style,
  secondBorderStyle: ViewPropTypes.style,
};

/* default properties for navigation bar header
 */
NavigationBarHeader.defaultProps = {
  rightIcons: [],
  leftIcons: [],
  alignTitleleft: false,
};

export default withTheme(NavigationBarHeader);