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
    favList: [],
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
        console.log(action.payload, 'paylaod from 59 ');
        state.favList.push(action.payload.data.notice);
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
        // state.favList = { ...state.favList, ...action.payload.result };
        state.favList = action.payload.result;
        state.total = action.payload.count;
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
        const { favList } = state;
        console.log(state, 'from splice 88');
        console.log(action, 'from 89 slice');
        const index = favList.findIndex(
          notice => notice._id === action.payload._id
        );
        favList.splice(index, 1);
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
        state.notices.push(action.payload.data);
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
        const { notices } = state;

        const indexNotice = notices.findIndex(
          notice => notice._id === action.payload._id
        );

        notices.splice(indexNotice, 1);
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

export const noticesSliceReducer = noticesSlice.reducer;
