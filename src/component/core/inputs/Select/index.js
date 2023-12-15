import List from '@core/layout/List';
import {languageString} from '@utils/constant';
import React, {useState} from 'react';
import {Modal, Platform, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import View from '../View/View';
import styles from './styles';
import FontRegularText from '../Text/FontRegularText';
// import { SafeAreaView } from 'react-native-safe-area-context';

// TODO: Extend Select properties
// Type = Default = Single Select, MultiSelect, DropDown,
// Icon = True | False,
// Icon Position = START | END,
// Default things to include
// List | Items, Disable, IconComponent, Size, sx<InlineStyle>

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
const Select = ({
  onCancelClick,
  dialogData,
  displayText,
  keyId,
  onOkClick,
  alertText,
  titleText,
  searchplaceholder,
  selectedValue,
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
  const [selectedDataItem, setSelectedDataItem] = useState(selectedValue);
  const [selectedItem, setSelectedItem] = useState({});
  const [originallistData, setOrdinalListData] = useState(dialogData);
  const [searchText, setSearchText] = useState('');

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

  //Method to handle search in the dialog
  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = originallistData.filter(item => {
      return item[`${displayText}`].toLowerCase().match(formattedQuery);
    });
    setListData(filteredData);
    setSearchText(text);
  };

  //Method to clear search in the dialog
  const clearSearch = () => {
    setSearchText('');
    setListData(originallistData);
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      presentationStyle="fullScreen"
      visible={true}>
      <SafeAreaView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        enabled>
        <View style={styles.customPickermodalView}>
          <View style={styles.customPickerokCancelViewStyle}>
            <FontRegularText style={styles.customPickertitleStyle}>
              {titleText}
            </FontRegularText>
            <FontRegularText
              style={styles.customPickerokcancelTextStyle}
              onPress={() => {
                onCancelClick();
              }}>
              {languageString('ok')}
            </FontRegularText>
          </View>

          {/* <SearchBar
            placeholder={searchplaceholder}
            onChangeText={(text) => handleSearch(text)}
           inputContainerStyle={styles.customPickerinputContainerStyle}
            autoCorrect={false}
            value={searchText}
            onClear={clearSearch}
            returnKeyType="done"
            inputStyle={styles.customPickerinputFildStyle}
          /> */}
          <List
            keyboardShouldPersistTaps={'always'}
            style={styles.customPickerlistStyle}
            data={listData}
            didSelectRow={props => {
              onItemClicked(`${props.index}`);
            }}
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
                <View>
                  <View style={styles.customPickerradioAndTextViewStyle}>
                    <FontRegularText style={styles.customPickertextStyle}>
                      {item[`${displayText}`]}
                    </FontRegularText>
                    {item.toggle ? (
                      <Icon size={20} color={'black'} name="radiobox-marked" />
                    ) : (
                      <Icon size={20} color={'black'} name="radiobox-blank" />
                    )}
                  </View>
                  <View style={styles.customPickerlineStyle} />
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Select;
