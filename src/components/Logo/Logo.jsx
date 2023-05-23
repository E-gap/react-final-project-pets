import css from './Logo.module.css';
import { Link } from 'react-router-dom';
import PetLoader from '../../services/PetLoader/PetLoader';

import logo from '../../images/logo/logoBig.svg';

const Logo = () => {
  return (
    <Link className={css.logo} to="/">
      <img src={logo} alt='Logo name'/>
      <PetLoader/>
    </Link>
  );
};

export default Logo;
