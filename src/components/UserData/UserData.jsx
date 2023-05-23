import css from './UserData.module.css';
import UserDataForm from '../UserDataForm/UserDataForm';
import Logout from 'components/Logout/Logout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from '../../redux/auth/authOperations';
import UserPhoto from '../UserPhoto/UserPhoto';

const UserData = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <UserPhoto className={css.photoContainer} />

      <div className={css.dataContainer}>
        <UserDataForm className={css.form} />
        <Logout />
      </div>
    </div>
  );
};

export default UserData;
