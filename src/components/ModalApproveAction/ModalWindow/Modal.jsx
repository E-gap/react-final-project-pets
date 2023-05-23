import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
// import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, closeModal }) => {
  const close = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', close);

    return () => document.removeEventListener('keydown', close);
  }, [close]);

  return createPortal(
    <div className={css.overlay} onClick={close}>
      <div className={css.modal}>
        <button className={css.btnClose} onClick={closeModal}>
        <AiOutlineClose className={css.closeIcon} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;





// import React from 'react';
// import { BsBoxArrowLeft } from 'react-icons/bs';
// import { AiOutlineClose } from 'react-icons/ai';
// import { HiOutlineTrash } from 'react-icons/hi';
// import PropTypes from 'prop-types';

// import css from './ModalApproveAction.module.css';

// function Modal({ option, onClose }) {
//   const handleLogout = () => {
//     // Perform logout logic
//     onClose();
//   };

//   const handleDelete = () => {
//     // Perform delete form logic
//     onClose();
//   };

//   return (
//     <div className={`${css.overlay} ${css.modal} `} onClick={onClose}>
//       {option === 'logout' && (
//         <div className={css.content}>
//           <h3 className={css.title}>Already leaving?</h3>
//           <div className={css.buttonWrap}>
//             <button className={css.modalBtn} onClick={onClose}>
//               Cancel
//             </button>
//             <button
//               className={`${css.modalBtn} ${css.btnAgree}`}
//               onClick={handleLogout}
//             >
//               Yes <BsBoxArrowLeft className={css.icon} />
//             </button>
//             <button className={css.closeBtn} onClick={onClose}>
//               <AiOutlineClose className={css.closeIcon} />
//             </button>
//           </div>
//         </div>
//       )}

//       {option === 'deleteForm' && (
//         <div className={css.content}>
//           <h3 className={css.title}>Delete adverstiment?</h3>
//           <p>Are you sure you want to delete BACKEND? </p>
//           <p>You can`t undo this action.</p>
//           <div className={css.buttonWrap}>
//             <button className={css.modalBtn} onClick={onClose}>
//               Cancel
//             </button>
//             <button
//               className={`${css.modalBtn} ${css.btnAgree}`}
//               onClick={handleDelete}
//             >
//               Yes <HiOutlineTrash className={css.icon} />
//             </button>
//           </div>
//           <button className={css.closeBtn} onClick={onClose}>
//             <AiOutlineClose className={css.closeIcon} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Modal;

// Modal.propTypes = {
//   option: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
