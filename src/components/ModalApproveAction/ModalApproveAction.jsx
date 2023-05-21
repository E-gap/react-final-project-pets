import React, { useState, useEffect } from 'react';
import Modal from './Modal';



function ModalApproveAction() {
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState('');

  const handleOpenModal = (option) => {
    setShowModal(true);
    setModalOption(option);
    document.body.style.overflow = 'hidden';

  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalOption('');
    document.body.style.overflow = 'scroll';

  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        handleCloseModal(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
}, []);

    return (
    <div>
      {/* Button to open Logout Modal */}
      <button onClick={() => handleOpenModal('logout')}>Logout</button>

      {/* Button to open Delete Form Modal */}
      <button onClick={() => handleOpenModal('deleteForm')}>Delete Form</button>

      {/* Render the Modal */}
      {showModal && (
        <Modal option={modalOption} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default ModalApproveAction;