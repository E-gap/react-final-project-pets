import React from 'react';
import {BsBoxArrowLeft} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';

import css from './ModalApproveAction.module.css';



function Modal({ option, onClose }) {
    const handleLogout = () => {
      // Perform logout logic
      onClose();
    };

    const handleDelete = () => {
      // Perform delete form logic
      onClose();
    };

    return (
      <div className={`${css.overlay} ${css.modal } `}onClick={onClose}>
        {option === 'logout' && (
          <div className={css.content}>
            <h3 className={css.title}>Already leaving?</h3>
            <div className={css.buttonWrap}>
            <button className={css.modalBtn}  onClick={onClose}>Cancel</button>
            <button className={`${css.modalBtn} ${css.btnAgree}`} onClick={handleLogout}>
              Yes <BsBoxArrowLeft className={css.icon} />
              </button>
              <button className={css.closeBtn} onClick={onClose}>
                <AiOutlineClose className={css.closeIcon}/>
              </button>
          </div>
          </div>
        )}
  
        {option === 'deleteForm' && (
          <div className={css.content}>
            <h3 className={css.title}>Delete adverstiment?</h3>
            <p>Are you sure you want to delete  BACKEND? </p>
              <p>You can`t undo this action.</p>
            <div className={css.buttonWrap}>
            <button className={css.modalBtn}  onClick={onClose}>Cancel</button>
            <button className={`${css.modalBtn} ${css.btnAgree}`}  onClick={handleDelete}>Yes <HiOutlineTrash className={css.icon} /></button>
            </div>
            <button className={css.closeBtn} onClick={onClose}>
                <AiOutlineClose className={css.closeIcon}/>
            </button>
          </div>
        )}
      </div>
    );
  }
  
  export default Modal;