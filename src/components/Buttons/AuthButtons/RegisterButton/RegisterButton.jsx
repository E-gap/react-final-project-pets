import { Link } from 'react-router-dom';

import css from './RegisterButton.module.css';

const RegisterButton = () => {
  return <Link to="register" className={css.btn}>Registration</Link>;
};
export default RegisterButton;
