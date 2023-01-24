import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { valueApi } from '../services';
import {userApi} from '../services/api'


export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [valueApi.reducerPath]: valueApi.reducer,

  },
   middleware: (gDM) => gDM().concat(userApi.middleware, valueApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;