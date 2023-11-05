import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setGuestId } from './actions';


const App = () => {

  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getData = async () => {
        try {
            const userId = await AsyncStorage.getItem('MyTherapyId');
            setUserId(userId);
            dispatch(setGuestId(userId));
        } catch (error) {
            console.log(error);
        }
    };
  
    getData();
  }, [userId]);

  return (
    <Provider store={store}>
      <MainNavigation userId={userId} />
    </Provider>
  )
}

export default App
