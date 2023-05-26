import css from './AuthForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import classnames from 'classnames';
import AuthFormButton from 'components/Buttons/AuthButtons/AuthFormButton/AuthFormButton';
import { VscClose } from 'react-icons/vsc';
import { BsCheck2 } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';


 
const AuthForm = ({ isLoginForm, onSubmit }) => {
  const [isShowPass, setIsShowPass] = useState(false);
   const [isShowConfPass, setIsShowConfPass] = useState(false);

  function validateEmail(value) {
    if (!value) {
      return 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return 'Enter a valid Email';
    }
  }

  function validatePassword(value) {
    const passwordRegex = /(?=.*[0-9])/;
    if (!value) {
      return 'Password is required';
    } else if (value.length < 6) {
      return 'Password must be 6 characters long';
    } else if (!passwordRegex.test(value)) {
      return 'Password must contain one number.';
    }
  }

  const validateConfirmPassword = (pass, value) => {
    if (!isLoginForm) {
      if (!value) {
        return 'Confirm password is required';
      }
      if (pass && value) {
        if (pass !== value) {
          return 'Password not matched';
        }
      }
    }
  };

  const handleSubmit = (values) => {
    onSubmit(values);
  };

 
  const toggleEyePass = () => {
    if (isShowPass) {
      document.getElementById('password').setAttribute('type', 'password');
      setIsShowPass(false);
    } else {
      document.getElementById('password').setAttribute('type', 'text');
      setIsShowPass(true);
    }
  }
  const toggleEyeConfPass = () => {
    if (isShowConfPass) {
      document.getElementById('confirmPassword').setAttribute('type', 'password');
      setIsShowConfPass(false);
    } else {
      document.getElementById('confirmPassword').setAttribute('type', 'text');
      setIsShowConfPass(true);
    }
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values, actions) => {
          handleSubmit({ email: values.email, password: values.password });
          actions.resetForm();
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={css.inputList}>
            <Field
              validate={validateEmail}
              className={classnames(css.input, {
                [css.errorInput]: errors.email && touched.email,
                [css.validInput]: !errors.email && touched.email,
              })}
              type="email"
              name="email"
              placeholder="Email"
            />
            {errors.email && touched.email && (
              <div className={css.errorMessageEmail}>
                <VscClose className={css.close} size="26px" />
                <p>{errors.email}</p>
              </div>
            )}
            {!errors.email && touched.email && (
              <div className={css.validMessageEmail}>
                <BsCheck2 className={css.valid} size="26px" />
                <p>Email is valid</p>
              </div>
            )}
            <Field
              validate={validatePassword}
              className={classnames(css.input, {
                [css.errorInput]: errors.password && touched.password,
                [css.validInput]: !errors.password && touched.password,
              })}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <i
              className={css.eyePass}
              aria-hidden="true"
              id="eye"
              onClick={toggleEyePass}
            >
              {isShowPass ? <BsEye size="22px" /> : <BsEyeSlash size="22px" />}
            </i>
            {errors.password && touched.password && (
              <div className={css.errorMessagePass}>
                <VscClose
                  className={css.close}
                  size="26px"
                  onClick={toggleEyePass}
                />
                <p>{errors.password}</p>
              </div>
            )}
            {!errors.password && touched.password && (
              <div className={css.validMessagePass}>
                <BsCheck2
                  className={css.valid}
                  size="26px"
                  onClick={toggleEyePass}
                />
                <p>Password is secure</p>
              </div>
            )}
            <Field
              type={!isLoginForm ? 'password' : 'hidden'}
              className={classnames(css.input, {
                [css.errorInput]:
                  errors.confirmPassword && touched.confirmPassword,
                [css.validInput]:
                  !errors.confirmPassword && touched.confirmPassword,
              })}
              id="confirmPassword"
              name="confirmPassword"
              required
              validate={value =>
                validateConfirmPassword(values.password, value)
              }
              placeholder="Confirm password"
            />
            {!isLoginForm && (
              <i
                className={css.eyePassConfirm}
                aria-hidden="true"
                id="eye"
                onClick={toggleEyeConfPass}
              >
                {isShowConfPass ? (
                  <BsEye size="22px" />
                ) : (
                  <BsEyeSlash size="22px" />
                )}
              </i>
            )}
            {!isLoginForm &&
              errors.confirmPassword &&
              touched.confirmPassword && (
                <div className={css.errorMessageConfPass}>
                  <VscClose
                    className={css.close}
                    size="26px"
                    onClick={toggleEyeConfPass}
                  />
                  <p>{errors.confirmPassword}</p>
                </div>
              )}
            {!isLoginForm &&
              !errors.confirmPassword &&
              touched.confirmPassword && (
                <div className={css.validMessageConfPass}>
                  <BsCheck2
                    className={css.valid}
                    size="26px"
                    onClick={toggleEyeConfPass}
                  />
                  <p>Password matched</p>
                </div>
              )}
            <div
              className={
                !isLoginForm ? css.btnRegContainer : css.btnLogContainer
              }
            >
              <AuthFormButton title={!isLoginForm ? 'Registration' : 'Login'} />
            </div>
          </Form>
        )}
      </Formik>
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