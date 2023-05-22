import PropTypes from 'prop-types';
import css from './AuthFormButton.module.css';

const AuthFormButton = ({ title }) => {
  return (
    <button type="submit" className={css.btn}>
      {title}
    </button>
  );
};
export default AuthFormButton;

AuthFormButton.propTypes = {
  title: PropTypes.string,
};
