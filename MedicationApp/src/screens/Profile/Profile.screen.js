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

// import {
//   Button,
// } from 'galio-framework';

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
// import { Card } from 'galio-framework';
import { Card, Avatar, List, Divider, Button, Portal, PaperProvider, Modal, RadioButton } from 'react-native-paper';
// import { Avatar } from 'react-native-elements';

const emptyImg = require('../../assets/images/message.png')

const Profile = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const themeList = [
      {name: 'Light'},
      {name: 'Dark'},
      {name: 'System default'}
    ]

    const [visible, setVisible] = useState(false);
    
    const hideModal = () => setVisible(false);
    
    const [checked, setChecked] = useState(0);

    return (
        <PaperProvider>
          <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
          <SafeAreaView style={commonStyles.SafeAreaView}>
            <ScrollView style={styles.scrollView}>
              <Card style={{backgroundColor: 'white', marginTop: 10}}>
                <Card.Title 
                  title="Guest User" 
                  subtitle="Complete your profile and benefit from an improved app experience." 
                  subtitleNumberOfLines={3}
                  leftStyle={{width: '20%'}}
                  left={(props) => <Avatar.Icon {...props} size={70} icon="folder" />}
                  style={{paddingTop: 20}}
                />
                <Card.Actions style={{ alignSelf: 'center', flex: 0 }}>
                  <Button size={'small'} textColor={basics.allStyle.button_color} style={{borderColor: 'white'}}>Complete profile</Button>
                </Card.Actions>
              </Card>
              <List.Section>
                <List.Subheader style={{color: basics.allStyle.common_btn_color}}>General</List.Subheader>
                <List.Item title="Registration and login" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('RegAndLog')}/>
                <List.Item title="Notifications" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('Notifications')}/>
                <List.Item title="Privacy" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('Privacy')}/>
                <List.Item title="Medication database" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('MedDatabase')}/>
                <List.Item title="Theme" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => setVisible(true)}/>
                <List.Item title="Support us" style={{paddingTop: 10, paddingBottom: 10}} left={() => <Icon name={'book'} size={20} color={basics.allStyle.common_btn_color} style={{marginLeft: 20}} />}/>
                <List.Item title="Tell a friend" style={{paddingTop: 10, paddingBottom: 10}} left={() => <Icon name={'heart'} size={20} color={basics.allStyle.common_btn_color} style={{marginLeft: 20}} />}/>
              </List.Section>
              <Divider bold={true}/>
              <List.Section>
                <List.Subheader style={{color: basics.allStyle.common_btn_color}}>About</List.Subheader>
                <List.Item title="Get in touch" style={{paddingTop: 10, paddingBottom: 10}}/>
                <List.Item title="Legal information" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('LegalInfo')}/>
                <List.Item title="Open-source licenses" style={{paddingTop: 10, paddingBottom: 10}}/>
                <List.Item title="MyTherapy" description="I3.140.1 v" style={{paddingTop: 10, paddingBottom: 10}}/>
              </List.Section>
            </ScrollView>
              
          </SafeAreaView>

          <Portal>
            <Modal visible={visible} dismissable={false} contentContainerStyle={{backgroundColor: 'white', padding: 20, margin: 20}}>
                <Text style={{fontSize: basics.allStyle.modal_title_size, color: basics.allStyle.text_color}}>Theme</Text>
                {
                  themeList.map((item, i) => {
                    return (
                      <View style={{flexDirection: 'row', width: '100%', height: 40, marginTop: 10}}>
                          <View style={{flex: 0.1, justifyContent: 'center'}}>
                              <RadioButton
                                  color={basics.allStyle.button_color}
                                  value={i}
                                  status={ checked === i ? 'checked' : 'unchecked' }
                                  onPress={() => setChecked(i)}
                              />
                          </View>
                          <View style={{flex: 0.9, justifyContent: 'center', marginLeft: 20}} >
                              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
                          </View>
                      </View>
                    )
                  })
                }
                <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 20}}>
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
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
  },
  card: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#aaaaaa'
  },
});


export default Profile
