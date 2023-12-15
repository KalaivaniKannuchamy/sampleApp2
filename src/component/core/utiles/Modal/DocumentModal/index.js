import React, { useState, useEffect } from 'react';
import View from '@core/inputs/View/View';
import { Portal, Modal } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, ScrollView } from 'react-native'
import Config from 'react-native-config';

const DocumentModal = ({
    visible,
    onCancelPress,
    renderItem,
}) => {


    return (
        <Portal>
            <Modal
                theme={{
                    colors: {
                        backdrop: 'rgba(0, 0, 0, 0.3)',
                    },
                }}
                contentContainerStyle={styles.dialogStyle}
                visible={visible}
                onDismiss={onCancelPress}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeadingViewStyle}>
                        <Icon
                            onPress={onCancelPress}
                            size={35}
                            style={styles.iconStyle}
                            name="close-circle"
                            color={Config.WHITE}
                        />
                    </View>
                    {renderItem()}
                </View>
            </Modal>
        </Portal>
    )
}
export default DocumentModal;