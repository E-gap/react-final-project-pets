import { useState, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

import css from './Header.module.css';
import Logo from 'components/Logo/Logo';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelector';

import UserNav from 'components/UserNav/UserNav';
import Navigation from '../Navigation/Navigation';
import AuthMenu from '../Buttons/AuthButtons/AuthMenu';
import BurgerMenuBtn from 'components/Buttons/BurgerMenuBtn/BurgerMenuBtn';

const Header = () => {
  const isLogin = useSelector(isUserLogin);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className="container header_container">
        <Logo />
        {isDesktop && <Navigation />}
        {isTabletOrDesktop && !isLogin && <AuthMenu />}
        {isLogin && !menuOpen && <UserNav displayName={isTabletOrDesktop} />}
        <BurgerMenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          onClick={e => {
            return e.target !== e.currentTarget ? setMenuOpen(false) : '';
          }}
          className={
            menuOpen ? `${css.mobileMenu} ${css.show}` : css.mobileMenu
          }
        >
          {!isLogin && isMobile && <AuthMenu />}
          {isLogin && isMobile && <UserNav margins={true} />}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
