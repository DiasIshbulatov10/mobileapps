import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Switch,
  Alert
} from 'react-native'

import {
  Button,
  Slider
} from 'galio-framework';

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { Card, RadioButton, List } from 'react-native-paper';
import { ListItem } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';

const countImg = require('../../assets/images/addMedicationCount.png')
const timeImg = require('../../assets/images/addMedicationTime.png')
const inventoryImg = require('../../assets/images/addMedicationInventory.png')

const AddTreatment = ({ navigation }) => {
  const dispatch = useDispatch()
  let treatments = [];
  treatments = useSelector(selectAll)


  let isDark = false;
  const theme = isDark ? basics.dark : basics.light;

  const [checked, setChecked] = useState(1);
  const [slider, setSlider] = useState(1);

  const [time, setTime] = useState(new Date());
  const [isDisplayTime, setShowTime] = useState(false);
  const changeSelectedTime = (event, selectedTime) => {
      setShowTime(false)
      console.log(selectedTime)
      const currentTime = selectedTime || time;
      setTime(currentTime);
  };

  const [remindStatus, setRemindStatus] = useState(true)

  return (
    <>
        <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <View style={[commonStyles.titleArea, {backgroundColor: basics.allStyle.default_back_color}]}>
                <View style={{width: '15%', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom:10}}>
                    <Icon 
                      name={'arrow-back-circle'} 
                      size={35} 
                      color={'grey'} 
                      onPress={() => {
                        slider == 1 ? 
                          navigation.navigate('TreatmentSearch')
                        :
                          setSlider(slider - 1)
                      }} 
                    />
                </View>
            </View>
            {
              slider == 1 ? 
              (
                <>
                  <View style={[commonStyles.alignCenter, {padding: 10, marginBottom: 25}]}>
                      <Image
                          source={countImg}
                      />
                      <Text style={{marginTop: 20, alignSelf: 'flex-start', color: basics.allStyle.text_color}}>
                          Aquasol A (Vitamin A) 50000unt/ml Injection
                      </Text>
                      <Text style={{marginTop: 10, alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: basics.allStyle.text_color}}>
                          How often do you take this medication?
                      </Text>
                  </View>
                  <ListItem key={1} containerStyle={{backgroundColor: 'white', width: '95%', alignSelf: 'center', borderRadius: 10, marginBottom: 10}} onPress={() => setChecked(1)}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Once daily</Text>
                        </View>
                        <View style={{flex: 0.1}}>
                            <RadioButton
                                color={basics.allStyle.button_color}
                                value={1}
                                status={ checked === 1 ? 'checked' : 'unchecked' }
                                onPress={() => setChecked(1)}
                            />
                        </View>
                    </View>
                  </ListItem>
                  <ListItem key={2} containerStyle={{backgroundColor: 'white', width: '95%', alignSelf: 'center', borderRadius: 10, marginBottom: 10}} onPress={() => setChecked(2)}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Twice daily</Text>
                        </View>
                        <View style={{flex: 0.1}}>
                            <RadioButton
                                color={basics.allStyle.button_color}
                                value={2}
                                status={ checked === 2 ? 'checked' : 'unchecked' }
                                onPress={() => setChecked(2)}
                            />
                        </View>
                    </View>
                  </ListItem>
                  <ListItem key={3} containerStyle={{backgroundColor: 'white', width: '95%', alignSelf: 'center', borderRadius: 10, marginBottom: 10}} onPress={() => setChecked(3)}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>On demand (no reminder needed)</Text>
                        </View>
                        <View style={{flex: 0.1}}>
                            <RadioButton
                                color={basics.allStyle.button_color}
                                value={3}
                                status={ checked === 3 ? 'checked' : 'unchecked' }
                                onPress={() => setChecked(3)}
                            />
                        </View>
                    </View>
                  </ListItem>
                  <ListItem key={4} containerStyle={{backgroundColor: 'white', width: '95%', alignSelf: 'center', borderRadius: 10, marginBottom: 10}} onPress={() => setChecked(4)}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>I need more options...</Text>
                        </View>
                        <View style={{flex: 0.1}}>
                            <RadioButton
                                color={basics.allStyle.button_color}
                                value={4}
                                status={ checked === 4 ? 'checked' : 'unchecked' }
                                onPress={() => setChecked(4)}
                            />
                        </View>
                    </View>
                  </ListItem>
                </>
              )
              : slider == 2 ? 
              (
                <>
                  <View style={[commonStyles.alignCenter, {padding: 10, marginBottom: 25}]}>
                      <Image
                          source={timeImg}
                      />
                      <Text style={{marginTop: 20, alignSelf: 'flex-start', color: basics.allStyle.text_color}}>
                          Aquasol A (Vitamin A) 50000unt/ml Injection
                      </Text>
                      <Text style={{marginTop: 10, alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: basics.allStyle.text_color}}>
                          When would you like to be reminded?
                      </Text>
                  </View>
                  <ListItem key={1} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {setShowTime(true)}}>
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
                  <ListItem key={2} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => Alert.alert("here")}>
                    <ListItem.Content>
                        <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', justifyContent: 'center', height: 30}}>
                            <View style={{flex: 0.5}} >
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Dose</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 16, fontWeight: 'bold', color: basics.allStyle.common_font_color}}>
                                    1 milliliter(s)
                                </Text>
                            </View>
                        </View>
                    </ListItem.Content>
                  </ListItem>

                </>
              ) : 
              (
                <>
                  <View style={[commonStyles.alignCenter, {padding: 20}]}>
                      <Image
                          source={inventoryImg}
                      />
                      <Text style={{marginTop: 20, alignSelf: 'flex-start', color: basics.allStyle.text_color}}>
                          Aquasol A (Vitamin A) 50000unt/ml Injection
                      </Text>
                      <Text style={{marginTop: 10, alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: basics.allStyle.text_color}}>
                          Do you want to get reminders to refill your medication inventory?
                      </Text>
                  </View>
                  <ListItem key={3} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => Alert.alert("aaaa")}>
                    <ListItem.Content>
                      <View style={{flexDirection: 'row', width: '95%', alignSelf: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 0.5}} >
                            <Text style={{fontSize: 16}}>Remind me</Text>
                        </View>
                        <View style={{flex: 0.5}}>
                          <Switch
                              trackColor={{ true: basics.allStyle.switch_track_color}}
                              thumbColor={remindStatus ? basics.allStyle.switch_thumb_color : 'white'}
                              onValueChange={() => setRemindStatus(!remindStatus)}
                              value={remindStatus}
                              style={{alignSelf: 'flex-end',}}
                          />
                        </View>
                      </View>
                      </ListItem.Content>
                    </ListItem>
                    <List.Subheader style={{color: basics.allStyle.common_btn_color}}>Current inventory</List.Subheader>
                    <ListItem key={4} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => Alert.alert("aaaa")}>
                      <ListItem.Content>
                        <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', justifyContent: 'center', height: 30}}>
                            <View style={{flex: 0.5}} >
                                <Text style={{fontSize: 16}}>Amount</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 14, color: basics.allStyle.common_font_color}}>
                                    30 milliliter(s)
                                </Text>
                            </View>
                        </View>
                      </ListItem.Content>
                    </ListItem>
                    <List.Subheader style={{color: basics.allStyle.common_btn_color}}>Set a reminder</List.Subheader>
                    <ListItem key={5} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => Alert.alert("aaaa")}>
                      <ListItem.Content>
                        <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', justifyContent: 'center', height: 30}}>
                            <View style={{flex: 0.5}} >
                                <Text style={{fontSize: 16}}>Threshold</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <Text style={{alignSelf: 'flex-end', fontSize: 14, color: basics.allStyle.common_font_color}}>
                                    10 milliliter(s)
                                </Text>
                            </View>
                        </View>
                      </ListItem.Content>
                    </ListItem>
                  
                </>
              )
            }
            


            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Button
                  color={basics.allStyle.common_btn_color}
                  textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                  style={commonStyles.commonBtnSize}
                  onPress={() => {
                    slider == 3 ? 
                      Alert.alert("Save!!!")
                    :
                      setSlider(slider + 1)
                  }}
              >
                  {slider == 3 ? 'SAVE' : 'Next'}
              </Button>
              {/* <View style={{alignSelf: 'center', width: '95%'}}>
                <Slider
                    step={1}
                    maximumValue={3}
                    disabled={true}
                    value={slider}
                    thumbStyle={{width: 1, height: 1, borderColor: basics.allStyle.common_font_color}}
                    trackStyle={{backgroundColor: 'grey'}}
                    activeColor={basics.allStyle.common_font_color}
                />
              </View> */}
            </View>
           
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

export default AddTreatment
