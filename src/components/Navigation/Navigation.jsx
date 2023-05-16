import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/News">
        News
      </NavLink>
      <NavLink className={css.navLink} to="/notices">
        Find pet
      </NavLink>
      <NavLink className={css.navLink} to="/friends">
        Our friends       
      </NavLink>
    </nav>
  );
};

export default Navigation;
