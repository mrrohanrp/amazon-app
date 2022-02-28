import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authUserEmail: null,
  authUserName: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.authUserEmail = action.payload.authUserEmail;
      state.authUserName = action.payload.authUserName;
    },

    LOGOUT: (state) => {
      state.authUserEmail = null;
      state.authUserName = undefined;
    }
  }
});

export const { LOGIN, LOGOUT } = authSlice.actions;

export default authSlice.reducer;
