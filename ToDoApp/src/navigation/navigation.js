import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Dashboard from '../screens/Dashboard.screen'
import TaskGroup from '../screens/TaskGroup.screen'
import Category from '../screens/Category.screen'
import Support from '../screens/Support.screen'
import NewTask from '../screens/NewTask.screen'

import { basicStyles, commonStyles } from '../assets/styles';
import { constants } from '../utils'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainNavigation = () => {

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} initialParams={{type: 0, id: constants.completeType[0]}}
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: basicStyles.defaultColor,
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: "ToDo List",
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon
                  name={'home'}
                  color={color}
                  size={30}
                />
              )
            },
            tabBarActiveTintColor: basicStyles.defaultColor,
            tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' },
            tabBarStyle: { height: 60 }
          }}
        />
        <Tab.Screen name="Task Group" component={TaskGroup}
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: basicStyles.defaultColor,
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon name={'documents'} color={color} size={30} />
              )
            },
            tabBarActiveTintColor: basicStyles.defaultColor,
            tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
            tabBarStyle: { height: 60 }
          }}
        /> 
        <Tab.Screen name="Category" component={Category}
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: basicStyles.defaultColor,
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            tabBarIcon: ({ focused, color, size }) => {
              return(
                <Icon
                  name={'copy'}
                  color={color}
                  size={30}
                />
              )
            },
            tabBarActiveTintColor: basicStyles.defaultColor,
            tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' },
            tabBarStyle: { height: 60 }
          }}
        />
        <Tab.Screen name="Support" component={Support} 
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: basicStyles.defaultColor,
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            tabBarIcon: ({ focused, color, size }) => {
              return(
                <Icon
                  name={'book'}
                  color={color}
                  size={30}
                />
              )
            },
            tabBarActiveTintColor: basicStyles.defaultColor,
            tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' },
            tabBarStyle: { height: 60 }
          }}/>
      </Tab.Navigator>
    )
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MyTabs">
        
        <Stack.Screen name="NewTask" component={NewTask}
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: basicStyles.defaultColor,
            },
            headerTitle: 'New Task',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}          
        />

        <Stack.Screen name="MyTabs" component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
