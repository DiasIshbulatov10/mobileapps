import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Switch,
  ImageBackground,
  Alert
} from 'react-native'

import {
  Button
} from 'galio-framework';

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';

const backImg = require('../../assets/images/symptom.jpg')

const TreatSymptom = ({ navigation }) => {
  let isDark = false;
  const theme = isDark ? basics.dark : basics.light;


  return (
    <>
        <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
        <SafeAreaView style={[commonStyles.SafeAreaView]}>
            <ImageBackground
                source={backImg}
                resizeMode="cover" 
                style={styles.image}
            >
            <View style={commonStyles.titleArea}>
                <View style={{width: '15%', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom:10}}>
                    <Icon 
                      name={'close'} 
                      size={35} 
                      color={'white'} 
                      onPress={() => {
                          navigation.navigate('Treatment')
                      }} 
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '50%'}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    Record, Understand, Take action.
                </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15, paddingHorizontal: 10}}>
                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', alignSelf:'center'}}>
                    Your sysmptoms and well-being will become part of your health report, helping you better understand what works for you.
                </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 10}}>
                <Button
                    color={'white'}
                    textStyle={{fontSize: 14, fontWeight: 'bold', color: basics.allStyle.common_font_color}}
                    style={[commonStyles.commonBtnSize, {width: '50%', marginTop: 35}]}
                    onPress={() => navigation.navigate('Reminder')}
                >
                    NEXT
                 </Button>
            </View>
            </ImageBackground>
            
            
        </SafeAreaView>
      
    </>
  )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      paddingHorizontal: 10
    },
  });

export default TreatSymptom
