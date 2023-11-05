import React, { useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from 'react-native'

import {
  Button,
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

const Category = ({ navigation }) => {

  const [category, setCategory] = useState({});

  useEffect(() => {
    return onValue(ref(db, '/task_category'), querySnapShot => {
      let data = querySnapShot.val() || {};
      let categoryList = {...data};
      setCategory(categoryList);
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
            info.date = tasks[item].date;
            info.category = tasks[item].category;
            info.group = tasks[item].group;
            info.key = item;
            list.unshift(info);
        })
        setAllTasks(list);
    });
  }, []);
  
  const taskCategoryKeys = Object.keys(category);

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

  const addTaskCategory = () => {
    if(inputVal == '') {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'You must enter category name!',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 20,
      })
      setVisible(false)
    }
    else {
      if(keyInfo == '') {
        let id = taskCategoryKeys.length + 1;

        push(ref(db, '/task_category'), {
          id: id,
          name: inputVal,
        });
        setInputVal('');
        setVisible(false);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Add new task category successfully!',
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 20,
        })
      }
      else {
        update(ref(db, `/task_category/${keyInfo}`), {name: inputVal});
        setInputVal('');
        setKeyInfo('');
        setVisible(false);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Update one task category successfully!',
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 20,
        })
      }
    }
  }

  const deleteModal = itemId => {
    const taskCount = allTasks.filter(i => i.category == itemId).length
    if(taskCount > 0) {
      Alert.alert(
        'Delete This Category and Tasks',
        "Some tasks still exist in this category. If you press 'DELETE ALL TASKS' button, you will be lost all tasks of this category.",
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
        'Delete Category',
        "Do you really want to remove this category?",
        [
          {
            text: 'Delete',
            onPress: () => deleteTaskCategory(itemId),
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

  const deleteTaskCategory = (keyInfo) => {
    remove(ref(db, `/task_category/${keyInfo}`));
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Delete one task category successfully!',
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
        if (childData['category'] === keyInfo) {
          const documentToRemoveRef = ref(db, `tasks/${childSnapshot.key}`);
          remove(documentToRemoveRef);
        }
      });
    }

    Alert.alert(
      'Delete Category',
      "Do you really want to remove this category?",
      [
        {
          text: 'Delete',
          onPress: () => deleteTaskCategory(keyInfo),
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
            taskCategoryKeys.map((item, id) => {
              return(
                  <TouchableOpacity
                      key={id}
                      onPress={() => navigation.navigate('MyTabs', { screen: 'Dashboard',  params: {type : 'category', id: item} })}
                  >
                      <View style={{width: '90%', backgroundColor: 'white', alignSelf: 'center', padding: 10, borderRadius: 10, marginTop: 20}}>
                          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                              <View style={{flex: 8}} >
                                  <Text style={{color: basicStyles.textColor, fontWeight: 'bold', fontSize: 20}}>
                                      {category[item].name}
                                  </Text>
                              </View>
                              <View style={{flex: 1}}>
                                  <TouchableOpacity
                                      onPress={() => showModal(category[item].id, category[item].name, item)}
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
          title="Category" 
          icon={<Icon name={'add-circle'} color='white' size={25}></Icon>} 
          style={{position: 'absolute', bottom: 20, alignSelf: 'flex-end', right: 20}} 
          color={basicStyles.defaultColor}
          onPress={() => showModal()}
        />

        <Portal>
            <Modal visible={visible} dismissable={false} contentContainerStyle={{backgroundColor: 'white', padding: 20, margin: 20}}>
                <Text style={{fontSize: basicStyles.modalTitleSize, color: basicStyles.textColor}}>
                    {
                        inputVal == "" ? 'ADD CATEGORY' : 'EDIT CATEGORY'
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
                        onPress={() => addTaskCategory()}
                        style={{justifyContent: 'center', marginRight: 30}}
                    >
                        <Text style={{color: basicStyles.defaultColor, fontSize: 15, fontWeight: 'bold'}}>SAVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        color={'white'}
                        onPress={() => hideModal()}
                        style={{justifyContent: 'center'}}
                    >
                        <Text style={{color: basicStyles.defaultColor, fontSize: 15, fontWeight: 'bold'}}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </Portal>

        <Toast refs={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
      
    </PaperProvider>
  )
}

export default Category
