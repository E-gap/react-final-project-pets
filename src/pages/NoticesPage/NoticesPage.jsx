import css from './NoticesPage.module.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
// import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

import AddPetButton from 'components/Buttons/AddPetButton/AddPetButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllNotices,
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
  // const [pathFilter, setPathFilter] = useState('sell');
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(() => {
    const params = searchParams.get('query');
    return params ? params : '';
  });

  const { isLogin } = useSelector(getAuth);
  //const [query, setQuery] = useState();

  const { current } = useRef(window.innerWidth);

  // eslint-disable-next-line no-unused-vars
  //const [list, setList] = useState(initialState);
  const dispatch = useDispatch();

  // const oneNotice = useSelector(selectOneNotice);

  //console.log(oneNotice);

  const { pathname } = useLocation();

  const navigate = useNavigate();

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

  const pathnameArr = pathname.split('/');
  const lastPartPath = pathnameArr[pathnameArr.length - 1];

  useEffect(() => {
    if (
      !query &&
      page === 1 &&
      (pathname === '/notices/lost-found' ||
        pathname === '/notices/for-free' ||
        pathname === '/notices/favorite' ||
        pathname === '/notices/own')
    ) {
    } else {
      navigate('/notices/sell');
    }

    let queryParams = {
      category: lastPartPath,
      title: query,
      page,
    };
    if (lastPartPath === 'notices') {
      queryParams = {
        category: 'sell',
        title: query,
        page,
      };
    }

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
  }, [
    dispatch,
    lastPartPath,
    query,
    page,
    setSearchParams,
    pathname,
    navigate,
    isLogin,
  ]);

  const submitSearch = query => {
    setQuery(query);
  };

  const handleLearnMore = e => {
    if (e.target.parentNode.getAttribute('id') || e.target.getAttribute('id')) {
      const idNotice =
        e.target.getAttribute('id') || e.target.parentNode.getAttribute('id');

      fetchNoticeById(idNotice);
      dispatch(fetchNoticeById(idNotice));
    }
  };

  const searchPage = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <>
      <section className={css.section}>
        <div className={css.container} onClick={handleLearnMore}>
          <NoticesSearch
            search={submitSearch}
            title={'Find your favorite pet'}
            /* query={query} */
            /* setQuery={setQuery} */
          />

          <div className={css.wrap}>
            <NoticesCategoriesNav />
            <AddPetButton
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
