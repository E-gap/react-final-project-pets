import { useState } from 'react';

const useToggleModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'scroll';
  };
  const toggleModal = () => setIsModalOpen(isModalOpen => !isModalOpen);

  return { isModalOpen, openModal, closeModal, toggleModal };
};

export default useToggleModal;