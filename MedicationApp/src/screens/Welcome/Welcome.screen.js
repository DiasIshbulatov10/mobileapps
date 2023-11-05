import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native'

import {
    Button,
    Text,
} from 'galio-framework';

import { useDispatch, useSelector } from 'react-redux'
import { basics, commonStyles } from '../../assets/styles';
import Icon from 'react-native-vector-icons/Ionicons'
import { BottomNavigation } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Welcome = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;


    const createGuestUser = () => {
        fetch('https://cuidarapp.com/mytherapy/auth/add-guest.php', {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            // body: JSON.stringify({text: "blablabla", id_product: "12"})
        })
        .then(response => response.json())
        .then(async (responseJson) => {
            console.log('response:', responseJson)
            try {
                await AsyncStorage.setItem('MyTherapyId', String(responseJson.id));
                console.log('Data stored successfully.');
            } catch (error) {
                console.log('Error storing data:', error);
            }
        })
        .catch(error => console.error(error));

        console.log("here")
        // navigation.navigate('Home')
    }
    
    return (
        <>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <SafeAreaView style={commonStyles.wightAreaView}>
            <View style={{marginTop: 35, marginLeft: '80%', marginRight: 'auto'}}>
                <TouchableOpacity
                    color={'white'}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{color: basics.allStyle.button_color, fontWeight: 'bold', fontSize: 15}}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <View style={commonStyles.centerWapper}>
                <Text style={commonStyles.startText}>
                    Medication reminders.
                    And so much more.
                </Text>
            </View>
            <View style= {commonStyles.StartBtnPart}>
                <Button
                    color={'#22C53A'}
                    textStyle={{ fontSize: 15, fontWeight: 'bold' }}
                    style={commonStyles.largeBtnSize}
                    onPress={() => createGuestUser()}
                >
                    GET STARTED
                </Button>
                <Text style={{ color: '#525252', marginTop: 7, fontSize: 12 }}>By Trapping the button, you accept the MyTherapy Terms of Use.</Text>
                <Text style={{ color: '#525252', fontSize: 12, marginBottom: 25 }}>Please also read the MyTherapy Privacy Policy.</Text>
            </View>
        </SafeAreaView>
        </>
    )
}

export default Welcome
