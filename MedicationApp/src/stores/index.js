import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import UserReducer from './user.reducer'

export const store = configureStore({
  reducer: {
    user: UserReducer
  }
})

