import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native'

import {
    Button,
    Slider
} from 'galio-framework';

import { TextInput, List, Divider, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ListItem } from 'react-native-elements'


const Symptom = ({ navigation, title }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [date, setDate] = useState(new Date());
    const [isDisplayDate, setShowDate] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
        setShowDate(false)
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const [time, setTime] = useState(new Date());
    const [isDisplayTime, setShowTime] = useState(false);
    const changeSelectedTime = (event, selectedTime) => {
        setShowTime(false)
        const currentTime = selectedTime || time;
        setTime(currentTime);
    };

    const symptomList = [
        {name: 'Acid reflux'},
        {name: 'Cramps'},
    ]

    const [slider, setSlider] = useState(0);

    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
                <ScrollView>
                    <View style= {{height: 170, width: '100%', padding: 15, marginTop: 10}}>
                        <Text style={{fontSize: 20, color: basics.allStyle.text_color}}>Mood</Text>
                        <Text style={{color: basics.allStyle.text_color, marginTop: 5}}>My mood is...</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: 5}}>
                            <Icon name={'happy-outline'} style={{color: 'grey', padding: 10}} size={45}/>
                            <Icon name={'happy-outline'} style={{color: 'grey', padding: 10}} size={45}/>
                            <Icon name={'happy-outline'} style={{color: 'grey', padding: 10}} size={45}/>
                            <Icon name={'happy-outline'} style={{color: 'grey', padding: 10}} size={45}/>
                            <Icon name={'happy-outline'} style={{color: 'grey', padding: 10}} size={45}/>
                        </View>
                    </View>
                    <Divider bold={true} />
                    {
                        symptomList.map((item, i) => {
                            return(
                                <View style= {{height: 150, width: '100%', padding: 15}}>
                                    <View style={{flexDirection: 'row', width: '100%'}}>
                                        <View style={{flex: 0.9, justifyContent: 'center'}} >
                                            <Text style={{fontSize: 20, color: basics.allStyle.text_color}}>{item.name}</Text>
                                        </View>
                                        <View style={{flex: 0.1, justifyContent: 'center'}}>
                                            <TouchableOpacity onPress={() => Alert.alert("Delete clicked!")}>
                                                <Icon name={'trash'} size={20}/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={{color: basics.allStyle.text_color, marginTop: 5}}>How is your symptom?</Text>
                                    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                                        <Slider
                                            step={1}
                                            maximumValue={10}
                                            value={slider}
                                            onSlidingComplete={(value) => setSlider(value)}
                                            thumbStyle={{borderColor: basics.allStyle.common_font_color, width: 20, height: 20}}
                                            trackStyle={{backgroundColor: 'grey'}}
                                            activeColor={basics.allStyle.common_font_color}
                                        />
                                        <View style={{flexDirection: 'row', width: '100%', flex: 0}}>
                                            <Text style={{alignSelf: 'flex-start', flex: 1}}>not severe</Text>
                                            <Text style={{alignSelf: 'flex-end'}}>very severe</Text>    
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }

                    <List.Item 
                        title="Add symptom" 
                        style={{paddingTop: 20, paddingBottom: 20}} 
                        left={() => <Icon name={'add-circle-outline'} size={25} style={{marginLeft: 20}} />}
                        onPress={() => navigation.navigate('SymptomSelect')}
                    />
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
                </ScrollView>
                <View style={{flex: 0, justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                        onPress={() => Alert.alert("Add now")}
                    >
                        <Card style={{backgroundColor: basics.allStyle.symptom_btn_color, padding: 30, width: "100%", alignItems: 'center', justifyContent: 'center'}}>
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


export default Symptom
