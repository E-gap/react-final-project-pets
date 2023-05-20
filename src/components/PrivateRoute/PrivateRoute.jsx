import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/authSelector';
// import { Loader } from 'shared/Loader/Loader';

export const PrivateRoute = () => {
  const { isLogin } = useSelector(getAuth);

  // if (!isLogin && token) {
  //   return <Loader />;
  // }

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
