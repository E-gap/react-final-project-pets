import css from './UserDataForm.module.css';
import UserDataItem from '../UserDataItem/UserDataItem';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, getUser } from '../../redux/auth/authSelector';
import { useCallback, useState } from 'react';
import { updateUser } from '../../redux/auth/authOperations';

const UserDataForm = ({ className = '' }) => {

  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const { isRefreshing } = useSelector(getAuth);

  const [active, setActive] = useState('');

  const onSave = useCallback((id, value) => {
    dispatch(updateUser({
      [id]: value,
    }));
  }, [dispatch]);

  const onBlur = useCallback((id) => {
    if (id === active) {
      setActive("");
    }
  }, [active, setActive]);

  return (
    <div className={`${css.container} ${className}`} data-refreshing={isRefreshing}>
      <form action={""} className={css.form}>

        <label className={css.label} htmlFor='name'>Name:</label>
        <UserDataItem id='name'
                      active={active}
                      onFocus={setActive}
                      onBlur={onBlur}
                      initialValue={user?.name || ""}
                      onSave={onSave}
        />

        <label className={css.label} htmlFor='email'>Email:</label>
        <UserDataItem id='email'
                      active={active}
                      onFocus={setActive}
                      onBlur={onBlur}
                      initialValue={user?.email || ""}
                      onSave={onSave}
        />

        <label className={css.label} htmlFor='birthday'>Birthday:</label>
        <UserDataItem id='birthday'
                      active={active}
                      onFocus={setActive}
                      onBlur={onBlur}
                      initialValue={user?.birthday || ""}
                      onSave={onSave}
        />

        <label className={css.label} htmlFor='phone'>Phone:</label>
        <UserDataItem id='phone'
                      active={active}
                      onFocus={setActive}
                      onBlur={onBlur}
                      initialValue={user?.phone || ""}
                      onSave={onSave}
        />

        <label className={css.label} htmlFor='city'>City:</label>
        <UserDataItem id='city'
                      active={active}
                      onFocus={setActive}
                      onBlur={onBlur}
                      initialValue={user?.city || ""}
                      onSave={onSave}
        />

      </form>
    </div>
  );
};

UserDataForm.propTypes = {
  className: PropTypes.string,
};


export default UserDataForm;

