import css from './RegisterPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AuthForm from "components/AuthForm/AuthForm";
import { register } from "../../redux/auth/authOperations";
import { getAuth } from 'redux/auth/authSelector';

const RegisterPage = () => {
  const { isLogin, token } = useSelector(getAuth);
  const dispatch = useDispatch();
  if (isLogin && token) {
    return <Navigate to="/user" />;
  }

  const handleSignup = data => {
    dispatch(register(data));
  };
  
  return (
    <div className={css.section}>
      <div className={css.container}>
        <p className={css.title}>Registration</p>
        <AuthForm onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default RegisterPage;
