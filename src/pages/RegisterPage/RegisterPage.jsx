import css from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';
import AuthForm from "components/AuthForm/AuthForm";
import { register } from "../../redux/auth/authOperations";

const RegisterPage = () => {

   const dispatch = useDispatch();

  const handleSignup = data => {
    console.log(data);
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
