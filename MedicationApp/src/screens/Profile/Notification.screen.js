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

const notify1Img = require('../../assets/images/notification1.png')
const notify2Img = require('../../assets/images/notification2.png')


const Notifications = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const ID = 9911338

    const [shareStatus, setShareStatus] = useState(false)

    return (
        <PaperProvider>
        <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <ScrollView>
                <List.Section>
                    <List.Subheader style={{color: basics.allStyle.common_btn_color, fontWeight: 'bold'}}>Treatment reminders</List.Subheader>
                    <List.Item 
                        description={
                            <>
                            <View style={{flexDirection: 'row', alignContent: 'flex-start', width: '100%'}}>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={{color: basics.allStyle.text_color}}>Please select your preferred alert style</Text>
                                    <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', marginTop: 20}}>
                                        <View style={{flexDirection: 'column', alignItems: 'center', width: 180, borderColor: basics.allStyle.button_color, borderWidth: 2, borderRadius: 5, padding: 5}}>
                                            <Image
                                                source={notify1Img}
                                                style={{marginTop: 20}}
                                            />
                                            <Text style={{marginTop: 15, fontSize: 13, color: basics.allStyle.text_color, fontWeight: 'bold'}}>
                                                LARGE ALERT
                                            </Text>
                                        </View>
                                        <View style={{flexDirection: 'column', alignItems: 'center', width: 180, marginLeft: 10, borderColor: basics.allStyle.button_color, borderWidth: 2, borderRadius: 5, padding: 5}}>
                                            <Image
                                                source={notify2Img}
                                                style={{marginTop: 20}}
                                            />
                                            <Text style={{marginTop: 15, fontSize: 13, color: basics.allStyle.text_color, fontWeight: 'bold'}}>
                                                STANDARD
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            </>
                        }
                        descriptionNumberOfLines={5}
                        titleStyle={{display: 'none'}}
                    />
                    <List.Item 
                        title='Notification sound'
                        titleStyle={{marginBottom: 10}}
                    />
                    <Divider/>
                    <List.Item 
                        title={
                            <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={{fontSize: 20, color: basics.allStyle.text_color, fontWeight: 'bold'}}>Privacy</Text>
                                </View>
                            </View>
                        } 
                        titleStyle={{marginTop: 20, marginBottom: 10}}
                        description="For privacy reasons no treatment related information will be displayed in notifications."
                        descriptionNumberOfLines={3}
                    />
                    <List.Item 
                        title={
                            <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={{fontSize: 16, color: basics.allStyle.text_color}}>Share usage data</Text>
                                </View>
                                <View style={{}}>
                                    <Switch
                                        trackColor={{ true: basics.allStyle.switch_track_color}}
                                        thumbColor={shareStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                        onValueChange={() => setShareStatus(!shareStatus)}
                                        value={shareStatus}
                                        style={{marginLeft: 200}}
                                    />
                                </View>
                            </View>
                        } 
                        titleStyle={{marginTop: 10, marginBottom: 10}}
                        onPress={() => setShareStatus(!shareStatus)}
                    />
                    <Divider bold={true}/>
                    <List.Subheader style={{color: basics.allStyle.common_btn_color, marginTop: 20, fontWeight: 'bold'}}>News and other messages</List.Subheader>
                    <List.Item title="Manage categories" 
                        style={{paddingTop: 10, paddingBottom: 30}} 
                        onPress={() => navigation.navigate('NotifyCategory')}
                    />
                    <Divider bold={true}/>
                    <List.Item 
                        style={{paddingBottom: 10}} 
                        description='For more nitification options go to the notifications settings for MyTherapy in the Android settings.'
                        descriptionNumberOfLines={3}
                    />
                    <List.Item 
                        titleStyle={{justifyContent: 'center', alignSelf: 'center'}}
                        title={
                            <Button textColor={basics.allStyle.button_color} onPress={() => navigation.navigate('NotifySetting')}>GO TO SETTINGS</Button>
                        }
                    />
                </List.Section>

            </ScrollView>
        </SafeAreaView>
        </PaperProvider>
    )
}


export default Notifications
