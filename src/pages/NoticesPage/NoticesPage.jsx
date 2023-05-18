import css from './NoticesPage.module.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
// import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';

import AddPetButton from 'components/Buttons/AddPetButton/AddPetButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPets, fetchPetById } from '../../redux/pets/petsOperations';
import { selectPets, selectOnePet } from '../../redux/selectors';

//import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import axios from 'axios';

//import url from './4.jpg';

const NoticesPage = () => {
  const [pathFilter, setPathFilter] = useState('sell');

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => {
    const params = searchParams.get('query');
    return params ? params : '';
  });
  const { current } = useRef(window.innerWidth);

  // eslint-disable-next-line no-unused-vars
  //const [list, setList] = useState(initialState);
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  const onePet = useSelector(selectOnePet);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      pathname === '/notices/lost-found' ||
      pathname === '/notices/for-free' ||
      pathname === '/notices/favotire' ||
      pathname === '/notices/own'
    ) {
    } else {
      navigate('/notices/sell');
    }

    const pathnameArr = pathname.split('/');

    const lastPartPath = pathnameArr[pathnameArr.length - 1];

    setPathFilter(lastPartPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const queryParams = {
      category: pathFilter,
      title: query,
    };
    dispatch(fetchAllPets(queryParams));
  }, [dispatch, pathFilter, query]);

  const submitSearch = event => {
    setQuery(event);
    setSearchParams(event !== '' ? { query: event } : {});
    const queryParams = {
      category: pathFilter,
      title: query,
    };

    dispatch(fetchAllPets(queryParams));
  };

  const handleLearnMore = e => {
    if (e.target.parentNode.getAttribute('id') || e.target.getAttribute('id')) {
      const idNotice =
        e.target.getAttribute('id') || e.target.parentNode.getAttribute('id');
      console.log(idNotice);
      fetchPetById(idNotice);
      dispatch(fetchPetById(idNotice));
    }
  };

  console.log(onePet);

  return (
    <div className={css.container} onClick={handleLearnMore}>
      <NoticesSearch
        search={submitSearch}
        title={'Find your favorite pet'}
        query={query}
        setQuery={setQuery}
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
      <NoticesCategoriesList items={pets} />

      {/* <AddToFavorite /> */}
    </div>
  );
};

export default NoticesPage;
