import axios from 'axios';
import css from './NewsPage.module.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import NewsItem from 'components/NewsItem/NewsItem';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import PaginationComponent from '../../components/Pagination/PaginationComponent';
import options from '../../components/Pagination/options';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => {
    const params = searchParams.get('query');
    return params ? params : '';
  });
  const [news, setNews] = useState([]);
  const [totalNews, setTotalNews] = useState(0);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const searchPage = pageNumber => {
    setPage(pageNumber);
  };

  useEffect(() => {
    if (query && page === 1) {
      setSearchParams({ query });
    } else if (query && page > 1) {
      setSearchParams({ query, page });
    } else if (!query && page > 1) {
      setSearchParams({ page });
    } else if (!query && page === 1) {
      setSearchParams({});
    }
  }, [query, page, setSearchParams]);

  useEffect(() => {
    const getNews = async query => {
      try {
        const response = await instance.get(
          query
            ? `/news?title=${query}&page=${page}&limit=6`
            : `/news?page=${page}&limit=6`
        );

        if (response.status !== 200) {
          throw new Error('Server Error');
        } else if (response.data.length === 0) {
          setError('There are not any news');
        }

        setNews(response.data.result);
        setTotalNews(response.data.total);

        console.log(response);

        return response.data;
      } catch (error) {
        setError(error.message);
        return error.message;
      }
    };

    getNews(query);
  }, [query, page]);

  console.log(news);
  console.log(totalNews);

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
      {news ? (
        <PaginationComponent
          items={news}
          searchPage={searchPage}
          total={totalNews}
          options={options.newsOptions}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default NewsPage;
