import { Link } from 'react-router-dom';
import { IoPawOutline } from 'react-icons/io5';

import css from './LoginButton.module.css';

const LoginButton = () => {
  return (
    <Link to="login" className={css.btn}>
      Log IN
      <IoPawOutline className={css.icon} />
    </Link>
  );
};
export default LoginButton;
