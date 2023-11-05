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

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
// import { Card } from 'galio-framework';
import { Card, Avatar, Divider, Button, Portal, PaperProvider, Modal, RadioButton } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
// import { Avatar } from 'react-native-elements';

const iconImg = require('../../assets/images/ic_launcher_mytherapy.png')

const LegalInformation = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const themeList = [
      {name: 'Light'},
      {name: 'Dark'},
      {name: 'System default'}
    ]
    
    const [checked, setChecked] = useState(false);

    return (
        <PaperProvider>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
                <Card style={{backgroundColor: 'white', margin: 15, padding: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: 40}}>
                        <View style={{flex: 0.1}}>
                            <Image source={iconImg} style={{width: 30, resizeMode: 'contain'}}/>
                        </View>
                        <View style={{flex: 0.9}} >
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>MyTherapy</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <Text style={{color: basics.allStyle.text_color, fontSize: 12.5}}>
                            MyTherapy is a free, secure and privacy-focused medication reminder and health app.
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Messages')}
                            style={{marginRight: 20}}
                        >
                            <Text style={{color: basics.allStyle.common_font_color}}>Terms of Use</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Messages')}
                            style={{marginRight: 20}}
                        >
                            <Text style={{color: basics.allStyle.common_font_color}}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Messages')}
                        >
                            <Text style={{color: basics.allStyle.common_font_color}}>Legal Notice</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                        <Card style={{backgroundColor: basics.allStyle.default_back_color, width: '100%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', paddingRight: 10, height: 80}}>
                                <View style={{flex: 0.2}}>
                                    <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                                </View>
                                <View style={{flex: 0.8}} >
                                    <Text style={{fontSize: 14}}>
                                        I allow smartpatient GmbH to process my health data for the purpose of conducting a survey.
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                </Card>

                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Card style={{backgroundColor: 'white', padding: 15, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>I may withdraw my given consents at any time in the</Text>
                        <Text style={{alignSelf: 'center'}}>MyTherapy app settings.</Text>
                    </Card>
                </View>
            </SafeAreaView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#aaaaaa'
  },
});


export default LegalInformation
