import css from './NoticesSearch.module.css';
import { BsSearch } from 'react-icons/bs';
// import { RxCross2 } from 'react-icons/rx';

const NoticesSearch = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Find your favorite pet</h2>
      <form className={css.form}>
        <input className={css.input} placeholder="Search" type="text" />
        <button className={css.searchButton} type="submit">
          <span className={css.changeColor}>
            <BsSearch style={{ fontSize: 19 }} />
          </span>
          {/* <span className={css.changeColor}>
            <RxCross2 style={{ fontSize: 23 }} />
          </span> */}
        </button>
      </form>
    </div>
  );
};

export default NoticesSearch;
