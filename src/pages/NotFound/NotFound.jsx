import { useRef} from 'react';
import ToMainPageButton from 'components/Buttons/ToMainPageButton/ToMainPageButton';

import css from './NotFound.module.css';



const NotFound = () => {
  const { current } = useRef(window.innerWidth);

  return (
    <>
      <section className={css.notFound}>
        <div className='container'>
          {current < 768 &&  <h1 className={css.notFound__title}>Ooops! <br></br>This page not found :(</h1>}
          {current >= 768 && <h1 className={css.notFound__title}>Ooops! This page not found :(</h1> }
          <div className={css.wrapper}></div>
        <ToMainPageButton/>
      </div>
      </section>
    </>
  );
};

export default NotFound;
