import { RxTextAlignJustify, RxAvatar, RxCross1 } from 'react-icons/rx';

import { useState, useRef, lazy } from 'react';

import css from './Header.module.css';
import Logo from 'components/Logo/Logo';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const AuthMenu = lazy(() => import('../Buttons/AuthButtons/AuthMenu'));

const Header = () => {
  const name = 'Anna';
  const { current } = useRef(window.innerWidth);

  // const [isAuth, setIsAuth] = useState(false);
  // прибрав тимчасово setIsAuth для коректного деплою
  const [isAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={css.header + ' container'}>
      <Logo />
      {current >= 1280 && <Navigation />}
      {current >= 1280 && isAuth && (
        <button className={css.menuBtn} type="button">
          <RxAvatar className={css.avatarMobile} />
          {name}
        </button>
      )}
      {!isAuth && current >= 1280 && <AuthMenu />}
      <div className={css.mobileMenuButtons}>
        {isAuth && !menuOpen && (
          <button className={css.menuBtn} type="button">
            <RxAvatar className={css.avatar} />
            {current >= 768 && <p className={css.name}>{name}</p>}
          </button>
        )}
        {!isAuth && current >= 768 && <AuthMenu />}
        <button
          className={css.menuBtn}
          type="button"
          onClick={() => {
            setMenuOpen(prev => !prev);
          }}
        >
          {menuOpen && <RxCross1 className={css.burger} />}
          {!menuOpen && <RxTextAlignJustify className={css.burger} />}
        </button>
      </div>
      <div
        className={menuOpen ? `${css.mobileMenu} ${css.show}` : css.mobileMenu}
      >
        {!isAuth && current <= 767 && <AuthMenu />}
        {isAuth && current <= 767 && (
          <button className={css.menuBtn} type="button">
            <RxAvatar className={css.avatarMobile} />
            {name}
          </button>
        )}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
