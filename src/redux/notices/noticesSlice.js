import { createSlice } from '@reduxjs/toolkit';
import { fetchAllNotices, fetchNoticeById } from './noticesOperations';

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    oneNotice: {},
    notices: [],
    total: 0,
    isLoading: true,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllNotices.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.notices = action.payload.result;
        state.total = action.payload.total;
      })
      .addCase(fetchAllNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchNoticeById.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchNoticeById.fulfilled, (state, action) => {
        state.error = false;
        state.oneNotice = action.payload;
      })
      .addCase(fetchNoticeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

//export const { addPet, deletePet } = petsSlice.actions;

export const noticesSliceReducer = noticesSlice.reducer;
