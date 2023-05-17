import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/authSelector';
// import { Loader } from 'shared/Loader/Loader';

export const PublicRoute = () => {
  const { isLogin } = useSelector(getAuth); //  { isLogin, token }

  //   if (!isLogin && token) {
  //     return <Loader />;
  //   }

  if (isLogin) {
    return <Navigate to="/user" />;
  }
  return <Outlet />;
};
