import { Link } from 'react-router-dom';
import { IoPawOutline } from 'react-icons/io5';

import css from './ToMainPageButton.module.css';

const ToMainPageButton = () => {
  return (
  <Link to="" className={css.btn}>
    To main page
    <IoPawOutline className={css.icon} />
  </Link>
  );
};

export default ToMainPageButton;
