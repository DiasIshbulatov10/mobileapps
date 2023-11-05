import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Switch,
  Alert
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
// import { Card } from 'galio-framework';
import { List, Divider, Dialog, Button, Portal, PaperProvider, Modal } from 'react-native-paper';

const Privacy = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [encryptStatus, setEncryptStatus] = useState(false)

    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
                <List.Section>
                    <List.Item 
                        title='Passcode'
                        titleStyle={{paddingBottom: 10}}
                        onPress={() => navigation.navigate('Passcode')}
                    />
                    <Divider />
                    <List.Item 
                        title={
                            <View style={{flexDirection: 'row', alignContent: 'space-around', width: '100%'}}>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={{fontSize: 16, color: basics.allStyle.text_color}}>Data encryption</Text>
                                </View>
                                <View>
                                    <Switch
                                        trackColor={{ true: basics.allStyle.switch_track_color}}
                                        thumbColor={encryptStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                        onValueChange={() => setEncryptStatus(!encryptStatus)}
                                        value={encryptStatus}
                                        style={{marginLeft: 200}}
                                    />
                                </View>
                            </View>
                        } 
                        titleStyle={{marginBottom: 10}}
                        description="When data encryption is turned on, your sensitive data will have an addtional layer of protection on your device."
                        descriptionNumberOfLines={3}
                    />
                </List.Section>
            </SafeAreaView>
        </>
    )
}


export default Privacy
