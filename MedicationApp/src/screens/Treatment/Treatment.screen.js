import React, { useRef, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Alert
} from 'react-native'

import {
  Button,
} from 'galio-framework';

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { List, Divider, Dialog, Portal, PaperProvider, Modal } from 'react-native-paper';
import { FAB, ListItem } from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";

const emptyImg = require('../../assets/images/treatment.png')
const bellImg = require('../../assets/images/bell.png')

const Treatment = ({ navigation }) => {
  const dispatch = useDispatch()
  let treatments = [];
  treatments = useSelector(selectAll)

  let isDark = false;
  const theme = isDark ? basics.dark : basics.light;

  const TreatementList = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Aquasol A (Vitamin A) 50000unt/ml Injection',
      time: '8:00 AM'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Aquasol A (Vitamin A) 50000unt/ml Injection',
      time: '8:00 AM'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Atropen (Atropine) 0.5mg/0.7ml Auto-Injector',
      time: '8:00 AM'
    }
  ];

  const [visible, setVisible] = useState(false);
  
  const hideModal = () => setVisible(false);

  const [notifySet, setNotifySet] = useState(true);

  const addSheet = useRef();


  return (
    <PaperProvider>
      <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
      <SafeAreaView style={commonStyles.SafeAreaView}>
        {
          TreatementList.length == 0 ? 
            <View style={commonStyles.centerWapper}>
              <Image
                source={emptyImg}
              />
              <Text style={{marginTop: 20, fontSize: 20, color: basics.allStyle.text_color, fontWeight: 'bold'}}>
                Get started
              </Text>
              <Text style={{marginTop: 10, fontSize: 16, marginLeft:50, marginRight:50, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                Receive reminders about medications, 
              </Text>
              <Text style={{fontSize: 16, marginLeft:50, marginRight:50, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                measurements, activities and more.
              </Text>
              <Button
                color={basics.allStyle.common_btn_color}
                textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                style={[commonStyles.commonBtnSize, {marginTop: 35, marginBottom: 55}]}
                onPress={() => navigation.navigate('TreatmentSearch')}
              >
                ADD FIRST REMINDER
              </Button>
            </View>
          :
            <>
              <ScrollView>
                {
                  notifySet ? 
                  (

                    <View style={{width: '100%', backgroundColor: 'white', padding: 10, paddingLeft: 20, paddingRight: 20}}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 0.1, justifyContent: 'center'}} >
                          <Image
                            source={bellImg}
                            style={{width: 35, resizeMode: 'contain', marginTop: -10}}
                          />
                        </View>
                        <View style={{flex: 0.9, marginLeft: 20, marginTop: 10}}>
                            <Text style={{color: basics.allStyle.text_color}}>Your current device settings prevent MyTherapy from sending nirifications.</Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <TouchableOpacity
                          color={'white'}
                          onPress={() => setVisible(true)}
                          style={{justifyContent: 'center', marginRight: 30}}
                        >
                          <Text style={{color: basics.allStyle.common_font_color, fontSize: 15, fontWeight: 'bold'}}>DISMISS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          color={'white'}
                          onPress={() => navigation.navigate('Messages')}
                          style={{justifyContent: 'center', }}
                        >
                          <Text style={{color: basics.allStyle.common_font_color, fontSize: 15, fontWeight: 'bold'}}>LEARN MORE</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                  :
                  ""
                }
                {
                  TreatementList.map((item, id) => {
                    return(
                      <View key={id}>
                        <View style={{width: '90%', backgroundColor: 'white', alignSelf: 'center', padding: 20, borderRadius: 10, marginTop: 20}}>
                          <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <View style={{flex: 0.1, justifyContent: 'center'}} >
                              <Icon
                                name={'bandage-outline'}
                                size={20}
                              />
                            </View>
                            <View style={{flex: 0.9, marginLeft: 10}}>
                                <Text style={{color: basics.allStyle.text_color, fontWeight: 'bold', fontSize: 16}}>
                                  {item.name}
                                </Text>
                            </View>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text>Daily-</Text><Text>{item.time}</Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 0.9, justifyContent: 'center'}} >
                              <Text style={{color: basics.allStyle.text_color}}>
                                30 milliliter(s) left
                              </Text>
                            </View>
                            <View style={{flex: 0.2}}>
                              <Icon
                                name={'notifications-circle'}
                                color={basics.allStyle.symptom_btn_color}
                                size={40}
                                style={{alignSelf: 'flex-end'}}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </ScrollView>
              <FAB 
                title="Add" 
                icon={<Icon name={'add'} color='white' size={25}></Icon>} 
                style={{position: 'absolute', bottom: 20, alignSelf: 'flex-end', right: 20}} 
                color={basics.allStyle.common_btn_color}
                onPress={() => addSheet.current.open()}
              />
            </>
        }

        <RBSheet
          animationType='fade'
          ref={addSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
            container: {
              backgroundColor: basics.allStyle.default_back_color,
              height: 300,
              paddingLeft: 30,
              paddingRight: 30
            }
          }}
          openDuration={350}
          closeDuration={350}
        >
          <ListItem key={1} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('TreatmentSearch'); addSheet.current.close()}}>
            <Icon name={'bandage-outline'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Medication</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={2} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('Measurement'); addSheet.current.close()}}>
            <Icon name={'pulse'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Measurement</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={4} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('Activity'); addSheet.current.close()}}>
            <Icon name={'golf-outline'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Activity</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={5} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('TreatSymptom'); addSheet.current.close()}}>
            <Icon name={'happy-outline'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Symptom check</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </RBSheet>

        <Portal>
          <Modal visible={visible} dismissable={false} contentContainerStyle={{backgroundColor: 'white', padding: 20, margin: 20}}>
              <Text style={{fontSize: basics.allStyle.modal_title_size, color: basics.allStyle.text_color}}>Ignore notification settings tutorials?</Text>
              <Text style={{color: basics.allStyle.text_color, marginTop: 10, fontSize: 16}}>
                  Are you sure? Your reminders many not arrive on time.
              </Text>
              <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 30, marginBottom: 10}}>
                  <TouchableOpacity
                    color={'white'}
                    onPress={() => hideModal()}
                    style={{justifyContent: 'center', marginRight: 30}}
                  >
                    <Text style={{color: basics.allStyle.common_font_color, fontSize: 15, fontWeight: 'bold'}}>CANCEL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    color={'white'}
                    onPress={() => {setNotifySet(false); hideModal()}}
                    style={{justifyContent: 'center'}}
                  >
                    <Text style={{color: basics.allStyle.common_font_color, fontSize: 15, fontWeight: 'bold'}}>IGNORE FOR NOW</Text>
                  </TouchableOpacity>
              </View>
          </Modal>
        </Portal>
      </SafeAreaView>
      
    </PaperProvider>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default Treatment
