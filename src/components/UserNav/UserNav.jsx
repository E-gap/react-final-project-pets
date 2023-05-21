import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import css from './UserNav.module.css';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelector';

const UserNav = ({ displayName = true, margins = false }) => {
  const {name} = useSelector(getUser);
  return (
    <Link
      to="/user"
      className={margins ? `${css.userMargins} ${css.user}` : css.user}
    >
      <RxAvatar className={css.avatar} />
      {displayName && <p className={css.name}>{name}</p>}
    </Link>
  );
};

export default UserNav;
