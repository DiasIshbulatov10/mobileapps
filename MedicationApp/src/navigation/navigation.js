import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native'

import { Icon, Image, Input, SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import IIcon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'



import Today from '../screens/Today/Today.screen' 
import Treatment from '../screens/Treatment/Treatment.screen'
import TreatmentSearch from '../screens/Treatment/Search.screen'
import AddMedication from '../screens/Treatment/AddMedication.screen'
import TreatSymptom from '../screens/Treatment/TreatSymptom.screen'
import Reminder from '../screens/Treatment/Reminder.screen'
import Support from '../screens/Support/Support.screen' 
import Progress from '../screens/Progress/Progress.screen' 
import Welcome from '../screens/Welcome/Welcome.screen' 
import Messages from '../screens/Today/Messages.screen' 
import ResetPass from '../screens/Auth/ResetPass.screen' 
import Login from '../screens/Auth/Login.screen' 
import Register from '../screens/Auth/Register.screen' 
import Profile from '../screens/Profile/Profile.screen'
import RegAndLog from '../screens/Profile/RegLog.screen'
import Account from '../screens/Profile/Account.screen'
import Notifications from '../screens/Profile/Notification.screen'
import NotifyCategory from '../screens/Profile/NotifyCategory.screen'
import NotifySetting from '../screens/Profile/NotifySetting.screen'
import Privacy from '../screens/Profile/Privacy.screen'
import Passcode from '../screens/Profile/Passcode.screen'
import MedDatabase from '../screens/Profile/MedDatabase.screen'
import LegalInfo from '../screens/Profile/LegalInfo.screen'
import Appointment from '../screens/Support/Appointment.screen'
import HealthCare from '../screens/Support/HealthCare.screen'
import Pharmacy from '../screens/Support/Pharmacy.screen'
import Measurement from '../screens/Progress/Measurement.screen'
import MeasureDetail from '../screens/Progress/MeasureDetail.screen'
import LabValue from '../screens/Progress/LabValue.screen'
import LabDetail from '../screens/Progress/LabDetail.screen'
import Activity from '../screens/Progress/Activity.screen'
import ActivityDetail from '../screens/Progress/ActivityDetail.screen'
import Symptom from '../screens/Progress/Symptom.screen'
import SymptomSelect from '../screens/Progress/SymptomSelect.screen'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { basics, commonStyles } from '../assets/styles';

const closeImg = require('../assets/images/ic_close_24dp.png')

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabs({ navigation }) {
  let isDark = false;
  const theme = isDark ? basics.dark : basics.light;

  const TodayTitle = () => {
    return (
      <View style={commonStyles.titleArea}>
        <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: '500', color: 'white', marginRight: '80%'}}>Today</Text>
        <TouchableOpacity
          color={'white'}
          onPress={() => navigation.navigate('Messages')}
          style={{justifyContent: 'center', alignItems: 'center'}}
        >
          <FIcon name={'bell'} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    )
  }

  const TreatmentTitle = () => {
    return (
      <View style={commonStyles.titleArea}>
        <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: '500', color: 'white', marginRight: '68%'}}>Treatement</Text>
        <TouchableOpacity
          color={'white'}
          onPress={() => navigation.navigate('Profile')}
          style={{justifyContent: 'center', alignItems: 'center'}}
        >
          <FIcon name={'user-circle-o'} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    )
  }


  const ProgressTitle = () => {
    return (
      <View style={commonStyles.titleArea}>
        <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: '500', color: 'white', marginRight: '65%'}}>Progress</Text>
        <TouchableOpacity
          color={'white'}
          onPress={() => Alert.alert('this is Profile Screen')}
          style={{justifyContent: 'center', alignItems: 'center'}}
        >
          <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 15, fontWeight: '500', color: 'white'}}>SHARE</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Tab.Navigator 
      initialRouteName='Treatment'
    >
      <Tab.Screen
        name="Today"
        component={Today}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            return <FIcon name={'calendar-check-o'} size={25} color={color} />
          },
          headerStyle: {
            backgroundColor: theme.header_back_color,
          },
          headerTintColor: theme.header_txt_color,
          tabBarActiveTintColor: theme.tabbar_active,
          tabBarStyle: {height: basics.allStyle.tabbar_height},
          headerTitle: (props) => <TodayTitle {...props} />
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            return <IIcon name={'stats-chart'} size={25} color={color} />
          },
          headerStyle: {
            backgroundColor: theme.header_back_color,
          },
          headerTintColor: theme.header_txt_color,
          tabBarActiveTintColor: theme.tabbar_active,
          tabBarStyle: {height: basics.allStyle.tabbar_height},
          headerTitle: (props) => <ProgressTitle {...props} />,
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            return <IIcon name={'medkit'} size={25} color={color} />
          },
          headerStyle: {
            backgroundColor: theme.header_back_color,
          },
          headerTintColor: theme.header_txt_color,
          tabBarActiveTintColor: theme.tabbar_active,
          tabBarStyle: {height: basics.allStyle.tabbar_height},
        }}
      />
      <Tab.Screen
        name="Treatment"
        component={Treatment}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            return <FIcon name={'stethoscope'} size={25} color={color} />
          },
          headerStyle: {
            backgroundColor: theme.header_back_color,
          },
          headerTintColor: theme.header_txt_color,
          tabBarActiveTintColor: theme.tabbar_active,
          tabBarStyle: {height: basics.allStyle.tabbar_height},
          headerTitle: (props) => <TreatmentTitle {...props} />,
          tabBarBadge: '',
          tabBarBadgeStyle: {
            marginTop: 3,
            minWidth: 8,
            minHeight: 8,
            maxWidth: 8,
            maxHeight: 8,
            borderRadius: 4,
          },
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigation = (userId) => {
  let isDark = false;
  const theme = isDark ? basics.dark : basics.light;

  
  
  const HeaderTitle = (props) => {
    return (
      <View style={commonStyles.titleArea}>
        <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: '500', color: 'white'}}>
          {
            props.children == 'Login' ? 
              'Log in'
            : props.children == 'Register' ? 
              'Register'
            : props.children == 'ResetPass' ? 
              'Reset Password'
            : props.children == 'Messages' ? 
              'Messages'
            : props.children == 'Profile' ? 
              'Profile'
            : props.children == 'RegAndLog' ? 
              'Registration and login'
            : props.children == 'Account' ? 
              'Account'
            : props.children == 'Notifications' ? 
              'Notifications'
            : props.children == 'NotifyCategory' ? 
              'Notification categories'
            : props.children == 'Privacy' ? 
              'Privacy'
            : props.children == 'Passcode' ? 
              'Passcode'
            : props.children == 'MedDatabase' ? 
              'Medication Database'
            : props.children == 'LegalInfo' ? 
              'Legal information'
            : props.children == 'Appointment' ? 
              'New appointment'
            : props.children == 'HealthCare' ? 
              'Add health care professional'
            : props.children == 'Pharmacy' ? 
              'Add pharmacy'
            : props.children == 'Symptom' ? 
              'Symptom check'
            : props.children == 'Reminder' ? 
              'Reminder'
            :
              ''
          }
        </Text>
      </View>
    )
  }

  
  const SearchTitle = (props) => {
    
    const [isSearchCancel, setIsSearchCancel] = useState(false);
    const [isSearchFocus, setIsSearchFocus] = useState(true);

    const Focusfuc = () => {
      setIsSearchCancel(false)
      setIsSearchFocus(true)
    }

    return (
      <>
        {
          isSearchCancel == false ? 
            <View style={commonStyles.titleArea}>
              <View style={{width: '70%', height: basics.allStyle.tabbar_height, justifyContent: 'center'}}>
                <TextInput
                    mode='flat'
                    placeholder='Search for medication'
                    placeholderTextColor={'white'}
                    cursorColor='white'
                    textColor='white'
                    selectionColor='white'
                    autoFocus={isSearchFocus}
                    underlineStyle={{display: 'none'}}
                    style={{backgroundColor: theme.header_back_color, color: 'white'}}
                />
              </View>
              <View style={{width: '10%', alignItems: 'center', justifyContent: 'center'}}>
                <FIcon name={'times'} size={20} color={'white'} onPress={() => {setIsSearchCancel(true), setIsSearchFocus(false)}} />
              </View>
            </View>
          :
          <View style={{width: '100%'}}>
            <View style={{ height: basics.allStyle.tabbar_height, justifyContent: 'center'}}>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'white'}}>
                Select medication
              </Text>
            </View>
            <View style={{width: '85%', marginLeft: '-10%', justifyContent: 'center'}}>
              <SearchBar
                placeholder="Search for medication"
                value={''}
                onFocus={() => Focusfuc()}
                style={{backgroundColor: theme.status_back_color, fontSize: 15, height: 10}}
                cursorColor={'white'}
                placeholderTextColor={"white"}
                containerStyle={{ marginTop: -10, padding: 5, backgroundColor: theme.header_back_color, borderBottomColor: theme.header_back_color, borderTopColor: theme.header_back_color}}
                inputContainerStyle={{ padding: 0, backgroundColor: theme.status_back_color}}
                searchIcon={() => <IIcon name='search' color={'white'} size={15}/>}
                clearIcon={() => ""}
                round={true}
              />
            </View>
          </View>
        }
      </>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ userId == null ? 'Welcome' : 'Home' }>
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false}}
          component={Welcome}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={MainTabs}
        />
        <Stack.Screen
          name="Login"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            tabBarActiveTintColor: theme.tabbar_active,
            tabBarStyle: {height: basics.allStyle.tabbar_height},
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            tabBarActiveTintColor: theme.tabbar_active,
            tabBarStyle: {height: basics.allStyle.tabbar_height},
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={Register}
        />
        <Stack.Screen
          name="ResetPass"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            tabBarActiveTintColor: theme.tabbar_active,
            tabBarStyle: {height: basics.allStyle.tabbar_height},
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={ResetPass}
        />
        <Stack.Screen
          name="Messages"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            tabBarActiveTintColor: theme.tabbar_active,
            tabBarStyle: {height: basics.allStyle.tabbar_height},
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={Messages}
        />
        <Stack.Screen
          name="Profile"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={Profile}
        />
        <Stack.Screen
          name="RegAndLog"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={RegAndLog}
        />
        <Stack.Screen
          name="Account"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={Account}
        />
        <Stack.Screen
          name="Notifications"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={Notifications}
        />
        <Stack.Screen
          name="NotifyCategory"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={NotifyCategory}
        />
        <Stack.Screen
          name="NotifySetting"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: basics.allStyle.default_back_color,
            },
            headerTintColor: basics.allStyle.text_color,
            headerTitle: ''
          }}
          component={NotifySetting}
        />
        <Stack.Screen
          name="Privacy"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={Privacy}
        />
        <Stack.Screen
          name="Passcode"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={Passcode}
        />
        <Stack.Screen
          name="MedDatabase"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={MedDatabase}
        />
        <Stack.Screen
          name="LegalInfo"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />
          }}
          component={LegalInfo}
        />
        <Stack.Screen
          name="Appointment"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />,
          }}
          component={Appointment}
        />
        <Stack.Screen
          name="HealthCare"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />,
          }}
          component={HealthCare}
        />
        <Stack.Screen
          name="Pharmacy"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />,
          }}
          component={Pharmacy}
        />
        
        <Stack.Screen
          name="Measurement"
          options={{ 
            headerShown: false,
          }}
          component={Measurement}
        />
        <Stack.Screen
          name="MeasureDetail"
          options={{ 
            headerShown: false,
          }}
          component={MeasureDetail}
        />
        <Stack.Screen
          name="LabValue"
          options={{ 
            headerShown: false,
          }}
          component={LabValue}
        />
        <Stack.Screen
          name="LabDetail"
          options={{ 
            headerShown: false,
          }}
          component={LabDetail}
        />
        <Stack.Screen
          name="Activity"
          options={{ 
            headerShown: false,
          }}
          component={Activity}
        />
        <Stack.Screen
          name="ActivityDetail"
          options={{ 
            headerShown: false,
          }}
          component={ActivityDetail}
        />
        <Stack.Screen
          name="Symptom"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />,
          }}
          component={Symptom}
        />
        <Stack.Screen
          name="SymptomSelect"
          options={{ 
            headerShown: false,
          }}
          component={SymptomSelect}
        />

        <Stack.Screen
          name="TreatmentSearch"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            tabBarActiveTintColor: theme.tabbar_active,
            tabBarStyle: {height: basics.allStyle.tabbar_height},
            headerTitle: (props) => <SearchTitle {...props} />
          }}
          component={TreatmentSearch}
        />
        <Stack.Screen
          name="AddMedication"
          options={{ 
            headerShown: false,
          }}
          component={AddMedication}
        />
        <Stack.Screen
          name="TreatSymptom"
          options={{ 
            headerShown: false,
          }}
          component={TreatSymptom}
        />
        <Stack.Screen
          name="Reminder"
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.header_back_color,
            },
            headerTintColor: theme.header_txt_color,
            headerTitle: (props) => <HeaderTitle {...props} />,
          }}
          component={Reminder}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
