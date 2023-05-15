import PropTypes from 'prop-types';

const ButtonBack = ({ text, clickHandler, type }) => {
  return (
    <button onClick={clickHandler} type={type}>
      {text}
    </button>
  );
};

ButtonBack.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonBack;