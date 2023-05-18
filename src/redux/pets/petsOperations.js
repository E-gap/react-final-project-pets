import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/* ((axios.defaults.baseURL = `http://localhost:3001`)); */

export const fetchAllPets = createAsyncThunk(
  'pets/fetchAllPets',
  async function (queryParams, { rejectWithValue }) {
    const { title } = queryParams;
    try {
      const response = await instance.get(
        title
          ? `/notices/${queryParams.category}?title=${queryParams.title}`
          : `/notices/${queryParams.category}`
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

export const fetchPetById = createAsyncThunk(
  'pets/fetchPetById',
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

export const addPets = createAsyncThunk(
  'pets/addPets',
  async function (contact, { rejectWithValue, getState }) {
    const statePets = getState().pets.pets;

    const isCoincidence = statePets.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isCoincidence) {
      alert(`${contact.name} is already in pets`);
      throw new Error("Can't add contact. Server Error");
    }

    try {
      const response = await axios.post('/pets', {
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
);

export const deletePets = createAsyncThunk(
  'pets/deletePets',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.delete(`/pets/${id}`);

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
);
