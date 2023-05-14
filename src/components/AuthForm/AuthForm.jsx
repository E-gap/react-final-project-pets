import css from './AuthForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { initialState } from './initialState';
import AuthFormButton from 'components/Buttons/AuthButtons/AuthFormButton/AuthFormButton';

const AuthForm = ({ isLoginForm, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  // console.log(state);

  const { email, password } = state;

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value, checked, type } = target;
      const newValue = type === 'checkbox' ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.inputList}>
        <input
          value={email}
          onChange={handleChange}
          className={css.input}
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <input
          value={password}
          onChange={handleChange}
          className={!isLoginForm ? css.input : css.inputLastLog}
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <input
          type={!isLoginForm ? 'password' : 'hidden'}
          className={css.inputLastReg}
          name="confirmPassword"
          required
          placeholder="Confirm password"
        />
        <AuthFormButton title={!isLoginForm ? 'Registration' : 'Login'} />
      </form>
      <div className={css.linklist}>
        <p className={css.txtLink}>
          {!isLoginForm ? 'Already have an account?' : "Don't have an account?"}
        </p>
        <Link
          to={!isLoginForm ? '/login' : '/register'}
          className={css.btnLink}
        >
          {!isLoginForm ? 'Login' : 'Register'}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  isLoginForm: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};