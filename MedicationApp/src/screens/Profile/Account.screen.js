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
  Switch,
  Alert
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
// import { Card } from 'galio-framework';
import { List, Divider, Dialog, Button, Portal, PaperProvider, Modal } from 'react-native-paper';

const Account = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const ID = 9911338

    const [crashStatus, setCrashStatus] = useState(false)
    const [visible, setVisible] = useState(false);

    const hideModal = () => setVisible(false);

    return (
        <PaperProvider>
        <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <List.Section>
                <List.Item 
                    description={'You are currently using MyTherapy as an unregistered use (ID:' + ID + '). Register so that your data is backed up and can be restored if your change your phone.'}
                    descriptionNumberOfLines={5}
                    titleStyle={{display: 'none'}}
                />
                <Divider bold={true}/>
                <List.Item 
                    title={
                        <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: basics.allStyle.text_color}}>Share crash report data</Text>
                            </View>
                            <View>
                                <Switch
                                    trackColor={{ true: basics.allStyle.switch_track_color}}
                                    thumbColor={crashStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                    onValueChange={() => setCrashStatus(!crashStatus)}
                                    value={crashStatus}
                                    style={{marginLeft: 155}}
                                />
                            </View>
                        </View>
                    } 
                    titleStyle={{marginTop: 10, marginBottom: 10}}
                    description="Help us improve MyTherapy by sharing anonymouns crash report data."
                    descriptionNumberOfLines={3}
                />
                <Divider/>
                <List.Item 
                    title={
                        <View style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 16, color: basics.allStyle.text_color}}>Share usage data</Text>
                            </View>
                            <View style={{}}>
                                <Switch
                                    trackColor={{ true: basics.allStyle.switch_track_color}}
                                    thumbColor={crashStatus ? basics.allStyle.switch_thumb_color : 'white'}
                                    onValueChange={() => setCrashStatus(!crashStatus)}
                                    value={crashStatus}
                                    style={{marginLeft: 200}}
                                />
                            </View>
                        </View>
                    } 
                    titleStyle={{marginTop: 10, marginBottom: 10}}
                    description="Help us improve MyTherapy by allowing us to analyze anonymous usage data (e.g. with Google Analytics)."
                    descriptionNumberOfLines={3}
                />
                <Divider bold={true}/>
                <List.Item title="Register" 
                    style={{paddingTop: 20, paddingBottom: 20}} 
                    onPress={() => navigation.navigate('Register')}
                />
                <Divider bold={true}/>
                <List.Item 
                    title='Download your data'
                    description="You can request an archieve of information associated with your account."
                    descriptionNumberOfLines={2}
                />
                <Divider />
                <List.Item 
                    title='Delete account'
                    titleStyle={{color: 'red'}}
                    description="You can delete your account here. Your personal data in this account will then be deleted permanently and irrevocably."
                    descriptionNumberOfLines={3}
                    onPress={() => setVisible(true)}
                />
            </List.Section>

            <Portal>
                <Modal visible={visible} dismissable={false} contentContainerStyle={{backgroundColor: 'white', padding: 20, margin: 20}}>
                    <Text style={{fontSize: basics.allStyle.modal_title_size, color: basics.allStyle.text_color}}>Are you sure?</Text>
                    <Text style={{color: basics.allStyle.text_color, marginTop: 10, fontSize: 16}}>
                        Attention! Deleting you account cannot be reversed. To continue using MyTherapy, you would need to create a new account.
                    </Text>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Button 
                            textColor={basics.allStyle.button_color}
                            onPress={() => hideModal()}
                        >
                            CANCEL
                        </Button>
                        <Button 
                            textColor={basics.allStyle.button_color}
                            onPress={() => hideModal()}
                        >
                            OK
                        </Button>
                    </View>
                </Modal>
            </Portal>
        </SafeAreaView>
        </PaperProvider>
    )
}


export default Account
