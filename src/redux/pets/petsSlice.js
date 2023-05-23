import { createSlice } from '@reduxjs/toolkit';
import { createPet, deletePet, fetchPets } from './petsOperations';

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    pets: [],
    isProcessing: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPets.pending, state => {
        state.isProcessing = true;
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.pets = action.payload;
        state.isProcessing = false;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.error = action.payload;
        state.isProcessing = false;
      })
      .addCase(createPet.pending, state => {
        state.isProcessing = true;
      })
      .addCase(createPet.fulfilled, (state, action) => {
        state.pets = [...state.pets, action.payload];
        state.isProcessing = false;
      })
      .addCase(createPet.rejected, (state, action) => {
        state.error = action.payload;
        state.isProcessing = false;
      })
      .addCase(deletePet.pending, state => {
        state.isProcessing = true;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        state.pets =  state.pets.filter(e => e["_id"] !== action.payload["_id"]);
        state.isProcessing = false;
      })
      .addCase(deletePet.rejected, (state, action) => {
        state.error = action.payload;
        state.isProcessing = false;
      }),
});

export const petsReducer = petsSlice.reducer;
