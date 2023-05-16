import axios from 'axios';
import css from './NewsPage.module.css';
import { useEffect, useState } from 'react';

import NewsItem from 'components/NewsItem/NewsItem';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

const instance = axios.create({
  baseURL: "http://localhost:3001/api/news",
});

const NewsPage = () => {
  const [news, setNews] = useState([])
  const getNews = async () => {
    const News = await instance({method: "get"})
    return setNews(News.data)
  }
  useEffect(()=>{getNews()}, [])
  const items = news.slice(0, 6).map((item)=><NewsItem topic={item} />)
  console.log(items);
  return (
    <div className={css.newsPage + ' container'}>
      <h1 className={css.header}>News</h1>
      <NoticesSearch />
      <ul className={css.list}>{items}</ul>
    </div>
  );
};

export default NewsPage;
