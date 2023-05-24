import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from './ModalWindow/Modal';
import BsBoxArrowLeft from 'react-icons/bs';
import { logout } from 'redux/auth/authOperations';
import css from './ModalApproveAction.module.css';

const ModalApproveAction = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalClose = () => {
      closeModal();
      navigate('/user');
    };

    const handleLogout = () => {
      closeModal();
      dispatch(logout());
      navigate('/');
};
  return (
    <>
      <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <h1>Already leaving?</h1>
        <div className={css.modalBtnContainer}>
        <button className={`${css.modalBtn} ${css.whiteBtn}`} onClick={handleModalClose}>
          Cancel
        </button>
        <button className={css.modalBtn} onClick={handleLogout}>
          Yes <BsBoxArrowLeft className={css.icon} />
        </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalApproveAction;


// import React, { useState, useEffect } from 'react';
// import Modal from './Modal';



// function ModalApproveAction() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalOption, setModalOption] = useState('');

//   const handleOpenModal = (option) => {
//     setShowModal(true);
//     setModalOption(option);
//     document.body.style.overflow = 'hidden';

//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setModalOption('');
//     document.body.style.overflow = 'scroll';

//   };

//   useEffect(() => {
//     function handleKeyDown(event) {
//       if (event.key === 'Escape') {
//         handleCloseModal(false);
//       }
//     }

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//         window.removeEventListener('keydown', handleKeyDown);
//     };
// }, []);

//     return (
//     <div>
//       {/* Button to open Logout Modal */}
//       <button onClick={() => handleOpenModal('logout')}>Logout</button>

//       {/* Button to open Delete Form Modal */}
//       <button onClick={() => handleOpenModal('deleteForm')}>Delete Form</button>

//       {/* Render the Modal */}
//       {showModal && (
//         <Modal option={modalOption} onClose={handleCloseModal} />
//       )}
//     </div>
//   );
// }

// export default ModalApproveAction;