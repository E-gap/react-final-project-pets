import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// const instance = axios.create({
//   baseURL: 'http://localhost:3001/api',
// });

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/register', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      Notiflix.Notify.success('You have successfully registered', {
        width: '500px',
        position: 'center-center',
        fontSize: '25px',
        timeout: '500',
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/login', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      Notiflix.Notify.success('You have successfully login', {
        width: '500px',
        position: 'center-center',
        fontSize: '25px',
        timeout: '500',
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await instance.post('/auth/logout');
    axios.defaults.headers.common.Authorization = ``;
  } catch (error) {
    // return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/current', async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;
  if (!token) return thunkApi.rejectWithValue('No valid token');
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});


export const updateUser = createAsyncThunk('auth/updateUser', async (formData, thunkApi) => {
  const { token, user } = thunkApi.getState().auth;
  if (!token) return thunkApi.rejectWithValue('No valid token');
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  instance.defaults.headers.common.id = user.id;

  try {
    const { data } = await instance.put("/auth/user/" + user.id, {
      email: user.email,
      ...formData,
    });

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateUserAvatar = createAsyncThunk('auth/updateUserAvatar', async (formData, thunkApi) => {
  const { token, user } = thunkApi.getState().auth;
  if (!token) return thunkApi.rejectWithValue('No valid token');
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  instance.defaults.headers.common.id = user.id;

  try {
    const { data } = await instance.put("/auth/avatar/" + user.id, formData);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
