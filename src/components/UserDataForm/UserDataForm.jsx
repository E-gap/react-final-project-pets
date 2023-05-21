import css from './UserDataForm.module.css';
import UserDataItem from '../UserDataItem/UserDataItem';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelector';
import { useState } from 'react';
import { updateUser } from '../../redux/auth/authOperations';

const UserDataForm = ({ className = '' }) => {

  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const [active, setActive] = useState('');

  const onSave = (id, value) => {
    console.log(id, value);
    if (id === active) {
      setActive("");
    }
    dispatch(updateUser({
      [id]: value,
    }));
  };

  return (
    <div className={`${css.container} ${className}`}>
      <form action='src/components/UserInformation/UserInformationForm' className={css.form}>

        <label className={css.label} htmlFor='name'>Name:</label>
        <UserDataItem id='name' active={active} onFocus={setActive} initialValue={user?.name || ""} onSave={onSave}/>

        <label className={css.label} htmlFor='email'>Email:</label>
        <UserDataItem id='email' active={active} onFocus={setActive} initialValue={user?.email || ""} onSave={onSave}/>

        <label className={css.label} htmlFor='birthday'>Birthday:</label>
        <UserDataItem id='birthday' active={active} onFocus={setActive} initialValue={user?.birthday || ""} onSave={onSave}/>

        <label className={css.label} htmlFor='phone'>Phone:</label>
        <UserDataItem id='phone' active={active} onFocus={setActive} initialValue={user?.phone || ""} onSave={onSave}/>

        <label className={css.label} htmlFor='city'>City:</label>
        <UserDataItem id='city' active={active} onFocus={setActive} initialValue={user?.city || ""} onSave={onSave}/>

      </form>
    </div>
  );
};

UserDataForm.propTypes = {
  className: PropTypes.string,
};


export default UserDataForm;

