import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { getAlarms } from '../api/fakeApiAlarms'

export const fetchAlarms = createAsyncThunk('today/getAlarms', async () => {
  const response = await getAlarms()
  return response.data
})

const todayAlarmAdapter = createEntityAdapter()

const todayAlarmSlice = createSlice({
  name: 'alarms',
  initialState: todayAlarmAdapter.getInitialState({
    isLoading: false
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAlarms.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchAlarms.fulfilled, (state, action) => {
        todayAlarmAdapter.setAll(state, action.payload)
        state.isLoading = false
      })
      .addCase(fetchAlarms.rejected, state => {
        state.isLoading = false
      })
  }
})

export const { selectAll } = todayAlarmAdapter.getSelectors(state => state.alarms)

export default todayAlarmSlice.reducer
