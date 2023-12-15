

import React from 'react';
import styles from './styles';
import CustomTextInput from '@core/inputs/TextInput';


const CustomTextArea = (props) => {
    const {
        placeholderText,
        onChangeText,
        value,
        InputStyle,
    } = props;

    return (
        <CustomTextInput
            isInputSecondryTheme={true}
            containerStyle={styles.containerStyle}
            mode='flat'
            value={value}
            onChangeText={onChangeText}
            InputStyle={[styles.InputStyle, InputStyle]}
            multiline={true}
            returnKeyType='next'
            placeholder={placeholderText}
        />
    );
};


export default CustomTextArea;



