import axios from 'axios';
import css from './NewsPage.module.css';
import { useEffect, useState } from 'react';

import NewsItem from 'components/NewsItem/NewsItem';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const NewsPage = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  console.log(query);

  const getNews = async query => {
    try {
      const response = await instance.get(
        query ? `/news?title=${query}` : `/news`
      );

      if (response.status !== 200) {
        throw new Error('Server Error');
      } else if (response.data.length === 0) {
        setError('There are not any news');
      }
      setNews(response.data);
      return response.data;
    } catch (error) {
      setError(error.message);
      return error.message;
    }
  };

  useEffect(() => {
    getNews(query);
  }, [query]);
  const items = news
    .slice(0, 6)
    .map(item => <NewsItem key={item._id} topic={item} />);
  return (
    <div className={css.newsPage + ' container'}>
      <NoticesSearch
        title={'News'}
        /* query={query} */
        /* setNews={setNews} */
        search={setQuery}
      />
      {!error ? <ul className={css.list}>{items}</ul> : <p>{error}</p>}
    </div>
  );
};

export default NewsPage;
