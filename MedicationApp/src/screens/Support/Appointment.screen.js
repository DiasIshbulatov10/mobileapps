import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native'

import {
    Button,
} from 'galio-framework';

import { TextInput, List } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ListItem } from 'react-native-elements'


const NewAppointment = ({ navigation }) => {
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

    const [resetBtn, setResetBtn] = useState(false)

    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
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
                <View style= {commonStyles.LoginPart}>
                    <TextInput
                        mode='flat'
                        label="Health care professional"
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', marginBottom: 10, backgroundColor: basics.allStyle.default_back_color}}
                    />
                </View>
                <List.Subheader style={{color: basics.allStyle.common_btn_color, fontWeight: 'bold'}}>Reminders</List.Subheader>
                <ListItem key={3} containerStyle={{backgroundColor: basics.allStyle.default_back_color}}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                            <Text style={{color: basics.allStyle.text_color}}>
                                Two default reminders have been automatically set for your appointment, one for 6PM the day before, and the other 2hours before the appointment. You can customize these reminers anytime.
                            </Text>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem key={4} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => Alert.alert('sdf')}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', height: 30, marginTop: 20}}>
                            <View style={{flex: 0.5}} >
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>First reminder</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 16, fontWeight: 'bold', color: basics.allStyle.common_font_color}}>
                                    {date.toLocaleDateString()}
                                </Text>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem key={5} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => Alert.alert('sdf')}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', height: 30}}>
                            <View style={{flex: 0.5}} >
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Second reminder</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 16, fontWeight: 'bold', color: basics.allStyle.common_font_color}}>
                                    {time.toLocaleTimeString()}
                                </Text>
                            </View>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem key={6} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => Alert.alert('sdf')}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                            <TouchableOpacity
                                onPress={() => Alert.alert("askdjfh")}
                            >
                                <Text style={resetBtn ? {color: basics.allStyle.common_font_color, fontWeight: 'bold'} : {color: basics.allStyle.disable_font_color, fontWeight: 'bold'}}>
                                    RESET REMINDERS
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem key={7} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => Alert.alert('sdf')}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                            <Button
                                color={basics.allStyle.common_btn_color}
                                textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                                style={[commonStyles.commonBtnSize]}
                                onPress={() => Alert.alert('asdf')}
                            >
                                SAVE
                            </Button>
                        </View>
                    </ListItem.Content>
                </ListItem>

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

export default NewAppointment
