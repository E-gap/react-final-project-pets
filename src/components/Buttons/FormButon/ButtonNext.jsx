import { IoPawOutline } from 'react-icons/io5';
import css from './ButtonNext.module.css';

const ButtonNext = ({ type, text, clickHandler, filled, disabled }) => {
  return (
    <button
      className={css.button}
      type={type}
      onClick={clickHandler}
      disabled={disabled}
    >
      {text}
      <IoPawOutline className={css.icon} />
    </button>
  );
};

export default ButtonNext;

ButtonNext.defaultProps = {
  type: 'button',
};
