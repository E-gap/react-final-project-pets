import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//import Notiflix from 'notiflix';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/* ((axios.defaults.baseURL = `http://localhost:3001`)); */

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
      const response = await instance.get(`/notices/${id}`);
      //console.log(response.data);
      //console.log(response);

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/* export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async function (contact, { rejectWithValue, getState }) {
    const stateNotices = getState().notices.notices;

    const isCoincidence = stateNotices.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isCoincidence) {
      alert(`${contact.name} is already in notices`);
      throw new Error("Can't add contact. Server Error");
    }

    try {
      const response = await axios.post('/notices', {
        name: contact.name,
        number: contact.number,
      });

      if (response.statusText !== 'Created') {
        throw new Error("Can't add contact. Server Error");
      }
      Notiflix.Notify.success('The new contact has been added', {
        width: '500px',
        position: 'center-center',
        fontSize: '25px',
        timeout: '1500',
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); */

/* export const deleteNotices = createAsyncThunk(
  'notices/deleteNotices',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.delete(`/notices/${id}`);

      if (response.statusText !== 'OK') {
        throw new Error("Can't delete contact. Server Error");
      }
      Notiflix.Notify.warning('The new contact has been deleted', {
        width: '500px',
        position: 'center-center',
        fontSize: '25px',
        timeout: '1500',
      });
      return response.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); */
