import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import GoToProfile from "components/Buttons/GoToProfile/GoToProfile";

import css from './ModalCongrats.module.css';

const ModalCongrats = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {/* <button onClick={toggleModal} className={css.btn-modal}>
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className={css.overlay}></div>
          <div className={css.content}>
            <h2 className={css.title}>Congrats!</h2>
            <p className={css.text}>Your registration is success</p>
            <div className={css.wrap}>
              <GoToProfile/>
            </div>
            <button className={css.close} onClick={toggleModal}>
              <AiOutlineClose className={css.icon}/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCongrats;
