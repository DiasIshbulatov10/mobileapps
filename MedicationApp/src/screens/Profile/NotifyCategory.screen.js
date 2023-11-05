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

const NotifyCategory = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [crashStatus, setCrashStatus] = useState(false)

    return (
        <PaperProvider>
        <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <List.Section>
                <List.Item 
                    descriptionStyle={{color: basics.allStyle.text_color}}
                    description={
                        "Decide which messages you would like to receive from MyTherapy. These settings don't affect treatment reminders, treatment-related messages and generic norifications."
                    }
                    descriptionNumberOfLines={5}
                    titleStyle={{display: 'none'}}
                />
                <Divider />
                <List.Item 
                    title={
                        <View style={{flexDirection: 'row', alignContent: 'space-around', width: '100%'}}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: basics.allStyle.text_color}}>New Features and updates</Text>
                            </View>
                            <View>
                                <Switch
                                    trackColor={{ true: basics.allStyle.switch_track_color}}
                                    thumbColor={crashStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                    onValueChange={() => setCrashStatus(!crashStatus)}
                                    value={crashStatus}
                                    style={{marginLeft: 130}}
                                />
                            </View>
                        </View>
                    } 
                    titleStyle={{marginBottom: 10}}
                    description="Learn more about smartpatient, MyTherapy app functionalities and how you can get the most out of the app."
                    descriptionNumberOfLines={3}
                />
                <Divider/>
                <List.Item 
                    title={
                        <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: basics.allStyle.text_color}}>Health tips</Text>
                            </View>
                            <View style={{}}>
                                <Switch
                                    trackColor={{ true: basics.allStyle.switch_track_color}}
                                    thumbColor={crashStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                    onValueChange={() => setCrashStatus(!crashStatus)}
                                    value={crashStatus}
                                    style={{marginLeft: 240}}
                                />
                            </View>
                        </View>
                    } 
                    titleStyle={{marginTop: 10, marginBottom: 10}}
                    description="Receive tips on taking care of your health, living with a chronic condition and preparing for upcoming for upcoming doctor's appointments."
                    descriptionNumberOfLines={3}
                />
                <Divider bold={true}/>
                <List.Item 
                    title={
                        <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: basics.allStyle.text_color}}>All about Redpoints</Text>
                            </View>
                            <View style={{}}>
                                <Switch
                                    trackColor={{ true: basics.allStyle.switch_track_color}}
                                    thumbColor={crashStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                    onValueChange={() => setCrashStatus(!crashStatus)}
                                    value={crashStatus}
                                    style={{marginLeft: 180}}
                                />
                            </View>
                        </View>
                    } 
                    titleStyle={{marginTop: 10, marginBottom: 10}}
                    description="Learn more about the Redpoints bonus program and how you can Redpoints to save money when refilling your medications."
                    descriptionNumberOfLines={3}
                />
                <Divider />
                <List.Item 
                    title={
                        <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: basics.allStyle.text_color}}>Deals and discouts</Text>
                            </View>
                            <View style={{}}>
                                <Switch
                                    trackColor={{ true: basics.allStyle.switch_track_color}}
                                    thumbColor={crashStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                    onValueChange={() => setCrashStatus(!crashStatus)}
                                    value={crashStatus}
                                    style={{marginLeft: 180}}
                                />
                            </View>
                        </View>
                    } 
                    titleStyle={{marginTop: 10, marginBottom: 10}}
                    description="Receive early access to promotions from our partners who want to support you in managing your medications even better."
                    descriptionNumberOfLines={3}
                />
                <List.Item 
                    descriptionStyle={{fontSize: 12}}
                    description="Please note that it takes around 24 hours for your selection to take effect."
                    descriptionNumberOfLines={2}
                />
            </List.Section>
        </SafeAreaView>
        </PaperProvider>
    )
}


export default NotifyCategory
