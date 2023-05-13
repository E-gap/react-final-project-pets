import css from './AuthForm.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthFormButton from 'components/Buttons/AuthButtons/AuthFormButton/AuthFormButton';

const AuthForm = ({ login }) => {
  return (
    <div className={css.container}>
      <form className={css.inputList}>
        <input className={css.input} placeholder="Email" />
        <input
          className={!login ? css.input : css.inputLastLog}
          placeholder="Password"
        />
        <input
          type={!login ? 'visible' : 'hidden'}
          className={css.inputLastReg}
          placeholder="Confirm password"
        />
        <AuthFormButton title={!login ? 'Registration' : 'Login'} />
      </form>
      <div className={css.linklist}>
        <p className={css.txtLink}>
          {!login ? 'Already have an account?' : "Don't have an account?"}
        </p>
        <Link to={!login ? '/login' : '/register'} className={css.btnLink}>
          {!login ? 'Login' : 'Register'}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  login: PropTypes.string.isRequired,
};