import LoginButton from './LoginButton/LoginButton';
import RegisterButton from './RegisterButton/RegisterButton';
import css from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={css.auth}>
      <LoginButton /> 
      <RegisterButton />
    </div>
  );
};
export default AuthMenu;
