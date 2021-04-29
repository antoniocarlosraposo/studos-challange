import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: INITIAL_STATE,
  reducers: {
    changeTheme() {
      return INITIAL_STATE;
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
