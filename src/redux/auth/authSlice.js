import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refresh, updateUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      password: null,
      name: "",
      birthday: "",
      phone: "",
      city: "",
      avatarUrl: "",
    },
    token: null,
    isLogin: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(login.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
