import React, { useState, useRef } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  Animated,
  Dimensions,
  PanResponder,
  Alert
} from 'react-native'

import { Button } from 'galio-framework'

// import { MenuProvider } from 'react-native-popup-menu';

// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
//   renderers
// } from 'react-native-popup-menu';

import RBSheet from "react-native-raw-bottom-sheet";

// import { BottomSheet } from '@gorhom/bottom-sheet';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'

// const { SlideInMenu } = renderers;

const emptyImg = require('../../assets/images/progress.png')


const Progress = ({ navigation }) => {
  const dispatch = useDispatch()
  let progress = []
  progress = useSelector(selectAll)

  let isDark = false
  const theme = isDark ? basics.dark : basics.light

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item'
    }
  ]

  const Item = ({ title }) => (
    <View style={commonStyles.item}>
      <Text style={commonStyles.title}>{title}</Text>
    </View>
  )


  const progressSheet = useRef();

  return (
    <>
      <StatusBar
        barStyle={basics.allStyle.status_content_color}
        backgroundColor={theme.status_back_color}
      />
      <SafeAreaView style={commonStyles.SafeAreaView}>
        {progress.length == 0 ? (
          <View style={commonStyles.centerWapper}>
            <View style={commonStyles.centerWapper}>
              <Image source={emptyImg} />
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 20,
                  color: basics.allStyle.text_color,
                  fontWeight: 'bold'
                }}>
                Check you progress
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  marginLeft: 50,
                  marginRight: 50,
                  color: basics.allStyle.text_color,
                  justifyContent: 'center'
                }}>
                You will find your past entries here after
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 50,
                  marginRight: 50,
                  color: basics.allStyle.text_color,
                  justifyContent: 'center'
                }}>
                you confirm your first reminders.
              </Text>
            </View>
            <View style={{ marginLeft: 180, marginBottom: 10 }}>
              <Icon.Button
                name="pencil"
                backgroundColor={basics.allStyle.common_btn_color}
                style={[
                  commonStyles.mediumBtnSize,
                  { paddingLeft: 25, paddingRight: 25 }
                ]}
                borderRadius={50}
                size={18}
                onPress={() => {
                  progressSheet.current.open()
                }}>
                <Text
                  style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>
                  ONE-TIME ENTRY
                </Text>
              </Icon.Button>
            </View>
          </View>
        ) : (
          <View style={commonStyles.outerWrapper}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </View>
        )}

        <RBSheet
          animationType='fade'
          ref={progressSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
            container: {
              backgroundColor: basics.allStyle.default_back_color,
              height: 300,
              paddingLeft: 30,
              paddingRight: 30
            }
          }}
          openDuration={350}
          closeDuration={350}
        >
          <ListItem key={1} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('TreatmentSearch'); progressSheet.current.close()}}>
            <Icon name={'bandage-outline'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Medication</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={2} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('Measurement'); progressSheet.current.close()}}>
            <Icon name={'pulse'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Measurement</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={3} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('LabValue'); progressSheet.current.close()}}>
            <Icon name={'flask-outline'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Lab values</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={4} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('Activity'); progressSheet.current.close()}}>
            <Icon name={'golf-outline'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Activity</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={5} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('Symptom'); progressSheet.current.close()}}>
            <Icon name={'happy-outline'} size={20} color={basics.allStyle.text_color} />
            <ListItem.Content>
              <ListItem.Title>Symptom check</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </RBSheet>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
})

export default Progress
