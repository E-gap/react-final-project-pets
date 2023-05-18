import css from './UserInformation.module.css';
import camera from '../../images/UserPage/camera.svg';
import UserInformationForm from '../UserInformationForm/UserInformationForm';
import Logout from 'components/Logout/Logout';

const UserInformation = () => {
  const fakePhotoSrc =
    'https://media.npr.org/assets/img/2014/08/07/monkey-selfie_custom-7117031c832fc3607ee5b26b9d5b03d10a1deaca-s1100-c50.jpg';

  return (
    <div className={css.container}>
      <div className={css.photoContainer}>
        <img
          src={fakePhotoSrc}
          alt="User look"
          className={css.photo}
          width={182}
          height={182}
        />

        <button className={css.editPhotoButton}>
          <img src={camera} alt="" width={24} height={24} />
          Edit photo
        </button>
      </div>




      <div className={css.dataContainer}>
        <button className={css.editPhotoButton}>
        <img src={camera} alt="" width={24} height={24} />
        Edit photo
      </button>
        <UserInformationForm className={css.form} />
<Logout />
        
      </div>


    </div>
  );
};

export default UserInformation;
