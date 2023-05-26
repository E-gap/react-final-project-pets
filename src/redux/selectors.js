export const selectNotices = state => state.notices.notices;

export const selectOneNotice = state => state.notices.oneNotice;

export const totalNotices = state => state.notices.total;

export const getIsLoading = state => state.notices.isLoading;

export const getError = state => state.notices.error;

export const getOwnNotices = state => state.notices.ownList;

export const getFavoriteNotices = state => state.notices.favList;
