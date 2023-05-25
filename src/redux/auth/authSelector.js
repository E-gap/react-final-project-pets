export const isUserLogin = ({ auth }) => auth.isLogin;
export const getAuth = ({ auth }) => {
  const { isLogin, token, isRefreshing } = auth;
  return { isLogin, token, isRefreshing };
};
export const getUser = ({ auth }) => auth.user;
