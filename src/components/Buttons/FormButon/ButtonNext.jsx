import React from 'react';

const ButtonNext = ({ type, text, clickHandler, filled, disabled }) => {
  return (
    <button type={type} onClick={clickHandler} disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonNext;

;

ButtonNext.defaultProps = {
  type: 'button',
};

