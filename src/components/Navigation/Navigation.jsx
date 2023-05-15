import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/News">
        News
      </NavLink>
      <NavLink className={css.navLink} to="/Find pet">
        Find pet
      </NavLink>
      <NavLink className={css.navLink} to="/Our frineds">
        Our frineds
      </NavLink>
    </nav>
  );
};

export default Navigation;
