import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={css.nav}>
      <NavLink className={css.navLink} to="/News">
        News
      </NavLink>
      <NavLink className={css.navLink} to="/Find pet">
        Find pet
      </NavLink>
      <NavLink className={css.navLink} to="/Our frineds">
        Our frineds
      </NavLink>
    </div>
  );
};

export default Navigation;
