import List from '@core/layout/List';
import {languageString} from '@utils/constant';
import React, {useState, useEffect} from 'react';
import {View, Platform} from 'react-native';
import Alert from '@core/utiles/Alert';
import Config from 'react-native-config';
import styles from './styles';
import {Menu} from 'react-native-paper';
import FontRegularText from '../Text/FontRegularText';

// TODO: Extend Select properties

/* Component for picker dialog
selectedValue : object that has been selected from the picker dialog
titleText : Title to display on the picker dialog
searchplaceholder : Place holder to display on the search bar in picker dialog
displayText : key value to display on the picker dialog from the data
keyId : unique id of the data
alertText : alert text to diasply on the picker dialog
dialogData : data to display in the picker dialog
onCancelClick : method calls when click on Cancel on picker dialog
onOkClick :  method calls when click on OK on picker dialog
 */
const DropDownMenu = ({
  onCancelClick,
  anchor,
  dialogData,
  displayText,
  keyId,
  onOkClick,
  PickerHeight,
  selectedValue,
  visible,
  customPickermodalView,
}) => {
  /*     Updating toggle value to true if selected value is not equals to null in dialog every time when dialog opens
   */
  // const Data = dialogData.forEach((elem) => {
  //   elem.toggle = false;
  //   if (selectedValue != null) {
  //     var id = selectedValue[keyId].toString();
  //     if (elem[keyId].toString() === id) {
  //       elem.toggle = true;
  //     }
  //   }
  // });
  const [listData, setListData] = useState(dialogData);
  const [selectedItem, setSelectedItem] = useState({});
  const [pickerHeight, setPickerHeight] = useState(20);
  //

  const [showLoader, setShowMenu] = useState(visible);

  useEffect(() => {
    setShowMenu(visible);
  }, [visible]);

  /* Method calls to update toggle value and selected item when an item in the dialog is selected */
  const onItemClicked = index => {
    dialogData.forEach(elem => {
      elem.toggle = false;
      var id = listData[index][`${keyId}`].toString();
      if (elem[`${keyId}`].toString() === id) {
        elem.toggle = true;
        setSelectedItem(elem);
      }
    });
    setListData(dialogData);
    checkSelected();
  };

  //Method to update seleted value and dismiss the dialog
  const checkSelected = () => {
    var isSelected = false;
    var selectedValue = {};
    for (const [index, value] of dialogData.entries()) {
      if (value.toggle) {
        isSelected = true;
        selectedValue = value;
      }
      if (index == dialogData.length - 1) {
        if (isSelected) {
          onOkClick(selectedValue);
        } else {
          Alert.simpLeAlert('', 'alertText');
        }
      }
    }
  };

  //Updated the the list value
  useEffect(() => {
    setListData(dialogData);
  }, [dialogData]);

  return (
    <View style={[styles.customPickermodalView, customPickermodalView]}>
      <Menu
        anchor={anchor}
        visible={showLoader}
        onDismiss={onCancelClick}
        contentStyle={[
          styles.menuView,
          {
            top: Platform.OS == 'ios' ? PickerHeight : PickerHeight * 2,
          },
        ]}>
        <List
          initialNumToRender={20}
          keyboardShouldPersistTaps={'always'}
          style={[
            styles.customPickerlistStyle,
            {maxHeight: pickerHeight * 6, height: pickerHeight * 6},
          ]}
          data={listData}
          didSelectRow={props => {
            onItemClicked(`${props.index}`);
          }}
          nestedScrollEnabled={true}
          NoDataComponent={
            <View style={styles.customPickernoDataViewStyle}>
              <FontRegularText style={styles.customPickernoDataTextStyle}>
                {' '}
                {languageString('noDataLabel')}
              </FontRegularText>
            </View>
          }
          renderItem={({item, index}) => {
            return (
              <View
                onLayout={event => {
                  const {height} = event.nativeEvent.layout;
                  if (pickerHeight == 0 || pickerHeight == 20) {
                    setPickerHeight(height);
                  }
                }}
                style={[
                  styles.customPickerradioAndTextViewStyle,
                  {
                    backgroundColor: item.toggle
                      ? Config.LINK_BLUE
                      : Config.GRADIENT_GLASS_WHITE,
                  },
                ]}>
                <FontRegularText
                  style={[
                    styles.customPickertextStyle,
                    {color: item.toggle ? Config.WHITE : Config.DARK_BLUE},
                  ]}>
                  {item[`${displayText}`]}
                </FontRegularText>
              </View>
            );
          }}
        />
      </Menu>
    </View>
  );
};

export default DropDownMenu;
