import ToolTip from '@core/utiles/ToolTip';
import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import { Platform, View, ViewPropTypes, Text, InputAccessoryView, Keyboard, Button } from 'react-native';
import Config from 'react-native-config';
import { Provider, TextInput as PaperInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import ErrorMessageView from '../View/ErrorMessageView';
import styles from './styles';
import { customFontStyle, fontRegularStyle, keyboardtopViewStyle } from '@utils/constant';
import FontRegularText from '../Text/FontRegularText';

class CustomTextInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      showError: false,
      showErrorMsg: false,
      value: '',
      helpShow: false
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  static defaultProps = {
    //default properties for text EDERNED_GREY
    containerStyle: null,
    InputStyle: null,
    label: '',
    placeholder: '',
    value: '',
    disable: true,
    errorMessage: '',
    secureTextEntry: false,
    selectionColor: Config.LINK_BLUE,
    mode: 'flat',
    type: '',
    isLastFeild: false,
    multiline: false,
    onChangeText: null,
    onEndEditing: null,
    onSubmitEditing: null,
    isRequired: true,
    regExpression: '',
    textRef: null,
    password1Label: '',
    password1Value: '',
    checkForErrorToShow: true,
    isAutoCapitalise: true,
    underlineColor: '',
    leftIcon: '',
    leftIconPress: null,
    leftIconStyle: null,
    rightIcon: '',
    rightIconPress: null,
    rightIconStyle: null,
    showSuccessFaliure: false,
    showSuccess: false,
    errorMsg: null,
    numberOfLines: 1,
    isInputSecondryTheme: false,
    helpMessage: '',
    size: 16,
    toolContainerStyle: null,
    labelViewStyle: null,
    textColor:Config.UNDERLINE_BLUE
  };

  static propTypes = {
    //property types for text EDERNED_GREY
    containerStyle: ViewPropTypes.style,
    InputStyle: ViewPropTypes.style,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    disable: PropTypes.bool,
    errorMessage: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    selectionColor: PropTypes.string,
    mode: PropTypes.string,
    type: PropTypes.string,
    isLastFeild: PropTypes.bool,
    multiline: PropTypes.bool,
    onChangeText: PropTypes.func,
    onEndEditing: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    isRequired: PropTypes.bool,
    regExpression: PropTypes.any,
    textRef: PropTypes.any,
    theme: PropTypes.object,
    password1Label: PropTypes.string,
    password1Value: PropTypes.string,
    checkForErrorToShow: PropTypes.bool,
    isAutoCapitalise: PropTypes.bool,
    underlineColor: PropTypes.string,
    leftIcon: PropTypes.string,
    leftIconPress: PropTypes.func,
    leftIconStyle: ViewPropTypes.style,
    rightIcon: PropTypes.string,
    rightIconPress: PropTypes.func,
    rightIconStyle: ViewPropTypes.style,
    showSuccessFaliure: PropTypes.bool,
    showSuccess: PropTypes.bool,
    errorMsg: ViewPropTypes.style,
    toolContainerStyle: ViewPropTypes.style,
    labelViewStyle: ViewPropTypes.style,
  };

  getkeyboardType() {
    //method to return keyboard type based on type
    if (this.props.type == 'email') {
      return 'email-address';
    } else if (this.props.type == 'mobile') {
      return 'number-pad';
    } else if (this.props.type == 'number') {
      return 'number-pad';
    } else if (this.props.type == 'year') {
      return 'number-pad';
    } else if (this.props.type == 'numberCompare') {
      return 'number-pad';
    }
    else if (this.props.type == 'password') {
      return 'default';
    }
    return 'default';
  }

  checkForError() {
    // method to check error for text EDERNED_GREY if it is required field
    let isInValid = false;
    if (this.props.isRequired) {
      var defaultErrorMsg = `please_enter ${this.props.placeholder || 'value'}.`;
      if (this.props.errorMessage != '') {
        defaultErrorMsg = this.props.errorMessage;
      }

      if (this.props.value) {
        if (this.props.type == 'email') {
          //if type is email then check with email regex and showing error if test case fails
          const finalRegex = this.props.regExpression || global.emailReg;
          if (finalRegex && finalRegex.test(this.props.value) == false) {
            isInValid = true;
            defaultErrorMsg = `please_enter_valid ${this.props.placeholder || 'email'
              }.`;
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }

        } else if (this.props.type == 'mobile') {
          //if type is mobile then check with mobile regex and showing error if test case fails
          const finalRegex = this.props.regExpression || global.phoneRegEx;
          if (finalRegex && finalRegex.test(this.props.value) == false) {
            isInValid = true;
            defaultErrorMsg = `please_enter_valid ${this.props.placeholder || 'mobile number'
              }.`;
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (this.props.type == 'year') {
          //if type is year then check the length is 4 or not
          if (this.props.value.length != 4) {
            isInValid = true;
            defaultErrorMsg = `please_enter_valid ${this.props.placeholder || 'year'
              }.`;
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (this.props.type == 'password') {
          //if type is password then check with password regex and showing error if test case fails
          const finalRegex = this.props.regExpression || global.passwordRegex;
          if (finalRegex && finalRegex.test(this.props.value) == false) {
            isInValid = true;
            // defaultErrorMsg = `${('please} ${('valid} ${this.props.label || 'password'}.`
            defaultErrorMsg = "password_error_msg";
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (this.props.type == 'comparePassword') {
          ////console.log("PASSWORD");
          //if type is comparePassword then check with password and if both are not same then showing error
          const password1 = this.props.password1Value;
          const password2 = this.props.value;
          if (!(password1 === password2)) {
            ////console.log("PASSWORD",password1,password2);
            isInValid = true;
            defaultErrorMsg = `${this.props.password1Label.replace('*', '') || 'Password'
              } and ${this.props.placeholder.replace('*', '') || 'Confirm Password'
              } should be same`;
            defaultErrorMsg = "password_match_error_msg"
            if (this.props.validErrorMessage != '') {
              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (this.props.type == 'numberCompare') {

          //if type is compare  then check with number and if both are not same then showing error
          const password1 = this.props.password1Value;
          const password2 = this.props.value;
          if (!(password1 === password2)) {


            isInValid = true;
            defaultErrorMsg = `${this.props.password1Label.replace('*', '') || 'Number'
              } and ${this.props.placeholder.replace('*', '') || 'Confirm Number'
              } should be same`;
            defaultErrorMsg =
              'number_confirm_number_msg_same'
            if (this.props.validErrorMessage != '') {

              defaultErrorMsg = this.props.validErrorMessage;
            }
          }
        } else if (
          this.props.regExpression &&
          this.props.regExpression.test(this.props.value) == false
        ) {
          isInValid = true;
          defaultErrorMsg = `please_enter_valid ${this.props.placeholder || 'value'
            }.`;
          if (this.props.validErrorMessage != '') {
            defaultErrorMsg = this.props.validErrorMessage;
          }
        }
      } else {
        isInValid = true;
      }
      this.setState({
        showError: isInValid,
        setErrorMsg:
          defaultErrorMsg != null && defaultErrorMsg != ''
            ? defaultErrorMsg.replace('*', '')
            : this.props.errorMessage.replace('*', ''),
      });
    }
    return isInValid;
  }

  getReturnKey() {
    //method returns return type based on type and lastfield
    const { type, isLastFeild, multiline } = this.props;
    if (multiline) {
      return 'default';
    } else if (
      (type == 'mobile' || type == 'number' || type == 'numberCompare') &&
      Platform.OS === 'ios'
    ) {
      return 'done';
    } else if (isLastFeild) {
      return 'done';
    }

    return 'next';
  }

  focus() {
    //method to focus the textinput
    this.inputRef.focus();
  }

  blur() {
    //method to blur the textinput
    this.inputRef.blur();
  }

  reset() {
    //method to remove error message the textinput
    this.setState({ showError: false, setErrorMsg: false });
  }

  customizeStyle() {
    let finalStyle = this.props.InputStyle;
    if (finalStyle && finalStyle.fontSize) {
      finalStyle.fontSize = finalStyle.fontSize;
    }
    return finalStyle;
  }

  helpPress() {
    this.setState({ helpShow: true })
  }

  render() {
    const {
      InputStyle,
      textRef,
      label,
      disable,
      placeholder,
      containerStyle,
      mode,
      multiline,
      onChangeText,
      onEndEditing,
      selectionColor,
      onSubmitEditing,
      value,
      secureTextEntry,
      maxLength,
      checkForErrorToShow,
      isAutoCapitalise,
      underlineColor,
      onFocus,
      leftIcon,
      leftIconStyle,
      leftIconPress,
      rightIcon,
      rightIconPress,
      rightIconStyle,
      errorMsg,
      infoIcon,
      helpPress,
      numberOfLines,
      labelStyle,
      isInputSecondryTheme,
      helpMessage,
      outerContainerStyle,
      size,
      toolContainerStyle,
      labelViewStyle,
      ...res
    } = this.props;

    const finalLabelViewStyle = isInputSecondryTheme ? styles.secondryNameView : styles.nameView;
    const finalLabelStyle = isInputSecondryTheme ? styles.secondryThemetitle : styles.title;
    const finalContainerStyle = isInputSecondryTheme ? styles.secondryThemecontainerStyle : styles.containerStyle
    const finalDefaultInputStyle = isInputSecondryTheme ? styles.secondryThemedefaultInputStyle : styles.defaultInputStyle

    return (
      <View style={outerContainerStyle}>
        <View style={[
          finalContainerStyle,
          {
            borderBottomColor: this.props.errorMessage ? Config.RED : Config.LINK_BLUE,
            borderBottomWidth: 1,
          },
          containerStyle
        ]}>


          <View style={[finalLabelViewStyle, labelViewStyle]}>
            <FontRegularText style={[
              finalLabelStyle,
              labelStyle,
              { color: this.props.errorMessage ? Config.RED : (labelStyle?.color || finalLabelStyle?.color || Config.DARK_BLUE) },
              // customFontStyle(labelStyle, finalLabelStyle)
            ]}
            noScaling={true}
            >{label}</FontRegularText>
            {
              infoIcon ?
                <ToolTip
                  visible={this.state.helpShow}
                  text={helpMessage}
                  onDismiss={() => { this.setState({ helpShow: false }) }}
                  placement={'right'}
                  containerStyle={[styles.toolContainerStyle, toolContainerStyle]}
                  anchor={<Icon
                    name="help-circle"
                    style={{ marginLeft: 5, opacity: 0.3 }}
                    size={20}
                    onPress={() => {
                      this.helpPress()
                    }}
                    color={Config.DARK_BLUE}
                  />}
                />

                :
                null
            }
          </View>
          <PaperInput
            right={
              rightIcon ? (
                <PaperInput.Icon
                  name={() => (
                    <Icon
                      // onPress={() => {
                      //   if (rightIconPress) {
                      //     rightIconPress()
                      //   }
                      // }}
                      // style={[rightIconStyle]}
                      name={rightIcon}
                      size={size ? size : 16}
                      color={Config.UNDERLINE_BLUE}
                    />
                  )}
                  onPress={() => {
                    if (rightIconPress) {
                      rightIconPress()
                    }
                  }}
                />
              ) : null
            }
            left={
              leftIcon ? (
                <PaperInput.Icon
                  name={() => (
                    <Icon
                      // onPress={() => leftIconPress()}
                      style={[, leftIconStyle]}
                      name={leftIcon}
                      size={25}
                      color={'black'}
                    />
                  )}
                  onPress={() => leftIconPress()}
                />
              ) : null
            }
            ref={ref => {
              this.inputRef = ref;
            }}

            // label={label}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Config.JAHRESPAKET_START}
            dense
            editable={disable /* || true */}
            selectionColor={selectionColor}
            mode={'outlined'}
            outlineColor={'transparent'}
            style={[
              finalDefaultInputStyle,
              InputStyle,
             fontRegularStyle
              // customFontStyle(InputStyle, finalDefaultInputStyle) // for font scaling 
            ]}
            numberOfLines={1}
            autoCorrect={false}
            clearButtonMode="never"
            autoCapitalize={isAutoCapitalise ? 'words' : 'none'}
            keyboardType={this.getkeyboardType()}
            returnKeyType={this.getReturnKey()}
            multiline={multiline || false}
            error={this.state.showError}
            secureTextEntry={secureTextEntry}
            onChangeText={text => {
              this.setState({ value: text, showError: false });
              if (onChangeText) {
                onChangeText(text);
              }
            }}
            onEndEditing={() => {
              this.setState({ focused: false });
              if (checkForErrorToShow) {
                if (!this.checkForError()) {
                  if (onEndEditing) {
                    onEndEditing();
                  }
                }
              } else {
                if (onEndEditing) {
                  onEndEditing();
                }
              }
            }}
            onFocus={() => {
              if (onFocus) {
                onFocus();
              }
              this.setState({ focused: true });
            }}
            onSubmitEditing={() => {
              if (checkForErrorToShow) {
                if (!this.checkForError()) {
                  if (onSubmitEditing) {
                    onSubmitEditing();
                  }
                }
              } else {
                if (onSubmitEditing) {
                  onSubmitEditing();
                }
              }
            }}
            theme={{
              colors: {
                // label: PLACEHOLDER,
                text: this.props.textColor ? this.props.textColor : Config.UNDERLINE_BLUE,
                primary: 'transparent',
                error: 'transparent',
                // background: 'rgba(0,0,0,0)',
                placeholder: Config.JAHRESPAKET_START,
              },
            }}
            maxLength={maxLength || 250}
            inputAccessoryViewID={'inputAccessoryViewID'}

            {...res}
          />
          {

            Platform.OS === 'ios' ?
              <InputAccessoryView nativeID={'inputAccessoryViewID'}>
                <View style={keyboardtopViewStyle}>
                  <Button
                    onPress={() =>
                      Keyboard.dismiss()
                    }
                    title="Erledigt"
                  />
                </View>
              </InputAccessoryView>
              :
              null
          }
        </View>
        {
          this.props.errorMessage ? (
            <ErrorMessageView
              text={this.props.errorMessage}
              isGreyText={false}
              isError={true}
              viewStyle={[styles.errorMsg, errorMsg]}
              noScaling={true}
            />
          ) :
            <FontRegularText style={[
              styles.errorMsg,
              errorMsg,
            ]}>{''}</FontRegularText>
        }
      </View>

    );
  }
}

export default CustomTextInput;