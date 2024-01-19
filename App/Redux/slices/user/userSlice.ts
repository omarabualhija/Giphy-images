import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {AXIOS} from '../../../API';

const initialState: initStateType = {
  user: undefined,
};

export let userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: state => {
      state.user = undefined;
    },
  },
});

export default userSlice.reducer;
export const {loginUser, logoutUser} = userSlice.actions;
