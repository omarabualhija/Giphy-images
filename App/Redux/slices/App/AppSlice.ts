import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AXIOS} from '../../../API/instance';
import {
  addContactURL,
  categoriesListURL,
  getContactURL,
  ordersBookingURL,
} from '../../URL';
import {RootState} from '../..';

type IState = {};

let initialState: IState = {};

export let AppSlice = createSlice({
  name: 'AppSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default AppSlice.reducer;
