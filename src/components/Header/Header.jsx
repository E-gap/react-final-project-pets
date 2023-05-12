import { RxTextAlignJustify, RxAvatar, RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

import Navigation from 'components/Navigation/Navigation';
import AuthMenu from 'components/Buttons/AuthButtons/AuthMenu';

import { ReactComponent as LogoBig } from '../../images/header/logoBig.svg';
import { ReactComponent as LogoSmall } from '../../images/header/logoSmall.svg';

import css from './Header.module.css';

const Header = () => {
  const name = 'Anna';
  const { current } = useRef(window.innerWidth);
  const [isAuth, setIsAuth] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={css.header}>
      <Link className={css.logo} to="/">
        {current <= 767 ? <LogoSmall /> : <LogoBig />}
      </Link>
      {current >= 1280 && <Navigation />}
      {current >= 1280 && (
        <button className={css.menuBtn} type="button">
          <RxAvatar className={css.avatarMobile} />
          {name}
        </button>
      )}
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
    </div>
  );
};

export default Header;
