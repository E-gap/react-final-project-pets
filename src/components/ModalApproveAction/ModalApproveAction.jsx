import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from './ModalWindow/Modal';
import {BsBoxArrowLeft} from 'react-icons/bs';
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
        <h1 className={css.title}>Already leaving?</h1>
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
