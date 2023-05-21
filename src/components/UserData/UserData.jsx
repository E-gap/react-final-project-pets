import css from './UserData.module.css';
import camera from '../../images/UserPage/camera.svg';
import UserDataForm from '../UserDataForm/UserDataForm';
import Logout from 'components/Logout/Logout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from '../../redux/auth/authOperations';

const UserData = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const fakePhotoSrc = 'https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s1100-c50.jpg';

  return (<div className={css.container}>
      <div className={css.photoContainer}>
        <img
          src={fakePhotoSrc}
          alt='User avatar'
          className={css.photo}
          width={182}
          height={182}
        />

        <button className={css.editPhotoButton}>
          <img src={camera} alt='' width={24} height={24} />
          Edit photo
        </button>
      </div>

      <div className={css.dataContainer}>
        <UserDataForm className={css.form} />
        <Logout />
      </div>

    </div>);
};

export default UserData;
