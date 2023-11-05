import React from 'react'
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

import {
  Button,
} from 'galio-framework';

import Icon from 'react-native-vector-icons/Ionicons'
import { basics, commonStyles } from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlarms, selectAll } from '../../stores/today.reducer'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { TabActions } from '@react-navigation/native';
import { Header } from '@react-navigation/stack';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const emptyImg = require('../../assets/images/today.png')


const Today = ({ navigation }) => {
  const dispatch = useDispatch()
  const alarms = useSelector(selectAll)

  function ListAlarms() {
    return alarms.map(data => {
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

  return (
    <>
      <StatusBar barStyle={basics.allStyle.status_content_color} backgroundColor={theme.status_back_color} />
      <SafeAreaView style={commonStyles.SafeAreaView}>
        {
          alarms.length == 0 ? 
            <View style={commonStyles.centerWapper}>
              <Image
                source={emptyImg}
                style={{marginTop: 20}}
              />
              <Text style={{marginTop: 15, fontSize: 20, color: basics.allStyle.text_color, fontWeight: 'bold'}}>
                Easily track your tasks
              </Text>
              <Text style={{marginTop: 10, fontSize: 16, marginLeft:50, marginRight:50, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                Your daily tasks will appear here when you 
              </Text>
              <Text style={{fontSize: 16, marginLeft:50, marginRight:50, color: basics.allStyle.text_color, justifyContent: 'center'}}>
                schedule them in Treatment. 
              </Text>
              <Button
                color={basics.allStyle.common_btn_color}
                textStyle={{ fontSize: 14, fontWeight: 'bold' }}
                style={[commonStyles.commonBtnSize, {marginTop: 35, marginBottom: 55}]}
                onPress={() => navigation.navigate('Treatment')}
              >
                GO TO TREATMENT
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

export default Today
