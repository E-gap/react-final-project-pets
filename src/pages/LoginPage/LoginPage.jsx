import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import AuthForm from 'components/AuthForm/AuthForm';
import { login } from '../../redux/auth/authOperations';

const LoginPage = () => {

  const isLoginForm = Boolean(true);

   const dispatch = useDispatch();

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
