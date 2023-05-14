import { useState, useRef, lazy } from 'react';

import css from './Header.module.css';
import Logo from 'components/Logo/Logo';

const BurgerMenuBtn = lazy(() => import('components/Buttons/BurgerMenuBtn/BurgerMenuBtn'));
const UserNav = lazy(() => import('components/UserNav/UserNav'));
const Navigation = lazy(() => import('../Navigation/Navigation'));
const AuthMenu = lazy(() => import('../Buttons/AuthButtons/AuthMenu'));

const Header = () => {
  
  const { current } = useRef(window.innerWidth);

  // const [isAuth, setIsAuth] = useState(false);
  // прибрав тимчасово setIsAuth для коректного деплою
  const [isAuth] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className={css.header + ' container'}>
      <Logo />
      {current >= 1280 && <Navigation />}
      {current >= 1280 && !isAuth && <AuthMenu />}
      {isAuth && !menuOpen && <UserNav displayName={current >= 768 ? true : false}/>}
      <BurgerMenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className={menuOpen ? `${css.mobileMenu} ${css.show}` : css.mobileMenu}
      >
        {!isAuth && current <= 767 && <AuthMenu />}
        {isAuth && current <= 767 && <UserNav margins={true}/>}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
