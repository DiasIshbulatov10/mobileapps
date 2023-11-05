import React, { useState } from 'react'
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

// import {
//   Button,
// } from 'galio-framework';

import { Portal, Button, PaperProvider, Modal } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/native';
import { Header } from '@react-navigation/stack';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const lockImg = require('../../assets/images/today.png')


const Passcode = ({ navigation }) => {
  let isDark = false;
  const theme = isDark ? basics.dark : basics.light;

  const [visible, setVisible] = useState(false);

  const hideModal = () => setVisible(false);

  return (
    <PaperProvider>
      <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
      <SafeAreaView style={commonStyles.SafeAreaView}>
        <View style={[commonStyles.centerWapper, {marginTop: -80}]}>
            <Icon  name='lock-closed' size={80} />
            <Text style={{margin: 20, marginBottom: 0, fontSize: 15, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                MyTherapy will ask for a passcode anytime
            </Text>
            <Text style={{margin: 20, marginTop: 0, fontSize: 15, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                someone tries to access it.
            </Text>
            <Button
                textColor={'white'}
                textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                style={[commonStyles.commonBtnSize, {width: '50%'}]}
                buttonColor={basics.allStyle.common_btn_color}
                onPress={() => setVisible(true)}
            >
                TURN ON
            </Button>
        </View>

        <Portal>
            <Modal visible={visible} dismissable={false} contentContainerStyle={{backgroundColor: 'white', padding: 20, margin: 20}}>
                <Text style={{fontSize: basics.allStyle.modal_title_size, color: basics.allStyle.text_color}}>Risk of data loss if the passcode is forgotten</Text>
                <Text style={{color: basics.allStyle.text_color, marginTop: 10, fontSize: 16}}>
                    You have not registered with your email address. Registering is strongly recommended when using this feature. If you forget your passcode and have not registered with your email address, all data will be lost.
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
                        ENABEL ANYWAY
                    </Button>
                </View>
            </Modal>
        </Portal>
      </SafeAreaView>
    </PaperProvider>
  )
}

export default Passcode
