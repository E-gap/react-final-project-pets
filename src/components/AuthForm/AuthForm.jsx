import css from './AuthForm.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import classnames from 'classnames';
import AuthFormButton from 'components/Buttons/AuthButtons/AuthFormButton/AuthFormButton';
import { VscClose } from 'react-icons/vsc';

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
     return 'Invalid password. Must contain one number.';
   } 
}

const validateConfirmPassword = (pass, value) => {

  if (pass && value) {
    if (pass !== value) {
      return 'Password not matched';
    } 
  }
};
 
const AuthForm = ({ isLoginForm, onSubmit }) => {
  
  const handleSubmit = (values) => {
    onSubmit(values);
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
          console.log('submit', values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.inputList}>
            <Field
              // value={email}
              validate={validateEmail}
              className={classnames(css.input, {
                [css.errorInput]: errors.email && touched.email,
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

            <Field
              // value={password}
              validate={validatePassword}
              className={classnames(css.input, {
                [css.errorInput]: errors.password && touched.password,
              })}
              type="password"
              name="password"
              placeholder="Password"
            />
            {errors.password && touched.password && (
              <div className={css.errorMessagePass}>
                <VscClose className={css.close} size="26px" />
                <p>{errors.password}</p>
              </div>
            )}

            <Field
              type={!isLoginForm ? 'password' : 'hidden'}
              className={classnames(css.input, {
                [css.errorInput]: errors.confirmPassword && touched.password,
              })}
              name="confirmPassword"
              required
              validate={value => validateConfirmPassword(value.password, value)}
              placeholder="Confirm password"
            />
            {!isLoginForm && errors.confirmPassword && (
              <div className={css.errorMessageConfPass}>
                {errors.confirmPassword}
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