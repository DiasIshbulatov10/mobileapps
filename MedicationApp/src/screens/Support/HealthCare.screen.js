import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'

import {
    Button,
} from 'galio-framework';

import { TextInput } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { Outline } from 'react-native-paper/src/components/TextInput/Addons/Outline';

const iconImg = require('../../assets/images/healthCare.png')

const HealthCare = ({ navigation }) => {

    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    const [hidePass, setHidePass] = useState(true);
    
    return (
        <>
            <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
            <SafeAreaView style={[commonStyles.SafeAreaView, {margin: 30}]}>
                <View style={commonStyles.alignCenter}>
                    <Image source={iconImg}/>
                </View>
                <View style= {commonStyles.LoginPart}>
                    <TextInput
                        mode='flat'
                        label="Name"
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', backgroundColor: basics.allStyle.default_back_color}}
                    />
                    <TextInput
                        mode='flat'
                        label="Medical specialty"
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', backgroundColor: basics.allStyle.default_back_color}}
                    />
                    <TextInput
                        mode='flat'
                        label="Street"
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', backgroundColor: basics.allStyle.default_back_color}}
                    />
                    <View style={{flexDirection: 'row', width: '95%', justifyContent: 'center'}}>
                        <View style={{flex: 0.4}} >
                            <TextInput
                                mode='flat'
                                label="ZIP code"
                                cursorColor={basics.allStyle.input_border_color}
                                activeOutlineColor={basics.allStyle.input_border_color}
                                activeUnderlineColor={basics.allStyle.input_border_color}
                                style={{width: '90%', backgroundColor: basics.allStyle.default_back_color}}
                            />
                        </View>
                        <View style={{flex: 0.6}}>
                            <TextInput
                                mode='flat'
                                label="City"
                                cursorColor={basics.allStyle.input_border_color}
                                activeOutlineColor={basics.allStyle.input_border_color}
                                activeUnderlineColor={basics.allStyle.input_border_color}
                                style={{width: '100%', backgroundColor: basics.allStyle.default_back_color}}
                            />
                        </View>
                    </View>
                    <TextInput
                        mode='flat'
                        label="Phone number"
                        keyboardType='phone-pad'
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', backgroundColor: basics.allStyle.default_back_color}}
                    />
                    <TextInput
                        mode='flat'
                        label="Email"
                        keyboardType='email-address'
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', backgroundColor: basics.allStyle.default_back_color}}
                    />
                    <TextInput
                        mode='flat'
                        label="Website"
                        cursorColor={basics.allStyle.input_border_color}
                        activeOutlineColor={basics.allStyle.input_border_color}
                        activeUnderlineColor={basics.allStyle.input_border_color}
                        style={{width: '95%', backgroundColor: basics.allStyle.default_back_color}}
                    />
                    <Button
                        color={basics.allStyle.common_btn_color}
                        textStyle={{ fontSize: 13, fontWeight: 'bold' }}
                        style={[commonStyles.commonBtnSize, {marginTop: 30}]}
                        onPress={() => navigation.navigate('Home')}
                    >
                        SAVE
                    </Button>
                </View>
            </SafeAreaView>
        </>
    )
}


export default HealthCare
