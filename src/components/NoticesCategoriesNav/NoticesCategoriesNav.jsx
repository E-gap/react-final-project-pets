import css from './NoticesCategoriesNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
const NoticesCategoriesNav = () => {
  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.link} to="sell" state={{ from }}>
            sell
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="lost-found" state={{ from }}>
            lost/found
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="for-free" state={{ from }}>
            in good hands
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="favorite" state={{ from }}>
            favorite ads
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="own" state={{ from }}>
            my ads
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default NoticesCategoriesNav;
