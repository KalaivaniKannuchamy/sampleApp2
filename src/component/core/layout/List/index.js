import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList as ReactList,
  RefreshControl,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from './styles';
import FontRegularText from '@core/inputs/Text/FontRegularText';
/* Component for Flatlist */

class List extends Component {
  constructor() {
    super();
    this.state = {
      showFooter: false,
      loadingDone: true,
      isSwiping: false,
    };
  }
  /* property types for flat list */
  static propTypes = {
    data: PropTypes.array, // data for flat list
    NoDataComponent: PropTypes.element, // No data component when data is empty array
    enableRefresh: PropTypes.bool, // boolean to enable refresh the flat list
    enablePaging: PropTypes.bool, //boolean to enable pagination for flat list
    refreshing: PropTypes.bool, //booelan that represents flat list is refreshing or not
    onRefresh: PropTypes.func, // method to call on when flatlist is refreshing
    onPaging: PropTypes.func, // method to call on when flatlist is scroll down on paging
    renderItem: PropTypes.func, //cell to show in flat list
    rightButtons: PropTypes.array, //Buttons to display at the right of the flat list items
    enableSwipeDelete: PropTypes.bool, // boolean to enable swipe delete
    onDelete: PropTypes.func, // function called when delete is clicked
    didSelectRow: PropTypes.func, // function called when click on flatlist cell
    horizontal: PropTypes.bool, //boolean to set horizontal or vertical flatlsit
    numColumns: PropTypes.number, //number of colums to set in flat list
  };

  /*default properties for flatlist */
  static defaultProps = {
    data: [],
    NoDataComponent: <View />,
    enableRefresh: false,
    onRefresh: () => {},
    enablePaging: false,
    rightButtons: [],
    horizontal: false,
    numColumns: 0,
  };

  componentDidMount() {
    this.setState({
      NoDataComponent: (
        <View>
          <FontRegularText style={{textAlign: 'center'}}>
            no_data_label
          </FontRegularText>
        </View>
      ),
    });
  }

  /* Method to handle scroll for pagination and showing footer */
  handleScroll = (event) => {
    let yOffset = event.nativeEvent.contentOffset.y;
    let contentHeight = event.nativeEvent.contentSize.height;
    let value = yOffset / contentHeight;
    if (value > 0.4) {
      if ((this.props.onPaging, this.props.enablePaging)) {
        if (this.state.loadingDone == null) {
          this.setState({loadingDone: true});
        }
        if (this.state.loadingDone) {
          this.setState({showFooter: true, loadingDone: false});
          this.props.onPaging();
        }
      } else {
        this.setState({showFooter: false});
      }
    }
  };

  /* Method called when pagination ends */
  onPagingEnd = () => {
    this.setState({showFooter: false, loadingDone: null});
  };

  /* Method to scroll to specific index of the flatlist */
  onScrollToItem = (index) => {
    this.inputRef.scrollToIndex({animated: true, index: index});
  };

  /*  Method to scroll to end of the flat list */
  onScrollToEnd = (boolean) => {
    this.inputRef.scrollToEnd({animated: boolean});
  };

  render() {
    const {
      data,
      enableRefresh,
      refreshing,
      onRefresh,
      renderItem,
      rightButtons,
      enableSwipeDelete,
      onDelete,
      didSelectRow,
      horizontal,
      scrollEnabled,
      numColumns,
      ListFooterComponent,
      ...rest
    } = this.props;
    const {currentlyOpenSwipeable} = this.state;
    const onOpen = (event, gestureState, swipeable) => {
      if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
        currentlyOpenSwipeable.recenter();
      }
      this.setState({currentlyOpenSwipeable: swipeable});
    };
    const onClose = () => currentlyOpenSwipeable.recenter();

    return (
      <>
        {data.length > 0 ? (
          <ReactList
            ref={(ref) => {
              this.inputRef = ref;
            }}
            
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={horizontal}
            numColumns={numColumns}
            scrollEnabled={!this.state.isSwiping || scrollEnabled }
            onScrollBeginDrag={() => {
              if (this.state.currentlyOpenSwipeable) {
                this.state.currentlyOpenSwipeable.recenter();
              }
            }}
            onScroll={this.handleScroll}
            ListFooterComponent={
              ListFooterComponent ?
                ListFooterComponent
                :
                this.state.showFooter ? (
                  <View style={styles.flatListVwLoaderTxt}>
                    <ActivityIndicator color={'green'} />
                    <FontRegularText style={styles.flatListLoaderTxt}>Loading...</FontRegularText>
                  </View>
                ) : null
            }
            refreshControl={
              enableRefresh ? (
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              ) : null
            }
            data={data}
            renderItem={(props) => {
              let FinalrightButtons = [];
              if (enableSwipeDelete) {
                const deleteBtn = (
                  <TouchableHighlight
                    style={styles.flatListDeleteBtnVw}
                    onPress={() => {
                      this.state.currentlyOpenSwipeable.recenter();
                      if (onDelete) {
                        onDelete(props.index);
                      }
                    }}>
                    <FontRegularText style={styles.flatListTxtDelete}>Delete</FontRegularText>
                  </TouchableHighlight>
                );
                FinalrightButtons.push(deleteBtn);
              }
              if (rightButtons.length > 0) {
                FinalrightButtons.push(...rightButtons);
              }
               
              let Item = (
                <TouchableWithoutFeedback
                  onPress={() => {
                    if (this.state.currentlyOpenSwipeable) {
                      this.state.currentlyOpenSwipeable.recenter();
                    }
                    if (didSelectRow) {
                      didSelectRow(props);
                    }
                  }}>
                  {renderItem(props)}
                </TouchableWithoutFeedback>
              );
              if (
                FinalrightButtons.length > 0 &&
                !horizontal &&
                numColumns == 0
              ) {
                Item = (
                  <Swipeable
                    onSwipeStart={() => this.setState({isSwiping: true})}
                    onSwipeRelease={() => this.setState({isSwiping: false})}
                    onRightButtonsOpenRelease={onOpen}
                    onRightButtonsCloseRelease={onClose}
                    onRef={(ref) => (this.swipeable = ref)}
                    rightButtons={FinalrightButtons}>
                    {Item}
                  </Swipeable>
                );
              }
              return Item;
            }}
            {...rest}
          />
        ) : (
          this.props.NoDataComponent
        )}
      </>
    );
  }
}

export default List
