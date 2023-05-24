import Modal from '../ModalWindow/Modal';
import { AiOutlineClose } from 'react-icons/ai';

import css from './ModalDeleteAction.module.css';

const ModalDeleteAction = ({ closeModal, _id, name, handleDelete }) => {

const handleModalClose = () => {
    closeModal();
};

return (
    <>
    <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <h1>Delete adverstiment?</h1>
        <p>
        Are you sure you want to delete {name}'s card? You don't undo this
        action.
        </p>
        <div className={css.modalBtnContainer}>
        <button
            className={`${css.modalBtn} ${css.whiteBtn}`}
            onClick={handleModalClose}
        >
            Cancel
        </button>
        <button className={css.modalBtn} onClick={() => handleDelete(_id)}>
            Yes
            <AiOutlineClose className={css.closeIcon} />
        </button>
    </div>
    </Modal>
    </>
);
};

export default ModalDeleteAction;
