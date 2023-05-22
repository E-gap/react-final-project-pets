import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllNotices,
  fetchNoticeById,
  addToFavorite,
  deleteFromFavorite,
  fetchFavoriteNotices,
  addNotice,
  deleteNotice,
  fetchNoticesByOwner,
} from './noticesOperations';

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    oneNotice: {},
    ownList: [],
    favoriteList: [],
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
        state.notices = [];
        state.total = 0;
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
      })
      .addCase(addToFavorite.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.error = false;
        state.favoriteList.push(action.payload);
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFavoriteNotices.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchFavoriteNotices.fulfilled, (state, action) => {
        state.error = false;
        state.favoriteList = action.payload;
      })
      .addCase(fetchFavoriteNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFromFavorite.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteFromFavorite.fulfilled, (state, action) => {
        state.error = false;
        const { favoriteList } = state;
        const index = favoriteList.findIndex(
          notice => notice._id === action.payload._id
        );
        favoriteList.splice(index, 1);
      })
      .addCase(deleteFromFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNotice.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.error = false;
        state.noticeList.push(action.payload.data);
        state.ownList.push(action.payload.data);
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteNotice.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        state.error = false;
        const { noticeList, ownList } = state;

        const indexNotice = noticeList.findIndex(
          notice => notice._id === action.payload.data._id
        );
        noticeList.splice(indexNotice, 1);
        const indexOwn = ownList.findIndex(
          notice => notice._id === action.payload.data._id
        );
        ownList.splice(indexOwn, 1);
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchNoticesByOwner.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchNoticesByOwner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.notices = action.payload.result;
        state.total = action.payload.total;
      })
      .addCase(fetchNoticesByOwner.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

//export const { addPet, deletePet } = petsSlice.actions;

export const noticesSliceReducer = noticesSlice.reducer;
