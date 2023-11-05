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
import { ListItem } from 'react-native-elements'

const AvatarImg = require('../../assets/images/ic_launcher_mytherapy.png')

const NotifySetting = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [crashStatus, setCrashStatus] = useState(false)

    const list = [
        {
            title: 'Amy Farha',
            icon: 'bell',
            subtitle: 'Vice President'
        },
        {
            title: 'Chris Jackson',
            icon: 'bell',
            subtitle: 'Vice Chairman'
        }
    ]

    return (
        <PaperProvider>
            <StatusBar barStyle={'dark-content'} backgroundColor={basics.allStyle.default_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
                <ScrollView>
                    <List.Section>
                        <List.Item 
                            title="MyTherapy"
                            titleStyle={{fontSize: 35, marginTop: 30, marginBottom: 15}}
                        />
                        <List.Item 
                            title={
                                <View>
                                    <Image source={AvatarImg} style={{width: 60, height: 60, alignSelf: 'center', marginBottom: 10}}/>
                                    <Text style={{fontSize: 20, color: basics.allStyle.text_color}}>MyTherapy</Text>
                                </View>
                            } 
                            titleStyle={{marginBottom: 20, alignSelf:'center'}}
                        />
                        <Divider/>
                        <List.Item 
                            title={
                                <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                                    <View style={{justifyContent: 'center'}}>
                                        <Text style={{fontSize: 20, color: basics.allStyle.text_color}}>All MyTherapy notifications</Text>
                                    </View>
                                    <View style={{}}>
                                        <Switch
                                            trackColor={{ true: basics.allStyle.switch_track_color}}
                                            thumbColor={crashStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                            onValueChange={() => setCrashStatus(!crashStatus)}
                                            value={crashStatus}
                                            style={{marginLeft: 80}}
                                        />
                                    </View>
                                </View>
                            } 
                            titleStyle={{marginTop: 10, marginBottom: 10}}
                        />
                        <Divider />
                        <List.Subheader style={{color: basics.allStyle.common_btn_color, fontWeight: 'bold'}}>Other</List.Subheader>
                        
                        {
                            list.map((item, i) => (
                                <ListItem key={i} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} >
                                    <Icon name={'notifications'} size={20} style={{margin: 10}} color={basics.allStyle.common_btn_color} />
                                    <ListItem.Content>
                                        <ListItem.Title>{item.title}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            ))
                        }   
                        <Divider />
                        <List.Item 
                            title={
                                <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                                    <View style={{justifyContent: 'center'}}>
                                        <Text style={{fontSize: 18, color: basics.allStyle.text_color}}>Allow notification dot</Text>
                                    </View>
                                    <View style={{}}>
                                        <Switch
                                            trackColor={{ true: basics.allStyle.switch_track_color}}
                                            thumbColor={crashStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                            onValueChange={() => setCrashStatus(!crashStatus)}
                                            value={crashStatus}
                                            style={{marginLeft: 150}}
                                        />
                                    </View>
                                </View>
                            } 
                            titleStyle={{marginTop: 10, marginBottom: 10}}
                        />
                        <Divider bold={true}/>
                        <List.Item 
                            title="Additional settings in the app" 
                            titleStyle={{fontSize: 20}}
                            style={{paddingTop: 10, paddingBottom: 10}} 
                            left={() => <Icon name={'settings-outline'} size={30} color={basics.allStyle.text_color} style={{marginLeft: 20}} />}
                        />
                        
                    </List.Section>
                </ScrollView>
            </SafeAreaView>
        </PaperProvider>
    )
}


export default NotifySetting
