import {createSlice} from '@reduxjs/toolkit';

const initialState: initFavoriteSlice = {
  favoriteData: [],
};

export let favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favoriteData.findIndex(
        item => item.id === action.payload.id,
      );
      if (index === -1) state.favoriteData.push(action.payload);
      else state.favoriteData.splice(index, 1);
    },
    deleteAllFavoriteAction: state => {
      state.favoriteData = [];
    },
  },
});

export default favoriteSlice.reducer;
export const {toggleFavorite, deleteAllFavoriteAction} = favoriteSlice.actions;
