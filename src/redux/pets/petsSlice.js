import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPets, addPets, fetchPetById } from './petsOperations';

export const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    onePet: {},
    pets: [],
    total: 0,
    isLoading: true,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllPets.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.pets = action.payload.result;
        state.total = action.payload.total;
      })
      .addCase(fetchAllPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchPetById.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPetById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchPetById.fulfilled, (state, action) => {
        state.error = false;
        state.onePet = action.payload;
      })
      .addCase(addPets.fulfilled, (state, action) => {
        state.error = false;
        state.pets.push(action.payload);
      })
      .addCase(addPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addPet, deletePet } = petsSlice.actions;

export const petsSliceReducer = petsSlice.reducer;
