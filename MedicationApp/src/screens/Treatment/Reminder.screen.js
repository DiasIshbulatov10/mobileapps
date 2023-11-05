import React, { useRef, useState } from 'react'
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

import { TextInput, List, Divider, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-material-dropdown';
import SelectDropdown from 'react-native-select-dropdown'

const Reminder = ({ navigation, title }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [time, setTime] = useState(new Date());
    const [isDisplayTime, setShowTime] = useState(false);
    const changeSelectedTime = (event, selectedTime) => {
        setShowTime(false)
        console.log(selectedTime)
        const currentTime = selectedTime || time;
        setTime(currentTime);
    };
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]

    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
                <View style={{flexDirection: 'row', width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 30}}>
                    <View style={{flex: 1}} >
                    <SelectDropdown
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            color={'white'}
                            onPress={() => setShowTime(true)}
                        >
                            <Text style={{alignSelf: 'flex-end', fontSize: 20, fontWeight: 'bold', color: basics.allStyle.common_font_color}}>
                                {time.toLocaleTimeString()}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    color={basics.allStyle.common_btn_color}
                    textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                    style={[commonStyles.commonBtnSize, {marginTop: 35, marginBottom: 55}]}
                    onPress={() => Alert.alert("Set Symptom")}
                >
                    SET
                </Button>

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


export default Reminder
