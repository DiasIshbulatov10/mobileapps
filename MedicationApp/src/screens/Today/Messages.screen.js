import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { basics, commonStyles } from '../../assets/styles';

const emptyImg = require('../../assets/images/message.png')

const Messages = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    return (
        <>
        <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <View style={commonStyles.alignCenter}>
                <Image source={emptyImg} style={{ marginTop: 25, resizeMode: "contain", height: 210}} />
                <Text
                    style={{
                    marginTop: 20,
                    fontSize: 20,
                    color: basics.allStyle.text_color,
                    fontWeight: 'bold'
                    }}>
                    No Messages for today
                </Text>
                <Text style={{marginTop: 10, fontSize: 16, marginLeft:20, marginRight:20, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                    Updates on MyTherapy features, health tips and
                </Text>
                <Text style={{fontSize: 16, marginLeft:20, marginRight:20, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                    more will be shown here.
                </Text>
            </View>
        </SafeAreaView>
        </>
    )
}

export default Messages
