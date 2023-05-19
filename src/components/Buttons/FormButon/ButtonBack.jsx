import PropTypes from 'prop-types';
import { BsArrowLeft } from 'react-icons/bs';
import css from './ButtonBack.module.css';

const ButtonBack = ({ text, clickHandler, type }) => {
  return (
    <button className={css.btn} onClick={clickHandler} type={type}>
      <BsArrowLeft className={css.icon} /> {text}
    </button>
  );
};

ButtonBack.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonBack;
