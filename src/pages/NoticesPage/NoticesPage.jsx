import css from './NoticesPage.module.css';
import { useState, useEffect, useRef, useCallback } from 'react';

import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesSearch from 'components/InputSearch/InputSearch';
// import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

import AddPetButton from 'components/Buttons/AddPetButton/AddPetButton';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllNotices,
  // fetchFavoriteNotices,
  fetchNoticeById,
  fetchNoticesByOwner,
} from '../../redux/notices/noticesOperations';
import { getAuth } from '../../redux/auth/authSelector';
import { totalNotices } from '../../redux/selectors';
import options from '../../components/Pagination/options';

//import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import axios from 'axios';

//import url from './4.jpg';

const NoticesPage = () => {
  const total = useSelector(totalNotices);
  const { pathname } = useLocation();
  // const [pathFilter, setPathFilter] = useState('sell');
  const [searchParams, setSearchParams] = useSearchParams();

  //const [page, setPage] = useState(1);

  const [page, setPage] = useState(() => {
    const params = searchParams.get('page');
    return params ? params : 1;
  });

  const [query, setQuery] = useState(() => {
    const params = searchParams.get('query');
    return params ? params : '';
  });

  const { isLogin } = useSelector(getAuth);

  const { current } = useRef(window.innerWidth);

  const dispatch = useDispatch();

  const pathnameArr = pathname.split('/');
  const lastPartPath = pathnameArr[pathnameArr.length - 1];

  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/notices') {
      navigate('/notices/sell');
    }
  });
  useEffect(() => {
    setSearchParams({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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

    console.log(pathname);
    console.log(lastPartPath);

    const queryParams = {
      category: lastPartPath,
      title: query,
      page: page,
    };
    /* if (lastPartPath === 'notices') {
      queryParams = {
        category: 'sell',
        title: query,
        page: searchParams.get('page') ? searchParams.get('page') : 1,
      };
    } */

    //console.log(queryParams);

    dispatch(fetchAllNotices(queryParams));

    const searchNoticesByOwner = queryParams => {
      try {
        dispatch(fetchNoticesByOwner(queryParams));
      } catch (error) {
        console.log(error);
      }
    };

    if (isLogin && lastPartPath === 'own') {
      const queryParams = { category: '', title: query, page };
      searchNoticesByOwner(queryParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // dispatch,
    lastPartPath,
    query,
    page,
    // setSearchParams,
    // pathname,
    // navigate,
    isLogin,
    // searchParams,
  ]);

  const submitSearch = useCallback(search => {
    setQuery(search);
  }, []);

  const handleLearnMore = useCallback(e => {
    if (e.target.parentNode.getAttribute('id') || e.target.getAttribute('id')) {
      const idNotice =
        e.target.getAttribute('id') || e.target.parentNode.getAttribute('id');

      fetchNoticeById(idNotice);
      dispatch(fetchNoticeById(idNotice));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchPage = useCallback(pageNumber => {
    setPage(pageNumber);
  }, []);

  const changePage = useCallback(() => {
    setPage(1);
  }, []);

  const onAddPetBtn = useCallback(() => {
    Notify.warning('Please, signup or login to add a pet');
  }, []);

  console.log('render');
  console.log(page);

  return (
    <>
      <section className={css.section}>
        <div className="container" onClick={handleLearnMore}>
          <NoticesSearch
            search={submitSearch}
            title={'Find your favorite pet'}
            query={query}
            setQuery={setQuery}
          />

          <div className={css.wrap}>
            <NoticesCategoriesNav setpage={changePage} />
            <AddPetButton
              onClick={onAddPetBtn}
              style={
                current <= 767
                  ? {
                      position: 'fixed',
                      zIndex: 100,
                      top: '81vh',
                      right: '21px',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      flexDirection: 'column-reverse',
                      fontSize: '12px',
                      lineHeight: '1.37',
                      padding: 0,
                    }
                  : {}
              }
            />
          </div>

          {/* <NoticesFilters /> */}
          <NoticesCategoriesList category={lastPartPath} />
          {total > options.noticesOptions.itemsPerPage ? (
            <div className={css.paginationDiv}>
              <PaginationComponent
                searchPage={searchPage}
                total={total}
                options={options.noticesOptions}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </section>
    </>
  );
};

export default NoticesPage;
