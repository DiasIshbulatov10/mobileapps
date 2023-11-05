import React, {useRef} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert
} from 'react-native'

import {
  Button,
} from 'galio-framework';

import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

import RBSheet from "react-native-raw-bottom-sheet";

const Support = ({ navigation }) => {
  const dispatch = useDispatch()
  let supports = [];
  supports = useSelector(selectAll)

  function ListTreats() {
    return supports.map(data => {
      return (
        <View key={data.id} style={styleUser}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>
        </View>
      )
    })
  }


  let isDark = false;
  const theme = isDark ? basics.dark : basics.light;

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({title}) => (
    <View style={commonStyles.item}>
      <Text style={commonStyles.title}>{title}</Text>
    </View>
  );

  const supportSheet = useRef();

  return (
    <>
      <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
      <SafeAreaView style={commonStyles.SafeAreaView}>
        {
          supports.length == 0 ? 
            <View style={commonStyles.centerWapper}>
              <Text style={{marginTop: 30, fontSize: 16, marginLeft:50, marginRight:50, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                Add your health care professionals and
              </Text>
              <Text style={{fontSize: 16, marginLeft:50, marginRight:50, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                keep track of your appointments.
              </Text>
              <Button
                color={basics.allStyle.common_btn_color}
                textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                style={[commonStyles.mediumBtnSize, {marginTop: 20}]}
                onPress={() => { supportSheet.current.open() }}
              >
                START NOW
              </Button>
            </View>
          :
          <View style={commonStyles.outerWrapper}>
            <FlatList
              data={DATA}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </View>
        }

        <RBSheet
          animationType='fade'
          ref={supportSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
            container: {
              backgroundColor: basics.allStyle.default_back_color,
              height: 200,
              paddingLeft: 30,
              paddingRight: 30,
            }
          }}
          openDuration={350}
          closeDuration={350}
        >
          <ListItem key={1} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('Appointment'); supportSheet.current.close()}}>
            <ListItem.Content>
              <ListItem.Title>Add appointment</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={2} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('HealthCare'); supportSheet.current.close()}}>
            <ListItem.Content>
              <ListItem.Title>Add Health care professional</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem key={3} bottomDivider containerStyle={{backgroundColor: basics.allStyle.default_back_color}} onPress={() => {navigation.navigate('Pharmacy'), supportSheet.current.close()}}>
            <ListItem.Content>
              <ListItem.Title>Add Pharamacy</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </RBSheet>
      </SafeAreaView>
      
    </>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default Support
