import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './userSlice';
import gardenSlice from './gardenSlice';

export const store = configureStore({
  reducer: {
    users : usersSlice,
    Gardens : gardenSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

