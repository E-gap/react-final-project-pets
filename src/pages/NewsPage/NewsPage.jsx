import axios from 'axios';
import css from './NewsPage.module.css';
import { useEffect, useState } from 'react';

import NewsItem from 'components/NewsItem/NewsItem';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const NewsPage = () => {
  /* const [query, setQuery] = useState(''); */
  const [news, setNews] = useState([]);
  const getNews = async () => {
    const News = await instance.get('/news');
    return setNews(News.data);
  };
  const onSearch = search => {
    console.log(search);
  };

  useEffect(() => {
    getNews();
  }, []);
  const items = news
    .slice(0, 6)
    .map(item => <NewsItem key={item._id} topic={item} />);
  return (
    <div className={css.newsPage + ' container'}>
      <NoticesSearch
        title={'News'}
        /* query={query}
        setQuery={setQuery} */
        search={onSearch}
      />
      <ul className={css.list}>{items}</ul>
    </div>
  );
};

export default NewsPage;
