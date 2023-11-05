import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
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
import { ListItem } from 'react-native-elements'

const emptyImg = require('../../assets/images/treatment.png')

const TreatmentSearch = ({ navigation }) => {
  const dispatch = useDispatch()
  let treatments = [];
  treatments = useSelector(selectAll)

  const treatmentList = [
    {name: 'Aquasol A (Vitamin A) 50000unt/ml Injection'},
    {name: 'Atropen (Atropine) 0.5mg/0.7ml Auto-Injector'},
  ]


  let isDark = false;
  const theme = isDark ? basics.dark : basics.light;

  return (
    <>
      <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
      <SafeAreaView style={commonStyles.SafeAreaView}>
        <Text style={{color: basics.allStyle.text_color, alignSelf: 'center', margin: 20}}>
          Medication not found? <Text style={{color: basics.allStyle.common_font_color}}>Create with custom name</Text>
        </Text>
        {
          treatmentList.map((item, i) => {
              return(
                <ListItem key={i} containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => navigation.navigate('AddMedication')}>
                  <View style={{flexDirection: 'row', width: '100%'}}>
                      <View style={{flex: 0.1, justifyContent: 'center'}}>
                          <Icon
                              name={'bandage-outline'}
                              color={basics.allStyle.button_color}
                              size={20}
                          />
                      </View>
                      <View style={{flex: 0.9, justifyContent: 'center'}} >
                          <Text style={{fontSize: 15, color: basics.allStyle.text_color}}>{item.name}</Text>
                      </View>
                  </View>
                </ListItem>
              )
          })
        }
      </SafeAreaView>
    </>
  )
}


export default TreatmentSearch
