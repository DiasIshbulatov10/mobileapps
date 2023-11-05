import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
    Button,
} from 'galio-framework';

import { TextInput } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { Outline } from 'react-native-paper/src/components/TextInput/Addons/Outline';

const Login = ({ navigation }) => {

    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [hidePass, setHidePass] = useState(true);
    
    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
                <View style={commonStyles.alignCenter}>
                    <Text style={{marginTop: 25, color: basics.allStyle.text_color}}>
                        To reset your password please enter your email:
                    </Text>
                </View>
                <View style= {commonStyles.LoginPart}>
                    <TextInput
                        mode='flat'
                        label="Email"
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', marginBottom: 40, backgroundColor: basics.allStyle.default_back_color}}
                    />
                    <Button
                        color={basics.allStyle.common_btn_color}
                        textStyle={{ fontSize: 13, fontWeight: 'bold' }}
                        style={commonStyles.commonBtnSize}
                        onPress={() => navigation.navigate('Home')}
                    >
                        RESET
                    </Button>
                </View>
            </SafeAreaView>
        </>
    )
}


export default Login
