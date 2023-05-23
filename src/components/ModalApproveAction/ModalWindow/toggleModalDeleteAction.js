import { useState } from 'react';

const useToggleModalDeleteAction = (initialState = false) => {
  const [isModalOpenApprove, setIsModalOpenApprove] = useState(initialState);

  const openModalApprove = () => {
    setIsModalOpenApprove(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModalApprove = () => {
    setIsModalOpenApprove(false);
    document.body.style.overflow = 'scroll';
  };
  const toggleModal = () =>
    setIsModalOpenApprove(isModalOpenApprove => !isModalOpenApprove);

  return {
    isModalOpenApprove,
    openModalApprove,
    closeModalApprove,
    toggleModal,
  };
};

export default useToggleModalDeleteAction;
