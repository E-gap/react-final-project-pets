import css from './UserPhoto.module.css';
// import defaultPhoto from '../../images/UserPage/photo-default.png';
import camera from '../../images/UserPage/camera.svg';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; //useSelector
import { updateUserAvatar } from '../../redux/auth/authOperations';
// import { getUser } from '../../redux/auth/authSelector';

const UserPhoto = ({ className = '' }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  // const user = useSelector(getUser);

  const handlePick = () => {
    inputRef.current.click();
  };

  const handleChange = event => {
    const formData = new FormData();
    formData.append('avatarURL', event.target.files[0]);
    dispatch(updateUserAvatar(formData));
  };

  return (
    <div className={`${css.photoContainer} ${className}`}>
      <input
        className={css.hidden}
        type="file"
        accept="image/*,.png,.jpg,.jpeg,.gif,.web"
        multiple={false}
        onChange={handleChange}
        ref={inputRef}
      />
      <img
        // src={user.avatarURL ? user.avatarURL : defaultPhoto}
        alt="User avatar"
        className={css.photo}
        width={182}
        height={182}
      />
      <button className={css.editPhotoButton} onClick={handlePick}>
        <img src={camera} alt="" width={24} height={24} />
        Edit photo
      </button>
    </div>
  );
};

UserPhoto.propTypes = {
  className: PropTypes.string,
};

export default UserPhoto;
