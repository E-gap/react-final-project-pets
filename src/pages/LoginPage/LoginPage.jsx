import css from './LoginPage.module.css';
import AuthForm from 'components/AuthForm/AuthForm';

const LoginPage = () => {

  const login = Boolean(true);

  return (
    <div className={css.section}>
      <div className={css.container}>
        <p className={css.title}>Login</p>
        <AuthForm login={login} />
      </div>
    </div>
  );
};

export default LoginPage;
