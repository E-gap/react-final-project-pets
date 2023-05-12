import css from './AuthForm.module.css';
import PropTypes from 'prop-types';

const AuthForm = ({ login }) => {
  return (
    <div className={css.container}>
      <form className={css.inputList}>
        <input className={css.input} placeholder="Email" />
        <input className={css.input} placeholder="Password" />
        <input
          type={!login ? 'visible' : 'hidden'}
          className={css.input}
          placeholder="Confirm password"
        />
        <button className={!login ? css.formBtnLog : css.formBtnReg}>
          {!login ? 'Registration' : 'Login'}
        </button>
      </form>
      <div className={css.linklist}>
        <p className={css.txtLink}>
          {!login ? 'Already have an account?' : "Don't have an account?"}
        </p>
        <p href="" className={css.btnLink}>
          {!login ? 'Login' : 'Register'}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  login: PropTypes.string.isRequired,
};