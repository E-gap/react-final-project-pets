import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePets, addPets } from './petsOperations';

export const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    pets: [],
    isLoading: true,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPets.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deletePets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deletePets.fulfilled, (state, action) => {
        state.error = false;
        state.pets = state.pets.filter(
          pet => pet.id !== action.payload
        );
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
