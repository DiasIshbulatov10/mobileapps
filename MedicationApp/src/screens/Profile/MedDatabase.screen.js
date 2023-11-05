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
// import { Card } from 'galio-framework';
import { Card, Avatar, List, Divider, RadioButton } from 'react-native-paper';
// import { Avatar } from 'react-native-elements';

const emptyImg = require('../../assets/images/message.png')

const MedDatabase = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const medicationDatabase = [
        {name: 'Argentina'},
        {name: 'Austria'},
        {name: 'Bolivia'},
        {name: 'Brazil'},
        {name: 'Canada'},
        {name: 'Chile'},
        {name: 'Colombia'},
        {name: 'Costa Rica'},
        {name: 'Cuba'},
        {name: 'Dominican Republic'},
        {name: 'Ecuador'},
        {name: 'El Salvador'},
        {name: 'France'},
        {name: 'Germany'},
        {name: 'Cuatemala'},
        {name: 'Honduras'},
        {name: 'Ireland'},
        {name: 'Italy'},
        {name: 'Mexico'},
        {name: 'United State'}
    ]

    const [checked, setChecked] = useState(0);
    return (
        <>
        <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
        <SafeAreaView style={commonStyles.SafeAreaView}>
          <ScrollView>
            {
                medicationDatabase.map((item, i) => {
                    return(
                        <View style={{flexDirection: 'row', width: '100%', height: 40, marginTop: 10}}>
                            <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
                            </View>
                            <View style={{flex: 0.1}}>
                                <RadioButton
                                    color={basics.allStyle.button_color}
                                    value={i}
                                    status={ checked === i ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked(i)}
                                />
                            </View>
                        </View>
                    )
                })
            }
            <Divider bold={true}/>
            <List.Section>
                <List.Subheader style={{color: basics.allStyle.common_btn_color}}>No database</List.Subheader>
                <View style={{flexDirection: 'row', width: '100%', height: 40}}>
                    <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Manual entry by default</Text>
                    </View>
                    <View style={{flex: 0.1}}>
                        <RadioButton
                            color={basics.allStyle.button_color}
                            value={medicationDatabase.length + 1}
                            status={ checked === medicationDatabase.length + 1 ? 'checked' : 'unchecked' }
                            onPress={() => setChecked(medicationDatabase.length + 1)}
                        />
                    </View>
                </View>
            </List.Section>
          </ScrollView>
            
        </SafeAreaView>
        </>
    )
}


export default MedDatabase
