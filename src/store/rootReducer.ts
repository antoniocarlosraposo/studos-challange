import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './theme';

export const rootStore = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
