import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AXIOS} from '../../../API/instance';
import {getHomeDataURL, searchURL} from '../../URL';
import joinObject from '../../../util/joinObject';

let initialState: initialAppSliceState = {
  homeData: [],
  errorHomeData: false,
  loadingHomeData: false,
  loadingMoreHomeData: false,
  nextOffset: 0,
  total_count: 0,
  count: 20,
};

export const getHomeDataAction = createAsyncThunk<
  getHomeDataResponse,
  getHomeDataParams
>('App/Home', async (params, thunk) => {
  const {rejectWithValue} = thunk;
  try {
    console.log('Ssss');
    const {data} = await AXIOS().get(getHomeDataURL + '?' + joinObject(params));
    console.log('data home action', data);
    return data;
  } catch (err: any) {
    console.log(JSON.stringify(err.message));
    return rejectWithValue(err);
  }
});

export const searchAction = createAsyncThunk<searchResponse, searchParams>(
  'App/Home',
  async (params, thunk) => {
    const {rejectWithValue} = thunk;
    try {
      const {data} = await AXIOS().get(searchURL + '?' + joinObject(params));
      console.log('data search action', data);
      return data;
    } catch (err: any) {
      console.log(JSON.stringify(err.message));
      return rejectWithValue(err);
    }
  },
);

export let AppSlice = createSlice({
  name: 'AppSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getHomeDataAction.pending, (state, action) => {
        if (state.nextOffset > 0) state.loadingMoreHomeData = true;
        else state.loadingHomeData = true;
        state.errorHomeData = false;
      })
      .addCase(getHomeDataAction.fulfilled, (state, action) => {
        if (state.loadingHomeData) state.loadingHomeData = false;
        if (state.loadingMoreHomeData) state.loadingMoreHomeData = false;
        state.errorHomeData = false;
        state.homeData = [...state.homeData, ...action.payload.data];
        state.nextOffset =
          action.payload.pagination.offset + action.payload.pagination.count;
        state.total_count = action.payload.pagination.total_count;
      })
      .addCase(getHomeDataAction.rejected, (state, action) => {
        state.loadingHomeData = false;
        state.errorHomeData = true;
      });
  },
});

export default AppSlice.reducer;
