import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { instance } from '../auth/authOperations';

/* const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
}); */

export const fetchPets = createAsyncThunk('pets/fetch', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) {
    return thunkAPI.rejectWithValue('No valid token');
  }
  // instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await instance.get('/pets/all');
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createPet = createAsyncThunk(
  'pets/create',
  async (formData, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    // instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const { data } = await instance.post('/pets/create/', formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/delete',
  async (deleteID, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    // instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const { data } = await instance.delete('/pets/' + deleteID);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
