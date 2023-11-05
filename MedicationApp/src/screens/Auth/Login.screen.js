import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  NativeModules 
} from 'react-native'

import {
    Button,
} from 'galio-framework';

import { TextInput } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { Outline } from 'react-native-paper/src/components/TextInput/Addons/Outline';



import { LoginAPI } from '../../api/fakeApiAlarms'

const Login = ({ navigation }) => {

    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [hidePass, setHidePass] = useState(true);

    
    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={commonStyles.SafeAreaView}>
                <View style={commonStyles.alignCenter}>
                    <Text style={{marginTop: 20, color: basics.allStyle.text_color}}>
                        Log in with an existing account
                    </Text>
                </View>
                <View style= {commonStyles.LoginPart}>
                    <TextInput
                        mode='flat'
                        label="Email"
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', marginBottom: 20, backgroundColor: basics.allStyle.default_back_color}}
                    />
                    <TextInput
                        mode='flat'
                        label="Password"
                        secureTextEntry={hidePass ? true : false}
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', marginBottom: 22, backgroundColor: basics.allStyle.default_back_color}}
                        right={
                            <TextInput.Icon
                                icon="eye"
                                onPress={() => setHidePass(!hidePass)}
                                iconColor={basics.allStyle.text_color}
                                size={20}
                                style={{marginTop: 30}}
                            />
                        }
                    />
                    <Button
                        color={basics.allStyle.common_btn_color}
                        textStyle={{ fontSize: 13, fontWeight: 'bold' }}
                        style={commonStyles.commonBtnSize}
                        onPress={() => navigation.navigate('Home')}
                    >
                        LOG  IN
                    </Button>
                    <TouchableOpacity
                        color={'white'}
                        onPress={() => navigation.navigate('ResetPass')}
                    >
                        <Text style={{marginTop: 25}}>
                            I forgot my password
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}


export default Login
