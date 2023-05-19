import css from './NoticesSearch.module.css';
import propTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NoticesSearch = ({ search, title }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      Notify.warning('Please fill in this field');
    } else search(query);
  };

  const deleteQuery = () => {
    setQuery('');
    search('');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          placeholder="Search"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        {query === '' ? (
          <button className={css.searchButton} type="submit">
            <span className={css.changeColor}>
              <BsSearch style={{ fontSize: 19 }} />
            </span>
          </button>
        ) : (
          <>
            <button className={css.searchButtonDel} type="submit">
              <span className={css.changeColor}>
                <BsSearch style={{ fontSize: 19 }} />
              </span>
            </button>
            <button
              className={css.searchDel}
              type="submit"
              onClick={deleteQuery}
            >
              <span className={css.changeColorDel}>
                <RxCross2 style={{ fontSize: 25 }} />
              </span>
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default NoticesSearch;

NoticesSearch.propTypes = {
  title: propTypes.string.isRequired,
  search: propTypes.string.isRequired,
};
