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
  const [wasSearch, setWasSearch] = useState(false);
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
          setWasSearch(true);
          setNews([]);
          setTotalNews(0);
          throw new Error('Server Error');
        } else if (response.data.length === 0) {
          setWasSearch(true);
          setNews([]);
          setTotalNews(0);
          setError('There are not any news');
        }
        setError('');
        setWasSearch(true);
        setNews(response.data.result);
        setTotalNews(response.data.total);

        return response.data;
      } catch (error) {
        setError(error.message);
        return error.message;
      }
    };

    getNews(query);
  }, [query, page]);

  const items = news.map(item => <NewsItem key={item._id} topic={item} />);

  return (
    <div className={css.newsPage + ' container'}>
      <NoticesSearch title={'News'} search={setQuery} />
      {wasSearch && !error && news.length > 0 ? (
        <ul className={css.list}>{items}</ul>
      ) : wasSearch && !error && items.length === 0 ? (
        <p className={css.noNews}>There is not any news</p>
      ) : error ? (
        <p className={css.error}>{error}</p>
      ) : (
        ''
      )}
      {totalNews > options.newsOptions.itemsPerPage ? (
        <div className={css.paginationDiv}>
          <PaginationComponent
            items={news}
            searchPage={searchPage}
            total={totalNews}
            options={options.newsOptions}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default NewsPage;
