import css from './RegisterPage.module.css';
import AuthForm from "components/AuthForm/AuthForm";

const RegisterPage = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <p className={css.title}>Registration</p>
        <AuthForm  />
      </div>
    </div>
  );
};

export default RegisterPage;
