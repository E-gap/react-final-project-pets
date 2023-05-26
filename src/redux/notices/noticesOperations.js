import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../auth/authOperations';

export const fetchAllNotices = createAsyncThunk(
  'notices/fetchAllNotices',
  async function (queryParams, { rejectWithValue }) {
    const { category, title, page } = queryParams;
    try {
      const response = await instance.get(
        title
          ? `/notices/${category}?title=${title}&page=${page}&limit=12`
          : `/notices/${category}?page=${page}&limit=12`
      );

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  'notices/fetchNoticeById',
  async function (id, { rejectWithValue }) {
    try {
      const response = await instance.get(`/notices/id/${id}`);

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteNotices = createAsyncThunk(
  'notices/fetchFavorite',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get('/notices/fvrt?favorite=true');

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'notices/addFavorite',
  async (noticeId, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/notices/${noticeId}/favorite`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'notices/deleteFavorite',
  async (noticeId, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/notices/${noticeId}/favorite`);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (FormData, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      const { data } = await instance.post('/notices/', FormData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/notices/delete/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesByOwner = createAsyncThunk(
  'notices/fetchNoticesByOwner',
  async (queryParams, thunkApi) => {
    const { title, page } = queryParams;
    const { token } = thunkApi.getState().auth;
    if (!token) return thunkApi.rejectWithValue('No valid token');

    try {
      const result = await instance.get(
        title
          ? `/notices/user?title=${title}&page=${page}&limit=12`
          : `/notices/user?page=${page}&limit=12`
      );

      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
