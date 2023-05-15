import PropTypes from 'prop-types';

const ButtonNext = ({
  text,
  icon,
  clickHandler,
  filled,
  short,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={clickHandler && (() => clickHandler(false))}
      filled={filled ? 'true' : undefined}
      short={short}
    >
      {text}
      {icon}
    </button>
  );
};

ButtonNext.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  clickHandler: PropTypes.func,
  filled: PropTypes.bool,
  short: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

ButtonNext.defaultProps = {
  type: 'button',
};

export default ButtonNext;
