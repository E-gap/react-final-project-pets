import css from './UserData.module.css';
import UserDataForm from '../UserDataForm/UserDataForm';
// import Logout from 'components/Logout/Logout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { refresh } from '../../redux/auth/authOperations';
import UserPhoto from '../UserPhoto/UserPhoto';
import logout from '../../images/UserPage/logout.svg'

import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const UserData = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/user');
  };

  const onLogout = () => {
    setIsModalOpen(true);
  };

  return (
    <>
    {isModalOpen && <ModalApproveAction closeModal={closeModal} />}
    
    <div className={css.container}>
      <UserPhoto className={css.photoContainer} />

      <div className={css.dataContainer}>
        <UserDataForm className={css.form} />
        {/* <Logout /> */}
        <button onClick={onLogout} className={css.logoutButton} type="submit">
      <img src={logout} alt="" width={24} height={24} />
      Log Out
    </button>
      </div>
    </div>
    </>
  );
};

export default UserData;
