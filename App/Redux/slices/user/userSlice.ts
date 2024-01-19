import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  forgotPasswordURL,
  loginURL,
  confirmOtpURL,
  signupURL,
  updatePasswordURL,
} from '../../URL';
import {AXIOS} from '../../../API';

const initialState: IState = {};

export let userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logoutUser: state => {
      state.user = undefined;
    },
  },
});

export default userSlice.reducer;
export const {logoutUser, setSelectedLocation, setWatchedBoarding} =
  userSlice.actions;
