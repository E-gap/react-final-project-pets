import { useMediaQuery } from 'react-responsive';
import ToMainPageButton from 'components/Buttons/ToMainPageButton/ToMainPageButton';

import css from './NotFound.module.css';

const NotFound = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      <section className={css.notFound}>
        <div className="container">
          {isMobile && (
            <h1 className={css.notFound__title}>
              Ooops! <br></br>This page not found :(
            </h1>
          )}
          {isTabletOrDesktop && (
            <h1 className={css.notFound__title}>
              Ooops! This page not found :(
            </h1>
          )}
          <div className={css.wrapper}></div>
          <ToMainPageButton />
        </div>
      </section>
    </>
  );
};

export default NotFound;
