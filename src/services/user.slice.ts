import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { User } from '../models/user.model'
import type { RootState } from '../redux/store'
import type { RequestState } from '../models/request.model'

export const fetchUserByName = createAsyncThunk<User, string>(
  'user/fetchByName',
  async (name, { rejectWithValue }) => {
    const response = await fetch(`${process.env.BASE_URL}/user/${name}`)
    const data = await response.json()
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data)
    }
    return data
  }
)



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    dataByName: {} as Record<string, User | undefined>,
    statusByName: {} as Record<string, RequestState | undefined>,
  },
  reducers: {},
  extraReducers: (builder) => {
    // When our request is pending:
    // - store the 'pending' state as the status for the corresponding user name
    builder.addCase(fetchUserByName.pending, (state, action) => {
      state.statusByName[action.meta.arg] = 'pending'
    })
    // When our request is fulfilled:
    // - store the 'fulfilled' state as the status for the corresponding user name
    // - and store the received payload as the data for the corresponding user name
    builder.addCase(fetchUserByName.fulfilled, (state, action) => {
      state.statusByName[action.meta.arg] = 'fulfilled'
      state.dataByName[action.meta.arg] = action.payload
    })
    // When our request is rejected:
    // - store the 'rejected' state as the status for the corresponding user name
    builder.addCase(fetchUserByName.rejected, (state, action) => {
      state.statusByName[action.meta.arg] = 'rejected'
    })
  },
})

export const selectStatusByName = (state: RootState, name: string) =>
  state.user.statusByName[name]
export const selectDataByName = (state: RootState, name: string) =>
  state.user.dataByName[name]