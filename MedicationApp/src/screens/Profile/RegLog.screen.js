import React from 'react'
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
import { List, Divider } from 'react-native-paper';

const RegAndLog = ({ navigation }) => {
    let isDark = false;
    const theme = isDark ? basics.dark : basics.light;

    return (
        <>
        <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
        <SafeAreaView style={commonStyles.SafeAreaView}>
            <List.Section>
              <List.Item title="Register" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('Register')}/>
              <List.Item title="Login" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('Login')}/>
              <List.Item title="Account" style={{paddingTop: 10, paddingBottom: 10}} onPress={() => navigation.navigate('Account')}/>
            </List.Section>
        </SafeAreaView>
        </>
    )
}


export default RegAndLog
