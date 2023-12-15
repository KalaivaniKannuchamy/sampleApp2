import React, { Children, useState } from 'react'
import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import PrimaryButton from '../PrimaryButton';
import Clipboard from '@react-native-community/clipboard';
import { AppString } from '../../lib/AppString';
import Config from 'react-native-config';
import FontRegularText from '../Text/FontRegularText';

const SwaggerView = ({ functionName, children, onExecutePress, result, post }) => {

    const [showResponseView, setShowResponseView] = useState(false)
    const [execute, setExecute] = useState(false)
    const [copy, setCopy] = useState(false)


    const onCopyPress=async()=>{
        setCopy(true),
        //console.log(",,,", await Clipboard.getString());
      Clipboard.setString(JSON.stringify(result))
}




    return (
        <View style={styles.container}>
            <Pressable
                style={styles.innerView}
                onPress={() => { setShowResponseView(!showResponseView), setExecute(false), setCopy(false) }}
            >
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <FontRegularText style={post ? styles.postMethodStyle:styles.methodTextStyle}>{post ? 'POST' : 'GET'}</FontRegularText>
                    <FontRegularText style={styles.textStyle}>{functionName}</FontRegularText>
                </View>
                
                <Icon
                    size={22}
                    color={'black'}
                    name={showResponseView ? "chevron-up-sharp" : "chevron-down-sharp"}
                />
            </Pressable>
            {
                showResponseView ?

                    <>
                        <View style={styles.childView}>
                            {children}
                        </View>
                        <PrimaryButton onPress={() => [setExecute(true), onExecutePress()]} >{AppString.activation.execute}</PrimaryButton>

                        {execute ?
                            <>
                                <FontRegularText style={{ marginHorizontal: 10 }}>{AppString.activation.response}</FontRegularText>
                                <ScrollView nestedScrollEnabled style={styles.scrollViewstyle}>
                                    <View >
                                        <Icon
                                            style={{ position: 'absolute', right: 10 }}
                                            size={22}
                                            color={copy ? "green":'white'}
                                            name={copy ? "ios-checkmark-done-sharp":"ios-documents"}
                                            onPress={()=> onCopyPress()}
                                        />
                                        <FontRegularText style={styles.responsestyle}>{JSON.stringify(result)}</FontRegularText>
                                    </View>
                                </ScrollView>
                            </>

                            :
                            null

                        }
                    </>

                    :
                    null
            }



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EAF7F4',
        borderColor: '#49CC90',
        borderWidth: 2,
        margin: 10
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    methodTextStyle:{
        fontSize: 15,
        fontWeight: '700',
        color:'#49CC90',
        marginRight:20
    },
    postMethodStyle:{
        fontSize: 15,
        fontWeight: '700',
        color:'#61AFFE',
        marginRight:20
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollViewstyle: {
        backgroundColor:Config.BLACK,
        margin: 10,
        padding: 10
    },
    responsestyle: {
        height: 150,
        color: 'white',
        marginTop: 20
    },
    childView: {
        borderTopColor: '#49CC90',
        borderTopWidth: 1,
        padding: 10,
    }
})

export default SwaggerView