import css from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className={css.logo} to="/">
      </Link>
  );
};

export default Logo;
