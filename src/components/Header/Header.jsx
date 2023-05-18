import { useState, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

import css from './Header.module.css';
import Logo from 'components/Logo/Logo';

const BurgerMenuBtn = lazy(() =>
  import('components/Buttons/BurgerMenuBtn/BurgerMenuBtn')
);
const UserNav = lazy(() => import('components/UserNav/UserNav'));
const Navigation = lazy(() => import('../Navigation/Navigation'));
const AuthMenu = lazy(() => import('../Buttons/AuthButtons/AuthMenu'));

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const [isAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className="container header_container">
        <Logo />
        {isDesktop && <Navigation />}
        {isTabletOrDesktop && !isAuth && <AuthMenu />}
        {isAuth && !menuOpen && <UserNav displayName={isTabletOrDesktop} />}
        <BurgerMenuBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          onClick={e => {
            return e.target !== e.currentTarget ? setMenuOpen(false) : '';
          }}
          className={
            menuOpen ? `${css.mobileMenu} ${css.show}` : css.mobileMenu
          }
        >
          {!isAuth && isMobile && <AuthMenu />}
          {isAuth && isMobile && <UserNav margins={true} />}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
