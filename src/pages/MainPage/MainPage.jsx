import { TypeAnimation } from 'react-type-animation';

import css from './MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <section className={css.main_page}>
        <div className="container ">
          <h1 className={css.main_page__title}>
            Take good care of your small<br></br>
            <TypeAnimation className={`${css.main_page__title}`} sequence={[
            'pets',
            2000,
            ''
          ]}  repeat={Infinity}/>
          </h1>
          
        </div>
      <div className={css.wrapper}></div>
      </section>
    </>
  );
};

export default MainPage;
