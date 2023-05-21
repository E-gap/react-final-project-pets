import css from './LoginPage.module.css';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from 'components/AuthForm/AuthForm';
import { login } from '../../redux/auth/authOperations';
import { getAuth } from 'redux/auth/authSelector';

const LoginPage = () => {
  const { isLogin, token } = useSelector(getAuth);
  const dispatch = useDispatch();
  if (isLogin && token) {
    return <Navigate to="/user" />;
  }
  const isLoginForm = Boolean(true);

  const handleLogin = data => {
    console.log(data);
    dispatch(login(data));
  };
  return (
    <div className={css.section}>
      <div className={css.container}>
        <p className={css.title}>Login</p>
        <AuthForm isLoginForm={isLoginForm} onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
