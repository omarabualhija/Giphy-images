import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/user/userSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import AppSlice from './slices/App/AppSlice';
import {reduxStorage} from './AsyncStoreg';
import favoriteSlice from './slices/Favorite/favoriteSlice';
let RootStore = combineReducers({
  user: userSlice,
  App: AppSlice,
  favorite: favoriteSlice,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
  blacklist: ['App'],
  whitelist: ['user', 'favorite'],
};
const persistedReducer = persistReducer(persistConfig, RootStore);

const rootStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

let persistor = persistStore(rootStore);

export type RootState = ReturnType<typeof rootStore.getState>;
type AppDispatch = typeof rootStore.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`=> see https://redux-toolkit.js.org/tutorials/typescript
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export {useAppDispatch, useAppSelector, rootStore, persistor};
