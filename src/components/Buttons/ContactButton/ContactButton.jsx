import PropTypes from 'prop-types';
import css from './ContactButton.module.css';

const ContactButton = ({ onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      <p className={css.title}>Contact</p>
    </button>
  );
};
export default ContactButton;

ContactButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
