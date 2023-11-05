import React, { forwardRef, useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native'

import {
  Button
} from 'galio-framework';

import Icon from 'react-native-vector-icons/Ionicons'
import { basicStyles, commonStyles } from '../assets/styles';
import { TextInput, Portal, PaperProvider, Modal } from 'react-native-paper';
import { FAB } from 'react-native-elements';
import Toast from 'react-native-toast-message';

import { db } from '../../firebase-config.js';

import {
  ref,
  onValue,
  push,
  update,
  remove,
  get
} from '@react-native-firebase/database';
import { constants } from '../utils';

const TaskGroup = ({ navigation }) => {
  const [group, setGroup] = useState({});

  useEffect(() => {
    return onValue(ref(db, '/task_group'), querySnapShot => {
      let data = querySnapShot.val() || {};
      let groupList = {...data};
      setGroup(groupList);
    });
  }, []);

  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {        
    return onValue(ref(db, '/tasks'), querySnapShot => {
        let data = querySnapShot.val() || {};
        let tasks = {...data};
        let list = [];
        Object.keys(tasks).map(item => {
            let info = {};
            info.category = tasks[item].category;
            info.group = tasks[item].group;
            info.key = item;
            list.unshift(info);
        })
        setAllTasks(list);
    });
  }, []);
  
  const taskGroupKeys = Object.keys(group);

  const [visible, setVisible] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [keyInfo, setKeyInfo] = useState('');
  
  const hideModal = () => {
    setKeyInfo('');
    setVisible(false);
  }

  const showModal = (id, name, key) => {
    setKeyInfo(key ? key : '')
    setInputVal(name ? name : '')
    setVisible(true)
  }

  const addTaskGroup = () => {
    if(inputVal == '') {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'You must enter task group name!',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 20,
      })
      setVisible(false)
    }
    else {
      if(keyInfo == '') {
        let id = taskGroupKeys.length + 1;
  
        push(ref(db, '/task_group'), {
          id: id,
          name: inputVal,
        });
        setInputVal('');
        setVisible(false);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'New task group added successfully!',
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 20,
        })
      }
      else {
        update(ref(db, `/task_group/${keyInfo}`), {name: inputVal});
        setInputVal('');
        setKeyInfo('');
        setVisible(false);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'This task group updated successfully!',
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 20,
        })
      }
    }
  }

  const deleteModal = itemId => {
    const taskCount = allTasks.filter(i => i.group == itemId).length
    if(taskCount > 0) {
      Alert.alert(
        'Delete This Group and Tasks',
        "Some tasks still exist in this group. If you press 'DELETE ALL TASKS' button, you will be lost all tasks of this task group.",
        [
          {
            text: 'Delete All Tasks',
            onPress: () => deleteAllTasks(itemId),
            style: 'destructive',
          },
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
        ],
      );
    }
    else {
      Alert.alert(
        'Delete Group',
        "Do you really want to remove this group?",
        [
          {
            text: 'Delete',
            onPress: () => deleteTaskGroup(itemId),
            style: 'destructive',
          },
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
        ],
      );
    }
  };

  const deleteTaskGroup = (keyInfo) => {
    remove(ref(db, `/task_group/${keyInfo}`));
    setKeyInfo('');
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Delete this task group successfully!',
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 20,
    })
  }

  const deleteAllTasks = async (keyInfo) => {
    const documentRef = ref(db, '/tasks');
    const snapshot = await get(documentRef);
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        if (childData['group'] === keyInfo) {
          const documentToRemoveRef = ref(db, `tasks/${childSnapshot.key}`);
          remove(documentToRemoveRef);
        }
      });
    }

    Alert.alert(
      'Delete Group',
      "Do you really want to remove this group?",
      [
        {
          text: 'Delete',
          onPress: () => deleteTaskGroup(keyInfo),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
      ],
    );
  }


  return (
    <PaperProvider>
      <StatusBar barStyle='white' backgroundColor={basicStyles.defaultColor} />
      <SafeAreaView style={commonStyles.SafeAreaView}>
        
        <ScrollView>
          {
            taskGroupKeys.map((item, id) => {
              return(
                  <TouchableOpacity
                      key={id}
                      onPress={() => navigation.navigate('MyTabs', { screen: 'Dashboard', params: {type : 'group', id: item} })}
                  >
                      <View style={{width: '90%', backgroundColor: 'white', alignSelf: 'center', padding: 10, borderRadius: 10, marginTop: 20}}>
                          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                              <View style={{flex: 8}} >
                                  <Text style={{color: basicStyles.textColor, fontWeight: 'bold', fontSize: 20}}>
                                      {group[item].name}
                                  </Text>
                              </View>
                              <View style={{flex: 1}}>
                                  <TouchableOpacity
                                      onPress={() => showModal(group[item].id, group[item].name, item)}
                                  >
                                    <Icon
                                        name={'create'}
                                        color={basicStyles.editBtnColor}
                                        size={30}
                                        style={{alignSelf: 'flex-end', marginRight: 10}}
                                    />
                                  </TouchableOpacity>
                              </View>
                              <View style={{flex: 1}}>
                                  <TouchableOpacity
                                      onPress={() => deleteModal(item)}
                                  >
                                    <Icon
                                        name={'trash'}
                                        color={basicStyles.deleteBtnColor}
                                        size={30}
                                        style={{alignSelf: 'flex-end'}}
                                    />
                                  </TouchableOpacity>
                              </View>
                          </View>
                      </View>
                  </TouchableOpacity>
              )
            })
          }
        </ScrollView>
        <FAB 
          title="Group" 
          icon={<Icon name={'add-circle'} color='white' size={25}></Icon>} 
          style={{position: 'absolute', bottom: 20, alignSelf: 'flex-end', right: 20}} 
          color={basicStyles.defaultColor}
          onPress={() => showModal()}
        />

        <Portal>
            <Modal visible={visible} dismissable={false} contentContainerStyle={{backgroundColor: 'white', padding: 20, margin: 20}}>
                <Text style={{fontSize: basicStyles.modalTitleSize, color: basicStyles.textColor}}>
                    {
                        inputVal == "" ? 'ADD GROUP' : 'EDIT GROUP'
                    }
                </Text>
                <TextInput
                    mode='flat'
                    label="Name"
                    value={inputVal}
                    cursorColor={basicStyles.defaultColor}
                    activeOutlineColor={basicStyles.defaultColor}
                    activeUnderlineColor={basicStyles.defaultColor}
                    style={{width: '95%', backgroundColor: 'white', alignSelf: 'center', marginTop: 10}}
                    onChangeText={text => setInputVal(text)}
                />
                <View style={{flexDirection: 'row', alignSelf: 'flex-end', margin: 20, marginBottom: 10}}>
                    <TouchableOpacity
                        color={'white'}
                        onPress={() => addTaskGroup()}
                        style={{justifyContent: 'center', marginRight: 30}}
                    >
                        <Text style={{color: basicStyles.defaultColor, fontSize: 16, fontWeight: 'bold'}}>SAVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        color={'white'}
                        onPress={() => hideModal()}
                        style={{justifyContent: 'center'}}
                    >
                        <Text style={{color: basicStyles.defaultColor, fontSize: 16, fontWeight: 'bold'}}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </Portal>

      </SafeAreaView>
      <Toast refs={(myRef) => Toast.setRef(myRef)} />
      
    </PaperProvider>
  )
}

export default TaskGroup
