import React, {useState} from 'react';
import DropDownMenu from '../DropDownMenu';
import {TouchableOpacity} from 'react-native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import FontRegularText from '../Text/FontRegularText';

const NewDropDownSelection = ({
  text,
  onPress,
  textStyle,
  opacityStyle,
  placeHolder,
  onCancelClick,
  onOkClick,
  dialogData,
  alertText,
  keyId,
  displayText,
  selectedValue,
  show,
  titleText,
  searchplaceholder,
  customPickermodalView,
}) => {
  const placeHoldertext = placeHolder == null ? '' : placeHolder;
  const [pickerHeight, setPickerHeight] = useState(0);

  return (
    <DropDownMenu
      selectedValue={selectedValue}
      visible={show}
      titleText={titleText}
      PickerHeight={pickerHeight}
      searchplaceholder={searchplaceholder}
      displayText={displayText}
      keyId={keyId}
      alertText={alertText}
      dialogData={dialogData}
      onOkClick={selectedData => {
        onOkClick(selectedData);
      }}
      onCancelClick={() => {
        onCancelClick();
      }}
      customPickermodalView={[
        styles.customPickermodalView,
        customPickermodalView,
      ]}
      anchor={
        <TouchableOpacity
          style={[styles.pickerOpacity, opacityStyle]}
          onPress={onPress}
          onLayout={event => {
            const {height} = event.nativeEvent.layout;
            setPickerHeight(height);
          }}>
          <FontRegularText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={
              placeHoldertext === text
                ? [styles.pickerText, textStyle]
                : [styles.pickerSelectedText, textStyle]
            }>
            {text !== '' ? text : placeHoldertext}
          </FontRegularText>
          {!show ? (
            <Icon
              size={20}
              color={Config.DARK_BLUE}
              name="chevron-down"
              style={{alignSelf: 'flex-end'}}
            />
          ) : (
            <Icon
              size={20}
              color={Config.DARK_BLUE}
              name="chevron-up"
              style={{alignSelf: 'flex-end'}}
            />
          )}
        </TouchableOpacity>
      }
    />
  );
};

export default NewDropDownSelection;
