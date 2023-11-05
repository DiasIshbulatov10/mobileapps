import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native'

import {
    Button,
} from 'galio-framework';

import { TextInput, List, Divider, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ListItem } from 'react-native-elements'

const iconImg = require('../../assets/images/healthCare.png')

const ActivityDetail = ({ navigation, title }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [date, setDate] = useState(new Date());
    const [isDisplayDate, setShowDate] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
        setShowDate(false)
        console.log(selectedDate)
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const [time, setTime] = useState(new Date());
    const [isDisplayTime, setShowTime] = useState(false);
    const changeSelectedTime = (event, selectedTime) => {
        setShowTime(false)
        console.log(selectedTime)
        const currentTime = selectedTime || time;
        setTime(currentTime);
    };

    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
                <View style={[commonStyles.titleArea, {backgroundColor: theme.header_back_color}]}>
                    <View style={{width: '15%', alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name={'arrow-back-outline'} size={25} color={'white'} onPress={() => navigation.navigate('Activity')} />
                    </View>
                    <View style={{width: '85%', height: basics.allStyle.tabbar_height, justifyContent: 'center'}}>
                        <Text style={{color: 'white'}}>{title}</Text>
                    </View>
                </View>
                <ListItem key={1} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {Alert.alert("Click here!")}}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', height: 30, marginTop: 20}}>
                            <View style={{flex: 0.5}} >
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Value</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 16, fontWeight: 'bold', color: basics.allStyle.common_font_color}}>
                                    5 min
                                </Text>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <Divider bold={true} />
                <ListItem key={1} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {setShowDate(true)}}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', height: 30, marginTop: 20}}>
                            <View style={{flex: 0.5}} >
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Date</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 16, fontWeight: 'bold', color: basics.allStyle.common_font_color}}>
                                    {date.toLocaleDateString()}
                                </Text>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem key={2} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {setShowTime(true)}}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', height: 30}}>
                            <View style={{flex: 0.5}} >
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Time</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 16, fontWeight: 'bold', color: basics.allStyle.common_font_color}}>
                                    {time.toLocaleTimeString()}
                                </Text>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                        onPress={() => Alert.alert("Add now")}
                    >
                        <Card style={{backgroundColor: basics.allStyle.measure_btn_color, padding: 30, width: "100%", alignItems: 'center', justifyContent: 'center'}}>
                            <View style={commonStyles.alignCenter}>
                                <Icon name={'checkmark-circle'} style={{color: 'white'}} size={40}/>
                            </View>

                            <Text style={{color: 'white', marginTop: 5, fontSize: 17, alignSelf: 'center'}}>Add now</Text>
                        </Card>
                    </TouchableOpacity>
                </View>

                {isDisplayDate ? (
                    <DateTimePicker
                        minimumDate={new Date().setHours(-48)}
                        testID="datePicker"
                        value={date}
                        mode='date'
                        display='calendar'
                        onChange={changeSelectedDate}
                    />
                ) : ""}
                {isDisplayTime ? (
                    <DateTimePicker
                        testID="timePicker"
                        value={time}
                        mode='time'
                        is24Hour={true}
                        display="default"
                        onChange={changeSelectedTime}
                    />
                ) : ""}
            </SafeAreaView>
        </>
    )
}


export default ActivityDetail
