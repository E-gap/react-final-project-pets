import React, { useEffect } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import GoToProfile from "components/Buttons/GoToProfile/GoToProfile";

import css from './ModalCongrats.module.css';
import PropTypes from 'prop-types';

const ModalCongrats = ({show, onClose}) => {

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose && onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose && onClose();
    }
  }
  return (
    <>
      {/*{modal && (*/}
      {show && (
        <div className={css.modal}>
          <div className={css.overlay} onClick={handleBackdropClick}>
            <div className={css.content}>
              <h2 className={css.title}>Congrats!</h2>
              <p className={css.text}>Your registration is success</p>
              <div className={css.wrap}>
                <GoToProfile onClick={() => onClose && onClose()}/>
              </div>
              <button className={css.close} onClick={() => onClose && onClose()}>
                <AiOutlineClose className={css.icon}/>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ModalCongrats.propsTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}

export default ModalCongrats;
