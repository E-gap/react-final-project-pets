import css from './Logo.module.css';
import { Link } from 'react-router-dom';
import PetLoader from '../../services/PetLoader/PetLoader';

const Logo = () => {
  return (
    <Link className={css.logo} to="/">
       <PetLoader/>
    </Link>
   
  );
};

export default Logo;
