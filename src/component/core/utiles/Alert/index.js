import React, { Component } from 'react';
import {
  Alert as NativeAlert,
} from 'react-native';
import Config from 'react-native-config';
export default class Alert extends Component {
  /* default values for alert*/
  state = {
    modalVisible: false,
    title: '',
    message: '',
    cancelTitle: '',
    okTitle: '',
    inputProps: '',
    onOkClick: null,
    inputValue: '',
  };

  /*Method to show simple alert with title and message with ok button*/
  static simpLeAlert(title, message) {
    setTimeout(() => {
      NativeAlert.alert(title, message, [{ text: 'Ok' }], {
        cancelable: false,
      });
    }, 200);
  }

  /*Method to show  alert with title and message with ok cancel buttons and performing any action on ok click*/
  static alertWithAction(
    title,
    message,
    cancelTitle,
    okTitle,
    onOkClick,
    onCancelClick,
  ) {
    let btnArr = [];
    if (cancelTitle.length > 0) {
      btnArr = [
        { text: okTitle, onPress: () => onOkClick() },
        {
          text: cancelTitle,
          onPress: () => onCancelClick(),
          // style: 'cancel',
        },
      ];
    } else {
      btnArr = [{ text: okTitle, onPress: () => onOkClick() }];
    }
    setTimeout(() => {
      NativeAlert.alert(title, message, btnArr, 'secure-text', {
        cancelable: false,
      });
    }, 200);
  }

  /*Method to show  alert with title and message with ok cancel buttons and text input and performing any action on ok click*/
  alertWithTextInput(
    title,
    message,
    cancelTitle,
    okTitle,
    inputProps,
    onOkClick,
  ) {
    this.setState({
      modalVisible: true,
      title: title,
      message: message,
      cancelTitle: cancelTitle,
      okTitle: okTitle,
      inputProps: inputProps,
      onOkClick: onOkClick,
    });
  }

  render() {
    return (
      <></>
    );
  }
}